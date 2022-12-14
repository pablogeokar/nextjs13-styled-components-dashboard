import { useState } from 'react';
import * as C from './styles'
import { UserList, CaretRight, House, UsersThree, Briefcase, MathOperations } from "phosphor-react";
import { Link } from './partials/Link';


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

          <Link link="#" close={close} label="Página Inicial" icon={<House size={30} weight="thin" />} />
          <Link link="#" close={close} label="Folha de Pagamento" icon={<UsersThree size={28} weight="thin" />} />
          <Link link="#" close={close} label="Setor Fiscal" icon={<Briefcase size={28} weight="thin" />} />
          <Link link="#" close={close} label="Setor Contábil" icon={<MathOperations size={28} weight="thin" />} />
          <Link link="#" close={close} label="Clientes" icon={<UserList size={28} weight="thin" />} />

        </C.Menu>
      </div>

      <div className="footer">
        FOOTER
      </div>

    </C.Wrapper>
  )
}