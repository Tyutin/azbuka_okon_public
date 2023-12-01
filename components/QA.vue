<template>
  <ul class="qa">
    <li v-for="item in blocks" :key="item.title" class="qa__item">
      <span class="qa__item-title">{{ item.title }}</span>
      <div class="qa__item-yes">
        <img src="/img/icons/yes.svg">
        <span class="qa__item-yes-text">да</span>
      </div>
      <span v-if="item.subtitle" class="qa__item-subtitle">
        {{ item.subtitle }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        {
          title: 'Делаем ли предварительный расчет?'
        },
        {
          title: 'Выезжаем на замеры бесплатно?',
          subtitle: '(в черте города)'
        },
        {
          title: 'Есть ли бесплатное хранение на складе?'
        },
        {
          title: 'Есть ли рассрочка без банка?'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.qa {
  display: flex;
  padding: 40px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 1023px) {
    row-gap: 30px;
  }
  @media screen and (max-width: 425px) {
    padding: 40px 20px;
  }

  &__item {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-right: 1px solid $GRAY_LIGHT;

    @media screen and (max-width: 1023px) {
      width: 50%;
      border-right: none;
      padding: 0 40px;
    }

    @media screen and (max-width: 743px) {
      padding: 0 20px;
    }

    @media screen and (max-width: 425px) {
      width: 100%;
      align-items: center;
      padding: 0;
    }

    &:last-of-type {
      border-right: none;
    }

    &-title {
      min-height: 60px;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
      color: $GRAY_MAIN;
      text-transform: uppercase;

      @media screen and (max-width: 1023px) {
        min-height: unset;
      }

      @media screen and (max-width: 743px) {
        min-height: 60px;
      }

      @media screen and (max-width: 425px) {
        text-align: center;
        min-height: unset;
      }
    }

    &-subtitle {
      font-size: 16px;
      font-style: italic;
      color: $GRAY_MAIN;
    }

    &-yes {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      & img {
        width: 42px;
        height: 42px;
        margin-right: 10px;
      }

      &-text {
        font-size: 40px;
        color: $BLUE;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
}
</style>
