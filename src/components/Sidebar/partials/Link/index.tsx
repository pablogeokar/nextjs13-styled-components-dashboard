import styled from 'styled-components'
import NextLink from 'next/link'
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

type TLink = {
  close?: boolean
  label?: string
  icon?: ReactElement
  link?: string
  onClick?: () => void
}

export function Link({ label, icon, link, onClick, close = false }: TLink) {
  const router = useRouter()
  return (
    <Container className={close && 'close'} onClick={onClick}>
      <NextLink href={link ? link : ''} className={`link ${router.asPath === link && 'active'}`}>
        {icon}
        <span>{label}</span>
      </NextLink>
    </Container>
  )
}


export const Container = styled.li`  
  padding: 2px;
  position: relative;
    
  .link{
    display: flex;
    align-items: center;    
    padding: 8px 12px;
    gap: 12px;
    transition: ${({ theme }) => theme.transition.tran04};
    font-size : .850rem ;
    border-radius: ${({ theme }) => theme.borderRadius.radius01};
    
    svg{
      width: 30px;
      height: 30px
    }

    :hover{
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.sidebar};
      //border-radius: ${({ theme }) => theme.borderRadius.radius01};
    }  

    &.active{
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.sidebar};
      //border-radius: 8px;      
  }

  }

  &.close{
    
      span{
        display: none;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.sidebar};
        font-size: .8rem;
        padding: 12px;
        border-radius: 8px;
        opacity: .9;        
        left: 88px;        
        width: 140px;        
      }
      svg{
        margin-left:9px;         
      }
      :hover{
        span{
          display: inline-block;
        }
      }
    }
  

  
`