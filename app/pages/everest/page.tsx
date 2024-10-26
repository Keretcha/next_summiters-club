"use client";
import { useTexts } from "../../hooks/useTexts";
import { everestBaseCamp1, everestBaseCamp2, everestBaseCampBackgroundImage, lobucheAndEverest, lobucheAndEverest2 } from "../../images";
import ToursPage from "../tours-page-component/page";
import { data } from "./data";

const EverestBaseCamp = () => {
  const text = useTexts();
  const dayByDay = [
    {
      day: "Day 1 - ",
      task: text.everestBaseCampDayOne,
    },
    {
      day: "Day 2 - ",
      task: text.everestBaseCampDayTwo,
    },
    {
      day: "Day 3 - ",
      task: text.everestBaseCampDayThree,
    },
    {
      day: "Day 4 - ",
      task: text.everestBaseCampDayFour,
    },
    {
      day: "Day 5 - ",
      task: text.everestBaseCampDayFive,
    },
    {
      day: "Day 6 - ",
      task: text.everestBaseCampDaySix,
    },
    {
      day: "Day 7 - ",
      task: text.everestBaseCampDaySeven,
    },
    {
      day: "Day 8 - ",
      task: text.everestBaseCampDayEight,
    },
    {
      day: "Day 9 - ",
      task: text.everestBaseCampDayNine,
    },
    {
      day: "Day 10 - ",
      task: text.everestBaseCampDayTen,
    },
    {
      day: "Day 11 - ",
      task: text.everestBaseCampDayEleven,
    },
    {
      day: "Day 12 - ",
      task: text.everestBaseCampDayTwelve,
    },
    {
      day: "Day 13 - ",
      task: text.everestBaseCampDayThirteen,
    },
    {
      day: "Day 14 - ",
      task: text.everestBaseCampDayFourteen,
    },
    {
      day: "Day 15 - ",
      task: text.everestBaseCampDayFiveteen,
    },
    {
      day: "Day 16 - ",
      task: text.everestBaseCampDaySixteen,
    },
    {
      day: "Day 17 - ",
      task: text.everestBaseCampDaySeventeen,
    },
    {
      day: "Day 18 - ",
      task: text.everestBaseCampDayNineteen,
    },
  ];

  const includedServices = [
    {
      service: text.everestBaseCampIncludedServicesOne,
    },
    {
      service: text.everestBaseCampIncludedServicesTwo,
    },
    {
      service: text.everestBaseCampIncludedServicesThree,
    },
    {
      service: text.everestBaseCampIncludedServicesFour,
    },
    {
      service: text.everestBaseCampIncludedServicesFive,
    },
    {
      service: text.everestBaseCampIncludedServicesSix,
    },
    {
      service: text.everestBaseCampIncludedServicesSeven,
    },
    {
      service: text.everestBaseCampIncludedServicesEight,
    },
    {
      service: text.everestBaseCampIncludedServicesNine,
    },
    {
      service: text.everestBaseCampIncludedServicesTen,
    },
    {
      service: text.everestBaseCampIncludedServicesEleven,
    },
    {
      service: text.everestBaseCampIncludedServicesTwelve,
    },
    {
      service: text.everestBaseCampIncludedServicesThirteen,
    },
    {
      service: text.everestBaseCampIncludedServicesFourteen,
    },
    {
      service: text.everestBaseCampIncludedServicesFiveTeen,
    },
    {
      service: text.everestBaseCampIncludedServicesSeventeen,
    },
    {
      service: text.everestBaseCampIncludedServicesEighteen,
    },
  ];

  const excludedExpences = [
    {
      expences: text.everestBaseCampExcludedExpencesOne,
    },
    {
      expences: text.everestBaseCampExcludedExpencesTwo,
    },
    {
      expences: text.everestBaseCampExcludedExpencesThree,
    },
    {
      expences: text.everestBaseCampExcludedExpencesFour,
    },
    {
      expences: text.everestBaseCampExcludedExpencesFive,
    },
    {
      expences: text.everestBaseCampExcludedExpencesSix,
    },
    {
      expences: text.everestBaseCampExcludedExpencesSeven,
    },
    {
      expences: text.everestBaseCampExcludedExpencesEight,
    },
    {
      expences: text.everestBaseCampExcludedExpencesNine,
    },
    {
      expences: text.everestBaseCampExcludedExpencesTen,
    },
    {
      expences: text.everestBaseCampExcludedExpencesEleven,
    },
    {
      expences: text.everestBaseCampExcludedExpencesTwelve,
    },
  ];

  const imagesArray = [lobucheAndEverest, lobucheAndEverest2, everestBaseCamp1, everestBaseCamp2];

  return (
    <>
      <ToursPage dayByDay={dayByDay} includedServices={includedServices} excludedExpences={excludedExpences} imagesArray={imagesArray} backgroundImage={everestBaseCampBackgroundImage} pageTitle={text.everestBaseCampPageTitle} firstSectionTitle={text.everestBaseCampFirstSecTitle} firstSectionDescriptionFirst={text.everestBaseCampFirstSecDescFirst} firstSectionDescriptionSecond={text.everestBaseCampFirstSecDescSecond} expeditionInfoData={data} seasonDuration={text.everestBaseCampDuration} seasonPrice={text.everestBaseCampSeasonPrice} expeditionInfoDescription={text.everestBaseCampExpDesc} sectionSecondTitle={text.everestBaseCampSecSecondTitle} longData={true} />
    </>
  );
};

export default EverestBaseCamp;
