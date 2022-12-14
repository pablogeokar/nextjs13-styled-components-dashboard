import { useState } from 'react';
import * as C from './styles'
import { Moon, Sun, SignOut, UserList, CaretRight, House, MagnifyingGlass, UsersThree, Briefcase, MathOperations } from "phosphor-react";


export function Sidebar() {
  const [close, setClose] = useState(false)
  return (
    <C.Wrapper className={close && 'close'}>

      <div>
        <div className={close ? 'logo close' : 'logo'}>
          <img src="/logo.svg" alt="Kontabb" />
        </div>

        <C.Toggle onClick={() => setClose(!close)}>
          <CaretRight />
        </C.Toggle>

        <C.Menu>

          <C.Option>
            <a href="#" className={close && 'close'}>
              <House size={30} weight="thin" />
              <span className={close && 'close'}>Página Inicial</span>
            </a>
          </C.Option>

          <C.Option>
            <a href="#" className={close && 'close'}>
              <UsersThree size={28} weight="thin" />
              <span className={close && 'close'}>Folha de Pagamento</span>
            </a>
          </C.Option>

          <C.Option>
            <a href="#" className={close && 'close'}>
              <Briefcase size={28} weight="thin" />
              <span className={close && 'close'}>Setor Fiscal</span>
            </a>
          </C.Option>

          <C.Option>
            <a href="#" className={close && 'close'}>
              <MathOperations size={28} weight="thin" />
              <span className={close && 'close'}>Setor Contábil</span>
            </a>
          </C.Option>

          <C.Option>
            <a href="#" className={close && 'close'}>
              <UserList size={28} weight="thin" />
              <span className={close && 'close'}>Clientes</span>
            </a>
          </C.Option>


        </C.Menu>
      </div>

      <div className="footer">
        FOOTER
      </div>

    </C.Wrapper>
  )
}