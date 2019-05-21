<template>
  <div>
    create
    <form action="/home">
      <div>
        <label>naem</label>
        <input type="text" v-model="name">
      </div>
      <div class="form-group">
        <label>city</label>
        <input type="text" v-model="city">
      </div>
      <div>
        <Button v-on:click="create()">Create</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { async } from "q";
export default {
  name: "create",
  data() {
    return {
      name: "",
      city: ""
    };
  },
  methods: {
    create: async function() {
      console.log(this.name);
      console.log(this.city);
      const res = await fetch("api/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "POST",
        body: JSON.stringify({ name: this.name, city: this.city })
      });
      //console.log(res);
      const result = await res.json();
      console.log(result);
    }
  }
};
</script>
