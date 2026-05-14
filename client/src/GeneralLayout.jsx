import React from 'react'
import Login from './pages/Login/Login'
import Header from './components/Header/Header'
import { observer } from 'mobx-react-lite'

const GeneralLayout = () => {
  return (
    <div>
        <Header/>
        <Login/>
    </div>
  )
}

export default observer(GeneralLayout)