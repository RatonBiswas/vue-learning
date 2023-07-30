<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isvalid }">
      <label for="text">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isvalid">Firstname must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isvalid }">
      <label for="text">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isvalid">Lastname must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isvalid }">
      <label for="text">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isvalid">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isvalid }">
      <label for="text">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')" />
      <p v-if="!rate.isvalid">Rate must be getter than 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isvalid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isvalid">At least one experties must be selected</p>
    </div>
    <p v-if="!formIsValid">Please fix the above error and sumit again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      // firstName: '',
      firstName: {
        val: '',
        isvalid: true
      },
      // lastName: '',
      lastName: {
        val: '',
        isvalid: true
      },
      // description: '',
      description: {
        val: '',
        isvalid: true
      },
      //rate: null,
      rate: {
        val: null,
        isvalid: true
      },
      // areas: [],
      areas: {
        val: [],
        isvalid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isvalid = true
    },
    validateForm() {
      this.formIsValid = true
      if (this.firstName.val === '') {
        this.firstName.isvalid = false
        this.formIsValid = false
      }
      if (this.lastName.val === '') {
        this.lastName.isvalid = false
        this.formIsValid = false
      }
      if (this.description.val === '') {
        this.description.isvalid = false
        this.formIsValid = false
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isvalid = false
        this.formIsValid = false
      }
      if (this.areas.val.length === 0) {
        this.areas.isvalid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      }
      console.log(formData)
      this.$emit('save-data', formData)
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>