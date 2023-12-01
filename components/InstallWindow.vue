<template>
  <div class="installWindow">
    <ul class="installWindow__list">
      <li class="installWindow__item">
        <img
          src="/img/okna/odnostvorchatoe.jpg"
          alt=""
          class="installWindow__item-image"
        >
        <span class="installWindow__item-title">Одностворчатое</span>
      </li>
      <li class="installWindow__item">
        <img
          src="/img/okna/dvuhstvorchatoe.jpg"
          alt=""
          class="installWindow__item-image"
        >
        <span class="installWindow__item-title">Двухстворчатое</span>
      </li>
      <li class="installWindow__item">
        <img
          src="/img/okna/trehstvorchatoe.jpg"
          alt=""
          class="installWindow__item-image"
        >
        <span class="installWindow__item-title">Трехстворчатое</span>
      </li>
      <li class="installWindow__item">
        <img
          src="/img/okna/dver.jpg"
          alt=""
          class="installWindow__item-image"
        >
        <span class="installWindow__item-title">Пластиковая дверь</span>
      </li>
      <li class="installWindow__item installWindow__item-double">
        <div class="installWindow__item-image-wrap">
          <img
            src="/img/okna/balkon.jpg"
            alt=""
            class="installWindow__item-image"
          >
          <img
            src="/img/okna/balkon-blok.jpg"
            alt=""
            class="installWindow__item-image"
          >
        </div>
        <span class="installWindow__item-title">Балконные блоки</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.installWindow {
  padding: 40px 0;

  &__list {
    display: flex;
    padding: 30px 0;
    border-top: 3px solid $GRAY_LIGHT;
    border-bottom: 3px solid $GRAY_LIGHT;
    flex-wrap: wrap;
    row-gap: 40px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    row-gap: 30px;

    @media (max-width: 1024px) {
      flex-grow: unset;
      width: calc(100% / 3);

      &-double {
        width: calc((100% / 3) * 2);
      }
    }

    @media (max-width: 743px) {
      flex-grow: unset;
      width: 50%;

      &-double {
        width: 100%;
      }
    }

    &-image-wrap {
      display: flex;
      column-gap: 20px;

      @media (max-width: 1024px) {
        column-gap: 50px;
      }
    }

    &-title {
      font-weight: bold;
      color: $GRAY_MAIN;
      text-transform: uppercase;
      text-align: center;
      @media (max-width: 743px) {
        font-size: 13px;
      }
    }
  }
}
</style>
