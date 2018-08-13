import styled, { css } from "styled-components";
import { device } from "../../device";

const SectionTitle = styled.span`
  width: 255px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  color: #4a4a4a;

  @media ${device.tablet} {
    width: 100%;
    margin-top: 20px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export default SectionTitle;
