<template>
  <main>
    <section class="container container-full banner-container">
      <Banner
        :banner="banner"
        :callbackinfo="{
          title: 'Остекление домов и коттеджей',
          subtitle: 'Бесплатный вызов замерщика'
        }"
      />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Остекление домов и коттеджей
      </text-component>
      <HomeSteklo />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Преимущества компании <br>"Азбука Окон"
      </text-component>
      <Advantages />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        окна в дом
      </text-component>
      <Oknavdom />
    </section>
    <section class="container container-full">
      <CallbackSection :title="'Оставить заявку на расчет остекления'" />
    </section>
    <section id="vhodnye-gruppy" class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Входные группы
      </text-component>
      <VhodnyeGruppy />
    </section>
    <!-- <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Наши подарки и скидки
      </text-component>
      <Gifts :items="giftItems" :withcallback="true" />
    </section> -->
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Вопрос-ответ
      </text-component>
      <QA />
    </section>
    <section class="container container-full callbackBanner_desktop">
      <CallbackBanner :info="callbackBanner" />
    </section>
  </main>
</template>

<script>
import TextComponent from '~/components/TextComponent.vue'
export default {
  components: { TextComponent },
  data () {
    return {
      giftItems: [
        {
          title: 'Мультифункциональные стекла по цене обычных!',
          subtitle: 'Описание акции в 2-3-х предложениях',
          image: '1'
        },
        {
          title: 'Оффер: Весенняя распродажа!',
          subtitle: 'Описание акции',
          image: '2'
        }
      ],
      banner: {
        h1: 'Остекление домов в ижевске',
        text: 'Компания «Азбука окон» с 2015 года выполняет профессиональное остекление домов в Ижевске — начиная от пластиковых окон, заканчивая алюминиевыми конструкциями для домов, коттеджей, их фасадов и входных групп. Мы проводим остекление коттеджей — работаем с классическими и нестандартными проектами любой сложности.',
        background: 'BANNER_1.jpg'
      },
      callbackBanner: {
        title: 'Остекление домов в ижевске',
        image: '1.jpg'
      }
    }
  },
  head: {
    title: 'Остекление загородных домов и коттеджей в Ижевске | Азбука Окон',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Остекление домов в Ижевске по выгодным ценам! Панорамное, фасадное остекление. Нестандартные, арочные остекление дома, беседки, терассы.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'остекление дома, остекление коттеджа, остекление терассы, фасадное остекление, панорамное остекление, остекление веранды, окна в дом, окна для дома, остекление домов, коттеджей, входные группы, фасадное остекление, панорамное остекление домов, остекление террасы, остекление беседки, остекление веранды, окна для террасы, окна для веранды, окна для беседки, французские окна, витражные окна, фасадные окна, эркерные окна, арочные окна, окна для зимнего сада, деревянные окна'
      }
    ]
  }
}
</script>
