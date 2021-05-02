import React from "react";
import "./ContainerComponent.scss";

const ContainerComponent: React.FC = ({ children }) => (
  <div className="wrapper">{children}</div>
);

export default ContainerComponent;
