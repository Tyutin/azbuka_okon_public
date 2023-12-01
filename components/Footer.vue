<template>
  <footer id="footer" class="container footer">
    <text-component :tag="'h2'" :textstyle="'section-heading'">
      контакты
    </text-component>
    <div class="footer__container">
      <div class="footer__list">
        <div class="footer__element">
          <img class="footer__element-image" src="/img/icons/geo.svg">
          <div class="footer__element-info">
            <span class="footer__element-title"> Адрес: </span>
            <span>Ижевск, ул. Молодежная, 107 Б <br>ТЦ “Азбука ремонта”, офис 253
              <br>Ежедневно с 9:00 до 20:00</span>
          </div>
        </div>
        <div class="footer__element">
          <img class="footer__element-image" src="/img/icons/phone.svg">
          <div class="footer__element-info">
            <a
              class="footer__element-title footer__element-link"
              href="tel:+73412477993"
            >+7 (3412) 477-993</a>
          </div>
        </div>
        <div class="footer__element">
          <img class="footer__element-image" src="/img/icons/mail.svg">
          <div class="footer__element-info">
            <a
              href="mailto:azbook-okon@yandex.ru"
              class="footer__element-title footer__element-link footer__element-link_email"
            >azbook-okon@yandex.ru</a>
          </div>
        </div>
        <div class="footer__element">
          <img class="footer__element-image" src="/img/icons/card.svg">
          <div class="footer__element-info">
            <span class="footer__element-title"> Способы оплаты: </span>
            <span>Наличные, онлайн перевод, оплата по карте, банковский перевод на
              расчетный счет</span>
          </div>
        </div>
      </div>
      <div class="footer__map footer__map-desktop">
        <script
          type="text/javascript"
          charset="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abb1382e961509992a6fff8c89a94f480dc24090f250d42506bd3adf4c3c88afb&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"
        />
      </div>
      <div class="footer__map footer__map-tablet">
        <script
          type="text/javascript"
          charset="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abb1382e961509992a6fff8c89a94f480dc24090f250d42506bd3adf4c3c88afb&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
        />
      </div>
      <div class="footer__map footer__map-mobile">
        <script
          type="text/javascript"
          charset="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abb1382e961509992a6fff8c89a94f480dc24090f250d42506bd3adf4c3c88afb&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 35px;
  @media screen and (max-width: 425px) {
    padding: 0;
  }

  &__container {
    display: flex;
    padding: 40px 0;
    column-gap: 80px;

    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
  }

  &__map {
    flex-grow: 1;
    display: none;

    @media screen and (min-width: 1024px) {
      &-desktop {
        display: block;
      }
    }

    @media screen and (min-width: 426px) and (max-width: 1023px) {
      &-tablet {
        display: block;
      }
    }

    @media screen and (max-width: 425px) {
      &-mobile {
        display: block;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1023px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  &__element {
    display: flex;
    column-gap: 20px;
    margin-bottom: 15px;
    align-items: flex-start;
    @media screen and (max-width: 1023px) {
      width: 50%;
      column-gap: 10px;

      &:nth-child(1) {
        order: 0;
      }
      &:nth-child(2) {
        order: 2;
      }
      &:nth-child(3) {
        order: 3;
      }
      &:nth-child(4) {
        order: 1;
      }
    }
    @media screen and (max-width: 767px) {
      width: 320px;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        order: unset;
      }
    }
    @media screen and (max-width: 425px) {
      width: 100%;
      column-gap: 5px;
    }
  }

  &__element-info {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-width: 270px;
    padding-top: 10px;
    @media screen and (max-width: 425px) {
      padding-top: 6px;
    }
  }

  &__element-title {
    color: $GRAY_BASE;
    font-size: 27px;
    font-weight: bold;
    @media screen and (max-width: 425px) {
      font-size: 22px;
    }
  }

  &__element-link {
    color: $GRAY_DARK;
    transition: 0.2s ease;

    @media screen and (max-width: 1023px) {
      color: $BLUE;
    }

    &:hover {
      color: $BLUE;
    }

    &_email {
      font-size: 20px;
      font-weight: 500;
      @media screen and (max-width: 425px) {
        font-size: 18px;
      }
    }
  }

  &__element-image {
    @media screen and (max-width: 425px) {
      width: 40px;
    }
  }
}
</style>
