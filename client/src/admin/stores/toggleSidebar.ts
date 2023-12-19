import { defineStore } from 'pinia'

export const useToggleSidebarStore = defineStore('toggleSidebar', {
    state: () => {
        return { isShowSidebar: false }
    },
    actions: {
        toggleSidebar() {
            this.isShowSidebar = !this.isShowSidebar
        },
    },
});