<template>
  <div class="header-button">
    <img :src="image" class="header-button__image">
    <span class="header-button__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    image () {
      return `/img/icons/${this.img}`
    }
  }
}
</script>

<style lang="scss" scoped>
.header-button {
  display: flex;
  column-gap: 10px;
  align-items: center;

  &__text {
    font-size: 14px;
    color: $GRAY_MAIN;
    width: 200px;
    font-weight: 600;
    text-align: left;
    transition: 0.2s ease;

    &:hover {
      color: $BLUE;
    }
  }

  &__image {
    max-height: 23px;
  }
}
</style>
