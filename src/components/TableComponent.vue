<template>
  <Toolbar v-if="titleTable">
    <template #start>
      <h2>{{ titleTable }}</h2>
    </template>
    <template #end>
      <template v-for="btnAddNew in btnToolbar" :key="btnAddNew">
        <Button @click="emitAction(btnAddNew.action,null)" :class="btnAddNew.class" style="margin:5px"
                :icon="btnAddNew.icon"
                type="button"/>
      </template>
    </template>
  </Toolbar>
  <DataTable :value="items" :paginator="true" class="p-datatable-sm" :rows="10" :rowHover="true"
             v-model:selection="selectedRow" :loading="mainStore.getStatusLoadingTable"
             paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
             :rowsPerPageOptions="[10, 25, 50]"
             currentPageReportTemplate="Riga {first} a {last} di {totalRecords} totali" responsiveLayout="scroll">
    <template #empty>
      Nessun risultato trovato
    </template>
    <template #loading>
      Caricamento dati in corso...attendere!
    </template>
    <Column v-for="key in mapItems" :key="key" :field="key.field"
            :header="$t('table.' + baseLang + '.' + key.field)" sortable="true" style="min-width: 14rem">
      {{ key }}
    </Column>
    <Column v-for="button in buttonsCrud" :key="button" headerStyle="width: 4rem; text-align: center"
            bodyStyle="text-align: center; overflow: visible">
      <template #body="data">
        <Button @click="emitAction(button.action,data['data'])" type="button" :icon="button.icon"
                :class="button.class"></Button>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import {useMainStore} from "@/store";

export default {
  name: "TableComponent",
  setup() {
    const mainStore = useMainStore()
    return {mainStore}
  },
  props: {
    items: Array,
    buttonsCrud: Array,
    btnToolbar: Array,
    mapItems: Object,
    titleTable: String,
    baseLang: String
  },
  data() {
    return {
      selectedRow: null
    }
  },
  methods: {
    emitAction(action, record) {
      this.$emit('emitAction', {action: action, record: record})
    }
  }
}
</script>

<style scoped>

</style>