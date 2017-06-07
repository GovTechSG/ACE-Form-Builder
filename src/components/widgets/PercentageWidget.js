import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

function PercentageWidget(props) {
  return (
    <div className="percentage-wrapper input-group">
      <BaseInput type="number" {...props} />
      <span className="input-group-addon">%</span>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  PercentageWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
}

export default PercentageWidget;
