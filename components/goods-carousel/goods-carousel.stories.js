import "./goods-carousel.css";

export default {
  title: "goods-carousel",
};

export const goodsCarousel = () => {
  return `
  <div class="goods">
    <a href="#" class="goods__card">
      <img class="goods__img" src="./assets/jpeg/t-shirt.jpg" alt="">
      <span class="goods__text">Футболка женская</span>
      <span class="goods__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="goods__card">
      <img class="goods__img" src="./assets/jpeg/hoodie.jpg" alt="">
      <span class="goods__text">Теплое худи унисекс</span>
      <span class="goods__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="goods__card">
      <img class="goods__img" src="./assets/jpeg/t-shirt.jpg" alt="">
      <span class="goods__text">Футболка женская</span>
      <span class="goods__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="goods__card">
      <img class="goods__img" src="./assets/jpeg/underpants.jpg" alt="">
      <span class="goods__text">Трусики</span>
      <span class="goods__price" href="#">Купить за 1400₽</span>
    </a>
  </div>
  `;
};
