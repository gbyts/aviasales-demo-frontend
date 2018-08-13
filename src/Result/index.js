import React, { Component } from "react";
import styled, { css } from "styled-components";
import MobileHeader from "./MobileHeader";
import Header from "./Header.js";
import MobileResults from "./SearchResults/MobileResults";
import Sidebar from "./Sidebar";
import TabletResults from "./SearchResults/Results";
import DesktopResults from "./SearchResults/DesktopResults.js";
import ButtonMobile from "./MobileFilter/ButtonMobile";
import ButtonTablet from "./MobileFilter/ButtonTablet";

const Section = styled.div`
  background: #eaeaea;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
  padding-bottom: 40px;
`;

class ResultPage extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 767;
    const isTablet = width <= 1439;
    // the rest is the same...

    if (isMobile) {
      return (
        <Section>
          <MobileHeader />
          <MobileResults />
          <ButtonMobile />
        </Section>
      );
    } else if (isTablet) {
      return (
        <Section>
          <Header />
          <ButtonTablet />
          <TabletResults />
        </Section>
      );
    } else {
      return (
        <Section>
          <Header />
          <div class="container">
            <Content>
              <Sidebar />
              <DesktopResults />
            </Content>
          </div>
        </Section>
      );
    }
  }
}

export default ResultPage;
