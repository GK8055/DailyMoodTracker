import './index.css'
import {useState} from 'react'

const apiStatus = {
  success: 'SUCCESS',
  loading: 'LOADING',
  faliure: 'Failure',
}
const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(false)
  const [loginData, setLoginData] = useState('')
  const [status, setStatus] = useState(apiStatus.loading)
  const [showPassword, setShowPassword] = useState(false)

  const getLoginData = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {userName, password}
    console.log(userDetails)
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      console.log('success')
    } else {
      console.log('failure')
    }
  }

  const onChangeUsername = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeSubmit = event => {
    event.preventDefault()
    getLoginData()
  }

  const getPassWordElement = () => {
    if (showPassword) {
      //console.log('called pass')
      return (
        <input
          type="text"
          value={password}
          className="input_ele"
          id="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
      )
    }
    return (
      <input
        type="password"
        className="input_ele"
        id="password"
        placeholder="Password"
        onChange={onChangePassword}
      />
    )
  }
  const onChangeShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  // useEffect(() => {
  //   this.getLoginData()
  // })

  return (
    <div className="login_container">
      <h1 className="login_title">Daily Mood Tracker</h1>
      <form className="form_container" onSubmit={onChangeSubmit}>
        <label className="login_label_text" htmlFor="username">
          Username
        </label>
        <br />
        <input
          type="text"
          className="input_ele"
          id="username"
          placeholder="Username"
          value={userName}
          onChange={onChangeUsername}
        />
        <br />
        <label className="login_label_text" htmlFor="password">
          Password
        </label>
        <br />
        {getPassWordElement()}
        <div className="checkbox_container">
          <input
            type="checkbox"
            value={showPassword}
            onChange={onChangeShowPassword}
            className="checkbox_style"
          />
          <p className="checkbox_msg">Show Password</p>
        </div>
        <button className="login_btn" type="submit">
          Login
        </button>
        <p className="error_msg">{errMsg}</p>
      </form>
    </div>
  )
}

export default Login
