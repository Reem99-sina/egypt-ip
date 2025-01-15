"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { Dialog } from "@material-tailwind/react";
import type { DialogProps } from "@material-tailwind/react";
import clsx from "clsx";
import { propsMissing } from "@/utils/date.util";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

interface Props {
  children: React.ReactNode;
  size?: DialogProps["size"];
  className?: string;
}

export const Modal = forwardRef<ModalRef, Props>(
  ({ children, size, className }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }));

    return (
      <Dialog
        open={isVisible}
        size={size}
        {...propsMissing}
        handler={() => setIsVisible(false)}
        className={clsx("border-0 focus:border-0", className)}
      >
        {isVisible ? children : null}
      </Dialog>
    );
  }
);
