"use client";
import { DescriptionFirst, PartnersInAdvantureWrapper, RoundedImageFirst, SectionFirst, SectionSecond, TextWrapper, DescriptionSecond } from "./style";
import Typography from "../typography/Typography";
import { useTexts } from "../../hooks/useTexts";
import { polygonFirst, polygonSecond } from "../../images";

const PartnersInAdvanture = () => {
  const text = useTexts();

  return (
    <PartnersInAdvantureWrapper>
      <SectionFirst>
        <TextWrapper>
          <Typography fontSize="4.2rem" fontWeight="600">
            {text.partnersInAdvantureTitle}
          </Typography>
          <DescriptionFirst fontSize="1.4rem">{text.partnersInAdvantureDescriptionFirst}</DescriptionFirst>
        </TextWrapper>
        <RoundedImageFirst src={polygonFirst} alt="" loading="lazy" />
      </SectionFirst>
      <SectionSecond>
        <RoundedImageFirst src={polygonSecond} alt="" loading="lazy" />
        <DescriptionSecond fontSize="1.4rem">{text.partnersInAdvantureDescriptionSecond}</DescriptionSecond>
      </SectionSecond>
    </PartnersInAdvantureWrapper>
  );
};

export default PartnersInAdvanture;
