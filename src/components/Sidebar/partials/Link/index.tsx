import styled from 'styled-components'
import NextLink from 'next/link'
import { ReactElement } from 'react';

type TLink = {
  close?: boolean
  label?: string
  icon?: ReactElement
  link?: string
}

export function Link({ label, icon, link, close = false }: TLink) {
  return (
    <Container className={close && 'close'}>
      <NextLink href={link ? link : '#'} className='link'>
        {icon}
        <span>{label}</span>
      </NextLink>
    </Container>
  )
}


export const Container = styled.li`  
  padding: 4px;
  position: relative;    
    
  .link{
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 8px;
    transition: ${({ theme }) => theme.transition.tran04};    

    :hover{
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.sidebar};
      border-radius: 8px;      
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
        margin-left:12px;        
      }
      :hover{
        span{
          display: inline-block;
        }
      }
    }
  

  
`