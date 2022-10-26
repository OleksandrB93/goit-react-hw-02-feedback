import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
  padding: 10px;
`;

export const ButtonGood = styled.button`
  margin: 0 10px;

  padding: 3px 6px;
  font-weight: 600;

  background: transparent;
  background-color: #67f867;
  border-radius: 5px;
  border: 1px solid green;
`;

export const ButtonNeutral = styled.button`
  margin: 0 7px;

  padding: 3px 6px;
  font-weight: 600;

  background: transparent;
  background-color: #ffd900;
  border-radius: 5px;
  border: 1px solid orange;
`;
export const ButtonBad = styled.button`
  margin: 0 10px;
  padding: 3px 6px;
  font-weight: 600;

  background: transparent;
  background-color: #ff0000af;
  border-radius: 5px;
  border: 1px solid red;
`;