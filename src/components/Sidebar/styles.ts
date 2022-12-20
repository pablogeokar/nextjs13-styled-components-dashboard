import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 250px;
  //background: ${({ theme }) => theme.colors.sidebar};
  background: #f1f2f6;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transition.tran04};

  &.close {
    width: 88px;
    @media only screen and (max-width: 768px) {
      width: 0;
      //left: -88px;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    padding: 8px;

    img {
      width: 210px;
      transition: ${({ theme }) => theme.transition.tran04};
    }
    &.close {
      img {
        display: none;
      }
    }
  }
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  right: -38px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.toggle};
  svg {
    transform: rotate(180deg);
    transition: ${({ theme }) => theme.transition.tran05};
  }
  &.close {
    svg {
      transform: rotate(0deg);
    }    
  }
  :hover {
    filter: saturate(1.4);
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;
`;
