import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./BaseInput";
import styled from "styled-components";

function TextBox(props) {
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

  return (
    <FormHorizontal>
      <FormGroup className="form-group">
        <div className="col-sm-6">
          <label>{label}</label>
        </div>
        <div className="col-sm-6 input-group">
          <BaseInput {...props} />
        </div>
      </FormGroup>
    </FormHorizontal>
  );
}

if (process.env.NODE_ENV !== "production") {
  TextBox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
}

export default TextBox;
