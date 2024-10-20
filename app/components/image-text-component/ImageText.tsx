import { ImageTextImg, ImageTextWrapper, Descrtiption } from "./style";

type ImageTextProps = {
  imgUrl: string;
  descrtiption: string;
  reverse?: boolean;
};

const ImageText: React.FC<ImageTextProps> = ({
  imgUrl,
  descrtiption,
  reverse,
}) => {
  return (
    <ImageTextWrapper reverse={reverse}>
      <ImageTextImg src={imgUrl} loading="lazy" />
      <Descrtiption fontSize="1.4rem">{descrtiption}</Descrtiption>
    </ImageTextWrapper>
  );
};

export default ImageText;
