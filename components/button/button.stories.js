import "./button.css";

export default {
  title: "button",
};

export const button = () => {
  return `
    <a class="button button--black button--filled-lg button--white-lg" href="#">
        <span class="button__text">Помочь</span>
    </a>
  `;
};
