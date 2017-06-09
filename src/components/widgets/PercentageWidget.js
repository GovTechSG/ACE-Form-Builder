import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import styled from "styled-components";

function PercentageWidget(props) {
  const FormHorizontal = styled.div`
  	padding-top: 7px;
    margin-bottom: 0;
    text-align: left;
  `;

  const FormGroup = styled.div`
		margin-top: 15px;
    margin-bottom: 15px;
	`;

  const { label } = props;
  const inputGroupAddon = "%";

  return (
    <FormHorizontal>
      <FormGroup className="percentage-wrapper form-group">
        <div className="col-sm-6">
          <label>{label}</label>
        </div>
        <div className="col-sm-6 input-group">
          <BaseInput type="number" {...props} />
          <span className="input-group-addon">{inputGroupAddon}</span>
        </div>
      </FormGroup>
    </FormHorizontal>
  );
}

if (process.env.NODE_ENV !== "production") {
  PercentageWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
}

export default PercentageWidget;
