import {defineStore} from 'pinia'
import TodosService from "@/service/TodosService";
import {useMainStore} from "@/store";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: []
    }),
    getters: {
        getTodos: (state) => state.todos,
    },
    actions: {
        async getAll() {
            useMainStore().setLoadingTable(true)
            await TodosService.getAll()
                .then(response => this.todos = response["data"])
                .catch(err => console.log(err))
                .finally(() => useMainStore().setLoadingTable(false))
        },
    }
})