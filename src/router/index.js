import {createRouter, createWebHistory} from 'vue-router'
import UsersView from "@/views/UsersView";
import TodosView from "@/views/TodosView";
import TodosUsersView from "@/views/TodosUsersView";

const routes = [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },{
      path: '/todos',
      name: 'todos',
      component: TodosView
    },{
      path: '/todos-users',
      name: 'todos-users',
      component: TodosUsersView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
