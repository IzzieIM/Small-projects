<script>
import UpdateProfile from './UpdateProfile.vue';

// accepts props from the parents component
// defineProps({
//   profiles: {
//     type: Array,
//     default: () => []
//   }
// });

export default {
  props: {
    profiles: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <h1> this is a table page</h1>
  <table>
    <tr>
      <th>sr.no</th>
      <th>Name</th>
      <th>Mobile No.</th>
      <th>email id</th>
      <th>photo</th>
      <th>gender</th>
      <th>date</th>
      <th>features</th>
    </tr>
    <tr v-for="(profile, idx) in profiles" :key="idx">
      <td>{{ idx + 1 }}</td>
      <td>{{ profile.name }}</td>
      <td>{{ profile.Phoneno }}</td>
      <td>{{ profile.emailid }}</td>
      <td>
        <img v-if="profile.photoUrl" :src="profile.photoUrl" alt="Profile Photo"
          style="width:40px; height:40px; object-fit:cover; border-radius:50%;" />
        <span v-else>No Photo</span>
      </td>
      <td>{{ profile.gender }}</td>
      <td>{{ profile.date }}</td>
      <td>
        <router-link :to="`/update/${idx}`">
          <button class="edit" @click="$emit('updateprofile' , profile)">Update</button>
        </router-link>
        <button class="delete" @click="$emit('deleteprofile', profile)">delete</button>
      </td>
    </tr>
  </table>
  <tbody>
  </tbody>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid rgb(255, 255, 255);
  border-collapse: collapse;
}

table {
  height: 100px;
  width: 88vw;
}

td {
  margin: 10px;
  padding: 10px;
}

button {
  margin: 5px;
}

.edit {
  background-color: rgb(102, 102, 199);
}

.delete {
  background-color: rgb(221, 96, 96);

}
</style>
