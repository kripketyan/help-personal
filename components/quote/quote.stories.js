import "./quote.css";

export default {
  title: "quote",
};

export const quote = () => {
  return `
  <div class="quote">
    <div class="quote__avatar">
      <img class="quote__img" src="https://picsum.photos/id/237/200/300" alt="">
    </div>
    <div class="quote__content">
      <span class="quote__name">Елена Максимова</span>
      <span class="quote__title">HR в частной клинике</span>
      <span class="quote__text">Помогаю украинцам найти работу и организую склад с вещами</span>
    </div>
  </div>
    `;
};
