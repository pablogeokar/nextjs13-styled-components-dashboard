import { useState } from 'react';
import * as C from './styles'
import { CaretRight } from "phosphor-react";


import { Link } from './partials/Link';

import MenuOptions from './config.json';

function getIcon(icon: string) {
  const Icon = require(`../../../node_modules/phosphor-react`)[icon]  
  return Icon
}


export function Sidebar() {
  const [close, setClose] = useState(false)

  return (
    <C.Wrapper className={close && 'close'}>

      <div>
        <div className={close ? 'logo close' : 'logo'}>
          <img src="/logo.svg" alt="Kontabb" />
        </div>

        <C.Toggle onClick={() => setClose(!close)} className={close && 'close'}>
          <CaretRight size={20} />
        </C.Toggle>

        <C.Menu>

          {
            MenuOptions.map(item => {
              const Icon = getIcon(item.icon)
              return <Link key={item.label} link={item.link} close={close} label={item.label} icon={<Icon weight="thin" />} />
            })
          }

        </C.Menu>
      </div>

      <div className="footer">
        FOOTER
      </div>

    </C.Wrapper>
  )
}