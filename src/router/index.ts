// импорт именованных функций
import { createRouter, createWebHistory } from 'vue-router'
// импорт дефолта
import HomeView from '@/views/HomeView.vue'
import TodosView from '@/views/TodosView.vue'
import TodoView from '@/views/TodoView.vue'
import ContactsView from '@/views/ContactsView.vue'
import TheContact from '@/components/TheContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // 1й способ - группировка роутов под общим url /todos
    // не задан component -> каждый children роут будет отображаться в верхнеуровневом RouterView
    {
      path: '/todos',
      name: 'todos',
      children: [
        {
          path: '',
          component: TodosView,
          // нет вложенных роутов, поэтому RouterView внутри TodosView размечать не нужно
        },
        {
          // id это имя параметра (обычно динамический), можно называть произвольно,
          // это имя достается как свойство у объекта params черех хук useRoute (пример в TodoView.vue)
          path: ':id',
          component: TodoView,
        },
      ],
    },
    // 2й способ - роут под url /contacts с children массивом роутов
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      // чтобы показывался роут по url /contacts/:id нужно в ContactsView разметить RouterView
      // пример ContactsView.vue
      children: [
        {
          path: ':id',
          component: TheContact,
        },
      ],
    },
  ],
})

export default router
