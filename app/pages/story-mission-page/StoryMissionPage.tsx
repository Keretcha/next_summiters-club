"use client";
import BackgroundImageComp from "../../components/background-image-component/BackgroundImageComp";
import BoardMembers from "../../components/board-members/BoardMembers";
import ImageText from "../../components/image-text-component/ImageText";
import { MaxContentWrapper } from "../../components/max-content-wrapper/MaxContentWrapper";
import PartnersInAdvanture from "../../components/partnets-in-advanture/PartnersInAdvanture";
import Typography from "../../components/typography/Typography";
import { useTexts } from "../../hooks/useTexts";
import { imageTextFirst, imageTextSecond, imageTextThird, storyBackgroundImage } from "../../images";
import { StoryMissionPageWrapper, BottomSectionTexts, ColoredTypography } from "./style";

const AboutUsPage = () => {
  const text = useTexts();
  return (
    <StoryMissionPageWrapper>
      <BackgroundImageComp imageUrl={storyBackgroundImage} title={text.missionsPageHeadingTitle} />
      <MaxContentWrapper>
        <PartnersInAdvanture />
        <BoardMembers />
        <div style={{ marginTop: "10rem" }}>
          <ImageText imgUrl={imageTextFirst} descrtiption={text.imageTextFirst} />
          <ImageText imgUrl={imageTextSecond} descrtiption={text.imageTextSecond} reverse={true} />
          <ImageText imgUrl={imageTextThird} descrtiption={text.imageTextThird} />
        </div>
        <BottomSectionTexts>
          <Typography fontSize="1.6rem" fontWeight="700" textAlign="center">
            {text.exploreWithUs}
          </Typography>
          <ColoredTypography fontWeight="600" fontSize="2.5rem" textAlign="center">
            {text.joinUs}
          </ColoredTypography>
        </BottomSectionTexts>
      </MaxContentWrapper>
    </StoryMissionPageWrapper>
  );
};

export default AboutUsPage;
