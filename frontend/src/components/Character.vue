<template>
    <el-container>
        <div class="character_card">
            <h2>{{ character.name }}</h2>
            <p>{{ character.profile }}</p>
            <el-button type="info" round>Consulter</el-button>
        </div>
    </el-container>
</template>

<script>
export default {
    props: {
        character: {
            type: Array,
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

.character_card {
    border: 2px solid red;
    margin: 0 30px;
    padding : 20px;
    border-radius : 10px;
}
</style>
