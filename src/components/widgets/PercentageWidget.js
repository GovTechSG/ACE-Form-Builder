import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";

function PercentageWidget(props) {
  const style = {
    formHorizontal: {
      "padding-top": "7px",
      "margin-bottom": "0",
      "text-align": "left",
    },
    formGroup: {
      "margin-top": "15px",
      "margin-bottom": "15px",
    },
    input: {
      width: "100%",
    },
  };

  const { label } = props;
  const inputGroupAddon = "%";

  return (
    <div style={style.formHorizontal}>
      <div className="percentage-wrapper form-group" style={style.formGroup}>
        <div className="col-sm-6">
          <label>{label}</label>
        </div>
        <div className="col-sm-6 input-group">
          <BaseInput type="number" {...props} style={style.input} />
          <span className="input-group-addon">{inputGroupAddon}</span>
        </div>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  PercentageWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
}

export default PercentageWidget;
