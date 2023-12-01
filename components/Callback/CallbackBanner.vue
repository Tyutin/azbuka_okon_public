<template>
  <div class="callbackBanner">
    <div class="callbackBanner__form-wrapper">
      <CallbackForm :title="info.title" :subtitle="info.subtitle" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default () {
        return {
          title: 'Заголовок',
          subtitle: 'sub',
          image: 'img'
        }
      }
    }
  },
  computed: {
    image () {
      return `url(/img/callbackBanner/${this.info.image})`
    }
  }
}
</script>

<style lang="scss" scoped>
.callbackBanner {
  width: 100%;
  height: 630px;
  background-image: v-bind('image');
  background-size: cover;
  background-repeat: no-repeat;

  &__form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 100px;
    align-items: center;
    @media screen and (max-width: 1024px) {
      padding-left: 50px;
    }
  }
}
</style>
