<template>
    <div>
        <h1>Nom : {{ character_details.name }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        character_details() {
            return this.$store.state.character;
        },
    },
    mounted() {
        this.$store.dispatch("getCharacter", {
            character_id: this.$route.params.character_id,
        });
    },
};
</script>

<style lang="scss" scoped></style>
