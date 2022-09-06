import "./modal.css";

export default {
  title: "modal",
};

export const modal = () => {
  return `
  <section class="modal">
    <div class="modal__window">
      <div class="modal__close">
        <button class="modal__icon"></button>
      </div>
      <div class="modal__content"></div>
    </div>
  </section>
  `;
};
