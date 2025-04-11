import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
import s from './Login.module.css'
import 'boxicons/css/boxicons.min.css'

const Login = () => {
  const [isActive, setIsActive] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      localStorage.setItem('auth', 'true')
      navigate('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('auth', 'true')
      navigate('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      localStorage.setItem('auth', 'true')
      navigate('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      localStorage.setItem('auth', 'true')
      navigate('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className={`${s.container} ${isActive ? s.active : ''}`}>
      {/* Login Form */}
      <div className={`${s.formBox} ${s.login}`}>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className={s.inputBox}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className={s.inputBox}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`}
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <div className={s.forgotLink}>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className={s.btn}>Login</button>
          <p className={s.registText}>or login with social platforms</p>
          <div className={s.socialIcons}>
            <a href="#" onClick={handleGoogleLogin}>
              <i className="bx bxl-google"></i>
            </a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#" onClick={handleGitHubLogin}>
              <i className="bx bxl-github"></i>
            </a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      {/* Registration Form */}
      <div className={`${s.formBox} ${s.register}`}>
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className={s.inputBox}>
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className={s.inputBox}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className={s.inputBox}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`}
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
          <button type="submit" className={s.btn}>Register</button>
          <p className={s.registText}>or register with social platforms</p>
          <div className={s.socialIcons}>
            <a href="#" onClick={handleGoogleLogin}>
              <i className="bx bxl-google"></i>
            </a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#" onClick={handleGitHubLogin}>
              <i className="bx bxl-github"></i>
            </a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className={s.toggleBox}>
        <div className={`${s.togglePanel} ${s.toggleLeft}`}>
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className={s.btn} onClick={() => setIsActive(true)}>
            Register
          </button>
        </div>
        <div className={`${s.togglePanel} ${s.toggleRight}`}>
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className={s.btn} onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
