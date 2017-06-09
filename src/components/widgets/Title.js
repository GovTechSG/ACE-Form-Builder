import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Title(props) {
  const Title = styled.h1`
    font-size: 18px;
    color: #faaa43;
    font-weight: 400;
    padding-bottom: 0;
    margin-bottom: 0;
  `;
  const { value } = props.schema;

  return <Title>{value}</Title>;
}

if (process.env.NODE_ENV !== "production") {
  Title.propTypes = {
    value: PropTypes.string,
  };
}

export default Title;
