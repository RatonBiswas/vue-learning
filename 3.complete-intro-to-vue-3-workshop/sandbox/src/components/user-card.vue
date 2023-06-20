<script>
export default {
    props:{
        user:{
            type: Object,
            required: true
        }
    },
    emits:['change-name']
}
</script>
<template>
  <div>
    <h1>User Name:{{ user.name }}</h1>
    <p>Address : {{ user.address }}</p>
    <p>Age : {{ user.age }}</p>
    <p>City : {{ user.city }}</p>
    <p>State : {{ user.state }}</p>
    <p>Zip : {{ user.zip }}</p>
    <button @click="$emit(change-name)">Change Name</button>
  </div>
</template>