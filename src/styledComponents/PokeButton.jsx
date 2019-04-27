import React from "react";
import styled from "styled-components";

const PokeButton = styled.div`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 3rem;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.2s;
    position: relative;
    font-size: 16px;
    border: none;
    box-shadow: 6px 5px 0rem #d7d7d7;
    /* box-shadow: 0 0.5rem 1.5rem #00000029; */
    color: black;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem #00000029;
    background: cornflowerblue;
    color: white;

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    background: cornflowerblue;
    color: white;
    box-shadow: 0 0.5rem 1rem #00000029;
  }
  &::after {
    background-color: darkblue;
  }
  &::after {
    background-color: #efefef;
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

export default PokeButton;
