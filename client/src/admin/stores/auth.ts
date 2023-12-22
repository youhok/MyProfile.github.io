import { defineStore } from 'pinia';
import { useApi, useApiPrivate } from "../composables/useApi";


export interface User {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name?: string
}

export interface State {
    user: User,
    accessToken: string,
}

export interface LoginData {
    email: string,
    password: string,
}

export interface RegisterData {
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    passwrod_confirm: string,
}
export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {} as User,
            accessToken: "" as string,
        }
    },
    getters: {
        userDetail: (state: State) => state.user,
        isAuthenticated: (state: State) => state.user?.id ? true : false
    },

    actions: {
        async attempt() {
            try {
                await this.refresh()
                await this.getUser()
            } catch (error) {
                return
            }
            return
        },

        async login(payload: LoginData) {
            try {
                const { data } = await useApi().post(`/api/v1/auth/login`, payload);
                this.accessToken = data.access_token
                await this.getUser()
                return data
            } catch (error: Error | any) {
                console.log("🚀 ~ file: auth.ts:62 ~ login ~ error:", error)
                if (error.response && error.response.data && error.response.data.message) {
                    throw error.response.data.message;
                } else if (error.message) {
                    throw error.message;
                } else {
                    throw 'Unknown error occurred during login.';
                }
            };
        },
        async register(payload: RegisterData) {
            try {
                console.log(payload)
                const { data } = await useApi().post(`/api/v1/auth/register`, payload);
                return data
            } catch (error: Error | any) {
                throw error.response.message
            };
        },
        async getUser() {
            try {
                const { data } = await useApiPrivate().get(`/api/v1/auth/user`);
                this.user = data
                return data
            } catch (error: Error | any) {
                throw error.response.message
            };
        },
        async logout() {
            try {
                const { data } = await useApiPrivate().post(`/api/v1/auth/logout`);
                this.accessToken = ""
                this.user = {} as User
                return data
            } catch (error: Error | any) {
                throw error.response.message
            };
        },
        async refresh() {
            try {
                const { data } = await useApi().post(`api/v1/auth/refresh`);
                this.accessToken = data?.access_token
                return data
            } catch (error: Error | any) {
                throw error.response.message
            };
        }
    }
})


