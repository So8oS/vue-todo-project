<script setup lang="ts">
import { reactive, defineEmits, ref } from 'vue'

const todoState = reactive({
  task: '',
  invalid: false,
  err: ''
})

const emit = defineEmits(['createTodo'])

const createTodo = () => {
  todoState.invalid = false
  if (todoState.task !== '') {
    emit('createTodo', { task: todoState.task, invalid: false, isEditing: null })
    todoState.task = ''
  } else {
    todoState.invalid = true
    todoState.err = 'Please enter a task'
  }
}
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
          v-model="todoState.task"
        />
        <button @click="createTodo" class="bg-green-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
      </div>
      <p v-show="todoState.invalid" class="text-red-500 text-sm">{{ todoState.err }}</p>
    </div>
  </main>
</template>
