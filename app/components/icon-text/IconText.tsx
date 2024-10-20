import Image from "next/image";
import { checkMark, closeMark } from "../../images";
import { IconTextWrapper, Description } from "./style";

type IconTextProps = {
  positiveIcon: boolean;
  description: string;
};

const IconText: React.FC<IconTextProps> = ({ positiveIcon, description }) => {
  const icon = positiveIcon ? checkMark : closeMark;
  return (
    <IconTextWrapper>
      <Image style={{ width: "2rem", height: "2rem" }} width={20} height={20} src={icon} alt="icon" loading="lazy" />
      <Description fontSize="1.6rem" fontWeight="300">
        {description}
      </Description>
    </IconTextWrapper>
  );
};

export default IconText;
