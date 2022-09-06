import "./card.css";

export default {
  title: "card",
};

export const card = () => {
  return `
        <a class="card" href="#">
            <div class="card__icon" >
                <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.14645 0.146447C6.34171 -0.0488155 6.65829 -0.0488155 6.85355 0.146447L10.8536 4.14645C11.0488 4.34171 11.0488 4.65829 10.8536 4.85355L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L9.29289 5H0.5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4H9.29289L6.14645 0.853553C5.95118 0.658291 5.95118 0.341709 6.14645 0.146447Z" fill="#131A27"/>
                </svg>
            </div>
            <div>
                <h5 class="card__title">Перевести деньги</h5>
                <span class="card__text">Перевод на карту или по договору пожертвования</span>
            </div>
        </a>
    `;
};
