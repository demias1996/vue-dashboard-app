<template>
  <div id="app">
    <div class="sidebar">
      <div class="logoWrapper">
        <img src="@/assets/linux.svg" class="logo" />
      </div>
      <h3 class="title">Subscriptions</h3>
      <div class="subscriptionsWrapper">
          <ul>
            <UsersListItem
              v-for="user in users"
              :key="user.id"
              :userItemData="user"
            />
          </ul>
      </div>
    </div>
    <div class="wrapper">
      <div class="searchWidget">
        <div class="searchWidget__input"></div>
        <div class="searchWidget__userSelector"></div>
      </div>
    </div>

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>

  import UsersListItem from './components/UsersListItem'

export default {
  components: {
   UsersListItem 
  },
  data() {
    return {
      test: "test",
    };
  },
  computed: {
    users(){
      return this.$store.state.users;
    }

  },
  beforeMount() {
    this.$store.dispatch("GET_USERS");
    this.$store.dispatch("GET_ALBUMS");
    this.$store.dispatch("GET_PHOTOS");
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-gap: 0;
  height: 100vh;
}

.sidebar {
  background-color: blue;
  padding-top: 10%;
  padding-bottom: 10%;
  display: grid;
  grid-gap: 1%;
  grid-template-rows: 3fr 1fr 17fr;
}

.wrapper {
  background-color: yellow;
}

.logoWrapper {
  width: 100%;
  text-align: center;
}

.logo {
  max-width: 8vw;
  height: auto;
}

 .title {
    text-align: left;
    padding-right: 7%;
    padding-left: 7%;
  }

.subscriptionsWrapper {
  text-align: left;
  overflow: auto;

  ul {
    margin:0;
    padding-right: 7%;
    padding-left: 7%;
  }
  


}
</style>
