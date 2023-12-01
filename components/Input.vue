<template>
  <input
    class="input"
    :class="[inputTheme, inputSize, classname]"
    :type="type"
    :placeholder="placeholder"
    @input="oninput"
  >
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: 'text'
    },
    theme: {
      type: String,
      default: 'onLight'
    },
    size: {
      type: String,
      default: 'small'
    },
    classname: {
      type: String,
      default: ''
    },
    oninput: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    inputTheme () {
      return `input_theme_${this.theme}`
    },
    inputSize () {
      return `input_size_${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border-radius: 2px;
  &:focus-visible {
    outline: none;
  }
  &_theme {
    &_onLight {
      border: 1px solid $GRAY_LIGHT;
      color: $GRAY_BASE;
      &::placeholder {
        color: $GRAY_MAIN;
      }
      &:hover {
        border-color: $GRAY_MAIN;
      }
      &:focus {
        border-color: $BLUE;
      }
    }
    &_onDark {
      border: 1px solid $WHITE;
      color: $GRAY_LIGHT;
      &::placeholder {
        color: $GRAY_LIGHT;
      }
      &:hover {
        border-color: $GRAY_MAIN;
      }
      &:focus {
        border-color: $BLUE;
      }
    }
  }
  &_size {
    &_small {
      padding: 13px;
    }
    &_big {
      padding: 18px 16px;
    }
  }
}
</style>
