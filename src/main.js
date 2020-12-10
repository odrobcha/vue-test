import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import TestMain from "./components/TestMain";
import EditTask from "./components/EditTask";

Vue.config.productionTip = true;

Vue.use(Vuex);

const store = new Vuex.Store({
  state(){
    return{
     tasks: [
            {title: "task1", description: 'Task1 description example', id: "task1", completed: false},
             {title: "task2", description: 'Task2 description example', id: "task2", completed: false},
             {title: "task3", description: 'Task3 description example', id: "task3", completed: false},
             {title: "task4", description: 'Task4 description example', id: "task4", completed: true},
        ]
    }
  },

  mutations:{
        deleteTask(state, id){
            this.state.tasks = this.state.tasks.filter(task => task.id  !== id);
        },

      saveChanges(state, payload){
          const idetiffiedTask = this.state.tasks.find(task => task.id == payload.id);
          idetiffiedTask.title = payload.newTitle;
          idetiffiedTask.description = payload.newDescription;
          idetiffiedTask.completed = payload.newStatus;

      },
      taskCompleted(state, payload){
          const idetiffiedTask = this.state.tasks.find(task => task.id == payload.id);
          idetiffiedTask.completed = payload.completedStatus;
      },

      addTask(state, payload){

            const newTaskId = 'task' + this.state.tasks.length+1;

            const newTask = {
                title: payload.title,
                description: payload.description,
                id: newTaskId,
                completed: payload.completed,

            };
          this.state.tasks.unshift(newTask);

      }
  },

});

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
        {
          path: '/',
          component: TestMain
        },

        {
          path: '/main',
          component: TestMain
        },

        {
          path: '/edit',
          name: 'editTask',
          component: EditTask,
          props: true,
        }
    ]
});

    new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');

