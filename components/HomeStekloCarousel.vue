<template>
  <div class="homesteklo-slider">
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in items" :key="item.title" class="homesteklo-slider">
        <HomeCard
          :title="item.title"
          :text="item.text"
          :theme="'bottom-blue'"
          :image="item.image"
          :type="'slider'"
        />
      </div>
    </VueSlickCarousel>
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
  }
}
</script>

<style lang="scss" scoped>
.homesteklo-slider {
  width: 100%;
  height: 100%;
  &__element {
    height: 340px;
  }
}
</style>
