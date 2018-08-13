import React from "react";
import styled from "styled-components";
import BlockHeader from "./BlockHeader.js";
import FilterSection from "./FilterSection.js";
import plane from "./plane.svg";

const Departure = styled.div`
  font-weight: normal;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;
const Destination = styled.div`
  margin-bottom: 15px;

  font-weight: bold;
  line-height: 18px;
  font-size: 12px;

  color: #323333;
`;
const Plane = styled.img``;
const TakeOff = styled.div`
  margin-bottom: 12px;
`;
const DeparturePlace = styled.div``;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
`;
const From = styled.div``;
const To = styled.div``;
const Slider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;
const Start = styled.div`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #d6d9da;
  border-radius: 50px;
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #00acde;
  border-radius: 2px;
`;

const FlightTimeFilter = () => (
  <FilterSection>
    <BlockHeader open>Время в пути</BlockHeader>
    <Departure>
      <Destination>
        Москва <Plane src={plane} alt="" /> Барселона
      </Destination>
      <TakeOff>
        <Time>
          <From>от 04ч 20м</From>
          <To>до 48ч 50м</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
    </Departure>
    <Departure>
      <Destination>
        Барселона <Plane src={plane} alt="" /> Москва
      </Destination>
      <TakeOff>
        <Time>
          <From>от 04ч 10м</From>
          <To>до 41ч 20м</To>
        </Time>
        <Slider>
          <Start />
          <Line />
          <Start />
        </Slider>
      </TakeOff>
    </Departure>
  </FilterSection>
);

export default FlightTimeFilter;
