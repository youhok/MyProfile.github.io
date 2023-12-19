import categories from "../models/categories";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const categoriesController = {
    create: async (req, res) => {
        const { khName, enName, status, type } = req.body
        console.log("🚀 ~ file: categoriesController.js:7 ~ create: ~ req.body:", req.body)
        try {
            const newCategory = await categories.create({
                khName, enName, status, type
            });
            res.json(newCategory);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id
        try {
            const category = await categories.findById(_id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const categoriesAll = await categories.find();
            return res.json(categoriesAll);
        } catch (error) {
            console.log("🚀 ~ file: categoriesController.js:34 ~ getAll: ~ error:", error)
            return res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const updatedCategory = await categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
            console.log(updatedCategory)
            res.json(updatedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deletedCategory = await categories.findByIdAndDelete(req.params.id);
            res.json(deletedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


export default categoriesController;