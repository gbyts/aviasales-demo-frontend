import styled, { css } from "styled-components";
import arrow from "./arrow.svg";

const BlockHeader = styled.div`
  & {
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-left: 16px;

    font-weight: 500;
    line-height: 18px;
    font-size: 12px;
    text-transform: uppercase;
    color: #5b5b5c;
  }
  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 0px;
    background: url(${arrow}) no-repeat;
    background-size: 10px 5px;
    width: 10px;
    height: 5px;
    transform: ${props => (props.open ? "" : "rotate(-90deg)")};
  }
`;

export default BlockHeader;
