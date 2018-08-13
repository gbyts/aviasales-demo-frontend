import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton.js";
import FilterSection from "./FilterSection.js";

const ResetButton = styled.div`
  font-weight: normal;
  line-height: 52px;
  font-size: 12px;
  text-transform: uppercase;
  color: #00bde4;
`;

const ResetSection = () => (
  <FilterSection>
    <ResetButton>
      Сбросить все фильтры<CloseButton />
    </ResetButton>
  </FilterSection>
);

export default ResetSection;
