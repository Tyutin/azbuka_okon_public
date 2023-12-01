<template>
  <component :is="tag" :class="textClassName">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    textstyle: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    textClassName () {
      return `text_style_${this.textstyle}`
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  &_style {
    &_section-heading {
      font-size: 36px;
      font-weight: 800;
      color: $GRAY_DARK;
      line-height: 1.3;
      text-transform: uppercase;

      @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
        text-align: center;
        font-size: 25px;
      }
    }
    &_caption {
      font-size: 14px;
      line-height: 19px;

      &_white {
        font-size: 14px;
        color: $WHITE;
      }

      @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
        font-size: 25px;
      }
    }
    &_list-info {
      font-size: 16px;
      line-height: 22px;
      font-weight: bold;
      color: $GRAY_MAIN;

      @media screen and (max-width: 1220px) {
        font-size: 13px;
        line-height: unset;
      }
    }
    &_grid-element-title {
      font-size: 16px;
      line-height: 22px;
      color: $WHITE;
      font-weight: bold;
      text-transform: uppercase;
    }
    &_grid-element-text {
      font-size: 16px;
      color: $WHITE;
    }
    &_callback-section {
      color: $WHITE;
      font-size: 40px;
      @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
        font-size: 25px;
      }
    }
  }
}
</style>
