<template>
    <div class="single-item">
        <input :id=singleItem.id type="checkbox" @click="taskCompleted" :checked="singleItem.completed">
        <h1>{{singleItem.title}} <span v-show="singleItem.completed">Task Completed</span></h1>
        <h3> {{singleItem.description}}</h3>


        <div class="single-item-buttons">
            <router-link :to="{name: 'editTask',
                                    params: {singleItemInfo: singleItem}}" >
                <button>Edit Task</button>
            </router-link>

            <button @click="toggleDeleteWindow">Delete</button>
        </div>
        <div class="backdrop" v-show="showDeleteDialog">
            <transition name="modal">
                <div class="delete-task" >
                    <h3>Are you sure you want to delete this task </h3>
                    <button @click="deleteTask">Yes</button>
                    <button @click="toggleDeleteWindow">Cancel</button>
                </div>
            </transition>

        </div>



    </div>
</template>

<script>
    export default {
        name: "TestTaskItem",
        props: {
            taskItem: {
                type: Object,
                default: null,
            },

        },

        data(){
            return {
                singleItem: this.taskItem,
                editItem: false,
                newTitle: '',

                showDeleteDialog: false,

            }
        },

        computed:{
            completed(){
               return  this.singleItem.completed
            }
        },
        watch: {
            completed() {
            }
        },

        methods:{
            deleteTask(){
               this.$store.commit('deleteTask',  this.singleItem.id)
            },
            editTask(){
                this.editItem = !this.editItem;
            },

            saveChanges(){
                this.$store.commit('saveChanges',  {id: this.singleItem.id, newTitle: this.newTitle});
            },
            closeEdditing(){
                this.editItem = !this.editItem;
            },

            taskCompleted(){
                const status = !this.completed;

                this.$store.commit('taskCompleted',  {id: this.singleItem.id, completedStatus: status});
            },
            toggleDeleteWindow(){
                this.showDeleteDialog = !this.showDeleteDialog;
            }
        }
    }

</script>

<style scoped>
    .single-item{
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 2rem auto auto;
    }
    .single-item input{
        grid-row: 1/2;
        grid-column: 2/3;
        margin: 15%;
    }
    .single-item h1{
        grid-row: 1/2;
        grid-column: 1/2;
        margin: 0;
    }
    .single-item h3{
        grid-row: 2/3;
        grid-column: 1/3;
    }
    .single-item-buttons{
        grid-row: 3/4;
        grid-column: 1/3;
    }
    span{
        font-size: 1rem;
        color:#f1a80a;
    }
    .delete-task{
        position: fixed;
        top: 30vh;
        width: 30rem;
        left: calc(50% - 15rem);
        margin: 0;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        z-index: 10;
        background-color: white;
        border: none;
        animation: modal 0.3s ease-out forwards;
    }

    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.75);
    }

    @keyframes modal {
        0% {opacity: 0; transform: translateY(-50px) scale(0.9);}
        100% {opacity:1; transform: translateY(0px) scale(1);}

    }

</style>