<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import { ref } from 'vue'
import { uid } from 'uid'
import { Icon } from '@iconify/vue'

interface Task {
  id: string
  task: string
  completed: boolean
}

const fetchList = () => {
  const storedList = localStorage.getItem('list')
  return storedList ? JSON.parse(storedList) : []
}

const list = ref<Task[]>(fetchList())

const sendList = () => {
  localStorage.setItem('list', JSON.stringify(list.value))
}

const addToList = (newTask: { task: string; invalid: boolean }) => {
  list.value.push({
    id: uid(),
    task: newTask.task,
    completed: false
  })
  sendList()
}

const completeTask = (id: string) => {
  const index = list.value.findIndex((item) => item.id === id)
  list.value[index].completed = !list.value[index].completed
  sendList()
}

const deleteTask = (id: string) => {
  const confirm = window.confirm('Are you sure you want to delete this task?')
  if (!confirm) return
  const index = list.value.findIndex((item) => item.id === id)
  list.value.splice(index, 1)
  sendList()
}
</script>

<template>
  <main class="flex flex-col justify-center items-center py-8 px-4">
    <div class="flex flex-col gap-2 items-center">
      <TodoCreator @create-todo="addToList" />
    </div>
    <div class="flex flex-col gap-2 w-full items-center">
      <div
        v-for="item in list"
        :key="item.id"
        class="text-xl border bg-slate-300 px-5 py-2 rounded-3xl w-full max-w-lg flex justify-between items-center gap-2"
      >
        <h1 :class="{ 'line-through': item.completed }">
          {{ item.task }}
        </h1>
        <div class="flex">
          <Icon class="w-8 h-8" icon="lets-icons:check-fill" @click="completeTask(item.id)" />
          <Icon class="w-8 h-8" icon="ph:trash" @click="deleteTask(item.id)" />
        </div>
      </div>
    </div>
  </main>
</template>
