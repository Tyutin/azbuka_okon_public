<template>
  <button class="button" :class="[buttonTheme, classname]" @click="action">
    <span class="button__text">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Записаться на замер'
    },
    theme: {
      type: String,
      default: 'linear'
    },
    classname: {
      type: String,
      default: ''
    },
    action: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    buttonTheme () {
      return `button_theme_${this.theme}`
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  transition-duration: 0.2s;

  &_theme_dark {
    background-color: $GRAY_DARK;
    color: $WHITE;
    border: 1px solid $GRAY_DARK;

    &:hover {
      background-color: $WHITE;
      color: $GRAY_DARK;
    }

    &:active {
      background-color: $GRAY_MAIN;
      color: $WHITE;
      transition-duration: 0s;
    }
  }

  &_theme_white {
    background-color: $WHITE;
    color: $GRAY_DARK;
    border: 1px solid $GRAY_DARK;

    &:hover {
      background-color: $GRAY_DARK;
      color: $WHITE;
    }

    &:active {
      background-color: $GRAY_MAIN;
      color: $WHITE;
      transition-duration: 0s;
    }
  }

  &_theme_transparent {
    color: $WHITE;
    background: transparent;
    border: 1px solid $WHITE;

    &:hover {
      background-color: $WHITE;
      color: $GRAY_DARK;
    }

    &:active {
      background-color: $GRAY_MAIN;
      color: $WHITE;
      transition-duration: 0s;
    }
  }

  &_theme_transparent-dark {
    color: $GRAY_DARK;
    background: transparent;
    border: 1px solid $GRAY_DARK;

    &:hover {
      background-color: $GRAY_DARK;
      color: $WHITE;
    }

    &:active {
      background-color: $GRAY_MAIN;
      color: $WHITE;
      transition-duration: 0s;
    }
  }

  &_theme_linear {
    color: $WHITE;
    background: #2cb9eb;
    background: $LINEAR;
    position: relative;

    &::before {
      content: '';
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2cb9eb;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &:active {
      &::before {
        background: $GRAY_MAIN;
        border: 1px solid $GRAY_DARK;
        transition-duration: 0s;
        opacity: 1;
      }
    }
  }

  &__text {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3%;
    z-index: 1;
    text-transform: uppercase;
  }
}
</style>
