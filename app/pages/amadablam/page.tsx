"use client";

import ToursPage from "../tours-page-component/page";
import { useTexts } from "../../hooks/useTexts";
import { data } from "./data";
import { amaDablamBackgroundImage, amaDablamImage1, amaDablamImage2, amaDablamImage3, amaDablamImage4, amaDablamImage5, amaDablamImage6, amaDablamImage7, amaDablamImage8, amaDablamImage9 } from "../../images";

const AmaDablamPageView = () => {
  const text = useTexts();

  const dayByDay = [
    {
      day: "Day 1 - ",
      task: text.amaDablamDayOne,
    },
    {
      day: "Day 2 - ",
      task: text.amaDablamDaySecond,
    },
    {
      day: "Day 3 - ",
      task: text.amaDablamDayThird,
    },
    {
      day: "Day 4 - ",
      task: text.amaDablamDayForth,
    },
    {
      day: "Day 5 - ",
      task: text.amaDablamDayFifth,
    },
    {
      day: "Day 6 - ",
      task: text.amaDablamDaySixth,
    },
    {
      day: "Day 7 - ",
      task: text.amaDablamDaySeventh,
    },
    {
      day: "Day 8 - ",
      task: text.amaDablamDayEight,
    },
    {
      day: "Day 9 - ",
      task: text.amaDablamDayNine,
    },
    {
      day: "Day 10 - 21 - ",
      task: text.amaDablamDayTen,
    },
    {
      day: "Day 22 - ",
      task: text.amaDablamDayTwentyTwo,
    },
    {
      day: "Day 23 - ",
      task: text.amaDablamDayTwentyThree,
    },
    {
      day: "Day 24 - ",
      task: text.amaDablamDayTwentyFour,
    },
    {
      day: "Day 25 - ",
      task: text.amaDablamDayTwentyFive,
    },
  ];

  const includedServices = [
    {
      service: text.amaDablamincludedServicesOne,
    },
    {
      service: text.amaDablamIncludedServicesSecond,
    },
    {
      service: text.amaDablamincludedServicesThree,
    },
    {
      service: text.amaDablamIncludedServicesFour,
    },
    {
      service: text.amaDablamincludedServicesFive,
    },
    {
      service: text.amaDablamincludedServicesSix,
    },
    {
      service: text.amaDablamincludedServicesSeven,
    },
    {
      service: text.amaDablamincludedServicesEight,
    },
    {
      service: text.amaDablamincludedServicesNine,
    },
    {
      service: text.amaDablamincludedServicesTen,
    },
    {
      service: text.amaDablamincludedServicesEleven,
    },
    {
      service: text.amaDablamincludedServicesTwelve,
    },

    {
      service: text.amaDablamincludedServicesTherteen,
    },
    {
      service: text.amaDablamincludedServicesFourteen,
    },

    {
      service: text.amaDablamincludedServicesFiveteen,
    },
    {
      service: text.amaDablamincludedServicesSixteen,
    },
    {
      service: text.amaDablamincludedServicesEighteen,
    },
    {
      service: text.amaDablamincludedServicesNineteen,
    },
    {
      service: text.amaDablamincludedServicesTwentee,
    },
    {
      service: text.amaDablamincludedServicesTwenteOne,
    },
  ];

  const excludedExpences = [
    {
      expences: text.amaDablamExcludedExpencesOne,
    },
    {
      expences: text.amaDablamExcludedExpencesTwo,
    },
    {
      expences: text.amaDablamExcludedExpencesThree,
    },
    {
      expences: text.amaDablamExcludedExpencesFour,
    },
    {
      expences: text.amaDablamExcludedExpencesFive,
    },
    {
      expences: text.amaDablamExcludedExpencesSix,
    },
    {
      expences: text.amaDablamExcludedExpencesSeven,
    },
    {
      expences: text.amaDablamExcludedExpencesEight,
    },
    {
      expences: text.amaDablamExcludedExpencesNine,
    },
    {
      expences: text.amaDablamExcludedExpencesTen,
    },
    {
      expences: text.amaDablamExcludedExpencesEleven,
    },
    {
      expences: text.amaDablamExcludedExpencesTwelve,
    },
  ];

  const imagesArray = [amaDablamImage1, amaDablamImage2, amaDablamImage3, amaDablamImage4, amaDablamImage5, amaDablamImage6, amaDablamImage7, amaDablamImage8, amaDablamImage9];

  return (
    <>
      <ToursPage dayByDay={dayByDay} includedServices={includedServices} excludedExpences={excludedExpences} imagesArray={imagesArray} backgroundImage={amaDablamBackgroundImage} pageTitle={text.amaDablamPageTitle} firstSectionTitle={text.AmaDablamExpedition} firstSectionDescriptionFirst={text.amaDablamExpeditionDescFirst} firstSectionDescriptionSecond={text.amaDablamExpeditionDescSecond} expeditionInfoData={data} seasonDuration={text.amaDablamSesonDuration} seasonPrice={text.startingPriceAmaDablam} expeditionInfoDescription={text.amaDablamIconBoxDescription} sectionSecondTitle={text.amaDAblamSectionSecondTitle} />
    </>
  );
};

export default AmaDablamPageView;
