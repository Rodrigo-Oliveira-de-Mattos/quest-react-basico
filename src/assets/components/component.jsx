import '../css/component.css';
import ParagraphColored from "./colored-paragraph";
import Button from "./button";

const Text = () => {
  return (
    <div className="text">
      <h1>Quest base react</h1>
      <div className="paragraphs">
        <ParagraphColored
          paragraph="Lorem ipsum dolor sit amet."
          color="#fff"
          textTransform="uppercase"
        />
      </div>
      <div className="button-animation">
        <Button label="Botão bão" />
      </div>
    </div>
  );
};

export default Text;