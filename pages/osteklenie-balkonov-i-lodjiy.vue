<template>
  <main>
    <section class="container container-full banner-container">
      <Banner :banner="banner" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Виды остекления балконов
      </text-component>
      <BalkonTypes />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Остекление балконов в Ижевске
      </text-component>
      <Flex2Elem :items="osteklenieBalkonovItems" />
    </section>
    <section class="container container-full">
      <CallbackSection
        :title="'Оставить заявку на расчет остекления'"
        :description="'Застеклить балкон можно оставив заявку в форме обратной связи. Наши специалисты свяжутся с вами в ближайшее время, ответят на все интересующие вопросы и согласуют БЕСПЛАТНЫЙ выезд замерщика.'"
      />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Остекление лоджий в Ижевске
      </text-component>
      <Flex2Elem :items="osteklenieLodjiyItems" />
    </section>
    <section class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Окна на балкон
      </text-component>
      <Flex3Elem :items="oknaNaBalkon" />
    </section>
    <section id="otdelka-balkonov-remont-lodjii" class="container">
      <text-component :tag="'h2'" :textstyle="'section-heading'">
        Отделка балкона и ремонт лоджии
      </text-component>
      <Flex2Elem :items="otdelkaIRemontItems" :sliderheight="810" />
    </section>
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
export default {
  data () {
    return {
      callbackBanner: {
        title: 'Заказать услугу\n“Балкон под ключ”',
        subtitle:
          'Оставьте запрос прямо сейчас, наш специалист перезвонит вам в ближайшее время, чтобы уточнить детали и произвести предварительный расчет стоимости.',
        image: '2.jpg'
      },
      banner: {
        h1: 'Остекление балконов и лоджий',
        text: 'Компания «Азбука окон» с 2015 года предоставляет полный спектр услуг по остеклению балконов и лоджий — холодное, теплое остекление и отделка под ключ. Теплое остекление дает возможность в дальнейшем провести полноценное утепление и обшивку балкона.',
        background: 'BANNER_2.jpg'
      },
      osteklenieBalkonovItems: [
        {
          image: 'osteklenie-balkonov-i-lodjiy/zamena-holodnogo-ostekleniya',
          text: 'При необходимости, мы проводим замену уже имеющегося холодного остекления от застройщика в новостройках на теплое остекление балкона. По вашему желанию, предлагаем специальные программы беспроцентных рассрочек на все наши услуги, без привлечения банков.'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/balkon-pod-klyuch',
          text: 'Услуга «Балкон под ключ» от компании «Азбука окон» включает в себя остекление, внешнюю и внутреннюю отделку и, при необходимости, расширение площади, для создания нестандартных конструкций. Большое разнообразие современных отделочных материалов позволит реализовать любой ваш дизайн-проект.'
        }
      ],
      osteklenieLodjiyItems: [
        {
          image: 'osteklenie-balkonov-i-lodjiy/okna-na-lodjiyu',
          text: 'Окна на лоджию устанавливаются либо с нуля, либо с предварительным демонтажем старых конструкций и последующей заменой на новые. В нашей компании используются только качественные материалы и комплектующие от производителя.'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/osteklenie-lodjiy',
          text: 'Услуга «Балкон под ключ» от компании «Азбука окон» включает в себя остекление, внешнюю и внутреннюю отделку и, при необходимости, расширение площади, для создания нестандартных конструкций. Большое разнообразие современных отделочных материалов позволит реализовать любой ваш дизайн-проект.'
        }
      ],
      otdelkaIRemontItems: [
        {
          image: 'osteklenie-balkonov-i-lodjiy/otdelka1',
          text: 'Мы предлагаем широкий выбор отделочных материалов и оконных систем — начиная от экономичных и стандартных вариантов, заканчивая наиболее современными, обладающими значительными шумоизоляционными и теплосберегающими свойствами.'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/otdelka2',
          text: 'Отделка лоджии и балкона включает в себя полный комплекс мероприятий — демонтаж вагонки, обрешетки, напольного покрытия, с последующим монтажом каркаса, полов на лагах и кровли из профнастила. \nРемонт балкона и лоджии состоит из наружной и внутренней отделки. Наружная отделка защищает балкон от воздействий внешней среды, а внутренняя — дает возможность воплотить в жизнь любые дизайнерские фантазии.'
        }
      ],
      oknaNaBalkon: [
        {
          image: 'osteklenie-balkonov-i-lodjiy/p-type',
          text: 'П-Образные'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/g-type',
          text: 'Г-Образные'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/with-roof',
          text: 'С крышей'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/al-profile',
          text: 'Алюминиевый профиль'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/pvh-profile',
          text: 'ПВХ профиль'
        },
        {
          image: 'osteklenie-balkonov-i-lodjiy/panoramnoe',
          text: 'Панорамное остекление'
        }
      ]
    }
  },
  head: {
    title: 'Остекление балконов и лоджий в Ижевске | Азбука Окон',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Холодное и теплое остекление балконов и лоджий. Панорамное остекление или остекление с выносом. Внешняя и внутренняя отделка балконов и лоджий. Работаем с 2015 года!'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'балкон ижевск, лоджия ижевск, балкон под ключ, лоджия под ключ, панорамное остекление балконов, панорамное остекление лоджий, окна для балкона, окна для лоджии, отделка балкона, отделка лоджии, ремонт лоджии'
      }
    ]
  }
}
</script>
