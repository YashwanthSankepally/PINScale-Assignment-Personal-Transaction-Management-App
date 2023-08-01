import React, {useState} from 'react'
import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    // Perform API call to validate user credentials here
    // For simplicity, let's just perform client-side validation for this example

    // Email validation
    if (!email.trim()) {
      setErrorMessage('Email is required.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format.')
      return
    }

    // Password validation
    if (!password.trim()) {
      setErrorMessage('Password is required.')
      return
    }

    // Check user credentials
    const users = [
      {email: 'admin@gmail.com', password: 'Admin@123', role: 'admin'},
      {email: 'jane.doe@gmail.com', password: 'janedoe@123', userId: 1},
      // Add other user credentials here...
    ]

    const user = users.find(
      user => user.email === email && user.password === password,
    )

    if (!user) {
      setErrorMessage('Invalid email or password.')
      return
    }

    // Successful login, handle the user role here (admin or non-admin)
    // For this example, we will log the user role to the console
    console.log('User Role:', user.role || 'non-admin')
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
