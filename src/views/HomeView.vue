<script setup lang="ts">
import { reactive, ref } from 'vue'

const todo = ref<string>('Task')
const todoState = reactive({
  task: 'RTask'
})
</script>

<template>
  <main class="flex justify-center items-center py-8">
    <div class="flex flex-col gap-2 items-center">
      <h1 class="text-2xl font-semibold">Add your Task</h1>
      <div class="flex items-center">
        <input
          type="text"
          class="border border-gray-300 rounded-md px-4 py-2 mx-4"
          placeholder="buy milk and never comeback"
          v-model="todo"
        />
        <button class="bg-green-500 text-white px-4 py-2 rounded-md">Add Task</button>
      </div>
      {{ todo }} {{ todoState.task }}
    </div>
  </main>
</template>
