import styled from '@emotion/styled';
export const ModalItems = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const ModalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Book = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 26px;
  background-color: #fff;
  color: #000;
  padding: 5px 15px 5px 15px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const CloseButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 2px 5px 2px 5px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #000;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
