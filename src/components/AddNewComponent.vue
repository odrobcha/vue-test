<template>
    <div>
        <div class="toggle-new-task" @click="toggleNewTask">Add New Task</div>
        <transition name="modal">
            <div v-show="addNewTask" class="add-new-task-field">
                <div class="add-new-task-container">
                    <label for="new-task-title">Add the title</label>
                    <input id="new-task-title" type="text" v-model.trim="taskTitle" @blur="validateInput"/>
                    <p class="warning" v-show="emptyTitle">This field can't be empty</p>
                </div>
                <div class="add-new-task-container">
                    <label for="new-task-description">Add the description</label>
                    <textarea id="new-task-description" type="text" v-model="taskDescription"/>

                </div>
                <div class="add-new-task-container">
                    <label for="new-task-completed">Completed task</label>
                    <input id='new-task-completed' type="checkbox" v-model="taskCompleted">
                </div>

                <div>
                    <button @click="addTask">Add Task</button>

                    <button @click="cancelAddTask">Cancel</button>
                </div>
            </div>
        </transition>


    </div>
</template>

<script>
    export default {
        name: "AddNewComponent",
        data(){
            return{
                taskTitle: '',
                taskDescription: '',
                taskCompleted: false,
                emptyTitle: false,
                addNewTask: false,
            }
        },

        methods:{
            toggleNewTask(){
                this.addNewTask =!this.addNewTask;
            },
            cancelAddTask(){
                this.addNewTask =!this.addNewTask;
            },
            addTask(){
                if (this.taskTitle !==''){
                    this.$store.commit('addTask',  {title: this.taskTitle, description: this.taskDescription, completed: this.taskCompleted});
                    this.taskTitle = '';
                    this.taskDescription = '';
                    this.taskCompleted = false;
                    this.addNewTask =!this.addNewTask;
                } else {
                    this.emptyTitle=true;
                }


            },

            validateInput(){
                if (this.taskTitle === ''){
                    this.emptyTitle = true;
                } else {
                    this.emptyTitle = false;
                }
            }
        }
    }
</script>

<style scoped>
    .toggle-new-task{
        color: #f1a80a;
        cursor: pointer;
        margin: 20px;
        background-color: #1a037e;
        width: 150px;
        text-align: center;
        padding: 0.75rem 2rem;
        border-radius: 30px;

    }
    .add-new-task-field{
        margin: 2rem 0;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        animation: modal 0.3s ease-out forwards;
    }
    @keyframes modal {
        0% {opacity: 0; transform: translateY(-50px) scale(0.9);}
        100% {opacity:1; transform: translateY(0px) scale(1);}

    }
    .add-new-task-container{
        padding: 1rem;

    }
    label{
        padding-right: 0.25rem;
    }

    .warning{
        color: orangered;
    }

</style>