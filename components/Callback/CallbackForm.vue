<template>
  <form class="callbackForm" @click.stop @submit.prevent>
    <span class="callbackForm__title">{{ title }}</span>
    <p v-if="subtitle" class="callbackForm__subtitle">{{ subtitle }}</p>
    <Input
      :placeholder="'Ваше имя'"
      :theme="'onLight'"
      :size="'small'"
      :classname="'callbackForm__input'"
      :name="'name'"
      :type="'text'"
      :oninput="inputName"
    />
    <Input
      :placeholder="'Телефон'"
      :theme="'onLight'"
      :size="'small'"
      :classname="'callbackForm__input'"
      :name="'phone'"
      :type="'phone'"
      :oninput="inputPhone"
    />
    <Button
      :text="'отправить'"
      :theme="'dark'"
      :classname="'callbackForm__submit'"
      :action="submitForm"
    />
    <span class="callbackForm__privacy">Оставляя заявку, Вы соглашаетесь с
      <a
        href="/privacy"
        target="_blank"
      >правилами обработки персональных данных</a>.</span>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
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
.callbackForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  padding: 30px;
  background-color: $WHITE;
  border-radius: 2px;

  .callback-popup & {
    @media screen and (max-width: $BREAKPOINT_MOBILE_START_743) {
      max-width: unset;
    }
  }

  &__title {
    font-size: 27px;
    font-weight: bold;
    color: $GRAY_DARK;
    margin-bottom: 20px;
    white-space: pre-line;
  }

  &__subtitle {
    font-size: 14px;
    color: $GRAY_BASE;
    margin-bottom: 20px;
    line-height: 1.4;
    white-space: pre-line;

    .callback-popup & {
      font-size: 16px;
      line-height: 1.2;
    }
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__submit {
    width: unset;
    padding: 15px 30px;
  }

  &__privacy {
    margin-top: 10px;
    font-size: 12px;
    color: $GRAY_BASE;
    width: 80%;

    & a {
      color: $BLUE;
    }
  }
}
</style>
