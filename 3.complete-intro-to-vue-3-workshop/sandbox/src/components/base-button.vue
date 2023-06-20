<script>
export default {
  props: {
    left: Boolean,
    // eslint-disable-next-line vue/require-prop-type-constructor
    default: false,
  },
};
</script>

<template>
  <button>
    <slot v-if="left">Icon Left - Cancel</slot>
    <slot v-else>Submit</slot>
  </button>
</template>

<style></style>