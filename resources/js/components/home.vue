<template>
  <div>
    users
    <div>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>city</th>
        <th>edit</th>
        <th>del</th>
      </tr>
      <tr v-for="item in users">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.city}}</td>
        <td>
          <a href="/edit" v-on:click="edit(item)">edit</a>
        </td>
        <td>
          <a href="#">del</a>
        </td>
      </tr>
    </div>
    <br>
    <a href="/create" class="btn btn-primary">create</a>

    <Edit item="asdfasd"></Edit>
  </div>
</template>

<script>
import { async } from "q";
import Edit from '../components/Edit.vue';

export default {
  name: "home",
  components: {
    Edit
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser: async function() {
      const res = await fetch("api/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "GET"
      });
      console.log(res);
      const result = await res.json();
      this.users = result;
      console.log(result);
    },
    edit: function(item) {
      console.log(item.id);
      console.log(item.name);
      console.log(item.city);
    }
  }
};
</script>

<style>
body {
  padding: 20px;
}

th {
  color: blue;
  padding-right: 50px;
}
</style>

