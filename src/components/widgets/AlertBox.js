import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function AlertBox(props) {
  const { value } = props.schema;
  const Box = styled.div`
	  background-color: #dff0d8;
	  border-left: 8px solid #bbdfac;
	  margin-bottom: 10px;
	  padding: 20px;
	  display: block;
	  color: #757575;
	`;
  const Indicator = styled.span`
 	  color: #e27c79;
  `;

  return (
    <div className="helptext-wrapper">
      <Box className="success">
        <Indicator class="mandatory-indicator">
          &nbsp;*
        </Indicator>
        {value}
      </Box>
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  AlertBox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
}

export default AlertBox;
