<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top-item">
        <Logo />
      </div>
      <div class="header__top-item header__top-item_max-desktop">
        <a href="#footer">
          <HeaderButton
            :img="'geo_pure.svg'"
            :text="'СЦ «Азбука ремонта» Молодежная, 107Б'"
          />
        </a>
      </div>
      <div class="header__top-item"><HeaderPhones /></div>
      <div class="header__top-item header__top-item_max-tablet">
        <button @click="openCallbackPopup">
          <HeaderButton
            :img="'ruletka_blue.svg'"
            :text="'Записаться на замер'"
          />
        </button>
        <!-- <HeaderButton :img="'ruletka_blue.svg'" :text="'Записаться на замер'" /> -->
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__toggle-wrap">
        <a
          class="header__toggle-icon"
          :class="{ active: isToggleActive }"
          alt="Навигация"
          @click="ToggleNav"
        />
      </div>
      <nav class="header__nav" :class="{ active: isToggleActive }">
        <ul class="header__menu-list">
          <li
            v-for="item in nav"
            :key="item.text"
            class="header__menu-item"
            @click="ToggleNav"
          >
            <nuxt-link :to="item.link" class="header__menu-link">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isToggleActive: false,
      nav: [
        {
          text: 'Остекление домов и коттеджей',
          link: '/'
        },
        {
          text: 'Остекление балконов и лоджий',
          link: '/osteklenie-balkonov-i-lodjiy'
        },
        {
          text: 'Утепление и обшивка балконов',
          link: '/uteplenie-i-obshivka-balkonov'
        },
        {
          text: 'Оконные порталы',
          link: '/okonnye-portaly'
        },
        {
          text: 'Окна',
          link: '/okna'
        }
      ]
    }
  },
  methods: {
    ToggleNav () {
      this.isToggleActive = !this.isToggleActive
    },
    openCallbackPopup () {
      this.$store.commit('popups/openCallbackPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;

  &__toggle-icon {
    position: relative;
    display: block;
    width: 31px;
    height: 22px;
    border-top: 3px solid $GRAY_BASE;
    border-bottom: 3px solid $GRAY_BASE;
    transition: 0.4s;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 99%;
      height: 3px;
      background: $GRAY_BASE;
      -webkit-transition: 0.4s;
      -o-transition: 0.4s;
      transition: 0.4s;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 99%;
      height: 3px;
      background: $GRAY_BASE;
      -webkit-transition: 0.4s;
      -o-transition: 0.4s;
      transition: 0.4s;
    }
    &.active {
      border-color: transparent;
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__toggle-wrap {
    padding: 20px 15px;
    background-color: $WHITE;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 744px) {
      display: none;
    }
  }

  &__nav {
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      position: absolute;
      top: -350%;
      left: 0;
      background-color: #fff;
      transition: 0.3s;
      width: 100%;
      padding: 10px 0;

      &.active {
        top: 100%;
      }
    }
  }

  &__bottom {
    padding: 20px 0;
    position: relative;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      padding: 0;
    }
  }

  &__menu-list {
    display: flex;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      flex-direction: column;
    }
  }

  &__menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      padding: 10px;
    }
  }

  &__menu-link {
    display: block;
    max-width: 160px;
    font-size: 12px;
    font-weight: bold;
    color: $GRAY_DARK;
    text-transform: uppercase;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      max-width: unset;
      font-size: 15px;
      text-align: center;
    }

    &:hover {
      color: $GRAY_MAIN;
    }

    &:active,
    &.nuxt-link-exact-active {
      color: $BLUE;
    }
  }

  &__top {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid $GRAY_LIGHT;
    background-color: $WHITE;
    z-index: 1;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      justify-content: space-between;
      padding: 20px 15px;
    }
  }

  &__top-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    position: relative;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      flex-grow: unset;
    }

    &::after {
      position: absolute;
      content: '';
      width: 1px;
      height: 52px;
      right: 0;
      top: calc(50% - 26px);
      background-color: $GRAY_LIGHT;
      @media (max-width: $BREAKPOINT_MOBILE_START_743) {
        display: none;
      }
    }

    &:last-of-type::after {
      display: none;
    }

    &_max-desktop {
      @media (max-width: 1023px) {
        display: none;
      }
    }

    &_max-tablet {
      @media (max-width: $BREAKPOINT_MOBILE_START_743) {
        display: none;
      }
    }
  }
}
</style>
