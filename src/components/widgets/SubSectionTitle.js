import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function SubSectionTitle(props) {
  const SubSectionTitle = styled.h3`
    font-size: 22px;
    font-family: "Source Sans Pro", sans-serif;
    color: #616161;
    font-weight: 600;
    margin-top: 40px;
  `;
  const { value } = props.schema;

  return <SubSectionTitle>{value}</SubSectionTitle>;
}

if (process.env.NODE_ENV !== "production") {
  SubSectionTitle.propTypes = {
    value: PropTypes.string,
  };
}

export default SubSectionTitle;
