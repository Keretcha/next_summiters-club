import { starsImage } from "../../images";
import {
  ReviewComponentWrapper,
  Description,
  UserInfoWrapper,
  UserImage,
  UserInfo,
  UserName,
  UserDetails,
} from "./style";

type ReviewComponentProps = {
  userImageUrl: string;
  userName: string;
  userDetails: string;
  description: string;
};

const ReviewComponent: React.FC<ReviewComponentProps> = ({
  userImageUrl,
  userName,
  userDetails,
  description,
}) => {
  return (
    <ReviewComponentWrapper>
      <img
        style={{ width: "10rem" }}
        src={starsImage}
        alt="stars-image"
        loading="lazy"
      />
      <UserInfoWrapper>
        <UserImage src={userImageUrl} loading="lazy" />
        <UserInfo>
          <UserName fontSize="1.3rem" fontWeight="600">
            {userName}
          </UserName>
          <UserDetails>{userDetails}</UserDetails>
        </UserInfo>
      </UserInfoWrapper>
      <Description fontSize="1.3rem">{description}</Description>
    </ReviewComponentWrapper>
  );
};

export default ReviewComponent;
