import React from "react";
import { BoxImage, ImageBoxWrapper, TextWrapper } from "./style";
import Typography from "../typography/Typography";

type ImageBoxProps = {
  imageUrl: string;
  heading: string;
  description: string;
};

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, heading, description }) => {
  return (
    <ImageBoxWrapper>
      <BoxImage alt="box-image" src={imageUrl} loading="lazy" width={320} height={100} />
      <TextWrapper>
        <Typography fontSize="2.2rem" fontWeight="500">
          {heading}
        </Typography>
        <Typography fontSize="1.5rem">{description}</Typography>
      </TextWrapper>
    </ImageBoxWrapper>
  );
};

export default ImageBox;
