import subCategories from "../models/subCategories"


const SubCategoriesController = {
    create: async (req, res) => {
        const { categoryId, khName, enName, status } = req.body
        try {
            const newCategory = await subCategories.create({
                categoryId, khName, enName, status
            });
            res.json(newCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id
        try {
            const category = await subCategories.findById(_id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const categoriesAll = await subCategories.find();
            return res.json(categoriesAll);
        } catch (error) {
            console.log("🚀 ~ file: categoriesController.js:34 ~ getAll: ~ error:", error)
            return res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const updatedCategory = await subCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const deletedCategory = await subCategories.findByIdAndDelete(req.params.id);
            res.json(deletedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default SubCategoriesController;