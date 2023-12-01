<template>
  <main>
    <section class="container container-full banner-container">
      <Banner
        :banner="banner"
        :callbackinfo="{
          title: 'Установка окон в квартиру',
          subtitle: 'Бесплатный вызов замерщика'
        }"
      />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Установка пластиковых окон в квартиру
      </text-component>
      <InstallWindow />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Выполненные проекты
      </text-component>
      <CasesSlider :imgnames="cases" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Бренды ПВХ окон
      </text-component>
      <PVHBrands />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Наши возможности
      </text-component>
      <Vozmojnosti />
    </section>
    <section class="container container-full">
      <CallbackBanner :info="callbackBanner" />
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      banner: {
        h1: 'Окна',
        text: 'Компания «Азбука Окон» с 2015 года устанавливает окна в Ижевске по доступным ценам, с использованием качественных материалов и профессионального оборудования. Наша компания устанавливает пластиковые окна под ключ от ведущих мировых брендов.',
        background: 'BANNER_5.jpg'
      },
      callbackBanner: {
        title: 'Бесплатный вызов замерщика',
        subtitle:
          'На нашем сайте вы можете заказать как пластиковое, так и алюминиевое остекление. Оставляйте заявку прямо сейчас — мы перезвоним вам и согласуем выезд бесплатного замерщика.',
        image: '5.jpg'
      },
      cases: [
        {
          src: 'cases/okna/1',
          title: '7-я Подлесная',
          alt: 'Фотография выполненных работ по остеклению окон на улице 7-я Подлесная'
        },
        {
          src: 'cases/okna/3',
          title: '3Тур агентство "Баунти"',
          alt: 'Фотография выполненных работ по остеклению окон в тур агентстве "Баунти"'
        },
        {
          src: 'cases/okna/2',
          title: 'Т. Барамзиной',
          alt: 'Фотография выполненных работ по остеклению окон на улице Т. Барамзиной'
        },
        {
          src: 'cases/okna/3',
          title: 'Тур агентство "Баунти"',
          alt: 'Фотография выполненных работ по остеклению окон в тур агентстве "Баунти"'
        }
      ]
    }
  },
  head: {
    title: 'Пластиковые окна в Ижевске | Азбука Окон',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Установка пластиковых окон в Ижевске по выгодным ценам! Пластиковые окна брендов Rehau Veka KBE Brusbox Gealan. Ламинация и тонировка окон!'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'окна ижевск, окна в ижевске, окна под ключ, установка окон, пластиковые окна, пвх окна, заказать окна, окна rehau, окна veka, окна кве, окна brusbox, окна gealan, Rehau, Veka, KBE, Brusbox, Gealan, ламинация окон, тонировка стекол, цветные ручки, детские замки, оконные фильтры'
      }
    ]
  }
}
</script>
