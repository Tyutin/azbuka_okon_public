<template>
  <div class="banner">
    <div class="banner__info">
      <h1 class="banner__heading">
        {{ banner.h1 }}
      </h1>
      <div class="banner__photo">
        <img :src="image">
      </div>
      <div class="banner__text caption">
        <TextComponent :tag="'p'" :textstyle="'caption'">
          {{ banner.text }}
        </TextComponent>
      </div>
      <div class="banner__button">
        <Button :text="buttonText" :action="openCallbackPopup" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      default () {
        return {
          h1: 'Заголовок',
          text: '',
          background: ''
        }
      }
    },
    callbackinfo: {
      type: Object,
      default () {
        return {
          title: '',
          subtitle: 'Бесплатный вызов замерщика'
        }
      }
    }
  },
  data () {
    return {
      buttonText: 'Записаться на замер'
    }
  },
  computed: {
    image () {
      return `/img/banners/${this.banner.background}`
    }
  },
  methods: {
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup', {
        title: this.callbackinfo.title || this.banner.h1,
        subtitle: this.callbackinfo.subtitle
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  height: 500px;
  background-position-x: right;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
    position: static;
    height: unset;
  }

  &__info {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 85px;
    padding-left: 110px;
    background: linear-gradient(
      90deg,
      rgb(250, 245, 237) 0%,
      rgb(250, 245, 237) 70%,
      rgba(252, 250, 245, 0.25) 90%,
      rgba(255, 255, 255, 0) 100%
    );
    transition-duration: 0s;

    @media screen and (max-width: 1023px) {
      padding-top: 70px;
      padding-left: 40px;
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      align-items: center;
      width: 100%;
      padding: 0;
      background: none;
    }
  }

  &__photo {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    transition-duration: 0s;

    @media screen and (max-width: 1023px) {
      right: calc((1024px - 100vw) / -2.28);
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      width: 100%;
      position: static;
      margin-bottom: 34px;
    }
  }

  &__heading {
    max-width: 440px;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      max-width: 350px;
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      max-width: unset;
      width: 100%;
      margin: 0;
      padding: 24px 15px;
      font-size: 30px;
      background-color: #faf5ed;
      text-align: center;
    }
  }

  &__text {
    max-width: 370px;
    margin-bottom: 34px;

    @media screen and (max-width: 1023px) {
      max-width: 350px;
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      display: none;
    }
  }

  &__button {
    width: 203px;
    height: 50px;
  }
}
</style>
