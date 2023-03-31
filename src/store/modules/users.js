import {defineStore} from 'pinia'
import UsersService from "@/service/UsersService";
import {useMainStore} from "@/store";
export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers: (state) => state.users,
    },
    actions: {
        async getAll() {
            useMainStore().setLoadingTable(true)
            await UsersService.getAll()
                .then(response => this.users = response["data"])
                .catch(err => console.log(err))
                .finally(() => useMainStore().setLoadingTable(false))
        },
    }
})