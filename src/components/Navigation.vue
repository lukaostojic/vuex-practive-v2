<template>
  <nav class="navigation">
    <!-- <div> -->
    <!-- <router-link to="/">Map</router-link>
      <router-link to="/search-region">Search</router-link> -->
    <i class="fas fa-cloud-sun-rain"></i>
    <!-- </div> -->
    <form @submit.prevent="submit" class="navigation__search">
      <input type="text" v-model="inputValue" placeholder="Search..." />
      <button>Search</button>
    </form>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    submit() {
      this.sendInputValue(this.inputValue);
      this.inputValue = "";
    },
    ...mapActions(["sendInputValue"]),
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 15px;
  background: #8ba590;
  border-block: 1px solid #f2f5fd;
  box-shadow: 0px 5px 5px 0px rgba(228, 228, 228, 0.55);

  i {
    color: #ececec;
    font-size: 30px;
  }

  a {
    display: inline-block;
    min-width: 100px;
    padding: 4px 8px;
    margin-right: 15px;
    background: #ececec;
    color: #292929;
    border-radius: 2px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }

  &__search {
    input,
    button {
      padding: 4px 8px;
      border: none;
      border-radius: 2px;
    }

    input {
      margin-right: 10px;
    }

    button {
      min-width: 100px;
      background: #ececec;
      color: #292929;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
