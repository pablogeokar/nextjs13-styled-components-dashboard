import styled from "styled-components"

type TButton = {
  label?: string
  fullWidth?: boolean
  justifyCenter?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  textColor?: string
  bgColor?: string
}

export function Button({ label, fullWidth, icon, justifyCenter, textColor = '#fff', bgColor = 'rgb(6 182 212)', onClick }: TButton) {
  return (
    <ButtonStyled style={{backgroundColor: bgColor, color: textColor}}>
      {label}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  :hover{
    filter: brightness(1.1);
  }
`