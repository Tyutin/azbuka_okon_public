<template>
  <div class="windowPossibilities">
    <div class="windowPossibilities__flex">
      <ul class="windowPossibilities__list">
        <li
          v-for="item in items"
          :key="item.description"
          class="windowPossibilities__item"
        >
          <img
            :src="`/img/${item.image}.jpg`"
            alt=""
            class="windowPossibilities__item-image"
          >
          <h3 class="windowPossibilities__item-title">{{ item.title }}</h3>
          <p class="windowPossibilities__item-description">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
    <div class="windowPossibilities__slider">
      <VueSlickCarousel v-bind="settings" class="slick-works">
        <div
          v-for="item in items"
          :key="item.title"
          class="windowPossibilities__item"
        >
          <img
            :src="`/img/${item.image}.jpg`"
            alt=""
            class="windowPossibilities__item-image"
          >
          <h3 class="windowPossibilities__item-title">{{ item.title }}</h3>
          <p class="windowPossibilities__item-description">
            {{ item.description }}
          </p>
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
          image: 'okna/vozmojnosti/laminaciya',
          title: 'Ламинация окон',
          description:
            'Нанесение декоративной ПВХ пленки на поверхность базового профиля. Интерьерное решение Выделить профиль Вашего окна интересным цветом.'
        },
        {
          image: 'okna/vozmojnosti/tonirovka',
          title: 'Тонировка стекол',
          description:
            'Тонировка стекол придает оригинальность и красивый вид стеклопакету, снижает светопропускание, при этом не влияет на другие свойства окна.'
        },
        {
          image: 'okna/vozmojnosti/ruchki',
          title: 'Цветные ручки',
          description:
            'Оконные ручки – важный элемент декора, поэтому они должны не только выполнять свои стандартные функции, а и гармонично выглядеть на общем фоне.'
        },
        {
          image: 'okna/vozmojnosti/zamki',
          title: 'Детские замки',
          description:
            'Защита от поворотного открывания ваших окон, для большей безопасности, особенно на высоких этажах.'
        },
        {
          image: 'okna/vozmojnosti/filters',
          title: 'Оконные фильтры',
          description:
            'При естественной вентиляции помещений пластиковые окна рекомендуется открывать на проветривание 2-3 раза в день, для подачи свежего воздуха и выветривания излишней влаги, при ее наличии. Или поставить “Приточный клапан” или “оконный фильтр”.'
        },
        {
          image: 'okna/vozmojnosti/zaschita',
          title: 'Защита от взлома',
          description:
            'Мы всегда предлагаем своим клиентам только качественную оконную фурнитуру, содержащую дополнительную защиту от вандальных проникновений.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.windowPossibilities {
  padding: 70px 0;

  &__slider {
    display: none;
    width: 360px;
    margin: 0 auto;

    @media (max-width: 767px) {
      display: block;
    }

    @media (max-width: 390px) {
      width: 100%;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
    justify-content: space-between;

    @media (max-width: 1200px) {
      max-width: 780px;
      margin: 0 auto;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    max-width: 360px;

    @media (max-width: 767px) {
      max-width: unset;
    }

    &-image {
      margin-bottom: 8px;
      @media (max-width: 767px) {
        margin-bottom: 10px;
        width: 100%;
      }
    }

    &-title {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      color: $GRAY_DARK;
      margin-bottom: 10px;
    }

    &-description {
      font-size: 14px;
      color: $GRAY_BASE;
      line-height: 1.35;
    }
  }
}
</style>
