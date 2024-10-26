import { useState } from "react";
import {
  ImageCarouselWrapper,
  ImageCarouselWrapperMobile,
  ImageMobile,
  IconsWrapper,
  DisplayContainer,
} from "./style";
import { nextIcon, previousIcon } from "../../images";
import Image from "next/image"; // Importing the Image component from Next.js

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
          <Image
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
            onClick={onPreviousButtonClick}
            src={previousIcon}
            alt="previous"
          />
          <Image
            width={600} // Adjust based on your design
            height={400} // Adjust based on your design
            src={imageArray[currentImageIndex]}
            alt="current"
            priority // Optional: Use priority for important images
          />
          <Image
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
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
          <Image
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
            onClick={onPreviousButtonClick}
            src={previousIcon}
            alt="previous"
          />
          <Image
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
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
