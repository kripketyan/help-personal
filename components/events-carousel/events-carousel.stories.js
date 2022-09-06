import "./events-carousel.css";

export default {
  title: "events-carousel",
};

export const eventsCarousel = () => {
  return `
  <div class="events__carousel">
    <a href="#" class="event__card">
      <img class="event__img" src="https://picsum.photos/id/237/200/300" alt="">
      <div class="event__container">
        <h6 class="event__topic">Верлигий, сахарный тростник и мемы: пища для ума или наоборот</h6>
        <p class="events__text">Лекция археолога, кандидата исторических наук Александра Митрякова.</p>
        <span class="events__text">Половина от фри донейшн — на помощь беженцам.</span>
        <div class="event__box">
          <span class="event__data">24 июня, 19:30</span>
          <span class="event__organizer">Кузебай</span>
        </div>
      </div>
    </a>
    <a href="#" class="event__card">
      <img class="event__img" src="https://picsum.photos/id/237/200/300" alt="">
      <div class="event__container">
        <h6 class="event__topic">Верлигий, сахарный тростник и мемы: пища для ума или наоборот</h6>
        <p class="events__text">Лекция археолога, кандидата исторических наук Александра Митрякова.</p>
        <span class="events__text">Половина от фри донейшн — на помощь беженцам.</span>
        <div class="event__box">
          <span class="event__data">24 июня, 19:30</span>
          <span class="event__organizer">Кузебай</span>
        </div>
      </div>
    </a>
  </div>`;
};
