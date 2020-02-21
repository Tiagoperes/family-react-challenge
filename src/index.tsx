import React, { FC } from 'react'
import { render } from 'react-dom'
import Family from './containers/Family'
import { Page } from './styled'


const App: FC = () => (
  <Page>
    <Family />
  </Page>
)

render(<App />, document.getElementById('root'))
