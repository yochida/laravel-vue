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
      <tr  v-for="item in users">
        <td>{{item.id}}</td>
        <td>{{item.city}}</td>
        <td>{{item.city}}</td>
        <td><a href="#">edit</a></td>
        <td><a href="#">del</a></td>
      </tr>
    </div>
    <br>
    <a href="/create" class="btn btn-primary">create</a>
  </div>
</template>

<script>
import { async } from "q";
export default {
  name: "home",
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
    }
  }
};
</script>

<style>

body{
    padding: 20px;
}

th {
  color: blue;
  padding-right: 50px;
}
</style>

