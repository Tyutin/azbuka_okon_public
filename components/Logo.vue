<template>
  <div class="logo">
    <nuxt-link to="/">
      <img src="/img/logo.svg" alt="Азбука окон">
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  width: 150px;
  @media (max-width: $BREAKPOINT_MOBILE_START_743) {
    width: 100px;
  }
}
</style>
