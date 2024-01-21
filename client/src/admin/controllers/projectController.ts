import { useApiPrivate } from "../composables/useApi";

interface DemoLink {
    name?: string,
    link?: string
}

interface Thumbnail {
    public_id?: string,
    url?: string,
    name?: string,
    base64?: string
}

interface Platforms {
    icon?: string,
    name?: string,
    url?: string
}

export interface Project {
    _id?: string,
    categoryId: string,
    name: string,
    thumbnail: Thumbnail,
    thumbnailFile?: [{ name?: string, file?: File }],
    // thumbnailName: string,
    // thumbnailBase64: string,
    description: string,
    features: string[],
    screenshotFiles?: [{ name?: string, file?: File }],
    screenshots: Array<ScreenShot>
    demoLinks: [DemoLink?]
    downloadable: Boolean,
    platforms?: [Platforms?],
    requirements?: string[],
    releaseDate: string,
    note: string,
    status: string,
    totalDownload?: number
}

interface ScreenShot {
    name?: string,
    base64?: string,
}



export const projectController = {
    create: async (payload: Project) => {

        try {
            const { data } = await useApiPrivate().post(`/api/v1/projects`, payload);

            return data
        } catch (error: Error | any) {
            throw error.response.message
        };

    },
    getOne: async (id: string) => {
        try {
            const { data } = await useApiPrivate().get(`/api/v1/projects/${id}`);


            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },
    getAll: async (selector?: {}, options?: {}) => {
        try {

            const { data } = await useApiPrivate().get(`/api/v1/projects/q/?selector=${JSON.stringify(selector)}&options=${JSON.stringify(options)}`);
            return data

        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    update: async (id: string, fromData: Project) => {
        try {
            const { data } = await useApiPrivate().put(`/api/v1/projects/${id}`, fromData);

            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    },

    delete: async (id: any) => {
        try {
            const { data } = await useApiPrivate().delete(`/api/v1/projects/${id}`);
            return data
        } catch (error: Error | any) {
            throw error.response.message
        };
    }
}