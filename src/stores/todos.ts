import { defineStore } from 'pinia'
import { type Todo } from '@/types/todo'
import { nanoid } from 'nanoid'
import moment from 'moment'

interface State {
  todos: Todo[]
}


export const useTodoStore = defineStore({
    id: 'todoState',

    state: (): State => ({
        todos: [...exampleData] as Todo[]
    }),

    getters: {
        todoCount(state) : number { 
            return state.todos.length; 
        },
        getComplete: (state): Todo[] => state.todos.filter(x => x.IsCompleted),
        getIncomplete: (state): Todo[] => state.todos.filter(x => !x.IsCompleted),
        getAll: (state): Todo[] => [...state.todos.filter(x => !x.IsCompleted), ...state.todos.filter(x => x.IsCompleted)]
    },

    actions: {
        createTodo(title: string, details: string, dueDate: Date) {
            const todo: Todo = {
                Id: nanoid(),
                Title: title,
                Details: details,
                DueDate: dueDate,
                IsCompleted: false
            };
            this.todos = [todo, ...this.todos];
        }
    }
})

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDay());
const exampleData: Todo[] = [
    { Id: nanoid(), Title: 'Trip to Kroger', Details: 'Whole Milk, Vanilla Yogurt, Lime Bubly, French Bread', DueDate: moment(today).toDate() },
    { Id: nanoid(), Title: 'Learn Vue 3', Details: 'Build todo application using vuejs 3.', DueDate: moment(today.setDate(today.getDay() + 0)).toDate() },
    { Id: nanoid(), Title: 'Finish Reading Book', Details: 'New translation of Meditations by Marcus Aurelius', DueDate: moment(today).toDate() },
    { Id: nanoid(), Title: 'Build Macro Pad', Details: 'Assemble newly received parts soldering to board', DueDate: moment(today.setDate(today.getDay() + 1)).toDate() },
    { Id: nanoid(), Title: 'Finish Reading Book', Details: 'OS INT textbook for beginners', DueDate: moment(today.setDate(today.getMonth() + 1)).toDate() },
    { Id: nanoid(), Title: 'Pickup Breakfast', Details: 'American Donuts: glazed cake, old fashioned', DueDate: moment(today).toDate() },
    { Id: nanoid(), Title: 'Gym: 24hr Fitness', Details: 'Swim laps, shoulder exercises, then steam room', DueDate: moment(today.setDate(today.getDay() +1 )).toDate() },
    { Id: nanoid(), Title: 'Go Fly Fishing', Details: 'Early morning trip to Deckers, pre 7am ideally', DueDate: moment(today.setDate(today.getDay() + 11)).toDate() },
    { Id: nanoid(), Title: 'Plan Backpacking Trip', Details: 'Rocky Mountain National Park, or Meadow Creek campground', DueDate: moment(today).toDate() },
];

