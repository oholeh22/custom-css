import { useEffect } from 'react'
import Login from '../../components/Login/Login'

const Home = () => {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(90deg, #e2e2e2, #c9d6ff)'
    return () => {
      document.body.style.background = ''
    }
  }, [])

  return <Login />
}

export default Home