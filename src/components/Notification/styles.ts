import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;
  border-radius: 12px;
  padding: 20px 35px 20px 25px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-left: 6px solid;
  opacity: 0.8;
  overflow: hidden;

  &.info {
    border-color: ${({ theme }) => theme.colors.info};
  }
  &.error {
    border-color: ${({ theme }) => theme.colors.error};
  }
  &.warning {
    border-color: ${({ theme }) => theme.colors.warning};
  }
  &.success {
    border-color: ${({ theme }) => theme.colors.success};
  }

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 35px;
    width: 35px;
    color: #fff;
    border-radius: 50%;

    &.info {
      background-color: ${({ theme }) => theme.colors.info};
    }
    &.error {
      background-color: ${({ theme }) => theme.colors.error};
    }
    &.success {
      background-color: ${({ theme }) => theme.colors.success};
    }
    &.warning {
      background-color: ${({ theme }) => theme.colors.warning};
      color: #333;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 0.885rem;
  color: #666;
`;
export const Progress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: #ddd;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }

  &.info {
    :before {
      background-color: ${({ theme }) => theme.colors.info};
    }
  }
  &.error {
    :before {
      background-color: ${({ theme }) => theme.colors.error};
    }
  }
  &.warning {
    :before {
      background-color: ${({ theme }) => theme.colors.warning};
    }
  }
  &.success {
    :before {
      background-color: ${({ theme }) => theme.colors.success};
    }
  }
`;
