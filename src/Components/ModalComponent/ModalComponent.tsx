import React from "react";
import "./ModalComponent.scss";
import CloseIcon from "../../Assets/Icons/CloseIcon.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export interface IModalProps {
  title: string;
  children: JSX.Element;
  open: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<IModalProps> = ({
  title,
  children,
  open,
  onClose,
}) => (
  <>
    {Boolean(open) && (
      <div className="modal">
        <div className="container">
          <div className="container-header">
            <p>{title}</p>
            <ButtonComponent variant="close" onClick={onClose}>
              <CloseIcon />
            </ButtonComponent>
          </div>
          <div className="container-content">{children}</div>
        </div>
      </div>
    )}
  </>
);

export default ModalComponent;
