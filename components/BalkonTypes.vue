<template>
  <div class="homesteklo">
    <div class="homesteklo__grid">
      <div v-for="item in items" :key="item.title" class="homesteklo__item">
        <HomeCard
          :title="item.title"
          :text="item.text"
          :theme="item.theme"
          :image="item.image"
          :button="item.button"
          :isoutside="item.isoutside"
        />
      </div>
    </div>
    <div class="homesteklo__slider">
      <HomeStekloCarousel :items="items" />
    </div>
    <div class="homesteklo__button">
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
          title: 'Холодное остекление\n балконов и лоджий',
          text: 'Цена от 180 р/км.м',
          theme: 'bottom-linear-blue',
          image: 'osteklenie-balkonov-i-lodjiy/holodnoe-osteklenie',
          button: true,
          isoutside: true
        },
        {
          title: 'Теплое остекление\n балконов и лоджий',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow',
          image: 'osteklenie-balkonov-i-lodjiy/teploe-osteklenie',
          button: true
        },
        {
          title: 'Остекление с выносом',
          text: 'Цена от 180 р/км.м',
          theme: 'bottom-gray',
          image: 'osteklenie-balkonov-i-lodjiy/osteklenie-s-vynosom',
          button: true,
          isoutside: true
        },
        {
          title: 'Панорамное остекление\n балконов и лоджий',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow-center',
          image: 'osteklenie-balkonov-i-lodjiy/panoramnoe-osteklenie',
          button: true
        }
      ]
    }
  },
  methods: {
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.homesteklo {
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
    width: 100%;
    height: 54px;
    max-width: 500px;
    margin-top: 100px;
    padding: 0 40px;
    display: none;
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      display: block;
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
    grid-template-rows: repeat(9, 45px);

    // @media screen and (max-width: 1220px) {
    //   grid-template-rows: repeat(19, 25px);
    // }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      // grid-template-rows: repeat(27, 30px);
      padding: 0 calc((100vw - 810px) / 2);
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
      grid-area: 1 / 1 / 9 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 5 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 9 / 4;
    }
    &:nth-child(4) {
      grid-area: 5 / 2 / 10 / 3;
    }

    @media screen and (max-width: 1024px) {
      &:nth-child(1) {
        grid-area: 1 / 1 / 9 / 2;
      }
      &:nth-child(2) {
        grid-area: 1 / 2 / 5 / 3;
      }
      &:nth-child(3) {
        grid-area: 5 / 2 / 13 / 3;
      }
      &:nth-child(4) {
        grid-area: 9 / 1 / 13 / 2;
      }
    }
  }
}
</style>
