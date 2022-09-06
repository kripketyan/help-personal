import "./order-success.css";
import "../button/button.css";

export default {
  title: "order-success",
};

export const orderSuccess = () => {
  return `
    <div class="order wrapper">
      <img class="order__img" src="./assets/svg/order.svg" alt="спасибо за заказ">
      <span class="order__title">Спасибо за заказ!</span>
      <p class="order__text">Волонтер фонда свяжется с вами в течение дня, чтобы согласовать удобный способ оплаты и доставки заказа</p>
      <button class="button-link button-link--large button-link--filled button-link--large-modal button-link__text">Понятно!</button>
    </div>
  `;
};
