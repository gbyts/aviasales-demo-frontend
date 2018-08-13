import React, { Component } from "react";
import Header from "./Header";
import PopularDest from "./Home/PopularDest";
import BestPricesLastMonth from "./Home/BestPricesLastMonth";
import Airlines from "./Home/Airlines";
import SpecialOffers from "./Home/SpecialOffers";
import Articles from "./Home/Articles";
import MobileApp from "./Home/MobileApp";
import Footer from "./Footer";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularDest />
        <BestPricesLastMonth />
        <Airlines />
        <SpecialOffers />
        <Articles />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
