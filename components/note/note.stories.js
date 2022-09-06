import "./note.css";

export default {
  title: "note",
};

export const note = () => {
  return `
      <div class="note">
        <span class="note__text">За время событий последних месяцев, в Мариуполе разрушено 95% зданий.
        Люди жили в подвалах неделями. Многие потеряли близких, получили тяжёлые
        ранения.
        </span>
      </div>
    `;
};
