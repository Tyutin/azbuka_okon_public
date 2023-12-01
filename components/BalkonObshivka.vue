<template>
  <div class="balkonObshivka">
    <div class="balkonObshivka__grid">
      <div v-for="item in items" :key="item.title" class="balkonObshivka__item">
        <img :src="getImage(item.image)" class="balkonObshivka__item-image">
        <p class="balkonObshivka__item-text">{{ item.title }}</p>
      </div>
    </div>
    <div class="balkonObshivka__slider">
      <HomeStekloCarousel :items="items" />
    </div>
    <div class="balkonObshivka__button">
      <Button :theme="'white'" :text="'Заказать'" :action="openCallbackPopup" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Наружная обшивка',
          image: 'uteplenie-i-obshivka-balkonov/naruzhnaya-obshivka'
        },
        {
          title: 'Обшивка Вагонкой',
          image: 'uteplenie-i-obshivka-balkonov/obshivka-vagonkoy'
        },
        {
          title: 'Обшивка ламинатом',
          image: 'uteplenie-i-obshivka-balkonov/obshivka-laminatom'
        },
        {
          title: 'Обшивка ПВХ панелями',
          image: 'uteplenie-i-obshivka-balkonov/obshivka-pvh'
        },
        {
          title: 'Обшивка Гипсокартоном',
          image: 'uteplenie-i-obshivka-balkonov/obshivka-gipsokartonom'
        }
      ]
    }
  },
  methods: {
    getImage (name) {
      return `/img/${name}.jpg`
    },
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.balkonObshivka {
  padding: 70px 0;

  @media screen and (max-width: 1220px) {
    padding: 40px 0;
  }

  @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &__button {
    width: 360px;
    height: 54px;
    max-width: 500px;
    margin-top: 100px;
    padding: 0 40px;
    display: none;
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      display: block;
    }
    @media screen and (max-width: 425px) {
      width: 100%;
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 45px;
    grid-template-rows: repeat(2, 460px);

    @media screen and (max-width: 1220px) {
      grid-template-rows: repeat(3, 460px);
      grid-template-columns: repeat(2, 1fr);
      max-width: 760px;
      margin: 0 auto;
    }
    @media screen and (max-width: 767px) {
      padding: 0;
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      display: none;
    }
  }

  &__item {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    &:nth-child(2) {
      grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(4) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(5) {
      grid-area: 2 / 3 / 3 / 4;
    }

    @media screen and (max-width: 1220px) {
      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      &:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
      }
      &:nth-child(3) {
        grid-area: 2 / 2 / 3 / 3;
      }
      &:nth-child(4) {
        grid-area: 3 / 1 / 4 / 2;
      }
      &:nth-child(5) {
        grid-area: 3 / 2 / 4 / 3;
      }
    }
  }

  &__item-text {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
