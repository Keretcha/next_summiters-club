"use client";
import { useRouter } from "next/navigation";
import BackgroundImageComp from "../components/background-image-component/BackgroundImageComp";
import BackgroundVideoComp from "../components/background-video/BackgroundVIdeoComp";
import ImageBox from "../components/image-box/ImageBox";
import { MaxContentWrapper } from "../components/max-content-wrapper/MaxContentWrapper";
import ReviewComponent from "../components/review-component/ReviewComponent";
import Typography from "../components/typography/Typography";
import { useTexts } from "../hooks/useTexts";
import { imageBoxImageOne, imageBoxImageSecond, imageBoxImageThree, imageBoxImageFour, backgroundVideo, amadablamImageForBackground } from "../images";
import { userData } from "./data";
import { HomePageSectionSecond, SectionSecondHeadingWrapper, SectionSecondHeading, SectionSecondDescription, BoxesWrapper, HomePageReviewSection, HomePageReviewSectionHeadingWrapper, Wrapper } from "./style";



const HomePage = () => {
  // const [isScrolling, setIsScrolling] = useState(false); // To track manual scroll
  const navigate = useRouter();

  // useEffect(() => {
  //   const scrollContainer = scrollRef.current;
  //   if (!scrollContainer) return;

  //   // Clone the content for seamless loop
  //   const clonedContent = scrollContainer.innerHTML;
  //   scrollContainer.innerHTML += clonedContent;

  //   // Detect if the user manually scrolls
  //   const handleManualScroll = () => {
  //     const resumeAutoScroll = setTimeout(() => {
  //       setIsScrolling(false);
  //       startAutoScroll(); // Resume the auto-scroll
  //     }, 3000);
  //     setIsScrolling(true);
  //     clearTimeout(resumeAutoScroll); // Stop the auto-scroll

  //     // Resume auto-scroll after manual scroll ends
  //   };

  //   // Handle seamless looping of the scroll
  //   const handleScroll = () => {
  //     const maxScrollLeft = scrollContainer.scrollWidth / 2;
  //     if (scrollContainer.scrollLeft >= maxScrollLeft) {
  //       // Reset to the start if it reaches the end
  //       scrollContainer.scrollLeft = 0;
  //     } else if (scrollContainer.scrollLeft === 0) {
  //       // Jump to the cloned content when going backward
  //       scrollContainer.scrollLeft = maxScrollLeft;
  //     }
  //   };

  //   // Start auto-scrolling using requestAnimationFrame
  //   const startAutoScroll = () => {
  //     if (!isScrolling) {
  //       scrollContainer.scrollBy({ left: 1 }); // Adjust speed by changing the left value
  //       requestAnimationFrame(startAutoScroll); // Recursively call to create smooth scrolling
  //     }
  //   };

  //   // Initialize auto-scroll
  //   startAutoScroll();

  //   // Add event listeners for manual scroll
  //   scrollContainer.addEventListener("scroll", handleScroll);
  //   scrollContainer.addEventListener("mousedown", handleManualScroll);
  //   scrollContainer.addEventListener("touchstart", handleManualScroll);

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     scrollContainer.removeEventListener("scroll", handleScroll);
  //     scrollContainer.removeEventListener("mousedown", handleManualScroll);
  //     scrollContainer.removeEventListener("touchstart", handleManualScroll);
  //   };
  // }, [isScrolling]);

  const text = useTexts();

  const firstImageBoxesData = [
    {
      imageUrl: imageBoxImageOne,
      title: text.comonExpertGuides,
      description: text.imageBoxFirstDescription,
      buttonText: text.learnMoreButtonText,
    },
    {
      imageUrl: imageBoxImageSecond,
      title: text.imageBoxSecondTitle,
      description: text.imageBoxSecondDescription,
      buttonText: text.learnMoreButtonText,
    },
  ];

  const SecondImageBoxesData = [
    {
      imageUrl: imageBoxImageThree,
      title: text.imageboxThirdTitle,
      description: text.imageboxThirdDescription,
      buttonText: text.learnMoreButtonText,
    },
    {
      imageUrl: imageBoxImageFour,
      title: text.imageboxFourthTitle,
      description: text.imageboxFourthDescription,
      buttonText: text.learnMoreButtonText,
    },
  ];

  const handleLearnMoreClick = () => {
    navigate.push("/amaDablam");
  };

  return (
    <div>
      <BackgroundVideoComp videoUrl={backgroundVideo} title={text.homePageHeadingTitle} description={text.homePageHeadingDescription} />
      <HomePageSectionSecond>
        <MaxContentWrapper>
          <SectionSecondHeadingWrapper>
            <SectionSecondHeading fontSize="3.5rem" fontWeight="600">
              {text.homePageSecondSectionTitle}
            </SectionSecondHeading>
            <SectionSecondDescription fontSize="1.6rem">{text.homePageSecondSectionDescription}</SectionSecondDescription>
          </SectionSecondHeadingWrapper>
          <BoxesWrapper>
            {firstImageBoxesData.map((item) => {
              return <ImageBox key={item.title} imageUrl={item.imageUrl} description={item.description} heading={item.title} />;
            })}
          </BoxesWrapper>
        </MaxContentWrapper>
      </HomePageSectionSecond>

      <HomePageReviewSection>
        <MaxContentWrapper>
          <HomePageReviewSectionHeadingWrapper>
            <Typography fontSize="3.5rem" fontWeight="600">
              {text.reviewSectionHeadingTitle}
            </Typography>
            <Typography fontSize="1.4rem">{text.reviewSectionHeadingDescription}</Typography>
          </HomePageReviewSectionHeadingWrapper>
        </MaxContentWrapper>
        <Wrapper>
          {userData.map((user, index) => {
            return <ReviewComponent key={index} userImageUrl={user.userImageUrl} userName={user.userName} userDetails={user.userDetails} description={user.description} />;
          })}
        </Wrapper>
      </HomePageReviewSection>
      <BackgroundImageComp imageUrl={amadablamImageForBackground} title={text.commonAmadablam} description={text.commonAmadablamDescription} buttonText={text.learnMoreButtonText} onClick={handleLearnMoreClick} />
      <MaxContentWrapper>
        <BoxesWrapper>
          {SecondImageBoxesData.map((item) => {
            return <ImageBox key={item.title} imageUrl={item.imageUrl} description={item.description} heading={item.title} />;
          })}
        </BoxesWrapper>
      </MaxContentWrapper>
    </div>
  );
};

export default HomePage;
