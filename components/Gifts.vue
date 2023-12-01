<template>
  <div class="gifts">
    <div class="gifts__list">
      <div
        v-for="(item, index) in items"
        :key="item.title"
        class="gifts__item"
        :class="`gifts__item-${startwith}`"
      >
        <div class="gifts__item-info">
          <h3 class="gifts__item-title">{{ item.title }}</h3>
          <p class="gifts__item-subtitle">
            {{ item.subtitle }}
          </p>
          <Button
            :theme="`transparent${index % 2 !== 0 ? '-dark' : ''}`"
            :text="'Заказать'"
            :classname="'gifts__item-button'"
            :action="
              () => openCallbackPopupWithTitle(item.title, item.subtitle)
            "
          />
        </div>
        <img :src="getImage(item.image)" class="gifts__item-img">
      </div>
    </div>
    <div v-if="withcallback" class="gifts__callback">
      <h3 class="gifts__callback-title">
        Закажите остекление дома <br>или входных групп прямо сейчас!
      </h3>
      <span class="gifts__callback-subtitle">
        Вызов замерщика - бесплатно
      </span>
      <Button
        :classname="'gifts__callback-button'"
        :theme="'transparent'"
        :text="'заказать'"
        :action="openCallbackPopup"
      />
    </div>
    <div class="gifts__slider">
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="item in items"
          :key="`${item.title}-slider`"
          class="gifts__slider-item"
        >
          <div class="gifts__item">
            <div class="gifts__item-info">
              <h3 class="gifts__item-title">
                {{ item.title }}
              </h3>
              <p class="gifts__item-subtitle">
                {{ item.subtitle }}
              </p>
              <Button
                :theme="'transparent'"
                :text="'Заказать'"
                :classname="'gifts__item-button'"
                :action="
                  () => openCallbackPopupWithTitle(item.title, item.subtitle)
                "
              />
            </div>
            <img :src="getImage(item.image)" class="gifts__item-img">
          </div>
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
    withcallback: {
      type: Boolean,
      default: false
    },
    startwith: {
      type: String,
      default: 'left'
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
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    },
    openCallbackPopupWithTitle (title, subtitle) {
      this.$store.commit('popups/openCallbackPopup', { title, subtitle })
    },
    getImage (name) {
      return `/img/gifts/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.gifts {
  padding: 70px 0;
  &__list {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 670px) {
      display: none;
    }
  }

  &__item {
    display: flex;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    &:nth-child(odd) {
      & .gifts__item-info {
        color: $WHITE;
        background: $LINEAR;
      }
    }

    &:nth-child(even) {
      justify-content: flex-end;
      & .gifts__item-info {
        color: $GRAY_DARK;
        background: $LINEAR-BEIGE;
      }
    }

    &-left {
      justify-content: flex-start;
      &:nth-child(even) {
        justify-content: flex-end;
      }
    }

    &-right {
      justify-content: flex-end;
      &:nth-child(even) {
        justify-content: flex-start;
      }
    }

    &-button {
      width: 160px;
      height: unset;
      padding: 15px 45px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      padding: 32px 36px;
      max-width: 500px;
      @media screen and (max-width: 1024px) {
        width: 50%;
      }
      @media screen and (max-width: 743px) {
        padding: 20px 15px;
      }

      @media screen and (max-width: 670px) {
        width: 100%;
        max-width: unset;
        align-items: center;
        flex-grow: 1;
        justify-content: space-between;
      }
    }

    &-img {
      object-fit: contain;
      @media screen and (max-width: 1024px) {
        width: 50%;
        object-fit: cover;
      }

      @media screen and (max-width: 670px) {
        width: 100%;
        max-width: 440px;
        margin: 0 auto;
        height: 250px;
      }
    }

    &-title {
      font-size: 36px;
      margin-bottom: 30px;
      white-space: pre-line;

      @media screen and (max-width: 1220px) {
        font-size: 24px;
      }

      @media screen and (max-width: 390px) {
        font-size: 20px;
      }
    }

    &-subtitle {
      font-size: 20px;
      margin-bottom: 40px;

      @media screen and (max-width: 1220px) {
        font-size: 18px;
      }
    }

    @media screen and (max-width: 670px) {
      flex-direction: column-reverse;
      width: 360px;
      height: 100%;
      margin: 0 auto;
    }

    @media screen and (max-width: 390px) {
      width: calc(100vw - 30px);
    }
  }

  &__callback {
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $GRAY_DARK;
    color: $WHITE;

    @media screen and (max-width: 670px) {
      display: none;
    }

    &-title {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: 600;
      text-align: center;
    }

    &-subtitle {
      margin-bottom: 20px;
      font-size: 18px;
    }

    &-button {
      width: 160px;
      padding: 15px 45px;
    }
  }

  &__slider {
    display: none;
    @media screen and (max-width: 670px) {
      display: block;
    }

    &-item {
      height: 520px;
    }
  }
}
</style>
