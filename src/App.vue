<template>
  <div class="flex-auto">
    <TabMenu :model="items" />
  </div>
  <router-view/>
</template>
<script>

export default {
  data() {
    return {
      items: [
        { label: 'Utenti', icon: 'pi pi-fw pi-users', to: '/' },
        { label: 'Todo', icon: 'pi pi-fw pi-list', to: '/todos' },
        { label: 'Todo - Utenti', icon: 'pi pi-fw pi-list', to: '/todos-users' }
      ]
    }
  }
}
</script>
