import "./goods-carousel.css";

export default {
  title: "goods-carousel",
};

export const goodsCarousel = () => {
  return `
  <div class="goods-carousel">
    <a href="#" class="good">
      <img class="good__img" src="/assets/jpeg/t-shirt.jpg" alt="">
      <span class="good__title">Футболка женская</span>
      <span class="good__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="good">
      <img class="good__img" src="/assets/jpeg/hoodie.jpg" alt="">
      <span class="good__title">Теплое худи унисекс</span>
      <span class="good__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="good">
      <img class="good__img" src="/assets/jpeg/t-shirt.jpg" alt="">
      <span class="good__title">Футболка женская</span>
      <span class="good__price" href="#">Купить за 1400₽</span>
    </a>
    <a href="#" class="good">
      <img class="good__img" src="/assets/jpeg/underpants.jpg" alt="">
      <span class="good__title">Трусики</span>
      <span class="good__price" href="#">Купить за 1400₽</span>
    </a>
  </div>
  `;
};
