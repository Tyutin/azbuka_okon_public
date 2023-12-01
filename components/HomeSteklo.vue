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
          title: 'Остекление загородных домов\n и коттеджей окнами ПВХ',
          text: 'Цена от 180 р/км.м',
          theme: 'bottom-blue',
          image: 'osteklenie-domov/osteklenie-domov-i-kottedjey'
        },
        {
          title: 'Фасадное остекление домов',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow',
          image: 'osteklenie-domov/fasadnoe-osteklenie',
          button: true
        },
        {
          title: 'Панорамное остекление коттеджей',
          text: 'Цена от 180 р/км.м',
          theme: 'bottom-beige',
          image: 'osteklenie-domov/panoramnoe-osteklenie'
        },
        {
          title: 'Остекление терассы',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow',
          image: 'osteklenie-domov/osteklenie-terassy',
          button: true
        },
        {
          title: 'Фасадное остекление\n домов',
          text: 'Цена от 180 р/км.м',
          theme: 'bottom-linear',
          image: 'osteklenie-domov/osteklenie-alluminiem'
        },
        {
          title: 'Оконные порталы',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow',
          image: 'osteklenie-domov/okonnye-portaly',
          button: true
        },
        {
          title: 'Остекление беседки',
          text: 'Цена от 180 р/км.м',
          theme: 'shadow',
          image: 'osteklenie-domov/osteklenie-besedki',
          button: true
        },
        {
          title: 'Остекление веранды',
          text: 'Цена от 180 р/км.м',
          theme: 'right',
          image: 'osteklenie-domov/osteklenie-verandy',
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
    grid-template-rows: repeat(19, 30px);

    @media screen and (max-width: 1220px) {
      grid-template-rows: repeat(19, 25px);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(27, 30px);
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
      grid-area: 1 / 2 / 6 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 9 / 4;
    }
    &:nth-child(4) {
      grid-area: 9 / 1 / 14 / 2;
    }
    &:nth-child(5) {
      grid-area: 6 / 2 / 14 / 3;
    }
    &:nth-child(6) {
      grid-area: 9 / 3 / 14 / 4;
    }
    &:nth-child(7) {
      grid-area: 14 / 1 / 20 / 2;
    }
    &:nth-child(8) {
      grid-area: 14 / 2 / 20 / 4;
    }

    @media screen and (max-width: 1024px) {
      &:nth-child(1) {
        grid-area: 1 / 1 / 9 / 2;
      }
      &:nth-child(2) {
        grid-area: 1 / 2 / 6 / 3;
      }
      &:nth-child(4) {
        grid-area: 9 / 1 / 14 / 2;
      }
      &:nth-child(5) {
        grid-area: 6 / 2 / 14 / 3;
      }
      &:nth-child(3) {
        grid-area: 14 / 1 / 22 / 2;
      }
      &:nth-child(7) {
        grid-area: 14 / 2 / 20 / 3;
      }
      &:nth-child(6) {
        grid-area: 22 / 1 / 28 / 2;
      }
      &:nth-child(8) {
        grid-area: 20 / 2 / 28 / 3;
      }
    }
  }
}
</style>
