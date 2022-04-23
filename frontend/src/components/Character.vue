<template>
    <div class="character_card">
        <h2>{{ character.name }}</h2>
        <p class="my-4">{{ character.profile }}</p>
        <el-button type="info" round>
            <router-link
                :to="{
                    name: 'character.show',
                    params: { character_id: character._id },
                }"
            >
                Consulter
            </router-link></el-button
        >
    </div>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    color: white;
    text-decoration: none;
}

.character_card {
    border: 2px solid red;
    margin: 0 30px;
    padding: 20px;
    border-radius: 10px;
}

.my-4 {
    margin: 1.2em;
}
</style>
