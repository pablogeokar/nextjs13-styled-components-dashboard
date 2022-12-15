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

        <C.Toggle onClick={() => setClose(!close)} className={close && 'close'}>
          <CaretRight size={24} />
        </C.Toggle>

        <C.Menu>

          <Link link="#" close={close} label="Página Inicial" icon={<House weight="thin" />} />
          <Link link="#" close={close} label="Folha de Pagamento" icon={<UsersThree weight="thin" />} />
          <Link link="#" close={close} label="Setor Fiscal" icon={<Briefcase weight="thin" />} />
          <Link link="#" close={close} label="Setor Contábil" icon={<MathOperations weight="thin" />} />
          <Link link="#" close={close} label="Clientes" icon={<UserList weight="thin" />} />

        </C.Menu>
      </div>

      <div className="footer">
        FOOTER
      </div>

    </C.Wrapper>
  )
}