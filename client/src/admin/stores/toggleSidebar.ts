import { defineStore } from 'pinia'

export const useToggleSidebarStore = defineStore('toggleSidebar', {
    state: () => {
        return { isShowSidebar: true }
    },
    actions: {
        toggleSidebar() {
            this.isShowSidebar = !this.isShowSidebar
        },
    },
});


