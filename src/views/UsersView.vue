<template>
  <TableComponent :items="userStore.getUsers"
                  :map-items="mapTable"
                  title-table="Lista Utenti"
                  :buttons-crud="buttons"
                  :btn-toolbar="btnToolbar"
                  base-lang="users"
                  @emitAction="manageEvent($event)"></TableComponent>
</template>

<script>
import {useUserStore} from "@/store/modules/users";
import ButtonsService from "@/service/ButtonsService";
import TableComponent from "@/components/TableComponent";

export default {
  name: "UsersView",
  components: {TableComponent},
  setup() {
    const userStore = useUserStore()
    return {userStore}
  },
  data() {
    return {
      mapTable: [
        {field: "id"},
        {field: "name"},
        {field: "username"},
        {field: "email"}
      ],
      buttons: [ButtonsService.editBtn, ButtonsService.deleteBtn],
      btnToolbar: [ButtonsService.addBtn],
    }
  },
  mounted() {
    this.userStore.getAll()
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
