import styled from '@emotion/styled';

export const Ul = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Li = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
`;

export const P = styled.p`
  line-height: 0;
`;

export const Button = styled.button`
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
