"use client";
import { useTexts } from "../../hooks/useTexts";
import { memberOne, memberTwo } from "../../images";
import MemberBox from "../member-box/MemberBox";
import Typography from "../typography/Typography";
import { BoardMembersHeading, BoardMembersWrapper, TextWrapper, MembersWrapper } from "./style";

const BoardMembers = () => {
  const text = useTexts();

  return (
    <BoardMembersWrapper>
      <TextWrapper>
        <BoardMembersHeading fontSize="4.2rem" fontWeight="600">
          {text.boardMembers}
        </BoardMembersHeading>
        <Typography lineHeight="1.6em" fontSize="1.4rem" fontWeight="600">
          {text.boardMembersDescription}
        </Typography>
      </TextWrapper>
      <MembersWrapper>
        <MemberBox imgUrl={memberOne} name="Kakhaber Giorgadze" description="Head of Marketing Operation and Sales" />
        <MemberBox
          imgUrl={memberTwo}
          name="Zura Kvestadze"
          description="Head of Field Operation and Logistic, 
Professional Alpine Guide since 2014"
        />
      </MembersWrapper>
    </BoardMembersWrapper>
  );
};

export default BoardMembers;
