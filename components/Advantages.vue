<template>
  <ul class="advantages">
    <li v-for="item in advantages" :key="item.text" class="advantages__item">
      <div class="advantages__item-image">
        <img :src="`/img/icons/advantages/${item.img}`">
      </div>
      <div class="advantages__item-text">
        <TextComponent :tag="'span'" :textstyle="'list-info'">{{ item.text }}</TextComponent>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      advantages: [
        {
          img: 'konsultaciya.svg',
          text: 'грамотная консультация'
        },
        {
          img: 'raschet.svg',
          text: 'Техническая помощь в расчетах'
        },
        {
          img: 'showroom.svg',
          text: 'Наличие Шоу-Рума'
        },
        {
          img: 'garantiya.svg',
          text: 'Гарантия на окна и монтаж'
        },
        {
          img: 'dogovor-online.svg',
          text: 'возможность заключения договора онлайн'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  padding: 70px 0;
  flex-wrap: wrap;
  row-gap: 40px;

  @media screen and (max-width: 767px) {
    justify-content: space-around;
    padding: 40px 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    width: 20%;

    @media screen and (max-width: 767px) {
      width: 50%;
    }
  }

  &__item-text {
    max-width: 190px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 1220px) {
      padding: 0 10px;
    }
  }

  &__item-image {
    width: 92px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1220px) {
      width: 70px;
      height: 70px;
    }

    & img {
      height: 100%;
    }
  }

}
</style>
