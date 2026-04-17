import { useEffect, useState } from 'react'
import './App.css'
import conf from './config/config'
import { useDispatch } from 'react-redux'
// dispatch used to merge react with redux
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'
import {Outlet} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // check if we are login
    authService.getCurrentUser()
    .then((userdata) => {
      if(userdata){
        dispatch(login({userdata}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))  
  }, [])

  console.log(conf.appwriteUrl)

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main className='text-center text-4xl p-4'>
            TODO: {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : <h1 className='text-center text-4xl text-black'>Checking...</h1> 
}

export default App
