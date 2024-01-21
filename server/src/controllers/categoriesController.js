import categories from "../models/categories";
import mongoose from "mongoose";
import AlertMessage from "../utils/alert-message";
const { ObjectId } = mongoose.Types;

const categoriesController = {
    create: async (req, res) => {
        const { khName, enName, status, type } = req.body
        try {
            const newCategory = await categories.create({
                khName, enName, status, type
            });
            res.status(201).json({ data: newCategory, message: AlertMessage.createSuccess });
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
            res.status(201).json({ data: updatedCategory, message: AlertMessage.editSuccess });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deletedCategory = await categories.findByIdAndDelete(req.params.id);
            res.status(201).json({ data: deletedCategory, message: AlertMessage.deleteSuccess(req.params.id) });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


export default categoriesController;