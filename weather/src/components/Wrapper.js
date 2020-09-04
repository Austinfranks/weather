import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .wrapper {
    margin-right: auto;
    margin-left: auto;
    height: 100% auto;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = (props) => {
  return (
    <Styles>
      <div className="wrapper"> {props.children} </div>
    </Styles>
  );
};

export default Wrapper;
