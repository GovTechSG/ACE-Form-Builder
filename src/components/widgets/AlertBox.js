import React from "react";
import PropTypes from "prop-types";

function AlertBox(props) {
  const style = {
    box: {
      "background-color": "#dff0d8",
      "border-left": "8px solid #bbdfac",
      "margin-bottom": "10px",
      padding: "20px",
      display: "block",
      color: "#757575",
    },
    mandatoryIndicator: {
      color: "#e27c79",
    },
  };
  const { box, mandatoryIndicator } = style;
  const { value } = props.schema;

  return (
    <div className="helptext-wrapper">
      <div className="success" style={box}>
        <span class="mandatory-indicator" style={mandatoryIndicator}>
          &nbsp;*
        </span>
        {value}
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  AlertBox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
}

export default AlertBox;
