import Button from "../button/Button";
import { MaxContentWrapper } from "../max-content-wrapper/MaxContentWrapper";
import { BackgroundImageCompWrapper, CustomTypography, Description, TitleWrapper, DescriptionWrapper, ButtonsWrapper } from "./style";

type BackgroundImageCompProps = {
  imageUrl: string;
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
};

const BackgroundImageComp: React.FC<BackgroundImageCompProps> = ({ imageUrl, title, description, buttonText, onClick }) => {
  return (
    <BackgroundImageCompWrapper imageUrl={imageUrl}>
      <MaxContentWrapper>
        <TitleWrapper>
          <CustomTypography fontSize="3.5rem" fontWeight="700">
            {title}
          </CustomTypography>
        </TitleWrapper>
        {description && (
          <DescriptionWrapper>
            <Description fontSize="1.5rem">{description}</Description>
          </DescriptionWrapper>
        )}
        {buttonText && (
          <ButtonsWrapper>
            <Button onClick={onClick} primary={false}>
              {buttonText}
            </Button>
          </ButtonsWrapper>
        )}
      </MaxContentWrapper>
    </BackgroundImageCompWrapper>
  );
};

export default BackgroundImageComp;
