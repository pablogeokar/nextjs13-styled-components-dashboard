import { useState } from 'react'
import * as C from './styles'
import { Moon, Sun, SignOut, UserList, CaretRight, House, MagnifyingGlass, UsersThree, Briefcase, MathOperations } from "phosphor-react";

export function SidebarOld() {
  const [trueMode, setTrueMode] = useState(false);
  const [menuClose, setMenuClose] = useState(false);
  return (
    <C.Container className={menuClose && 'close'}>

      <C.Header>

        <C.Logo>
          <C.LogoImg src='/logo.svg' />
        </C.Logo>

        <C.Toggle onClick={() => setMenuClose(!menuClose)}>
          <CaretRight size={22} />
        </C.Toggle>

      </C.Header>

      <C.Menu>
        <C.Links>
          <C.Option>
            <MagnifyingGlass size={36} weight="thin" />
            <input type="search" placeholder="buscar por..." />
          </C.Option>

          <C.Option>
            <a href='#'>
              <House size={28} weight="thin" />
              <span>Página Inicial</span>
            </a>
          </C.Option>

          <C.Option>
            <a href='#'>
              <UsersThree size={28} weight="thin" />
              <span>Folha de Pagamento</span>
            </a>
          </C.Option>

          <C.Option>
            <a href='#'>
              <Briefcase size={28} weight="thin" />
              <span>Setor Fiscal</span>
            </a>
          </C.Option>

          <C.Option>
            <a href='#'>
              <MathOperations size={28} weight="thin" />
              <span>Setor Contábil</span>
            </a>
          </C.Option>

          <C.Option>
            <a href='#'>
              <UserList size={28} weight="thin" />
              <span>Clientes</span>
            </a>
          </C.Option>

          {/* Sidebar Footer */}
          <C.Footer>

            <C.Option>
              <a href='#'>
                <SignOut size={28} weight="thin" />
                <span>Logout</span>
              </a>
            </C.Option>

            <C.Option>
              <div className="mode">
                <div className="dark-light">
                  <Moon size={28} weight="thin" />
                  <Sun size={28} weight="thin" />
                </div>

                <span className='mode-text'>Dark Mode</span>

                <div className="toggle-switch" onClick={() => setTrueMode(!trueMode)}>
                  <span className={`switch ${trueMode && 'trueMode'}`}></span>
                </div>
              </div>
            </C.Option>

          </C.Footer>

        </C.Links>
      </C.Menu>
    </C.Container>
  )
}