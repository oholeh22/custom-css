import { useState } from 'react'
import s from './Login.module.css'
import 'boxicons/css/boxicons.min.css'

const Login = () => {
  const [isActive, setIsActive] = useState(false)

  const handleRegisterClick = () => setIsActive(true)
  const handleLoginClick = () => setIsActive(false)

  return (
    <div className={`${s.container} ${isActive ? s.active : ''}`}>
      <div className={`${s.formBox} ${s.login}`}>
        <form>
          <h1>Login</h1>
          <div className={s.inputBox}>
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className={s.inputBox}>
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className={s.forgotLink}>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className={s.btn}>Login</button>
          <p className={s.registText}>or login with social platforms</p>
          <div className={s.socialIcons}>
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className={`${s.formBox} ${s.register}`}>
        <form>
          <h1>Registration</h1>
          <div className={s.inputBox}>
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className={s.inputBox}>
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className={s.inputBox}>
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className={s.btn}>Register</button>
          <p className={s.registText}>or register with social platforms</p>
          <div className={s.socialIcons}>
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className={s.toggleBox}>
        <div className={`${s.togglePanel} ${s.toggleLeft}`}>
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className={s.btn} onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <div className={`${s.togglePanel} ${s.toggleRight}`}>
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className={s.btn} onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login