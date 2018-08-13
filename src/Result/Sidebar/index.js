import React, { Component } from "react";
import styled, { css } from "styled-components";
import TransferFilter from "./TransferFilter.js";
import DepartArriveFilter from "./DepartArriveFilter.js";
import BaggageFilter from "./BaggageFilter.js";
import TransplatationFilter from "./TransplatationFilter.js";
import FlightTimeFilter from "./FlightTimeFilter.js";
import AirlinesFilter from "./AirlinesFilter.js";
import AirportsFilter from "./AirportsFilter.js";
import TransferAirportsFilter from "./TransferAirportsFilter.js";
import AgenciesFilter from "./AgenciesFilter.js";
import ResetSection from "./ResetSection.js";

const Section = styled.div`
  flex-basis: 21%;
  background: #ffffff;
  border-radius: 4px;
  margin-right: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

class Sidebar extends Component {
  render() {
    return (
      <Section>
        <TransferFilter />
        <DepartArriveFilter />
        <BaggageFilter />
        <TransplatationFilter />
        <FlightTimeFilter />
        <AirlinesFilter />
        <AirportsFilter />
        <TransferAirportsFilter />
        <AgenciesFilter />
        <ResetSection />
      </Section>
    );
  }
}

export default Sidebar;
