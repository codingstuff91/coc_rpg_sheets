<template>
  <div class="main">
    <h1>Chroniques Oubliées Contemporaines</h1>
    <p>Application de Fiche de personnage intéractive</p>
    <div class="card">
      <h2 class="card-title">Inscription</h2>
      <p class="card-subtitle">
        Déjà inscrit ? cliquez
        <a href="/login">ICI</a>
      </p>
      <el-form class="signUp-form" label-position="top" style="width: 260px">
        <el-form-item label="Pseudo">
          <el-input v-model="formLabelAlign.pseudo"></el-input>
        </el-form-item>
        <el-form-item label="E-mail">
          <el-input v-model="formLabelAlign.email"></el-input> </el-form-item
        ><el-form-item label="Mot de passe">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-button type="success" plain>M'inscrire</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const formLabelAlign = reactive({
      pseudo: "",
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
