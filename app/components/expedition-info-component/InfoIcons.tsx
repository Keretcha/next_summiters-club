import React from "react";
import { Icon, InfoIconsWrapper, Title, Description } from "./style";

type InfoIconsProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const InfoIcons: React.FC<InfoIconsProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <InfoIconsWrapper>
      <Icon src={imageUrl} loading="lazy" />
      <Title fontSize="1.5rem" fontWeight="700">
        {title}
      </Title>
      <Description fontSize="1.3rem" fontWeight="700">
        {description}
      </Description>
    </InfoIconsWrapper>
  );
};

export default InfoIcons;
