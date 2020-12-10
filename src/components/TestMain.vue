<template>
    <div class="container">
        <div class="box">
            <add-new-component></add-new-component>

            <h1 class="header">Tasks List</h1>
            <ul>
                <test-task-item v-for="task in tasks" :key="task.id" :taskItem="task"></test-task-item>
            </ul>

            <router-view></router-view>
        </div>

    </div>

</template>

<script>
   import TestTaskItem from "./TestTaskItem";
   import AddNewComponent from "./AddNewComponent";
    export default {
        name: "TestMain",
        components:{
            AddNewComponent,
            TestTaskItem,

        },
        component:{
            AddNewComponent,
        },
        data(){
            return{

            }

        },

        computed:{
            tasks(){
                return this.$store.state.tasks
            }
        },

        watch:{
            tasks(){
            }
        }

    }
</script>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        justify-content: center;

    }

    .box{
        width: 80%;
        justify-self: center;
        grid-column: 1/2;
        grid-row: 1/2;

    }
    .header{
        max-width: 30rem;
        margin: 2rem auto;
        text-align: center;
    }
</style>