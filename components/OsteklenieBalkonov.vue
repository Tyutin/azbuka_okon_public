<template>
  <div class="osteklenie-balkonov">
    <div class="osteklenie-balkonov__list">
      <div
        v-for="item in items"
        :key="item.text"
        class="osteklenie-balkonov__list-item"
      >
        <p class="osteklenie-balkonov__list-item-text">{{ item.text }}</p>
        <img
          :src="getImage(item.image)"
          class="osteklenie-balkonov__list-item-image"
        >
      </div>
    </div>
    <div class="osteklenie-balkonov__slider">
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="item in items"
          :key="`${item.text}key`"
          class="vhodnye-gruppy__item"
        >
          <img
            class="osteklenie-balkonov__list-item-image"
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
  data () {
    return {
      items: [
        {
          image: 'zamena-holodnogo-ostekleniya',
          text: 'При необходимости, мы проводим замену уже имеющегося холодного остекления от застройщика в новостройках на теплое остекление балкона. По вашему желанию, предлагаем специальные программы беспроцентных рассрочек на все наши услуги, без привлечения банков.'
        },
        {
          image: 'balkon-pod-klyuch',
          text: 'Услуга «Балкон под ключ» от компании «Азбука окон» включает в себя остекление, внешнюю и внутреннюю отделку и, при необходимости, расширение площади, для создания нестандартных конструкций. Большое разнообразие современных отделочных материалов позволит реализовать любой ваш дизайн-проект.'
        }
      ],
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
      return `/img/osteklenie-balkonov-i-lodjiy/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.osteklenie-balkonov {
  padding: 70px 0;
  @media screen and (max-width: 743px) {
    padding: 40px 0 0;
  }

  &__list {
    display: flex;
    max-width: 960px;
    gap: 40px;
    align-items: flex-start;
    margin: 0 auto;
    @media screen and (max-width: 743px) {
      display: none;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: calc(50% - 13px);
      &:nth-child(2) {
        flex-direction: column-reverse;
      }

      &-image {
        @media screen and (max-width: 743px) {
          margin-bottom: 20px;
        }
      }
    }
  }

  &__slider {
    display: none;
    width: 360px;
    height: 680px;
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
