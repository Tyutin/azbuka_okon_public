<template>
  <div class="callback-section">
    <div class="callback-section__title">
      <TextComponent :tag="'h2'" :textstyle="'callback-section'">
        {{ title }}
      </TextComponent>
    </div>
    <div
      v-if="description"
      class="callback-section__description callback-section__description_desktop"
    >
      <TextComponent :tag="'p'" :textstyle="'caption_white'">
        {{ description }}
      </TextComponent>
    </div>
    <div
      v-if="description"
      class="callback-section__description callback-section__description_mobile"
    >
      <TextComponent :tag="'p'" :textstyle="'caption_white'">
        Выезд замерщика - БЕСПЛАТНО
      </TextComponent>
    </div>
    <form class="callback-section__form" @submit.prevent>
      <Input
        :placeholder="'Ваше имя'"
        :theme="'onDark'"
        :size="'big'"
        :classname="'callback-section__input'"
        :oninput="inputName"
      />
      <Input
        :placeholder="'Контактный телефон'"
        :theme="'onDark'"
        :size="'big'"
        :classname="'callback-section__input'"
        :oninput="inputPhone"
      />
      <div class="callback-section__submit">
        <Button
          :text="'Отправить'"
          :theme="'transparent'"
          :action="submitForm"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Бесплатный вызов замерщика'
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: '',
      phone: '',
      errors: {
        name: false,
        phone: false
      },
      isSubmitDisabled: false
    }
  },
  methods: {
    inputName (e) {
      this.name = e.target.value
    },
    inputPhone (e) {
      this.phone = e.target.value
    },
    async submitForm () {
      this.name = this.name.replace(new RegExp('\\ +', 'gm'), ' ').trim()
      // if (this.name.length < 2 || this.name.length > 50) {
      //   this.errors.name = true
      // }
      // if (this.phone.length !== 17) {
      //   this.errors.phone = true
      // }
      // if (this.errors.name || this.errors.phone) {
      //   return
      // }
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('phone', this.phone)
      formData.append('usluga', this.title)
      window.console.log(formData)
      window.fd = formData
      this.isSubmitDisabled = true
      const response = await fetch('/post.php', {
        method: 'POST',
        body: formData
      })
      this.$store.commit('popups/closeAllPopup')
      if (response.ok) {
        this.name = ''
        this.phone = ''
        this.$store.commit('popups/openSuccessPopup')
      } else {
        this.$store.commit('popups/openErrorPopup')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.callback-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 150px;
  background-color: $GRAY_DARK;

  @media screen and (max-width: 1023px) {
    padding: 50px;
  }

  @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
    padding: 20px;
    align-items: center;
  }

  &__title {
    max-width: 650px;
  }

  &__description {
    margin-top: 25px;
    max-width: 550px;

    &_mobile {
      display: none;
    }

    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      &_desktop {
        display: none;
      }
      &_mobile {
        display: block;
      }
    }
  }

  &__form {
    max-width: 785px;
    width: 100%;
    display: flex;
    column-gap: 30px;
    margin-top: 40px;

    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      flex-direction: column;
      max-width: 500px;
    }
  }

  &__input,
  &__submit {
    width: 240px;
    height: 50px;
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      width: 100%;
      margin-bottom: 26px;
    }
  }
}
</style>
