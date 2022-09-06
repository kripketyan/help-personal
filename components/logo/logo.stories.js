import "./logo.css";

export default {
  title: "logo",
};

export const logo = () => {
  return `
    <a class="logo" href="#">
      <img class="logo__img" src="/assets/svg/logo.svg" alt="логотип фонда помочь лично">
    </a>`;
};
