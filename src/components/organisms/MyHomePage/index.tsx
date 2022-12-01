import React from "react";
import HomePageChooseTest from "../../molecules/HomePageChooseTest";
import HomePageCommonlyBookedTest from "../../molecules/HomePageCommonlyBookedTest";
import HomePageFAQ from "../../molecules/HomePageFAQ";
import HomePageFooter from "../../molecules/HomePageFooter";
import HomePageSearchBanner from "../../molecules/HomePageSearchBanner";
import HomePageTestimonials from "../../molecules/HomePageTestimonials";
import HomePageWhyChooseUs from "../../molecules/HomePageWhyChooseUs";

interface HomePageProps {
  covidClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyHomePage = ({ covidClick }: HomePageProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HomePageSearchBanner />
      <HomePageCommonlyBookedTest covidClick={covidClick} />
      <HomePageWhyChooseUs />
      <HomePageChooseTest />
      <HomePageTestimonials />
      <HomePageFAQ />
      <HomePageFooter />
    </div>
  );
};

export default MyHomePage;
