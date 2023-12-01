<template>
  <div class="flex-3-elem">
    <div class="flex-3-elem__list">
      <div
        v-for="item in items"
        :key="item.text"
        class="flex-3-elem__list-item"
      >
        <img :src="getImage(item.image)" class="flex-3-elem__list-item-image">
        <p class="flex-3-elem__list-item-text">{{ item.text }}</p>
      </div>
    </div>
    <div class="flex-3-elem__slider" :style="`height:${sliderheight}px`">
      <VueSlickCarousel v-bind="settings">
        <div v-for="item in items" :key="`${item.text}key`">
          <img
            class="flex-3-elem__list-item-image"
            :src="getImage(item.image)"
          >
          <p>{{ item.text }}</p>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import '@/assets/scss/slick2.scss'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    sliderheight: {
      type: Number,
      default: 430
    }
  },
  data () {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 3,
        infinite: true,
        swipe: false,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              swipe: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              autoplay: false,
              slidesToShow: 1,
              swipe: true
            }
          }
        ]
      }
    }
  },
  methods: {
    getImage (name) {
      return `/img/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-3-elem {
  padding: 70px 0;
  @media screen and (max-width: 743px) {
    padding: 40px 0 0;
  }

  &__list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    gap: 20px;
    @media screen and (max-width: 1024px) {
      max-width: 740px;
      margin: 0 auto;
      justify-content: space-around;
    }
    @media screen and (max-width: 743px) {
      display: none;
    }

    &-item {
      display: flex;
      flex-direction: column;
      width: calc((100% - 40px) / 3);
      @media screen and (max-width: 1024px) {
        width: calc((100% - 20px) / 2);
      }

      &-image {
        margin-bottom: 10px;
        @media screen and (max-width: 743px) {
          max-height: 400px;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }

  &__slider {
    display: none;
    width: 360px;
    margin: 0 auto;

    @media screen and (max-width: 743px) {
      display: block;
    }
    @media screen and (max-width: 390px) {
      width: 100%;
    }
  }
}
</style>
