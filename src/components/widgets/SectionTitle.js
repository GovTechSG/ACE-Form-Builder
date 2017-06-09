import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function SectionTitle(props) {
  const SectionTitle = styled.h2`
    font-size: 26px;
    font-family: "Quicksand", sans-serif;
    color: #2688cb;
    font-weight: 700;
    padding-top: 0;
    text-transform: uppercase;
    margin: 20px 0;
  `;
  const { value } = props.schema;

  return <SectionTitle>{value}</SectionTitle>;
}

if (process.env.NODE_ENV !== "production") {
  SectionTitle.propTypes = {
    value: PropTypes.string,
  };
}

export default SectionTitle;
