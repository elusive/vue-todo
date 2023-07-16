<script setup lang="ts">
import { computed, watch, ref, onMounted, toRefs, reactive } from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import { useTodoStore } from '@/stores/todos'
import { type Todo } from '@/types/todo'
import moment from 'moment'

const checked: boolean = ref(false);
const todos = useTodoStore();
const todoList = computed<Todo[]>(() => checked.value ? todos.getAll : todos.getIncomplete);
const incompleteTodoList = computed<Todo[]>(() => todos.getIncomplete);
const computedRefs = reactive({ todoList, incompleteTodoList});

const fmtDate = (date: Date) : string => {
    return moment(date).calendar();
}
</script>


<template>
    <div class="title-container">
        <h1>Today's Todos</h1>
    </div>
    <ul class="todo-list">
        <template v-for="todo in todoList">
            <li>
                <TodoItem>
                    <template #title>{{ todo.Title }}</template>
                    <template #dueDate>{{ fmtDate(todo.DueDate) }}</template>
                    {{ todo.Details }}
                </TodoItem>
            </li>
        </template>
    </ul>

   <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
</template>


<style>
.title-container {
    display: flex;
    justify-content: left;
    width: 100%;
    margin: 0 40px;
}
ul.todo-list {
    display: flex;
    flex-direction: column;
    align-items: left; 
    justify-content: left;
    list-style-type: none;
    height: 100%;
    width: 100%;
}
</style>