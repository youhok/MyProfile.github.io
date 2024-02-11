import subCategories from "../models/subCategories"
import AlertMessage from "../utils/alert-message";


const SubCategoriesController = {
    create: async (req, res) => {
        const { categoryId, khName, enName, status } = req.body
        try {
            const newSubCategory = await subCategories.create({
                categoryId, khName, enName, status
            });
            res.status(201).json({ data: newSubCategory, message: AlertMessage.createSuccess });
        console.log(newSubCategory)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id
        try {
            const subCategory = await subCategories.findById(_id);
            res.status(200).json(subCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
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
                }
            ]
            const subCategoriesAll = await subCategories.aggregate(pipelines).allowDiskUse(true);
            console.log(subCategoriesAll)
            return res.json(subCategoriesAll);
        } catch (error) {
            console.log("🚀 ~ file: categoriesController.js:34 ~ getAll: ~ error:", error)
            return res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const updatedSubCategory = await subCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(201).json({ data: updatedSubCategory, message: AlertMessage.editSuccess });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const deletedSubCategory = await subCategories.findByIdAndDelete(req.params.id);
            res.status(201).json({ data: deletedSubCategory, message: AlertMessage.deleteSuccess(req.params.id) });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default SubCategoriesController;