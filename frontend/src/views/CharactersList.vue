<template>
    <div>
        <h1>PERSONNAGES DISPONIBLES</h1>
        <div class="wrapper">
            <Character v-for="(character, index) in caractersList" :key="index" :character="character"/>
        </div>
    </div>
</template>

<script>
import Character from "../components/Character.vue";

export default {
    computed: {
        caractersList() {
            return this.$store.state.characters
        },
    },
    components: {
        Character,
    },
    async mounted() {
        this.$store.dispatch("getCharactersList");
    },
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

h1{
    margin-bottom: 20px;
}

.wrapper{
    display: flex;
    justify-content: center;
}
</style>
