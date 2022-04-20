<template>
  <div class="home">
    <h1>Chroniques Oubliées Contemporaines</h1>
    <p>Application de Fiche de personnage intéractive</p>
    <div class="card" v-if="mode == `signup`">
      <h2 class="signUp">Inscription</h2>
      <p>
        Déjà inscrit ? cliquez
        <span @click="switchToLogin">ICI</span>
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

    <div class="card" v-if="mode == `login`">
      <h2 class="logIn">Connexion</h2>
      <p class="subtitle">
        Pas encore inscrit ? cliquez
        <span @click="switchToSignUp">ICI</span> pour le faire !
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
import { reactive, ref } from "vue";
export default {
  setup() {
    const mode = ref("login");

    const formLabelAlign = reactive({
      pseudo: "",
      email: "",
      password: "",
    });

    return {
      formLabelAlign,
      mode,
    };
  },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
span {
  cursor: pointer;
}
</style>
