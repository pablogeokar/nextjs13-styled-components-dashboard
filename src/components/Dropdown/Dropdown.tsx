import { ReactElement, ReactNode, useState } from "react"
import { CaretDown } from 'phosphor-react'
import styled from "styled-components"
import NextLink from 'next/link'


type TDropdown = {
  children: ReactNode
  options: ReactElement
}

type TLink = {
  label: string
  icon?: ReactElement
  link?: string
  onClick?: () => void
}

function Component({ children, options }: TDropdown) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)} className={isOpen && 'open'}>
      {children}
      <CaretDown size={18} weight="thin" style={{ marginLeft: '-6px' }} />

      <ContainerOptions className={!isOpen && 'close'}>
        {options}
      </ContainerOptions>


    </Wrapper >
  )
}

function Link({ label, icon, link, onClick }: TLink) {
  return (
    <LinkStyled onClick={onClick}>
      <NextLink href={link ? link : ''} className="link">
        {icon}
        <span>{label}</span>
      </NextLink>
    </LinkStyled>
  )
}

const LinkStyled = styled.div`  
  width: 100%;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.radius01};  

  .link{
    display: flex;
    align-items: center;
    gap: 8px;    
    padding: 4px;
    span{
      margin-top: 4px;
      font-size: .9rem;
    }
  }

  svg{
    width: 22px;
    height: 22px;    
  }

  :hover{
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;  
  }
`

const Wrapper = styled.div`
  position: relative;  
  display: flex; 
  gap: 8px; 
  align-items: center; 
  padding: 8px; 
  cursor: pointer; 
    
  svg{
    transition: ${({ theme }) => theme.transition.tran04};  
  }
  
  &.open{
    svg{
      transform: rotate(180deg);            
    }
  }  
`

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: absolute; 
  width: 250px;      
  z-index: 1000; 
  margin-top: 8px; 
  color: #424242;
  right: 0;
  top:10px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow01};  
  cursor: default;   
  

  &.close{
    display: none !important;  
  }  
`

const Row = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  gap: 4px;
  padding: 4px;  
  margin-top: 4px;
  border-bottom: 1px solid rgba(0,0,0,.1);
`

const Text = styled.span`
  color: #333;
  font-size: .875rem;  
`

const Small = styled.small`
  font-size: .775rem;
  color: #979494;
`

const Avatar = styled.img`
  width: 64px; 
  border-radius: 50%;  
`



export { Component, Row, Text, Avatar, Link, Small }