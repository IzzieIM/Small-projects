<template>
  <div class="signup-container">
    <h1 class="text-center mb-4">Sign Up</h1>
    <form @submit.prevent="handleSubmit" class="signup-form">

      <!-- Name -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" v-model="form.name" class="form-control" id="name" required>
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input type="tel" v-model="form.phone" class="form-control" id="phone" required>
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="email" required>
      </div>

      <!-- Profile Picture -->
      <div class="mb-3">
        <label for="profilePic" class="form-label">Profile Picture</label>
        <input type="file" @change="handleFileUpload" class="form-control" id="profilePic" accept="image/*">
      </div>

      <!-- Timestamp (shown after submit) -->
      <div v-if="form.timestamp" class="mb-3">
        <p><strong>Form submitted at:</strong> {{ form.timestamp }}</p>
      </div>

      <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</template>

<script>
import './SignUp.css';
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        profilePic: null,
        timestamp: ''
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.profilePic = event.target.files[0];
    },
    handleSubmit() {
      const now = new Date();
      this.form.timestamp = now.toLocaleString();

      if (!this.form.profilePic) {
        alert("Please upload a profile picture.");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result;

        const formDataToStore = {
          ...this.form,
          profilePic: base64Image
        };

        //  Save to localStorage with consistent key
        localStorage.setItem('user', JSON.stringify(formDataToStore));

        // Set global reactive user
        this.$root.$.appContext.config.globalProperties.$user.value = formDataToStore;

        alert("Form submitted and saved locally!");
        this.$router.push('/');
      };

      reader.readAsDataURL(this.form.profilePic);
    }
  }
}
</script>

