<template>
  <div
    class="home-card"
    :style="!isoutside && `background-image: url(${bgImage})`"
    :class="isoutside && 'home-card_outside'"
  >
    <img v-if="isoutside" :src="bgImage" class="home-card__image" alt="">
    <div
      class="home-card__info"
      :class="[themeClass, isoutside && 'home-card__info_outside']"
    >
      <span class="home-card__title">{{ title }}</span>
      <!-- <span class="home-card__text">
        {{ text }}
      </span> -->
      <div v-if="button" class="home-card__button">
        <Button
          :text="'Заказать'"
          :theme="'transparent'"
          :action="openCallbackPopup"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isoutside: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'shadow'
    },
    button: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
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
  computed: {
    bgImage () {
      if (this.type === 'slider') {
        return `/img/${this.image}_slider.jpg`
      }
      return `/img/${this.image}.jpg`
    },
    themeClass () {
      return `home-card__info_theme_${this.theme}`
    }
  },
  methods: {
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup', {
        title: this.callbackinfo.title || this.title,
        subtitle: this.callbackinfo.subtitle
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-card {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
    width: 360px;
    height: 450px;
  }
  @media screen and (max-width: 360px) {
    width: 100vw;
    height: 125vw;
  }
  &_outside {
    display: flex;
    flex-direction: column;
  }

  &__image {
    display: block;
  }

  &__button {
    width: 150px;
    height: 40px;
    margin-top: 26px;
  }

  &__title {
    padding: 0 10px;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: pre-line;
  }

  &__text {
    font-size: 12px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: center;
    text-align: center;

    &_theme {
      &_right {
        width: 53%;
        left: unset;
        right: 0;
        height: 100%;
        color: $WHITE;
        justify-content: end;
        padding-bottom: 40px;
        justify-content: center;
        padding-bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(100, 115, 195, 0.8) 0%,
          rgba(44, 185, 235, 0.8) 100%
        );
        @media screen and (max-width: 1024px) {
          height: unset;
          width: 100%;
          left: 0;
          right: unset;
          padding: 15px 0 40px;
        }
      }
      &_shadow,
      &_shadow-center {
        height: 100%;
        color: $WHITE;
        justify-content: end;
        padding-bottom: 40px;
        background-color: rgb(0, 0, 0, 0.3);
        justify-content: center;
        padding-bottom: 0;
      }
      &_shadow-center {
        justify-content: center;
        padding-bottom: 0;
      }
      &_bottom {
        &-blue {
          color: $WHITE;
          justify-content: end;
          padding: 15px 0;
          background: linear-gradient(
            135deg,
            rgba(100, 115, 195, 0.8) 0%,
            rgba(44, 185, 235, 0.8) 100%
          );
        }
        &-beige {
          color: $GRAY_DARK !important;
          justify-content: end;
          padding: 15px 0;
          background: linear-gradient(
            135deg,
            rgba(244, 238, 222, 0.8) 0%,
            rgba(245, 245, 234, 0.8) 50%,
            rgba(255, 254, 250, 0.8) 100%
          );
        }
        &-linear {
          color: $GRAY_DARK !important;
          justify-content: end;
          padding: 15px 0;
          background: linear-gradient(
            90deg,
            rgba(201, 227, 243, 1) 0%,
            rgba(255, 255, 255, 1) 100%
          );
        }
        &-linear-blue {
          color: $WHITE !important;
          justify-content: end;
          padding: 15px 0;
          background: linear-gradient(
            135deg,
            rgba(100, 115, 195, 1) 0%,
            rgba(44, 185, 235, 1) 100%
          );
        }
        &-gray {
          color: $WHITE !important;
          justify-content: end;
          padding: 15px 0;
          background: $GRAY_MAIN;
        }
      }
    }

    &_outside {
      position: static;
      flex-grow: 1;
      justify-content: center;
    }
  }

  &__text {
    margin-top: 10px;
  }
}
</style>
