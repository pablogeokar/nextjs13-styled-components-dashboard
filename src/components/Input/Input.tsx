import styled from "styled-components"

type TInput = {
  label?: string
  placeholder?: string
  name?: string
  type?: 'text' | 'password' | 'email'
  value?: string
  onChange?: (text: any) => void
}

export function Input({ label, placeholder, name, value, onChange, type = 'text' }: TInput) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Label htmlFor="name">{label}</Label>
      <InputStyled autoComplete="off" value={value} placeholder={placeholder} onChange={onChange} name={name} type={type} />
    </div>
  )
}

const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(31,41,55,0.9);  
`

const InputStyled = styled.input`
  width: 100%;
  padding: .675rem .5rem;
  margin-top: .5rem;
  border: 1px solid #bdc3c7a4;
  background-color: #fff;  
  border-radius: .5rem;

  :focus{
    border-color: rgb(96,165,250,1);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`
