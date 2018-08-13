import styled from "styled-components";
import clear from "./clear.svg";

const CloseButton = styled.div`
  & {
    position: absolute;
    width: 16px;
    height: 16px;
    background: url(${clear}) no-repeat;
    right: 0px;
    top: 0px;
  }
`;

export default CloseButton;
