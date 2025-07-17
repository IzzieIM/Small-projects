<script>
import HelloWorld from './components/HelloWorld.vue';
import Form from './components/Form.vue';
import UpdateProfile from './components/UpdateProfile.vue';

export default {
  components: {
    HelloWorld,
    Form,
    UpdateProfile,
  },

  data() {
    return {
      showForm: false,
      profiles: [],
      showUpdate: false,
      selectedProfile: null,
      selectedProfileIdx: null,
    };
  },

  created() {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      this.profiles = JSON.parse(storedProfiles);
    }
  },

  watch: {
    profiles: {
      handler(newProfiles) {
        localStorage.setItem('profiles', JSON.stringify(newProfiles));
      },
      deep: true
    }
  },
  methods: {
    addform() {
      this.showForm = !this.showForm;
      console.log(this.showForm);
    },

    handleAddProfile(profile) {
      if (!profile.name || !profile.Phoneno || !profile.emailid) return;
      if (profile.photo) {
        profile.photoUrl = URL.createObjectURL(profile.photo);
      }
      this.profiles.push(profile);
      this.showForm = false;
    },

    deleteall() {
      localStorage.removeItem(this.profiles);
      console.log(this.profiles);
      this.profiles = [];
    },

    deleteprofile(profile) {
      this.profiles = this.profiles.filter(p => p !== profile);
    },

    updateprofile(profile) {
      this.selectedProfile = profile;
      this.selectedProfileIdx = this.profiles.findIndex(p => p === profile);
      this.showUpdate = true;
    },

    handleProfileUpdate(updatedprofile, idx) {
      if (typeof idx === 'number' && idx !== -1) {
        this.profiles.splice(idx, 1, updatedprofile);
        localStorage.setItem('profiles', JSON.stringify(this.profiles));
        console.log(updatedprofile);
        this.showUpdate = false;
        this.selectedProfile = null;
        this.selectedProfileIdx = null;
      }
    }



  }
}
</script>

<template>
  <div class="container">
    <HelloWorld :profiles="profiles" @deleteprofile="deleteprofile" @updateprofile="updateprofile" />
    <button class="profile" @click="addform">
      add a profile
    </button>
    <button class="delete" @click="deleteall">delete all</button>

    <div class="form-container" v-if="showForm">
      <Form @submit="handleAddProfile" @close="addform" />
    </div>

    <div class="update-container" v-if="showUpdate">
      <UpdateProfile :profile="selectedProfile" :profile-idx="selectedProfileIdx" @profile-updated="handleProfileUpdate" />
    </div>
  </div>

</template>

<style scoped>
.container {
  min-height: auto;
  min-width: auto;
  position: relative;
}

.profile {
  position: absolute;
  right: 0px;
  top: 0px;
  gap: 10px;
}

.delete {
  position: absolute;
  left: 0px;
  top: 0px;
}

.form-container {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.update-container {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
</style>
