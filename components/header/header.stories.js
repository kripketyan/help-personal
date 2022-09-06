import "./header.css";
import "../button/button.css";
import "../logo/logo.css";

export default {
  title: "header",
};

export const header = () => {
  return `
  <header class="header">
    <div class="header__container">
      <a class="general-link" href="#">
        <img class="logo" src="./assets/svg/logo.svg" alt="логотип фонда помочь лично">
      </a>
      <ul class="header__list">
        <li class="header__item"><a class="header__link" href="#">Как помочь?</a></li>
        <li class="header__item"><a class="header__link" href="#">События</a></li>
        <li class="header__item"><a class="header__link" href="#">Наша команда</a></li>
        <li class="header__item"><a class="header__link" href="#">Отчет</a></li>
        <li class="header__item"><a class="header__link" href="#">Беженцам</a></li>
        <li class="header__item"><a class="header__link" href="#">Партнерам</a></li>
      </ul>
    </div>
    <div class="header__menu">
      <a class="button-link button-link--black button-link--filled-lg button-link--white-lg" href="#">
        <span class="button-link__text">Помочь</span>
      </a>
      <button class="burger">
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
        <span class="burger__bar"></span>
      </button>
    </div>
  </header>
  `;
};
