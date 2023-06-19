<script>
export default {
    props:{
        user:{
            type: Object,
            required: true
        }
    }
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
  </div>
</template>