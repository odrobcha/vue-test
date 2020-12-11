<template>
    <div class="edit-item">

        <h2>Edit task</h2>
        <input v-model="newStatus" type="checkbox" :checked="newStatus" @click="taskCompleted" class="margin-40">
        <p>Task completed</p>


        <div class="rename-title">
            <label for="rename-title">Rename title:</label>
            <input id='rename-title' v-model="newTitle">
        </div>

        <div class="rename-description">
            <label for="rename-description">Edit Description:</label>
            <textarea id="rename-description" v-model="newDescription" v-text="singleItemInfo.description"></textarea>
        </div>
        <div class="edit-item-buttons">

            <router-link to="/"><button>Cancel</button></router-link>
            <button @click="saveChanges(newTitle, newDescription, newStatus)">Save Changes</button>
        </div>





    </div>
</template>

<script>
    export default {
        name: "EditTask",

        props: {
            singleItemInfo: Object,

        },
        data(){
            return{
                newTitle: this.singleItemInfo.title,
                newDescription:  this.singleItemInfo.description,
                newStatus:this.singleItemInfo.completed,
            }
        },
        computed:{
            task(){
                return this.singleItemInfo
            }
        },

        methods: {
            taskCompleted(){
                this.newStatus = !this.newStatus;
            },
            saveChanges(){

                this.$store.commit('saveChanges',  {id: this.singleItemInfo.id, newTitle: this.newTitle, newDescription: this.newDescription, newStatus: this.newStatus});

                this.$router.push('/');
            },
        }
    }
</script>

<style scoped>
    .edit-item{
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-rows: 2rem  auto auto auto auto;
    }
    h2{
        grid-column: 1/3;
        grid-row: 1/2;
        justify-self: center;
    }
    input{
        grid-column: 1/2;
        grid-row: 2/3;

    }
    p{
        grid-column: 2/3;
        grid-row: 2/3;
    }

    .rename-title{
        grid-column: 1/3;
        grid-row: 3/4;
        padding: 1rem;
    }
    .rename-description{
        grid-column: 1/3;
        grid-row: 4/5;
        padding: 1rem;
    }

    .edit-item-buttons{
        grid-column: 1/3;
        grid-row: 5/6;
    }
    label{
        padding-right: 0.25rem;
    }
    .margin-40{
        margin-top: 40%
    }


</style>