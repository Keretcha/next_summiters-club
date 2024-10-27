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
import Image from "next/image"; // Import the Image component from Next.js

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
      <Image
        width={100} // Set the width in pixels
        height={20} // Set the height in pixels, adjust as necessary for aspect ratio
        src={starsImage}
        alt="stars-image"
        loading="lazy"
      />
      <UserInfoWrapper>
        <UserImage
          src={userImageUrl}
          loading="lazy"
          width={100} // Set the width in pixels for user image
          height={100} // Set the height in pixels for user image
          alt={`${userName}'s profile`} // Provide an alt text for accessibility
        />
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
