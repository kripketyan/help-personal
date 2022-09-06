import "./button.css";

export default {
  title: "button",
};

export const button = () => {
  return `
    <a class="button-link button-link--black button-link--filled-lg button-link--white-lg" href="#">
        <span class="button-link__text">Помочь</span>
    </a>
  `;
};
