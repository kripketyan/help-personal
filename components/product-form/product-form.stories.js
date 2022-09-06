import "./product-form.css";
import "../goods-carousel/goods-carousel.css";
import "../button/button.css";

export default {
  title: "product-form",
};

export const productForm = () => {
  return `
  <div class="modal__product">
        <div class="goods">
          <a href="#" class="goods__card">
            <img class="goods__img" src="./assets/jpeg/t-shirt.jpg" alt="">
          </a>
          <a href="#" class="goods__card">
            <img class="goods__img" src="./assets/jpeg/t-shirt-front.jpg" alt="">
          </a>
          <a href="#" class="goods__card">
            <img class="goods__img" src="./assets/jpeg/t-shirt-back.jpg" alt="">
          </a>
        </div>
        <div class="wrapper">
          <h4 class="shop__title shop__title--modal">Футболка женская  «Всем мира . обнимаю»</h4>
          <span class="shop__price shop__price--modal">1400</span>
          <p class="shop__description">Доход от продажи идет в фонд помощи беженцам «Помочь Лично»</p>
          <form id="shop__form">
            <p class="shop__size">Размер</p>
            <div class="shop-form__size">
              <input type="radio" class="shop__measure" id="S" name="size" value="S" checked>
              <label for="S">S</label>
              <input type="radio" class="shop__measure" id="M" name="size" value="M">
              <label for="M">M</label>
              <input type="radio" class="shop__measure" id="L" name="size" value="L">
              <label for="L">L</label>
              <input type="radio" class="shop__measure" id="XL" name="size" value="XL">
              <label for="XL">XL</label>
              <input type="radio" class="shop__measure" id="XXL" name="size" value="XXL">
              <label for="XXL">XXL</label>
            </div>
            <a class="shop__link" href="#">
              <p class="shop__description shop__description--border">Таблица размеров</p>
            </a>
            <div>
              <div>
                <label for="shop__phone" class="shop__number">Ваш номер телефона</label>
                <input type="tel" id="shop__phone" class="shop__input" name="phone" placeholder="+7 (999) 999-99-99">
                <div id="phone_error" class="error hidden">Номер должен быть введен в формате +7999999999</div>
                  <p class="shop__description">Мы используем номер телефона только для оформления и доставки заказа</p>
                </div>
                <div class="">
                  <button class="button-link button-link--large button-link--filled button-link--disabled button-link--large-modal button-link__text" type="submit">Оформить заказ</button>
                </div>
            </div>
          </form>
        </div>
      </div>`;
};
