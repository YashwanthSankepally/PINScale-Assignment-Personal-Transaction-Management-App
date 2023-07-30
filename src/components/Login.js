import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Prepare the request body with email and password
    const requestBody = {
      email: email,
      password: password,
    }

    // Make the API call to log in the user
    fetch('https://bursting-gelding-24.hasura.app/api/rest/get-user-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        // Check the response from the API
        if (data.userId) {
          // Login successful, you can handle the logged-in user here (e.g., set user state, redirect to dashboard, etc.)
          console.log('Login successful! User ID:', data.userId)
        } else {
          // Login failed, handle the error (e.g., show error message, clear input fields, etc.)
          console.log('Login failed. Invalid credentials.')
        }
      })
      .catch(error => {
        // Handle any error that occurred during the API call
        console.error('Error occurred:', error)
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
