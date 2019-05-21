<template>
  <div>
    edit
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
        <Button v-on:click="edit()">Edit</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { async } from "q";
export default {
  name: "edit",
  props: {
    item: ''
  },
  data() {
    return {
      name: "",
      city: ""
    };
  },
  methods: {
    edit: async function() {}
  },
  created() {
    console.log(this.item);
  }
};
</script>
