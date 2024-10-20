import { useTexts } from "../../hooks/useTexts";
import Typography from "../typography/Typography";
import InfoIcons from "./InfoIcons";
import { ExpeditionInfoWrapper, Wrapper, SecondSection, SectionTitleWrapper, SeasonsDurationAndPrice, DescriptionWrapper } from "./style";

type dataType = {
  iconUrl: string;
  title: string;
  description: string;
};

type ExpeditionInfoProps = {
  data: dataType[];
  seasonDuration: string;
  seasonPrice: string;
  description: string;
};

const ExpeditionInfo: React.FC<ExpeditionInfoProps> = ({ data, seasonDuration, seasonPrice, description }) => {
  const text = useTexts();
  return (
    <ExpeditionInfoWrapper>
      <Wrapper>
        {data.map((item: dataType) => {
          return <InfoIcons key={item.title} title={item.title} imageUrl={item.iconUrl} description={item.description} />;
        })}
      </Wrapper>
      <SecondSection>
        <SectionTitleWrapper>
          <Typography fontSize="1.3rem" fontWeight="600">
            {text.seasons}
          </Typography>
        </SectionTitleWrapper>
        <SeasonsDurationAndPrice fontSize="1.3rem" fontWeight="600">
          {seasonDuration}
        </SeasonsDurationAndPrice>
        <SectionTitleWrapper style={{ marginTop: "3rem" }}>
          <Typography fontSize="1.3rem" fontWeight="600">
            {text.startingPrice}
          </Typography>
        </SectionTitleWrapper>
        <SeasonsDurationAndPrice fontSize="1.3rem" fontWeight="600">
          {seasonPrice}
        </SeasonsDurationAndPrice>
        <DescriptionWrapper>
          <Typography fontSize="1.2rem" fontWeight="300">
            {description}
          </Typography>
        </DescriptionWrapper>
      </SecondSection>
    </ExpeditionInfoWrapper>
  );
};

export default ExpeditionInfo;
