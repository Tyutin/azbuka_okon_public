<template>
  <div class="callback-popup" @click.stop>
    <button class="callback-popup__close" @click="closeAllPopup">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.615076 0.615076C1.43518 -0.205025 2.76482 -0.205025 3.58492 0.615076L10.5 7.53015L17.4151 0.615076C18.2352 -0.205025 19.5648 -0.205025 20.3849 0.615076C21.205 1.43518 21.205 2.76482 20.3849 3.58492L13.4698 10.5L20.3849 17.4151C21.205 18.2352 21.205 19.5648 20.3849 20.3849C19.5648 21.205 18.2352 21.205 17.4151 20.3849L10.5 13.4698L3.58492 20.3849C2.76482 21.205 1.43518 21.205 0.615076 20.3849C-0.205025 19.5648 -0.205025 18.2352 0.615076 17.4151L7.53015 10.5L0.615076 3.58492C-0.205025 2.76482 -0.205025 1.43518 0.615076 0.615076Z"
          fill="#333333"
        />
      </svg>
    </button>
    <template v-if="callbackMode === 'callback'">
      <CallbackForm
        :title="callbackUsluga.title"
        :subtitle="callbackUsluga.subtitle"
      />
    </template>
    <div
      v-if="callbackMode === 'success'"
      class="callback-popup__success-screen"
      @click.stop
    >
      <p class="callback-popup__header">Благодарим за заявку!</p>
      <p class="callback-popup__subheader">Очень скоро мы перезвоним вам!</p>
    </div>
    <div
      v-if="callbackMode === 'error'"
      class="callback-popup__error-screen"
      @click.stop
    >
      <p class="callback-popup__header">Что-то пошло <nobr>не так :(</nobr></p>
      <p class="callback-popup__subheader">
        Попробуйте обновить страницу и отправить заявку ещё раз, либо позвоните
        нам <br>
        <a href="tel:+73412477993">(3412) 477-993</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    callbackPopupIsOpen () {
      return this.$store.state.popups.callbackPopupIsOpen
    },
    callbackMode () {
      return this.$store.state.popups.callbackMode
    },
    callbackUsluga () {
      return this.$store.state.popups.usluga
    }
  },
  methods: {
    closeAllPopup () {
      this.$store.commit('popups/closeAllPopup')
    }
  }
}
</script>

<style lang="scss" scoped>
.callback-popup {
  position: relative;
  width: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: $WHITE;
  border-radius: 2px;

  @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  &__close {
    position: absolute;
    right: 15px;
    top: 15px;
    height: 30px;
    width: 30px;
    transition: all 0.3s ease;
    border: unset;
    background-color: transparent;
    cursor: pointer;

    &:hover path {
      fill: #000;
    }
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      right: 10px;
      top: 10px;
    }
  }

  &__success-screen,
  &__error-screen {
    display: flex;
    flex-direction: column;
    padding: 40px 0;
  }
  &__header {
    margin: 10px 0;
    font-size: 28px;
    text-align: center;
    font-weight: 500;
    color: $GRAY_DARK;
  }

  &__subheader {
    font-size: 20px;
    text-align: center;

    & a {
      color: $BLUE;
    }
  }
}
</style>
