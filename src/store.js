import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jar'
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    donTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.todos.find(event => event.id === id)
    }
  }
})
