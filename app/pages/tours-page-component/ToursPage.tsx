"use client";
import { useState, useRef } from "react";
import BackgroundImageComp from "../../components/background-image-component/BackgroundImageComp";
import DayByDay from "../../components/day-by-day/DayByDay";
import ExpeditionInfo from "../../components/expedition-info-component/ExpeditionInfo";
import IconText from "../../components/icon-text/IconText";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import { MaxContentWrapper } from "../../components/max-content-wrapper/MaxContentWrapper";
import Typography from "../../components/typography/Typography";
import { useTexts } from "../../hooks/useTexts";

import { ToursPageWrapper, ToursPageSectionFirst, Description, DescriptionFirst, ToursPageSectionSecond, ToursPageSectionThird, ToursPageSectionFour, MoreInfoWrapper, MoreInfoTitles, InfoTitles, CustomTypography, DayByDayContainer } from "./style";

// Define types for props
interface DayByDayItem {
  day: string; // Adjust type as necessary
  task: string;
}

interface IncludedService {
  service: string;
}

interface ExcludedExpense {
  expences: string;
}

type DataTypeProps = {
  iconUrl: string;
  title: string;
  description: string;
};

type ToursPageProps = {
  dayByDay: DayByDayItem[];
  includedServices: IncludedService[];
  excludedExpences: ExcludedExpense[];
  imagesArray: string[];
  backgroundImage: string;
  pageTitle: string;
  firstSectionTitle: string;
  firstSectionDescriptionFirst: string;
  firstSectionDescriptionSecond: string;
  expeditionInfoData: DataTypeProps[];
  seasonDuration: string;
  seasonPrice: string;
  expeditionInfoDescription: string;
  sectionSecondTitle: string;
  longData?: boolean;
};

const ToursPage: React.FC<ToursPageProps> = ({ dayByDay = [], includedServices = [], excludedExpences = [], imagesArray = [], backgroundImage, pageTitle, firstSectionTitle, firstSectionDescriptionFirst, firstSectionDescriptionSecond, expeditionInfoData = [], seasonDuration, seasonPrice, expeditionInfoDescription, sectionSecondTitle, longData }) => {
  const text = useTexts();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const leftColumnData = dayByDay.slice(0, 6);
  const rightColumnData = dayByDay.slice(6);
  const leftColumnDataLong = dayByDay.slice(0, 10);
  const rightColumnDataLong = dayByDay.slice(10);

  const leftColData = longData ? leftColumnDataLong : leftColumnData;
  const rightColData = longData ? rightColumnDataLong : rightColumnData;

  const [currentInfo, setCurrentInfo] = useState<number>(1);

  const faqQuestions = [
    { question: text.faqQuestionFirst, answer: text.faqAnswerFirst },
    { question: text.faqQuestionTwo, answer: text.faqAnswerTwo },
    { question: text.faqQuestionThree, answer: text.faqAnswerThree },
    { question: text.faqQuestionFour, answer: text.faqAnswerFour },
    { question: text.faqQuestionFive, answer: text.faqAnswerFive },
  ];

  const moreInfoTitles = [
    { id: 1, title: text.physicalPreparation },
    { id: 2, title: text.gearList },
    { id: 3, title: text.bookingAndPayment },
    { id: 4, title: text.cancellationPolicy },
    { id: 5, title: text.faq },
  ];

  const onInfoClick = (id: number) => {
    setCurrentInfo(id);
  };

  const getCorrectInfo = () => {
    switch (currentInfo) {
      case 1:
        return text.physicalPreparationText;
      case 2:
        return text.gearListText;
      case 3:
        return text.cancellationPolicyText;
      case 4:
        return text.bookingAndPaymentText;
      case 5:
        return (
          <div>
            {faqQuestions.map((item, index) => (
              <div key={index}>
                <h1>{item.question}</h1>
                <p style={{ fontSize: "1.2rem" }}>{item.answer}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Scroll to the bottom when "Contact Us" is clicked
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ToursPageWrapper>
      <BackgroundImageComp imageUrl={backgroundImage} title={pageTitle} />
      <MaxContentWrapper>
        <ToursPageSectionFirst>
          <Typography fontSize="4rem" fontWeight="600">
            {firstSectionTitle}
          </Typography>
          <DescriptionFirst fontSize="1.4rem" fontWeight="400">
            {firstSectionDescriptionFirst}
          </DescriptionFirst>
          <Description fontSize="1.4rem" fontWeight="400">
            {firstSectionDescriptionSecond}
          </Description>
          <ExpeditionInfo data={expeditionInfoData} seasonDuration={seasonDuration} seasonPrice={seasonPrice} description={expeditionInfoDescription} />
        </ToursPageSectionFirst>

        <ToursPageSectionSecond>
          <Typography fontSize="3.5rem" fontWeight="600">
            {sectionSecondTitle}
          </Typography>
          <DayByDayContainer>
            <div>
              {leftColData.map((item: DayByDayItem) => (
                <DayByDay key={item.day} day={item.day} task={item.task} />
              ))}
            </div>
            <div>
              {rightColData.map((item: DayByDayItem) => (
                <DayByDay key={item.day} day={item.day} task={item.task} />
              ))}
            </div>
          </DayByDayContainer>

          <div style={{ marginTop: "15rem" }}>
            <p style={{ fontSize: "1.5rem" }}>
              {text.forMoreInfoClickHere} <a href="javascript:void(0);">{text.clickHere}</a>
            </p>
            <Typography fontSize="1.5rem">
              {text.morInfoContactUs}
              <a href="javascript:void(0);" onClick={scrollToBottom}>
                {text.commonContactUs}
              </a>
            </Typography>
          </div>
        </ToursPageSectionSecond>

        <ToursPageSectionFour>
          <ImageCarousel imageArray={imagesArray} />
        </ToursPageSectionFour>

        <ToursPageSectionThird>
          <div>
            <Typography fontSize="2.6rem" fontWeight="500">
              {text.includedServices}
            </Typography>
            <div style={{ marginTop: "6rem" }}>
              {includedServices.map((item: IncludedService) => (
                <IconText key={item.service} description={item.service} positiveIcon={true} />
              ))}
            </div>
          </div>
          <div>
            <Typography fontSize="2.6rem" fontWeight="500">
              {text.excludedExpences}
            </Typography>
            <div style={{ marginTop: "6rem" }}>
              {excludedExpences.map((item: ExcludedExpense) => (
                <IconText key={item.expences} description={item.expences} positiveIcon={false} />
              ))}
            </div>
          </div>
        </ToursPageSectionThird>

        <MoreInfoWrapper>
          <MoreInfoTitles>
            {moreInfoTitles.map((item, i) => (
              <InfoTitles onClick={() => onInfoClick(item.id)} key={i} style={{ textDecoration: currentInfo === item.id ? "underline" : "none" }}>
                {item.title}
              </InfoTitles>
            ))}
          </MoreInfoTitles>
          <CustomTypography>{getCorrectInfo()}</CustomTypography>
        </MoreInfoWrapper>

        {/* Bottom ref for scroll */}
        <div ref={bottomRef} />
      </MaxContentWrapper>
    </ToursPageWrapper>
  );
};

export default ToursPage;
