import React from "react";
import {createPortal} from "react-dom";


interface PortalProps {
  children?: React.ReactNode,
}

function Portal({ children }: PortalProps) {
  return createPortal(children, document.body);
}

export default Portal