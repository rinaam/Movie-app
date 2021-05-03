import React from "react";
import "./RadioGroupComponent.scss";

export interface IRadioGroupProps {
  items: TItem[];
  groupName: string;
  title?: string;
  onChange: (event: string) => void;
}

export type TItem = {
  name: string;
  id: number;
};

const RadioGroupComponent: React.FC<IRadioGroupProps> = ({
  items,
  groupName,
  title,
  onChange,
}) => (
  <div className="radio">
    <p className="radio-title">{title}</p>
    {items.map((item) => (
      <label className="radio-option" key={item.id}>
        {item.name}
        <input
          type="radio"
          name={groupName}
          value={item.name}
          onChange={() => onChange(item.name)}
          className="radio-option-btn"
        />
      </label>
    ))}
  </div>
);

export default RadioGroupComponent;
