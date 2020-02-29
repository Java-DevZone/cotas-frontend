<template>
  <div>
    <b-card class="profile-card">
      <b-card-header>Perfil</b-card-header>
      <b-card-body>
        <b-row>
          <b-col>
            <b-img :src="avatar" class="avatar" />
            <br />
            <strong>Nome:</strong>
            {{name}}
            <br />
            <strong>Email:</strong>
            {{email}}
            <br />
            <strong>Carteiras:</strong>
            {{wallets}}
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import avatar from "../../assets/logo.png";
export default {
  name: "Profile",
  data() {
    return {
      avatar,
      userData: {
        name: "Álifer",
        email: "alifer.17.11@gmail.com",
        wallets: "Pesca, educacional"
      }
    };
  }
};
</script>

<style scoped>
.avatar {
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
}
</style>
