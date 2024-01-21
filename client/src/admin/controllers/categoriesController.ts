import { useApiPrivate } from "../composables/useApi";

export interface Categories {
    _id: string,
    khName: string,
    enName: string,
    status: string,
    type: string
}

export const CategoriesController = {
    create: async (payload: Categories) => {
        try {
            const { data } = await useApiPrivate().post(`/api/v1/categories`, payload);
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },
    getOne: async (id: string) => {
        try {
            const { data } = await useApiPrivate().get(`/api/v1/categories/${id}`);


            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },
    getAll: async () => {
        try {
            const { data } = await useApiPrivate().get(`/api/v1/categories`);

            return data

        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    update: async (id: string, fromData: Categories) => {
        try {
            const { data } = await useApiPrivate().put(`/api/v1/categories/${id}`, fromData);

            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    delete: async (id: string) => {
        try {
            const { data } = await useApiPrivate().delete(`/api/v1/categories/${id}`);
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    }
}


