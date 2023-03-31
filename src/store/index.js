import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        loadingTable: false
    }),
    getters: {
        getStatusLoadingTable: (state) => state.loadingTable,
    },
    actions: {
        setLoadingTable(status) {
            this.loadingTable = status
        }
    }
})