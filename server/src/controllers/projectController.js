import projects from "../models/projects";
import cloudinary from "../config/cloudinary.config";
import AlertMessage from "../utils/alert-message";

import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

const projectController = {
    create: async (req, res) => {
        const {
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
                    const resultScreenshotUploadted = await cloudinary.uploader.upload(screenshot.base64, { folder: folderScreenshotsPath.path })
                    tempScreenshots.push({
                        public_id: resultScreenshotUploadted.public_id,
                        url: resultScreenshotUploadted.secure_url,
                        name: screenshot.name
                    })

                }
            }


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
            console.log("🚀 ~ create: ~ data:", data)

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id
        try {
            const project = await projects.findById(_id);
            res.status(200).json(project);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            let { selector, options } = req.query
            selector = selector != 'undefined' ? JSON.parse(selector) : {};
            options = options != 'undefined' ? JSON.parse(options) : {};
            console.log("🚀 ~ getAll: ~ selector2:", selector)
            const projectAll = await projects.find(selector, options);
            console.log("🚀 ~ getAll: ~ projectAll:", projectAll)
            return res.json(projectAll);
        } catch (error) {
            console.log("error:", error)
            return res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const updatedProjects = await projects.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedProjects);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deletedProjects = await projects.findByIdAndDelete(req.params.id);
            res.json(deletedProjects);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}



export default projectController;