import Button from "../button/Button";
import { VideoBackgroundWrapper, CustomTypography, TitleWrapper, ButtonsWrapper, VideoElement } from "./style";

type BackgroundVideoCompProps = {
  videoUrl: string;
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
};

const BackgroundVideoComp: React.FC<BackgroundVideoCompProps> = ({ videoUrl, title, buttonText, onClick }) => {
  return (
    <VideoBackgroundWrapper>
      <VideoElement autoPlay loop muted playsInline preload="auto">
        <source src={videoUrl.replace(".webm", ".mp4")} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
      </VideoElement>
      <TitleWrapper>
        <CustomTypography fontSize="3.5rem" fontWeight="700">
          {title}
        </CustomTypography>
      </TitleWrapper>
      {buttonText && (
        <ButtonsWrapper>
          <Button onClick={onClick} primary={false}>
            {buttonText}
          </Button>
        </ButtonsWrapper>
      )}
    </VideoBackgroundWrapper>
  );
};

export default BackgroundVideoComp;
