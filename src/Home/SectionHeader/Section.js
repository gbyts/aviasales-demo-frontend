import styled, { css } from "styled-components";
import { device } from "../../device";

const Section = styled.section`
  background-color: #f8fcff;
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${device.tablet} {
    padding-top: 40px;
  }
  @media ${device.laptopL} {
  }
`;

export default Section;
