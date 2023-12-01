<template>
  <div class="pvhbrands">
    <div class="pvhbrands__flex">
      <ul class="pvhbrands__list">
        <li v-for="item in items" :key="item.title" class="pvhbrands__item">
          <div class="pvhbrands__item-visual">
            <div class="pvhbrands__item-image-wrap">
              <img
                :src="`/img/${item.image}.jpg`"
                alt=""
                class="pvhbrands__item-image"
              >
            </div>
            <Button
              :text="'Заказать'"
              :theme="'white'"
              :classname="'pvhbrands__item-button'"
              :action="() => openCallbackPopup(`Окна ${item.title}`)"
            />
          </div>
          <div class="pvhbrands__item-info">
            <h3 class="pvhbrands__item-title">{{ item.title }}</h3>
            <ul class="pvhbrands__item-description">
              <li
                v-for="text in item.descriptions"
                :key="text"
                class="pvhbrands__item-description-text"
              >
                {{ text }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="pvhbrands__slider">
      <VueSlickCarousel v-bind="settings" class="slick-works">
        <div
          v-for="item in items"
          :key="`${item.title}-slider`"
          class="pvhbrands__item"
        >
          <h3 class="pvhbrands__item-title">{{ item.title }}</h3>
          <div class="pvhbrands__item-visual">
            <div class="pvhbrands__item-image-wrap">
              <img
                :src="`/img/${item.image}.jpg`"
                alt=""
                class="pvhbrands__item-image"
              >
            </div>
          </div>
          <div class="pvhbrands__item-info">
            <ul class="pvhbrands__item-description">
              <li
                v-for="text in item.descriptions"
                :key="`${text}-slider`"
                class="pvhbrands__item-description-text"
              >
                {{ text }}
              </li>
            </ul>
            <Button
              :text="'Заказать'"
              :theme="'white'"
              :classname="'pvhbrands__item-button'"
              :action="() => openCallbackPopup(`Окна ${item.title}`)"
            />
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
      },
      items: [
        {
          image: 'okna/brands/rehau',
          title: 'Rehau',
          descriptions: [
            'Системы Rehau, проверенные десятилетиями, изготавливаются по уникальной рецептуре для получения износостойкого пластика высокого качества.',
            'Особая прочность, водонепроницаемость и морозостойкость данного материала позволяет устанавливать классические окна для дома. Благодаря невероятно гладкой поверхности и особой форме штапика, ПВХ профиль Rehau не притягивает к себе пыль, грязь и не требует особого ухода, достаточно обычной влажной уборки раз в месяц.',
            'Производитель самостоятельно подбирает, контролирует и тестирует качество всех комплектующих — материалов, фурнитуры и стеклопакетов.'
          ]
        },
        {
          image: 'okna/brands/veka',
          title: 'Veka',
          descriptions: [
            'Благодаря использованию усиленного металлом пластика, при изготовлении профилей Veka, обеспечивается максимальная прочность данных изделий.',
            'Производитель предлагает разнообразные цветовые решения на выбор — от белых и цветных, до уникальных систем, имитирующих дерево любого оттенка.',
            'Данные модели могут быть любой формы: квадратные, круглые, трапециевидные, треугольные, арочные окна и другие конструкции.'
          ]
        },
        {
          image: 'okna/brands/kbe',
          title: 'KBE',
          descriptions: [
            'Системы KBE обладают прекрасными теплоизоляционными свойствами, что позволит вывести энергоэффективность вашего дома на новый уровень.',
            'Характеризуются прекрасными долговечными свойствами — каждая линейка KBE проходит испытания на износостойкость и прочность.',
            'Большой выбор прекрасных дизайнерских и цветовых решений — вы можете подобрать модель имитирующую дерево, алюминий или любой цвет из палитры RAL.'
          ]
        },
        {
          image: 'okna/brands/brusbox',
          title: 'Brusbox',
          descriptions: [
            'Профили Brusbox идеально подходят для сурового климата Удмуртии — конструкции выдерживают сильные морозы и порывистые ветра.',
            'На ваш выбор, в ассортименте бренда есть не только распашные створки, но и раздвижные системы, что позволяет устанавливать оконные порталы.',
            'Помимо достойного эстетичного внешнего вида, такие модели обеспечивают повышенную взломобезопасность.'
          ]
        },
        {
          image: 'okna/brands/gealan',
          title: 'Gealan',
          descriptions: [
            'Окна для дома и квартиры Gealan невероятно прочные и выдерживают максимальные нагрузки благодаря специальному замкнутому армированию.',
            'Поверхности данных моделей невосприимчивы к агрессивному механическому воздействию. Если мелкие царапины появились — они легко устраняются с помощью полировки.',
            'Даже спустя 50 лет профильные системы Gealan будут оставаться белоснежными и никогда не пожелтеют.',
            'Окна на балкон или лоджию Gealan имеют небольшой вес, что обеспечивает повышение теплоизоляционных функций, за счет исключения образования мостиков холода.'
          ]
        }
      ]
    }
  },
  methods: {
    openCallbackPopup (title) {
      this.$store.commit('popups/openCallbackPopup', {
        title,
        subtitle: 'Бесплатный вызов замерщика'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pvhbrands {
  padding: 70px 0;

  &__slider {
    display: none;
    width: 100%;

    @media (max-width: 743px) {
      display: block;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    margin: 0 auto;
    row-gap: 70px;

    @media (max-width: 743px) {
      display: none;
    }
  }

  &__item {
    color: #000;
    display: flex;
    column-gap: 50px;

    @media (min-width: 744px) {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }

    @media (max-width: 1023px) {
      column-gap: 30px;
      align-items: center;
    }
    @media (max-width: 743px) {
      flex-direction: column;
    }

    &-info {
      display: flex;
      flex-direction: column;
      @media (max-width: 1023px) {
        width: 50%;
      }
      @media (max-width: 743px) {
        width: 100%;
      }
    }

    &-title {
      font-size: 30px;
      font-weight: 500;
      @media (max-width: 743px) {
        margin-bottom: 10px;
      }
    }

    &-description {
      &-text {
        margin-top: 14px;
        list-style: disc;
        list-style-position: inside;
        font-size: 18px;
        @media (max-width: 1023px) {
          font-size: 16px;
        }
      }
      @media (max-width: 743px) {
        margin-bottom: 20px;
      }
    }

    &-visual {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: 30px;
      min-width: 444px;

      @media (max-width: 1023px) {
        min-width: unset;
        width: 50%;
      }
      @media (max-width: 743px) {
        width: 100%;
      }
    }

    &-image-wrap {
      border: 2px solid $GRAY_LIGHT;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    &-button {
      width: unset;
      height: unset;
      padding: 12px 40px;
      @media (max-width: 1023px) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }
}
</style>
