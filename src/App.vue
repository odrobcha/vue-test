<template>
    <div>

        <the-test-navigation></the-test-navigation>
        <router-view></router-view>
         <!--place where selected routed componets should be load -->
    </div>


</template>
<script>
    import TheTestNavigation from "./components/TheTestNavigation";

export default {
  name: 'App',
    components: {
      TheTestNavigation,

    },


    methods: {
    },
    data() {
        return {
        };
    },

};

</script>

<style>
    button {
        font: inherit;
        border: 1px solid #1a037e;
        background-color: #1a037e;
        color: #f1a80a;
        cursor: pointer;
        padding: 0.75rem 2rem;
        border-radius: 30px;
        margin:0.75rem;
    }
    .item-frame{
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 2rem auto auto;
    }
    ul{
        padding: 0;
    }

    @media only screen and (max-width: 500px) {
        button{
            font-size: 0.9rem;
            padding: 0.5rem 1.5rem;
        }
    }

</style>

