<template>
  <main>
    <section class="container container-full banner-container">
      <Banner :banner="banner" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Виды отделки на балконе
      </text-component>
      <Flex3ElemButtons :items="balkonTypesItems" :sliderheight="580" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Обшивка балконов и лоджий в Ижевске
      </text-component>
      <BalkonObshivka />
    </section>
    <section class="container container-full">
      <CallbackSection
        :title="'Рассчитать стоимость обшивки \nбалкона и лоджии'"
      />
    </section>
    <section id="uteplenie-balkonov-i-lodjiy" class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Утепление балконов и лоджий
      </text-component>
      <Flex3Elem :items="uteplenieBalkonovItems" :sliderheight="540" />
      <Button
        :text="'Заказать'"
        :theme="'transparent-dark'"
        :classname="'someButton'"
        :action="() => openCallbackPopup('Утепление балконов и лоджий')"
      />
      <Flex2Elem :items="uteplenieFlex2" :sliderheight="850" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        ТЁПЛЫЙ ПОЛ НА БАЛКОН И ЛОДЖИЮ
      </text-component>
      <div class="warmFloor">
        <p class="warmFloor__text">
          Помимо обшивки и утепления, мы также прокладываем теплый пол на лоджию
          и теплый пол на балкон — такие системы будут прекрасно распределять
          тепло, в отличие от стандартных радиаторов, которые занимают очень
          много места, что крайне неудобно в ограниченном пространстве.
        </p>
        <p class="warmFloor__text">
          Система «Теплый пол» полностью автоматизирована, функциональна и не
          требует дополнительного ухода. Такая конструкция отличается
          износостойкостью и долговечностью в эксплуатации.
        </p>
      </div>
      <Flex3Elem :items="teplyPolItems" :sliderheight="460" />
      <Button
        :text="'Заказать'"
        :theme="'transparent-dark'"
        :classname="'someButton'"
        :action="() => openCallbackPopup('Тёплый пол на балкон или лоджию')"
      />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Наши подарки и скидки
      </text-component>
      <Gifts :items="giftItems" :startwith="'right'" />
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
      giftItems: [
        {
          title: 'Теплый пол в подарок!',
          subtitle: 'При заказе обшивки балкона/лоджии с утеплением',
          image: 'warm-floor'
        }
      ],
      banner: {
        h1: 'Утепление и обшивка балконов и лоджий',
        text: 'В компании Азбука Окон работают собственные монтажные бригады строго по ГОСТу, с соблюдением всех правил и нормативов, что обеспечивает вашу полную безопасность. Мы предоставляем гарантию до 5 лет на монтаж и комплектующие.',
        background: 'BANNER_3.jpg'
      },
      callbackBanner: {
        title: 'Бесплатный вызов замерщика',
        subtitle:
          'Закажите утепление балкона или обшивку лоджии прямо сейчас — мы перезвоним вам в ближайшее время! \nПри необходимости, мы предоставим вам возможность оплачивать наши услуги в рассрочку, без процентов и одобрения банков. Мы не меняем согласованную и обозначенную в договоре стоимость в процессе работ.',
        image: '3.jpg'
      },
      uteplenieBalkonovItems: [
        {
          image: 'uteplenie-i-obshivka-balkonov/teploe-osteklenie-pvh-oknami',
          text: 'Теплое остекление ПВХ окнами'
        },
        {
          image:
            'uteplenie-i-obshivka-balkonov/teploe-osteklenie-panoramnymi-oknami',
          text: 'Теплое остекление панорамными окнами'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/uteplenie-penopleksom',
          text: 'Утепление "пеноплексом"'
        }
      ],
      teplyPolItems: [
        {
          image: 'uteplenie-i-obshivka-balkonov/infrapol',
          text: 'Инфракрасные теплые полы'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/uteplenny-pol',
          text: 'Утепленный пол без нагревательного элемента'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/teply-pol-mat',
          text: 'Теплый пол из нагревательных матов"'
        }
      ],
      balkonTypesItems: [
        {
          image: 'uteplenie-i-obshivka-balkonov/obshivka-balkonov-i-lodji',
          text: 'Обшивка балконов и лоджий'
          // subtitle: 'ЦЕНА от 180 р/м^2'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/uteplenie-balkonov-i-lodji',
          text: 'Утепление балконов и лоджий'
          // subtitle: 'ЦЕНА от 180 р/м^2'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/teplyi-pol-na-balkon-i-lodjiyu',
          text: 'Теплый пол  на балкон и лоджию'
          // subtitle: 'ЦЕНА от 180 р/м^2'
        }
      ],
      uteplenieFlex2: [
        {
          image: 'uteplenie-i-obshivka-balkonov/uteplenie-balkona',
          text: 'Утепление балкона дает возможность сделать вашу жизнь комфортнее и увеличить площадь полезного пространства квартиры. Чтобы качественно утеплить балкон, мы прокладываем множество слоев поверх напольного покрытия, стен и потолка балкона. На ваш выбор, мы также выполняем теплое или панорамное теплое остекление из ПВХ или алюминиевого профиля. Мы используем только безопасные экологичные материалы, чтобы гарантировать вам лучший результат. Наши специалисты БЕСПЛАТНО приедут к вам на профессиональный замер и помогут определиться с видом обшивки.'
        },
        {
          image: 'uteplenie-i-obshivka-balkonov/uteplenie-lodjii',
          text: 'Утепление лоджии позволит создать полноценное функциональное помещение для любых целей, которое будет прекрасно защищать от уличного шума и обеспечивать тепло в любое время года. Если грамотно составить дизайн-проект и утеплить лоджию, можно значительно увеличить дополнительное пространство вашей квартиры и организовать там полноценную зону отдыха, небольшую столовую, рабочий кабинет, оранжерею, гардеробную, кладовую или игровую зону с видом на улицу.'
        }
      ]
    }
  },
  head: {
    title: 'Утепление и обшивка балконов в Ижевске | Азбука Окон',
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
          'остекление дома, остекление коттеджа, остекление терассы, фасадное остекление, панорамное остекление, остекление веранды, утепление балкона, утепление лоджии, обшивка балкона, обшивка лоджии, теплый пол на балкон, теплый пол на лоджии'
      }
    ]
  },
  methods: {
    openCallbackPopup (title) {
      this.$store.commit('popups/openCallbackPopup', {
        title,
        subtitle: 'Бесплатный вызов замерщика'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.someButton {
  width: 360px;
  height: 60px;
  margin: 0 auto;
  @media (max-width: 425px) {
    width: 100%;
  }
}

.warmFloor {
  display: flex;
  max-width: 980px;
  margin: 40px auto 0;
  gap: 60px;

  @media (max-width: 743px) {
    display: none;
  }

  &__text {
    width: 460px;
  }
}
</style>
