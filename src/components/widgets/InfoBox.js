import React from "react";
import PropTypes from "prop-types";
import variables from "../config/variables";
import styled from "styled-components";

function InfoBox(props) {
  const backgroundColor = variables["color-helptext-bg-blue"];
  const borderColor = variables["color-helptext-bg-blue"];
  const textColor = variables["color-helptext-text-blue"];
  const Box = styled.div`
    backgroundColor: ${backgroundColor};
    border: 1px solid ${borderColor};
    marginbottom: 10px;
    padding: 12px 20px;
    display: block;
    color: ${textColor};
  `;
  const { value } = props.schema;

  return <Box className="info-text-box margin-btm-md">{value}</Box>;
}

if (process.env.NODE_ENV !== "production") {
  InfoBox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
}

export default InfoBox;
