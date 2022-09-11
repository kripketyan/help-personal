import "./reviews-carousel.css";

export default {
  title: "reviews-carousel",
};

export const reviewsCarousel = () => {
  return `
  <div class="reviews__carousel">
    <div class="review">
        <div class="review__box">
        <div class="review__avatar">
            <img class="review__img" src="https://picsum.photos/id/237/200/300" alt="">
        </div>
        <div class="review__content">
        <span class="review__name">Ольга Чеснокова</span>
        <span class="review__description">45 лет, Мариуполь</span>
        </div>
    </div>
        <p class="review__text">Наша семья искренне  благодарит директора стоматологической  клиники ДЖАЗ, врача ОЛЕГА ВАСИЛЬЕВИЧА, волонтера КРИСТИНУ и всех кто принимал участие в оказании  помощи нашей маме в протезировании зубов.  Как приятно знать, что такие неравнодушные люди есть рядом. Желаем всем процветания, добра, благополучия, гармонии и счастья. 🤗</p>
    </div>
    <div class="review">
        <div class="review__box">
        <div class="review__avatar">
            <img class="review__img" src="https://picsum.photos/id/237/200/300" alt="">
        </div>
        <div class="review__content">
            <span class="review__name">Ольга Чеснокова</span>
            <span class="review__description">45 лет, Мариуполь</span>
        </div>
        </div>
        <p class="review__text">Наша семья искренне  благодарит директора стоматологической  клиники ДЖАЗ, врача ОЛЕГА ВАСИЛЬЕВИЧА, волонтера КРИСТИНУ и всех кто принимал участие в оказании  помощи нашей маме в протезировании зубов.  Как приятно знать, что такие неравнодушные люди есть рядом. Желаем всем процветания, добра, благополучия, гармонии и счастья. 🤗</p>
    </div>
    <div class="review">
        <div class="review__box">
        <div class="review__avatar">
            <img class="review__img" src="https://picsum.photos/id/237/200/300" alt="">
        </div>
        <div class="review__content">
            <span class="review__name">Ольга Чеснокова</span>
            <span class="review__description">45 лет, Мариуполь</span>
        </div>
        </div>
        <p class="review__text">Наша семья искренне  благодарит директора стоматологической  клиники ДЖАЗ, врача ОЛЕГА ВАСИЛЬЕВИЧА, волонтера КРИСТИНУ и всех кто принимал участие в оказании  помощи нашей маме в протезировании зубов.  Как приятно знать, что такие неравнодушные люди есть рядом. Желаем всем процветания, добра, благополучия, гармонии и счастья. 🤗</p>
    </div>
  </div>`;
};
