import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transition.tran05};
  &.close {
    width: 88px;
  }
`;

export const Header = styled.div`
  position: relative;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.sidebar};
`;

export const Logo = styled.header`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

export const LogoImg = styled.img`
  width: 210px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px;
  height: 100%;
`;

export const Option = styled.li`
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  transition: ${({ theme }) => theme.transition.tran03};
  position: relative;

  a {
    display: flex;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.transition.tran04};

    :hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.sidebar};
    }
  }

  svg {
    margin: 0 12px;
  }

  input {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.primaryLight};
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 6px;
  }

  .mode {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    width: 100%;

    .dark-light {
      height: 50px;
      width: 60px;
      display: flex;
      align-items: center;

      svg {
        position: absolute;

        .dark {
        }
        .light {
          opacity: 0;
        }
      }
    }

    .toggle-switch {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-width: 60px;
      cursor: pointer;
      .switch {
        position: relative;
        height: 22px;
        width: 44px;
        border-radius: 25px;
        background: ${({ theme }) => theme.colors.toggle};
        &:before {
          content: "";
          position: absolute;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          background: ${({ theme }) => theme.colors.sidebar};
          transition: ${({ theme }) => theme.transition.tran03};
        }
        &.trueMode:before {
          left: 24px;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  width: 93%;
  bottom: 80px;
`;
