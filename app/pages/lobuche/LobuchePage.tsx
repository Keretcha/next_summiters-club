"use client";
import { useTexts } from "../../hooks/useTexts";
import { lobucheAndEverest, lobucheAndEverest2, lobucheBackgroundImage, lobucheImage1, lobucheImage2, lobucheImage3, lobucheImage4 } from "../../images";
import ToursPage from "../tours-page-component/page";
import { data } from "./data";

const LobuchePage = () => {
  const text = useTexts();
  const dayByDay = [
    {
      day: "Day 1 - ",
      task: text.lobucheDayone,
    },
    {
      day: "Day 2 - ",
      task: text.lobucheDayTwo,
    },
    {
      day: "Day 3 - ",
      task: text.lobucheDayThree,
    },
    {
      day: "Day 4 - ",
      task: text.lobucheDayFour,
    },
    {
      day: "Day 5 - ",
      task: text.lobucheDayFive,
    },
    {
      day: "Day 6 - ",
      task: text.lobucheDaySix,
    },
    {
      day: "Day 7 - ",
      task: text.lobucheDaySeven,
    },
    {
      day: "Day 8 - ",
      task: text.lobucheDayEight,
    },
    {
      day: "Day 9 - ",
      task: text.lobucheDayNine,
    },
    {
      day: "Day 10 - ",
      task: text.lobucheDayTen,
    },
    {
      day: "Day 11 - ",
      task: text.lobucheDayEleven,
    },
    {
      day: "Day 12 - ",
      task: text.lobucheDayTwelve,
    },
    {
      day: "Day 13 - ",
      task: text.lobucheDayTherteen,
    },
    {
      day: "Day 14 - ",
      task: text.lobucheDayFourteen,
    },
    {
      day: "Day 15 - ",
      task: text.lobucheDayFiveteen,
    },
    {
      day: "Day 16 - ",
      task: text.lobucheDaySixteen,
    },
    {
      day: "Day 17 - ",
      task: text.lobucheDaySeventeen,
    },
    {
      day: "Day 18 - ",
      task: text.lobucheDayEighteen,
    },
    {
      day: "Day 19 - ",
      task: text.lobucheDayNineTeen,
    },
    {
      day: "Day 20 - ",
      task: text.lobucheDayTwentee,
    },
  ];

  const includedServices = [
    {
      service: text.lobucheIncludedServiceOne,
    },
    {
      service: text.lobucheIncludedServiceTwo,
    },
    {
      service: text.lobucheIncludedServiceThree,
    },
    {
      service: text.lobucheIncludedServiceFour,
    },
    {
      service: text.lobucheIncludedServiceFive,
    },
    {
      service: text.lobucheIncludedServiceSix,
    },
    {
      service: text.lobucheIncludedServiceSeven,
    },
    {
      service: text.lobucheIncludedServiceEight,
    },
    {
      service: text.lobucheIncludedServiceNine,
    },
    {
      service: text.lobucheIncludedServiceTen,
    },
    {
      service: text.lobucheIncludedServiceEleven,
    },
    {
      service: text.lobucheIncludedServiceTwelve,
    },
    {
      service: text.lobucheIncludedServiceThirteen,
    },
    {
      service: text.lobucheIncludedServiceFourteen,
    },
    {
      service: text.lobucheIncludedServiceFiveTeen,
    },
    {
      service: text.lobucheIncludedServiceSixteen,
    },
    {
      service: text.lobucheIncludedServiceSeventeen,
    },
    {
      service: text.lobucheIncludedServiceEighteen,
    },
    {
      service: text.lobucheIncludedServiceNineTeen,
    },
    {
      service: text.lobucheIncludedServiceTwentee,
    },
  ];

  const excludedExpences = [
    {
      expences: text.lobucheExcludedExpencesOne,
    },
    {
      expences: text.lobucheExcludedExpencesTwo,
    },
    {
      expences: text.lobucheExcludedExpencesThree,
    },
    {
      expences: text.lobucheExcludedExpencesFour,
    },
    {
      expences: text.lobucheExcludedExpencesFive,
    },
    {
      expences: text.lobucheExcludedExpencesSix,
    },
    {
      expences: text.lobucheExcludedExpencesSeven,
    },
    {
      expences: text.lobucheExcludedExpencesEight,
    },
    {
      expences: text.lobucheExcludedExpencesNine,
    },
    {
      expences: text.lobucheExcludedExpencesTen,
    },
    {
      expences: text.lobucheExcludedExpencesEleven,
    },
    {
      expences: text.lobucheExcludedExpencesTwelve,
    },
  ];

  const imagesArray = [lobucheImage1, lobucheImage2, lobucheImage3, lobucheImage4, lobucheAndEverest, lobucheAndEverest2];

  return (
    <>
      <ToursPage dayByDay={dayByDay} includedServices={includedServices} excludedExpences={excludedExpences} imagesArray={imagesArray} backgroundImage={lobucheBackgroundImage} pageTitle={text.lobuchaPageTitle} firstSectionTitle={text.lobucheFirstSectionTitle} firstSectionDescriptionFirst={text.lobuchefirstSecDescFirst} firstSectionDescriptionSecond={text.lobucheFirstSecDescSecond} expeditionInfoData={data} seasonDuration={text.lobucheSeasonDuration} seasonPrice={text.lobucheSeasonPrice} expeditionInfoDescription={text.lobucheExpeditionDesc} sectionSecondTitle={text.lobucheSectionSecondTitle} longData={true} />
    </>
  );
};

export default LobuchePage;
