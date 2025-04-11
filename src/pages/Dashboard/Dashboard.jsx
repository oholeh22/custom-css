import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
import s from './dashboard.module.css'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    await signOut(auth)
    localStorage.removeItem('auth')
    navigate('/')
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.heading}>
        Welcome, {user?.email || 'user'} 🎉
      </h1>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
