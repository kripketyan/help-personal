import "./brief.css";

export default {
  title: "brief",
};

export const brief = () => {
  return `
    <section class="brief wrapper">
      <div class="brief__left">
        <h1 class="brief__title">Помочь беженцам<br><span class="blue-text">в Ижевске</span></h1>
        <p class="text text--large">Сейчас в Ижевске около 580 жителей Мариуполя, Луганской и Донецкой
        областей</p>
      </div>
      <div class="brief__right">
        <img class="brief__img" src="/assets/svg/bubble.svg" alt="">
      </div>
    </section>
  `;
};
