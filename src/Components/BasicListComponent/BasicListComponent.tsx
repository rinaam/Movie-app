import React from "react";
import "./BasicListComponent.scss";
import BasicListItemComponent from "../BasicListItemComponent/BasicListItemComponent";

export interface IBasicListProps {
  list: TBasicListItem[];
}

export type TBasicListItem = {
  title: string;
  sufix: string;
};

const BasicListComponent: React.FC<IBasicListProps> = ({ list }) => (
  <div className="basic-list">
    {list.map((item) => (
      <BasicListItemComponent
        title={item.title}
        sufix={item.sufix}
        key={item.title}
      />
    ))}
  </div>
);

export default BasicListComponent;
