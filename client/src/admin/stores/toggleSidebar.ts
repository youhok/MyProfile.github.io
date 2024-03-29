import { defineStore } from 'pinia'

export const useToggleSidebarStore = defineStore('toggleSidebar', {
    state: () => {
        return { isShowSidebar: true , isShowLang: false  }
    },
    actions: {
        toggleSidebar() {
            this.isShowSidebar = !this.isShowSidebar
        },
        toggleLang() {
            this.isShowLang = !this.isShowLang
        },
    },
});


