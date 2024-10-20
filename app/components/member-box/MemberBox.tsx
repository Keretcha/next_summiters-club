import Typography from "../typography/Typography";
import {
  MemberBoxWrapper,
  MemberImage,
  TextWrapper,
  Description,
} from "./style";

type MemberBoxProps = {
  imgUrl: string;
  name: string;
  description: string;
};

const MemberBox: React.FC<MemberBoxProps> = ({ imgUrl, name, description }) => {
  return (
    <MemberBoxWrapper>
      <MemberImage src={imgUrl} loading="lazy" />
      <TextWrapper>
        <Typography fontSize="1.6rem" fontWeight="600">
          {name}
        </Typography>
        <Description fontSize="1.2rem" textAlign="center">
          {description}
        </Description>
      </TextWrapper>
    </MemberBoxWrapper>
  );
};

export default MemberBox;
