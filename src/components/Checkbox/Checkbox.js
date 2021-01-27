import React from "react";
import { Checkbox as NativeCheckbox } from "antd";
import cn from "classnames";
import PropTypes from 'prop-types'
import s from "./Checkbox.module.less";

const Checkbox = ({ children, type = "rounded", ...props }) => {
  return (
    <NativeCheckbox
      {...props}
      className={cn({
        [s.rounded]: type === "rounded",
        [s.circle]: type === "circle",
      })}
    >
      {children}
    </NativeCheckbox>
  );
};

Checkbox.Group = NativeCheckbox.Group;

Checkbox.propTypes = {
    type: PropTypes.string
}

export default Checkbox;
