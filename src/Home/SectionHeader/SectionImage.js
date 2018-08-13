import styled, { css } from "styled-components";
import { device } from "../../device";

const SectionImage = styled.div`
  display: flex;
  justift-content: center;
  margin: 0 auto 40px;
  background: #e2f8ff;
  border-radius: 50px;
  width: 60px;
  height: 60px;

  @media ${device.tablet} {
    margin: 0 auto 0px;
  }
`;

export default SectionImage;
