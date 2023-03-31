<template>
  <TableComponent :items="todoStore.getTodos"
                  :map-items="mapTable"
                  title-table="Lista Todo"
                  :buttons-crud="buttons"
                  :btn-toolbar="btnToolbar"
                  base-lang="todos"
                  @emitAction="manageEvent($event)"></TableComponent>
</template>

<script>
import ButtonsService from "@/service/ButtonsService";
import TableComponent from "@/components/TableComponent";
import {useTodoStore} from "@/store/modules/todos";

export default {
  name: "TodosView",
  components: {TableComponent},
  setup() {
    const todoStore = useTodoStore()
    return {todoStore}
  },
  data() {
    return {
      mapTable: [
        {field: "userId"},
        {field: "id"},
        {field: "title"},
        {field: "completed"}
      ],
      buttons: [ButtonsService.editBtn, ButtonsService.deleteBtn],
      btnToolbar: [ButtonsService.addBtn],
    }
  },
  mounted() {
    this.todoStore.getAll()
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
    }
  }
}
</script>
