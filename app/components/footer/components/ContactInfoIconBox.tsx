import Typography from "../../typography/Typography";
import { ContactInfoIconBoxWrapper, ContactIcon } from "./style";

type ContactInfoIconBoxProps = {
  iconUrl: string;
  content: string;
};

const ContactInfoIconBox: React.FC<ContactInfoIconBoxProps> = ({
  iconUrl,
  content,
}) => {
  return (
    <ContactInfoIconBoxWrapper>
      <ContactIcon src={iconUrl} loading="lazy" />
      <Typography>{content}</Typography>
    </ContactInfoIconBoxWrapper>
  );
};

export default ContactInfoIconBox;
