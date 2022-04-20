<template>
  <div class="main">
    <h1>Chroniques Oubliées Contemporaines</h1>
    <p>Application de Fiche de personnage intéractive</p>
    <div class="card">
      <h2 class="card-title">Connexion</h2>
      <p class="card-subtitle">
        Pas encore inscrit ? cliquez
        <a href="/signup">ICI</a> pour le faire !
      </p>
      <el-form class="signUp-form" label-position="top" style="width: 360px">
        <el-form-item label="E-mail">
          <el-input v-model="formLabelAlign.email"></el-input> </el-form-item
        ><el-form-item label="Mot de passe">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-button type="success" plain>Me connecter</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const formLabelAlign = reactive({
      email: "",
      password: "",
    });

    return {
      formLabelAlign,
    };
  },
};
</script>

<style lang="scss" scoped></style>
