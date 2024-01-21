import { useApiPrivate } from "../composables/useApi";

export interface subCategories {
    _id: string,
    categoryId: string,
    khName: string,
    enName: string,
    status: string,

}

export const categoriesSubController = {
    create: async (payload: subCategories) => {
        try {
            const { data } = await useApiPrivate().post(`/api/v1/sub-categories`, payload);
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },
    getOne: async (id: string) => {
        try {
            const { data } = await useApiPrivate().get(`/api/v1/sub-categories/${id}`);

            console.log("🚀 ~ file: subCategoriesController.ts:25 ~ getOne: ~ data:", data)
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },
    getAll: async () => {
        try {
            const { data } = await useApiPrivate().get(`/api/v1/sub-categories`);

            return data

        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    update: async (id: string, fromData: subCategories) => {
        try {
            const { data } = await useApiPrivate().put(`/api/v1/sub-categories/${id}`, fromData);

            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    delete: async (id: string) => {
        try {
            const { data } = await useApiPrivate().delete(`/api/v1/sub-categories/${id}`);
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    }
}