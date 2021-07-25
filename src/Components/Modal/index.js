import { createPortal } from "react-dom";
import { ModalContainer } from "./style";

export default function Modal({ children, visible }) {
  return visible
    ? createPortal(
        <ModalContainer>{children}</ModalContainer>,
        document.querySelector("#modal-root")
      )
    : null;
}
