<template>
  <main>
    <section class="container container-full banner-container">
      <Banner :banner="banner" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Оконные порталы
      </text-component>
      <Portals />
    </section>
    <section class="container container-full">
      <CallbackSection :title="'Рассчитать стоимость \nоконных порталов'" />
    </section>
    <section class="container container-full callbackBanner_desktop">
      <CallbackBanner :info="callbackBanner" />
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      banner: {
        h1: 'Остекление оконными порталами',
        text: 'Компания “Азбука окон” с 2015 года устанавливает оконные порталы в квартирах, домах и входных группах. На ваш выбор, установим холодные или теплые раздвижные конструкции, из пластикового или алюминиевого профиля.',
        background: 'BANNER_4.jpg'
      },
      callbackBanner: {
        title: 'Заказать оконные порталы',
        subtitle:
          'Чтобы заказать оконные порталы или любое другое остекление — оставляйте заявку в форме обратной связи. Наши специалисты свяжутся с вами в ближайшее время и ответят на все интересующие вопросы.',
        image: '4.jpg'
      }
    }
  },
  head: {
    title: 'Остекление оконными порталами в Ижевске | Азбука Окон',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Раздвижные окна или оконные порталы — отличный способ кардинально преобразить вашу квартиру или дом.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'оконные порталы, раздвижные окна, остекление дома, остекление коттеджа, остекление оконными порталами, оконные порталы'
      }
    ]
  }
}
</script>
