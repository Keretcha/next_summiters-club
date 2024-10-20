import { Helmet } from "react-helmet-async";
import { useTexts } from "../../hooks/useTexts";
import {
  islandPeak1,
  islandPeak2,
  islandPeak3,
  islandPeak4,
  islandPeakBackgroundImage,
  lobucheImage1,
  lobucheImage2,
  lobucheImage3,
  lobucheImage4,
} from "../../images";
import ToursPage from "../tours-page-component/ToursPage";
import { data } from "./data";

const IslandPeak = () => {
  const text = useTexts();
  const dayByDay = [
    {
      day: "Day 1 - ",
      task: text.islandPeakDayOne,
    },
    {
      day: "Day 2 - ",
      task: text.islandPeakDayTwo,
    },
    {
      day: "Day 3 - ",
      task: text.islandPeakDayThree,
    },
    {
      day: "Day 4 - ",
      task: text.islandPeakDayFour,
    },
    {
      day: "Day 5 - ",
      task: text.islandPeakDayFive,
    },
    {
      day: "Day 6 - ",
      task: text.islandPeakDaySix,
    },
    {
      day: "Day 7 - ",
      task: text.islandPeakDaySeven,
    },
    {
      day: "Day 8 - ",
      task: text.islandPeakDayEight,
    },
    {
      day: "Day 9 - ",
      task: text.islandPeakDayNine,
    },
    {
      day: "Day 10 - ",
      task: text.islandPeakDayTen,
    },
    {
      day: "Day 11 - ",
      task: text.islandPeakDayEleven,
    },
    {
      day: "Day 12 - ",
      task: text.islandPeakDayTwelve,
    },
    {
      day: "Day 13 - ",
      task: text.islandPeakDayThirteen,
    },
    {
      day: "Day 14 - ",
      task: text.islandPeakDayFourTeen,
    },
    {
      day: "Day 15 - ",
      task: text.islandPeakDayFiveTeen,
    },
    {
      day: "Day 16 - ",
      task: text.islandPeakDayFiveSixTeen,
    },
    {
      day: "Day 17 - ",
      task: text.islandPeakDayFiveSevenTeen,
    },
    {
      day: "Day 18 - ",
      task: text.islandPeakDayFiveEighteen,
    },
  ];

  const includedServices = [
    {
      service: text.islandPeakIncludedServicesOne,
    },
    {
      service: text.islandPeakIncludedServicesTwo,
    },
    {
      service: text.islandPeakIncludedServicesThree,
    },
    {
      service: text.islandPeakIncludedServicesFour,
    },
    {
      service: text.islandPeakIncludedServicesFive,
    },
    {
      service: text.islandPeakIncludedServicesSix,
    },
    {
      service: text.islandPeakIncludedServicesSeven,
    },
    {
      service: text.islandPeakIncludedServicesEight,
    },
    {
      service: text.islandPeakIncludedServicesNine,
    },
    {
      service: text.islandPeakIncludedServicesTen,
    },
    {
      service: text.islandPeakIncludedServicesEleven,
    },
    {
      service: text.islandPeakIncludedServicesTwelve,
    },
    {
      service: text.islandPeakIncludedServicesThirteen,
    },
    {
      service: text.islandPeakIncludedServicesFourteen,
    },
    {
      service: text.islandPeakIncludedServicesFiveteen,
    },
    {
      service: text.islandPeakIncludedServicesSixteen,
    },
    {
      service: text.islandPeakIncludedServicesSeventeen,
    },
    {
      service: text.islandPeakIncludedServicesEighteen,
    },
    {
      service: text.islandPeakIncludedServicesNineTeen,
    },
  ];

  const excludedExpences = [
    {
      expences: text.islandPeakExcludedExpencesOne,
    },
    {
      expences: text.islandPeakExcludedExpencesTwo,
    },
    {
      expences: text.islandPeakExcludedExpencesThree,
    },
    {
      expences: text.islandPeakExcludedExpencesFour,
    },
    {
      expences: text.islandPeakExcludedExpencesFive,
    },
    {
      expences: text.islandPeakExcludedExpencesSix,
    },
    {
      expences: text.islandPeakExcludedExpencesSeven,
    },
    {
      expences: text.islandPeakExcludedExpencesEight,
    },
    {
      expences: text.islandPeakExcludedExpencesNine,
    },
    {
      expences: text.islandPeakExcludedExpencesTen,
    },
    {
      expences: text.islandPeakExcludedExpencesEleven,
    },
    {
      expences: text.islandPeakExcludedExpencesTwelve,
    },
  ];

  const imagesArray = [
    islandPeak1,
    islandPeak2,
    islandPeak3,
    islandPeak4,
  ];

  return (
    <>
      <Helmet>
        <title>Island Peak Expedition | Summiters Club</title>
        <meta
          name="description"
          content="Summiters Club guides you on an unforgettable Island Peak expedition. Ideal for climbers seeking adventure in the Himalayas."
        />
        <link rel="canonical" href="https://summitersclub.com/islandPeak " />

        <meta
          property="og:title"
          content="Island Peak Expedition | Summiters Club"
        />
        <meta
          property="og:description"
          content="Explore Island Peak with Summiters Club. A challenging climb in the Himalayas, perfect for adventurers ready to summit a 6000-meter peak."
        />
        <meta
          property="og:image"
          content="https://summitersclub.com/images/island1.webp"
        />
        <meta
          property="og:url"
          content="https://summitersclub.com/islandPeak "
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Island Peak Expedition | Summiters Club"
        />
        <meta
          name="twitter:description"
          content="Climb Island Peak with professional guides. Experience the thrill of summiting this Himalayan gem."
        />
        <meta
          name="twitter:image"
          content="https://summitersclub.com/images/island1.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: "Island Peak Expedition",
            description:
              "Summiters Club guides you on an unforgettable Island Peak expedition.",
            url: "https://summitersclub.com/islandPeak ",
            image: "https://summitersclub.com/images/island1.webp",
          })}
        </script>
      </Helmet>
      <ToursPage
        dayByDay={dayByDay}
        includedServices={includedServices}
        excludedExpences={excludedExpences}
        imagesArray={imagesArray}
        backgroundImage={islandPeakBackgroundImage}
        pageTitle={text.islandPeakPageTitle}
        firstSectionTitle={text.islandPeakFirstSecTitle}
        firstSectionDescriptionFirst={text.islandPeakFirstSecDescFirst}
        firstSectionDescriptionSecond={text.islandPeakFirstSecDescSecond}
        expeditionInfoData={data}
        seasonDuration={text.islandPeakSeasonDuration}
        seasonPrice={text.islandPeakSeasonPrice}
        expeditionInfoDescription={text.islandPeakExpeditionDesc}
        sectionSecondTitle={text.islandPeakSectionSecondTitle}
        longData={true}
      />
    </>
  );
};

export default IslandPeak;
