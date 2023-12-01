<template>
  <div class="vhodnye-gruppy">
    <div class="vhodnye-gruppy__flex vhodnye-gruppy__flex_desk">
      <div class="vhodnye-gruppy__col">
        <img class="vhodnye-gruppy__image" :src="getImage(item1.img)">
        <p>{{ item1.text }}</p>
      </div>
      <div class="vhodnye-gruppy__col">
        <p>{{ item2.text }}</p>
        <img class="vhodnye-gruppy__image" :src="getImage(item2.img)">
        <p>{{ item4.text }}</p>
      </div>
      <div class="vhodnye-gruppy__col">
        <img class="vhodnye-gruppy__image" :src="getImage(item3.img)">
        <p>{{ item3.text }}</p>
        <img class="vhodnye-gruppy__image" :src="getImage(item4.img)">
      </div>
    </div>
    <div class="vhodnye-gruppy__flex vhodnye-gruppy__flex_tablet">
      <div class="vhodnye-gruppy__col">
        <img class="vhodnye-gruppy__image" :src="getImage(item1.img)">
        <p>{{ item1.text }}</p>
        <img class="vhodnye-gruppy__image" :src="getImage(item3.img)">
        <p>{{ item3.text }}</p>
      </div>
      <div class="vhodnye-gruppy__col">
        <p>{{ item2.text }}</p>
        <img class="vhodnye-gruppy__image" :src="getImage(item2.img)">
        <p>{{ item4.text }}</p>
        <img class="vhodnye-gruppy__image" :src="getImage(item4.img)">
      </div>
    </div>
    <div class="vhodnye-gruppy__slider">
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="(item, index) in [item1, item2, item3, item4]"
          :key="index"
          class="vhodnye-gruppy__item"
        >
          <img class="vhodnye-gruppy__image" :src="getImage(item.img)">
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
      item1: {
        img: '1',
        text: 'Пластиковые входные группы изготавливаются из ПВХ, характеризуются высоким уровнем теплоизоляции, герметичности и стойкости к воздействиям окружающей среды. Данные модели имеют более доступную стоимость.'
      },
      item2: {
        img: '2',
        text: 'Остекление крыльца выполняется в «холодном» или «теплом» варианте на ваш выбор. Наш мастер произведет БЕСПЛАТНЫЕ замеры, рассчитает стоимость и поможет подобрать подходящий материал для установки окон — алюминий или пластик.'
      },
      item3: {
        img: '3',
        text: 'Остекление террасы и остекление веранды также осуществляется из ПВХ или алюминиевого профиля. Мы используем только качественные материалы и комплектующие, поэтому наши конструкции обладают хорошими износостойкими и долговечными свойствами. Мы предоставляем гарантию до 5 лет на работу и комплектующие.'
      },
      item4: {
        img: '4',
        text: 'Алюминиевые входные группы гораздо долговечнее — на 20-30 лет служат дольше ПВХ. Такие конструкции имеют более презентабельный внешний вид, отличаются экологичностью и высоким уровнем звукоизоляции.'
      },
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
      return `/img/vhodnye-gruppy/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.vhodnye-gruppy {
  padding: 70px 0;
  @media screen and (max-width: 743px) {
    padding: 40px 0 90px;
  }
  &__slider {
    display: none;
    width: 360px;
    height: 720px;
    margin: 0 auto;

    @media screen and (max-width: 743px) {
      display: block;
    }
    @media screen and (max-width: 390px) {
      width: 100%;
    }
  }
  &__flex {
    display: flex;
    column-gap: 30px;
    @media screen and (max-width: 1024px) {
      max-width: 750px;
      margin: 0 auto;
    }

    &_desk {
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    &_tablet {
      display: none;

      @media screen and (max-width: 1024px) {
        display: flex;
      }

      @media screen and (max-width: 743px) {
        display: none;
      }
    }
  }

  &__col {
    width: calc((100% - 60px) / 3);
    @media screen and (max-width: 1024px) {
      width: calc((100% - 30px) / 2);
    }
  }

  &__image {
    margin-bottom: 18px;
  }
}
</style>
