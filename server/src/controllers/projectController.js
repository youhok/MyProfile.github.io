import projects from "../models/projects";
import cloudinary from "../config/cloudinary.config";
import AlertMessage from "../utils/alert-message";

import mongoose from "mongoose";
// import { ObjectId } from 'mongodb'

const { ObjectId } = mongoose.Types;

const projectController = {
    create: async (req, res) => {
        let {
            categoryId,
            name,
            thumbnail,
            // thumbnailName,
            // thumbnailBase64,
            screenshots,
            demoLinks,
            downloadable,
            platforms,
            description,
            features,
            releaseDate,
            requirements,
            note,
            status,
            totalDownload
        } = req.body

        // console.log(req.body)
        try {
            // const selector = {}
            const parentFolder = `Portillo/Project-${name}`
            // Thumbnail
            const folderThumbnail = `${parentFolder}/Thumbnail`
            // Create thumbnail folder 
            const folderThumbnailPath = await cloudinary.api.create_folder(folderThumbnail);
            console.log("🚀 ~ file: projectController.js:36 ~ create: ~ folderThumbnailPath:", folderThumbnailPath)
            const resultThumbnailUploaded = await cloudinary.uploader.upload(thumbnail.base64, {
                folder: folderThumbnailPath.path
            })
            // Screenshots
            const folderScreenshots = `${parentFolder}/Screenshots`
            // Create screenshots folder 
            const folderScreenshotsPath = await cloudinary.api.create_folder(folderScreenshots);
            console.log("🚀 ~ file: projectController.js:44 ~ create: ~ folderScreenshotsPath:", folderScreenshotsPath)

            const tempScreenshots = [];
            if (screenshots) {
                for (let index = 0; index < screenshots.length; index++) {
                    const screenshot = screenshots[index];
                    console.log(screenshot.base64)
                    const resultScreenshotUploadted = await cloudinary.uploader.upload(screenshot.base64, { folder: folderScreenshotsPath.path })
                    tempScreenshots.push({
                        public_id: resultScreenshotUploadted.public_id,
                        url: resultScreenshotUploadted.secure_url,
                        name: screenshot.name
                    })

                }
            }
            categoryId = new ObjectId(categoryId)
            const newProjects = await projects.create({
                categoryId,
                name,
                thumbnail: {
                    public_id: resultThumbnailUploaded.public_id,
                    url: resultThumbnailUploaded.secure_url,
                    name: thumbnail.name
                },
                screenshots: tempScreenshots,
                demoLinks,
                downloadable,
                platforms,
                description,
                features,
                releaseDate,
                requirements,
                note,
                status,
                totalDownload
            });

            res.status(201).json({ data: newProjects, message: AlertMessage.createSuccess });
            console.log("🚀 ~ create: ~ newProjects:", newProjects);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        const _id = new ObjectId(req.params.id)
        try {
            const pipelines = [
                {
                    $match: {
                        _id
                    }
                },
                {
                    $lookup: {
                        from: "categories",
                        localField: "categoryId",
                        foreignField: "_id",
                        as: "categoryDoc"
                    }
                },
                {
                    $unwind: {
                        path: '$categoryDoc',
                        preserveNullAndEmptyArrays: true,
                    }
                },
            ];
            const project = await projects.aggregate(pipelines).allowDiskUse(true);
            console.log({project})
            // const project = await projects.findById(_id);
            res.status(200).json(project[0]);
        } catch (error) {
            
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            let { selector, options } = req.query;
            selector = selector != 'undefined' ? JSON.parse(selector) : {};
            options = options != 'undefined' ? JSON.parse(options) : { $sort: { releaseDate: 1 } };
            console.log("🚀 ~ getAll: ~ selector2:", selector);
            const pipelines = [
                {
                    $lookup: {
                        from: "categories",
                        localField: "categoryId",
                        foreignField: "_id",
                        as: "categoryDoc"
                    }
                },
                {
                    $unwind: {
                        path: '$categoryDoc',
                        preserveNullAndEmptyArrays: true,
                    }
                },
            ];
            // Add $match stage to filter based on selector
            if (selector.categoryId) {
                pipelines.push({
                    $match: {
                        categoryId: new mongoose.Types.ObjectId(selector.categoryId)
                    }
                });
            }
            pipelines.push(options);
            const projectAll = await projects.aggregate(pipelines).allowDiskUse(true);
            // console.log("🚀 ~ getAll: ~ projectAll:", projectAll);
            return res.json(projectAll);
        } catch (error) {
            console.log("error:", error)
            return res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const { name, screenshots } = req.body

            const parentFolder = `Portillo/Project-${name}`;

            const folderThumbnail = `${parentFolder}/Thumbnail`;

            if (req.body.thumbnail && req.body.thumbnail.base64) {

                await deleteResourcesInFolder(folderThumbnail);
                // Update the thumbnail
                const resultThumbnailUploaded = await updateImage(req.body.thumbnail.base64, req.body.thumbnail, folderThumbnail);

                req.body.thumbnail = {
                    public_id: resultThumbnailUploaded.public_id,
                    url: resultThumbnailUploaded.secure_url,
                    name: req.body.thumbnail.name,
                };
            }

            const folderScreenshots = `${parentFolder}/Screenshots`;
            await deleteResourcesInFolder(folderScreenshots);
            const tempScreenshots = [];
            if (screenshots) {
                for (let index = 0; index < screenshots.length; index++) {
                    const screenshot = screenshots[index];
                    console.log('Base64 Data:', screenshot.base64);
                    // Ensure screenshot.base64 is defined before proceeding
                    if (screenshot.base64) {
                        const resultScreenshotUploaded = await cloudinary.uploader.upload(screenshot.base64, {
                            folder: folderScreenshots,
                        });

                        tempScreenshots.push({
                            public_id: resultScreenshotUploaded.public_id,
                            url: resultScreenshotUploaded.secure_url,
                            name: screenshot.name,
                        });
                    }

                }

            }

            req.body.screenshots = tempScreenshots;

            const updatedProjects = await projects.findByIdAndUpdate(req.params.id, req.body, { new: true });

            res.status(201).json({ data: updatedProjects, message: AlertMessage.editSuccess });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const deletedProjects = await projects.findByIdAndDelete(req.params.id);
            if (deletedProjects) {

                const thumbnailImageId = deletedProjects.thumbnail?.public_id;
                await cloudinary.uploader.destroy(thumbnailImageId);


                for (const screenshot of deletedProjects.screenshots) {
                    const screenshotImageId = screenshot.public_id;
                    await cloudinary.uploader.destroy(screenshotImageId);
                }
            }

            res.status(201).json({ data: deletedProjects, message: AlertMessage.deleteSuccess });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const updateImage = async (base64Data, existingImageInfo, folderPath) => {
    const existingPublicId = existingImageInfo.public_id;

    // Delete the existing image
    await cloudinary.uploader.destroy(existingPublicId);

    // Upload the new image to the same folder
    const result = await cloudinary.uploader.upload(base64Data, {
        folder: folderPath,
    });

    return result;
};


const deleteResourcesInFolder = async (folderPath) => {
    const resources = await cloudinary.api.resources({
        type: 'upload',
        prefix: folderPath,
        max_results: 100 // Adjust based on your needs
    });

    const deletePromises = resources.resources.map(resource =>
        cloudinary.uploader.destroy(resource.public_id)
    );

    await Promise.all(deletePromises);
};

// const deleteImage = async (public_id) => {
//     try {
//         const result = await cloudinary.uploader.destroy(public_id);
//         console.log("Deletion result:", result);
//     } catch (error) {
//         console.error("Error deleting image:", error);
//         throw error; 
//     }
// };

export default projectController;