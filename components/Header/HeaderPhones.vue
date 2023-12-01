<template>
  <div class="contacts">
    <div class="contacts__phone">
      <img
        src="/img/icons/phone_pure.svg"
        alt=""
        class="contacts__phone-image"
      >
      <a href="tel:+73412477993">+7 (3412) 477-993</a>
    </div>
    <ul class="contacts__messengers">
      <li class="contacts__messengers-item">
        <a href="viber://chat?number=%2B79043126668">
          <img
            src="/img/icons/viber.svg"
            class="contacts__messengers-item-image"
          >
        </a>
      </li>
      <li class="contacts__messengers-item">
        <a href="https://wa.me/79043126668">
          <img
            src="/img/icons/whatsapp.svg"
            class="contacts__messengers-item-image"
          >
        </a>
      </li>
      <li class="contacts__messengers-item">
        <a href="https://t.me/+79043126668">
          <img
            src="/img/icons/telegram.svg"
            class="contacts__messengers-item-image"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__phone {
    display: flex;
    column-gap: 10px;
    align-items: center;
    color: $GRAY_DARK;
    font-size: 21px;
    font-weight: 600;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      font-size: 16px;
    }
  }

  &__phone-image {
    width: 24px;
    height: 24px;
    @media (max-width: $BREAKPOINT_MOBILE_START_743) {
      width: 16px;
      height: 16px;
    }
  }

  &__messengers {
    display: flex;
    justify-content: flex-end;
  }

  &__messengers-item-image {
    width: 31px;
    height: 31px;
  }
}
</style>
