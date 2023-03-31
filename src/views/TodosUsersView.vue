<template>
  <TableComponent :items="crossedData"
                  :map-items="mapTable"
                  title-table="Lista Todo"
                  :buttons-crud="buttons"
                  :btn-toolbar="btnToolbar"
                  base-lang="todos-users"
                  @emitAction="manageEvent($event)"></TableComponent>
</template>

<script>
import ButtonsService from "@/service/ButtonsService";
import TableComponent from "@/components/TableComponent";
import {useTodoStore} from "@/store/modules/todos";
import {useUserStore} from "@/store/modules/users";

export default {
  name: "TodosUsersView",
  components: {TableComponent},
  setup() {
    const userStore = useUserStore()
    const todoStore = useTodoStore()
    return {userStore, todoStore}
  },
  data() {
    return {
      mapTable: [
        {field: "username"},
        {field: "todo.title"},
        {field: "todo.completed"}
      ],
      buttons: [ButtonsService.editBtn, ButtonsService.deleteBtn],
      btnToolbar: [ButtonsService.addBtn],
      crossedData: []
    }
  },
  mounted() {
    this.getCrossedData()
  },
  methods: {
    manageEvent(event) {
      switch (event.action) {
        case 'EDIT':
          //METHOD TO CALL
          break
        case 'ADD':
          //METHOD TO CALL
          break
        case 'DELETE':
          //METHOD TO CALL
          break
      }
    },
    getCrossedData() {
      let usersCall = this.userStore.getAll()
      let todosCall = this.todoStore.getAll()
      let allCall = [usersCall, todosCall]
      Promise.all(allCall)
          .then(() => {
            this.crossedData = this.userStore.users.map(user => {
              return {
                username: user.username,
                todo: this.todoStore.todos.find(todo => todo["userId"] === user["id"])
              }
            })
          })
    }
  }
}
</script>
