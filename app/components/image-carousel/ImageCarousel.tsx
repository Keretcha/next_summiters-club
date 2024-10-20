import { useState } from "react";
import {
  ImageCarouselWrapper,
  ImageCarouselWrapperMobile,
  ImageMobile,
  IconsWrapper,
  DisplayContainer,
} from "./style";
import { nextIcon, previousIcon } from "../../images";

type ImageCarouselProps = {
  imageArray: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageArray }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const onNextButtonClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onPreviousButtonClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <DisplayContainer>
        <ImageCarouselWrapper>
          <img
            loading="lazy"
            style={{ width: "6rem", height: "6rem", cursor: "pointer" }}
            onClick={onPreviousButtonClick}
            src={previousIcon}
            alt="previous"
          />
          <img
            loading="lazy"
            style={{ width: "60rem" }}
            src={imageArray[currentImageIndex]}
            alt="current"
          />
          <img
            loading="lazy"
            style={{ width: "6rem", height: "6rem", cursor: "pointer" }}
            onClick={onNextButtonClick}
            src={nextIcon}
            alt="next"
          />
        </ImageCarouselWrapper>
      </DisplayContainer>
      <ImageCarouselWrapperMobile>
        <ImageMobile
          src={imageArray[currentImageIndex]}
          alt=""
          loading="lazy"
        />
        <IconsWrapper>
          <img
            loading="lazy"
            style={{ width: "6rem", height: "6rem", cursor: "pointer" }}
            onClick={onPreviousButtonClick}
            src={previousIcon}
            alt="previous"
          />
          <img
            loading="lazy"
            style={{ width: "6rem", height: "6rem", cursor: "pointer" }}
            onClick={onNextButtonClick}
            src={nextIcon}
            alt="next"
          />
        </IconsWrapper>
      </ImageCarouselWrapperMobile>
    </div>
  );
};

export default ImageCarousel;
