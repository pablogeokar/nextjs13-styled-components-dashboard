import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 250px;
  background: ${({ theme }) => theme.colors.sidebar};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transition.tran04};

  &.close {
    width: 88px;
    @media only screen and (max-width: 768px) {
      width: 5px;
      left: 5px;
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
  right: -25px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.sidebar};
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;  
`;


