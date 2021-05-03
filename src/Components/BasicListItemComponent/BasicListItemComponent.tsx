import React from "react";
import "./BasicListItemComponent.scss";

export interface IBasicListItemProps {
  title: string;
  sufix: string;
}

const BasicListItemComponent: React.FC<IBasicListItemProps> = ({
  title,
  sufix,
}) => (
  <div className="basic-list-item">
    <p>{title}</p>
    <p>{sufix}</p>
  </div>
);
export default BasicListItemComponent;
