import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding: 16px;
  //overflow: hidden;
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;
