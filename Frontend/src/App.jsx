import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './Nav/Nav'
import { useDispatch } from 'react-redux'
import { asyncGetUser } from './redux/actions/userAtion'

const App = () => {

  const dispatch=useDispatch()

  useEffect(() => {
    
    dispatch(asyncGetUser())
  
  }, [])
  


  return (
    <div className='text-2xl text-white p-5 bg-neutral-900 w-full h-screen'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App