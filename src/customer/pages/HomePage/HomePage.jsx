import React from "react";
import MainCarousel from "../../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homeSectionCarousel/HomeSectionCarousel";
import { data } from "../../../data/data.js";

const HomePage = () => {
  return (
    <div>
      {/* main carousel */}

      <MainCarousel />

      {/* other section */}
      <div className="space-y-10 py-10 md:py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={data} sectionName={"Wall lamp"} />
        <HomeSectionCarousel data={data} sectionName={"Chandelier"} />
        <HomeSectionCarousel data={data} sectionName={"Decorative Vase"} />
        <HomeSectionCarousel data={data} sectionName={"Show Piece"} />
        <HomeSectionCarousel data={data} sectionName={"Home Decor"} />
        <HomeSectionCarousel data={data} sectionName={"Home Decor"} />
        <HomeSectionCarousel data={data} sectionName={"Home Decor"} />
        <HomeSectionCarousel data={data} sectionName={"Home Decor"} />
      </div>
    </div>
  );
};

export default HomePage;
