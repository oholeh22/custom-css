import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
import s from './Dashboard.module.css'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'
    return () => {
      document.body.style.background = ''
    }
  }, [])

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
      {user && (
        <>
          {user.photoURL && (
            <img src={user.photoURL} alt="avatar" className={s.avatar} />
          )}
          <h1 className={s.heading}>
            Welcome, {user.displayName || user.email} 🎉
          </h1>
        </>
      )}
      <button onClick={handleLogout} className={s.button}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
