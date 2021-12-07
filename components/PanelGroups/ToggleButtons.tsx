import ButtonGroup from "../ButtonGroup";
import { ButtonProps } from "../Button";

const buttons: ButtonProps[] = [
  { text: "S/BLK" },
  { text: "M01" },
  { text: "BLK/SKP" },
  { text: "DR/RUN" },
  { text: "FN/SEL" },
  { text: "__" },
];

const ToggleButtons = ({ onToggle }) => {
  return (
    <div className="grid grid-cols-6 gap-1 place-items-center">
      <ButtonGroup
        buttons={buttons}
        onToggle={onToggle}
        groupLabel="Toggle Group"
      />
    </div>
  );
};

export default ToggleButtons;
