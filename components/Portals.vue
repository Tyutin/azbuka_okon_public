<template>
  <div class="portals">
    <ul class="portals__flex">
      <li v-for="item in items" :key="item.text" class="portals__item">
        <img :src="getImage(item.image)" alt="" class="portals__item-image">
        <p class="portals__item-text">{{ item.text }}</p>
      </li>
    </ul>
    <div class="portals__slider">
      <VueSlickCarousel v-bind="settings">
        <div
          v-for="item in items"
          :key="`${item.text}-slider`"
          class="portals__item"
        >
          <img class="portals__item-image" :src="getImage(item.image)">
          <p class="portals__item-text">{{ item.text }}</p>
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
          text: 'Оконные порталы — это уникальные раздвижные конструкции, выполняющие функции панорамных окон или дверей. Оконные порталы отличаются своей функциональностью и способностью гармонично увеличивать пространство для жизни. Даже в открытом состоянии, такие конструкции не будут занимать много места, так как створки не распахиваются, а разъезжаются в стороны.',
          image: 'portals/portals1'
        },
        {
          text: 'Раздвижные окна-порталы — отличный способ кардинально преобразить вашу квартиру или дом. Такие конструкции сохраняют все преимущества классических пластиковых и алюминиевых окон — они обладают хорошими шумоизоляционными, теплоизоляционными и защитными свойствами. При этом, данные модели обеспечивают улучшенный контроль климата в помещении.',
          image: 'portals/portals2'
        },
        {
          text: 'Для придания особого стиля дизайну вашего интерьера, компания “Азбука окон” устанавливает оконные порталы от пола до потолка вместо классических оконных и дверных конструкций. Профессиональные мастера нашей компании приедут в любое удобное для вас время на БЕСПЛАТНЫЙ замер и помогут определиться с выбором материала оконных порталов. Бригады наших монтажников имеют большой профессиональный опыт остекления оконными порталами и работают со строгим соблюдением технологий, что гарантирует надежность и долговечность эксплуатации.',
          image: 'portals/portals3'
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
      return `/img/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.portals {
  padding: 70px 0;

  &__slider {
    display: none;
    width: 360px;
    margin: 0 auto;

    @media (max-width: 743px) {
      display: block;
    }

    @media (max-width: 390px) {
      width: 100%;
    }
  }

  &__flex {
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    margin: 0 auto;
    row-gap: 40px;

    @media (max-width: 743px) {
      display: none;
    }
  }

  &__item {
    display: flex;
    column-gap: 40px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  &__item-image {
    @media (max-width: 1023px) {
      width: calc(50% - 20px);
      object-fit: contain;
    }
    @media (max-width: 743px) {
      width: 100%;
    }
  }

  &__item-text {
    @media (max-width: 1023px) {
      width: calc(50% - 20px);
      font-size: 16px;
    }
    @media (max-width: 743px) {
      width: 100%;
    }
  }
}
</style>
