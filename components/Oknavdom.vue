<template>
  <div class="oknavdom">
    <div class="oknavdom__grid">
      <p class="oknavdom__item oknavdom__item--text">
        Окна для дома из ПВХ от компании «Азбука Окон» могут быть такими, как вы
        их представляете — любого цвета из палитры RAL, любой фактуры и формы.
        Это могут быть как круглые, так и трапециевидные окна, выполненные с
        рисунком под дерево или в вашей любимой цветовой гамме.<br><br>Алюминиевое
        остекление отличается высокой износостойкостью, теплосберегающими и
        огнестойкими свойствами, что обеспечивает усиленную безопасность и
        сохранность вашего имущества. Благодаря богатому разнообразию расцветок
        и форм, такой материал зачастую используют не только для оконных
        конструкций, но и для остекление фасада здания.
      </p>
      <div v-for="(item, index) in items" :key="index" class="oknavdom__item">
        <img :src="getImageUrl(item.src)" class="oknavdom__image">
        <p class="oknavdom__title">
          <strong>{{ item.title }} </strong>{{ item.text }}
        </p>
      </div>
    </div>

    <div class="oknavdom__slider">
      <div class="oknavdom-slider">
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="oknavdom__item"
          >
            <img :src="getImageUrl(item.src)" class="oknavdom__image">
            <p class="oknavdom__title">
              <strong>{{ item.title }} </strong>{{ item.text }}
            </p>
          </div>
        </VueSlickCarousel>
      </div>
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
          src: 'francuzskie-okna',
          title: 'Французские окна',
          text: 'устанавливаются в качестве панорамного остекления — от потолка до пола.'
        },
        {
          src: 'vitrajnye-okna',
          title: 'Витражные окна',
          text: 'для остекления жилых домов, коммерческих помещений и их фасадов.'
        },
        {
          src: 'erkernye-okna',
          title: 'Эркерные окна',
          text: 'состоящие из нескольких соединенных между собой оконных комплексов, расположенных под любым углом на ваш выбор.'
        },
        {
          src: 'pkna-dlya-zimnego-sada',
          title: 'Окна для зимнего сада,',
          text: 'бань, веранд, хозблоков, террас, беседок и других построек на вашем участке.'
        },
        {
          src: 'fasadnye-okna',
          title: 'Фасадные окна',
          text: 'для придания эстетически привлекательного, модернизированного вида фасаду вашего здания.'
        },
        {
          src: 'derevyannye-okna',
          title: 'деревянные окна',
          text: ''
        },
        {
          src: 'nestandartnye-okna',
          title: 'Нестандартные окна',
          text: 'согласно любому вашему дизайн-проекту.'
        },
        {
          src: 'arochnye-okna',
          title: 'Арочные окна',
          text: 'нестандартной конфигурации, отличающиеся рамой с дугообразной верхней гранью или закругленными углами.'
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
    getImageUrl (img) {
      return `/img/okna-v-dom/${img}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
$grid-row-height: 430px;
$grid-column-gap: 41px;
$grid-row-gap: 30px;

.oknavdom {
  padding: 70px 0;
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, $grid-row-height);
    column-gap: 20px;
    row-gap: $grid-row-gap;
  }

  &-slider {
    width: 100%;
    height: 100%;
    &__element {
      height: 340px;
    }
  }

  &__slider {
    display: none;
    width: 360px;
    height: 450px;
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      display: block;
    }
    @media screen and (max-width: 360px) {
      width: 100vw;
      height: 125vw;
    }
  }

  &__image {
    width: 100%;
    height: calc(100% - 65px);
    object-fit: cover;

    @media (max-width: 1220px) {
      height: calc(100% - 80px);
    }
  }

  &__title {
    margin-top: 12px;
    font-size: 14px;
    max-width: 360px;
    line-height: 1.2;

    & strong {
      text-transform: uppercase;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &--text {
      padding: 25px 20px 0 37px;
      font-size: 14px;
      line-height: 19px;
      background: linear-gradient(
        135deg,
        rgba(244, 238, 222, 1) 0%,
        rgba(245, 245, 234, 1) 50%,
        rgba(255, 254, 250, 1) 100%
      );
      @media (max-width: 1220px) {
        padding: 20px;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: 3 / 4;
      grid-row: span 2;
    }
  }
  @media (max-width: 1023px) {
    padding: 40px 0 120px;
    &__grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 440px);
      gap: 30px;
      padding: 0 calc((100vw - 810px) / 2);
    }

    &__item {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(3) {
        grid-column: 1 / 2;
      }

      &:nth-child(4) {
        grid-column: 2 / 3;
        grid-row: span 2;
      }
    }
  }
  @media (max-width: $BREAKPOINT_MOBILE_START_743) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &__grid {
      display: none;
    }
    &__item {
      width: 360px;
      height: 450px;
    }
    &__image {
      height: calc(100% - 60px);
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 360px) {
    &__item {
      width: 100vw;
      height: 125vw;
    }
    &__title {
      display: block;
      padding: 0 10px;
    }
  }
}
</style>
