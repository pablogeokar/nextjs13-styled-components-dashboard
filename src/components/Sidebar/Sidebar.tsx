import { useState } from 'react';
import * as C from './styles'
import { CaretRight, SignOut } from "phosphor-react";
import { signOut } from 'next-auth/react'


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
            MenuOptions.options.map(item => {
              const Icon = getIcon(item.icon)
              return <Link key={item.label} link={item.link} close={close} label={item.label} icon={<Icon weight="thin" />} />
            })
          }

        </C.Menu>
      </div>
      <div className='sidebar-footer'>
        <hr style={{ width: '88%', opacity: .6 }} />
        <C.Menu className='footer'>
          {MenuOptions.footer_options.length > 0 &&

            MenuOptions.footer_options.map(item => {
              const Icon = getIcon(item.icon)
              return <Link key={item.label} link={item.link} close={close} label={item.label} icon={<Icon weight="thin" />} />
            })

          }
          <Link close={close} label="Logout" onClick={() => signOut()} icon={<SignOut weight="thin" />} />
        </C.Menu>
      </div>

    </C.Wrapper>
  )
}