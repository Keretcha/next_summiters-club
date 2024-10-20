import Typography from "../typography/Typography";
import { DayByDayWrapper, Day } from "./style";

type DayByDayProps = {
  day: string;
  task: string;
};

const DayByDay: React.FC<DayByDayProps> = ({ day, task }) => {
  return (
    <DayByDayWrapper>
      <Day fontSize="2.5rem" fontWeight="500">
        {day}
      </Day>
      <Typography fontSize="2rem" fontWeight="300">
        {task}
      </Typography>
    </DayByDayWrapper>
  );
};

export default DayByDay;
