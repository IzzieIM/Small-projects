<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true
        },
        profileIdx: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            name: this.profile.name,
            Phoneno: this.profile.Phoneno,
            emailid: this.profile.emailid,
            gender: this.profile.gender,
            newPhoto: null,
            photoPreview: this.profile.photoUrl || null,
            phoneError: '',
            date: this.profile.date || '',
            agreed: true // optional, for validation
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            // Only proceed if a file is selected and it's different from the current preview
            if (file && (!this.photoPreview || this.photoPreview !== URL.createObjectURL(file))) {
                this.newPhoto = file;
                this.photoPreview = URL.createObjectURL(file);
                // Update the date to the file's last modified time
                if (file.lastModified) {
                    const d = new Date(file.lastModified);
                    this.date = d.toLocaleString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    });
                }

            }
        },

        handleSubmit() {
            // Validations
            if (!this.agreed) {
                alert('Please check the box to proceed.');
                return;
            }

            if (!this.gender) {
                alert('Please select your gender');
                return;
            }

            if (this.Phoneno.length > 10 || !/^\d{10}$/.test(this.Phoneno)) {
                this.phoneError = "This is an invalid Phone number";
                return;
            } else {
                this.phoneError = '';
            }

            // Prepare updated profile
            const updatedprofile = {
                name: this.name,
                Phoneno: this.Phoneno,
                emailid: this.emailid,
                gender: this.gender,
                date: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                }),
                photo: this.newPhoto || this.photo,
                photoUrl: this.photoPreview || this.photoUrl
            };
            // Emit the updated profile and its index to the parent
            this.$emit('profile-updated', updatedprofile, this.profileIdx);
            this.$swal('Profile updated successfully!');
        }
    }
};
</script>


<template>
    <div class="form-wrapper">
        <h2 class="form-title">Update Profile</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input v-model="name" type="text" class="form-input" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input v-model="Phoneno" type="tel" class="form-input" placeholder="Enter your phone number" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email Address</label>
                <input v-model="emailid" type="email" class="form-input" placeholder="Enter your email address"
                    required>
            </div>
            <div class="mb-3 file-upload-group" style="display: flex; align-items: center; gap: 10px;">
                <label for="formFile" class="form-label" style="margin-bottom: 0;">Change photo</label>
                <input @change="handleFileChange" class="form-control custom-file-input" type="file" id="formFile"
                    style="width: auto; flex: 1 1 auto;">
                <img v-if="photoPreview" :src="photoPreview" alt="Preview"
                    style="width:40px; height:40px; object-fit:cover; border-radius:50%; margin-left: 8px;" />
            </div>
            <div class="mb-3 gender-group">
                <label class="form-label">Gender</label>
                <select v-model="gender" class="form-select custom-gender-select" aria-label="Default select example">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
            </div>
            <div class="button-group">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form-wrapper {
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
}

.form-title {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    color: #34495e;
    font-weight: 500;
    font-size: 14px;
}

.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e1e8ed;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-input::placeholder {
    color: #95a5a6;
}

.alert {
    color: red;
}

.checkbox-group {
    margin-bottom: 25px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #34495e;
    position: relative;
    padding-left: 35px;
}

.checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #e1e8ed;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.checkbox-label:hover .checkmark {
    border-color: #3498db;
}

.checkbox-input:checked~.checkmark {
    background-color: #3498db;
    border-color: #3498db;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox-input:checked~.checkmark:after {
    display: block;
}

.button-group {
    display: flex;
    gap: 12px;
    margin-top: 10px;
}

.btn {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #2980b9, #1f5f8b);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.btn-secondary {
    background: #ecf0f1;
    color: #34495e;
}

.btn-secondary:hover {
    background: #d5dbdb;
    transform: translateY(-1px);
}

.file-upload-group {
    margin-bottom: 20px;
}

.custom-file-input {
    padding: 10px 12px;
    border: 2px solid #e1e8ed;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-size: 14px;
    transition: border-color 0.3s, box-shadow 0.3s;
    width: 100%;
    box-sizing: border-box;
}

.custom-file-input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.gender-group {
    margin-bottom: 20px;
}

.custom-gender-select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e1e8ed;
    border-radius: 8px;
    font-size: 14px;
    background-color: #f9f9f9;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
    color: black;
}

.custom-gender-select:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

@media (max-width: 480px) {
    .form-wrapper {
        padding: 20px;
        margin: 10px;
    }

    .button-group {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }
}
</style>