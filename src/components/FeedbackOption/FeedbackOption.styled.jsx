import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const ButtonGood = styled.button`
  margin: 0 10px;
  padding: 3px 6px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  background-color: #67f867;
  border-radius: 5px;
  border: 1px solid green;
  transition: all 300ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonNeutral = styled.button`
  margin: 0 7px;
  padding: 3px 6px;

  font-weight: 700;
  background: transparent;
  background-color: #ffd900;
  border-radius: 5px;
  border: 1px solid orange;
  transition: all 300ms;

  &:hover {
    transform: scale(1.05);
  }
`;
export const ButtonBad = styled.button`
  margin: 0 10px;
  padding: 3px 6px;

  background: transparent;
  background-color: #ff0000af;
  border-radius: 5px;
  border: 1px solid red;
  transition: all 300ms;

  &:hover {
    transform: scale(1.05);
  }
`;
