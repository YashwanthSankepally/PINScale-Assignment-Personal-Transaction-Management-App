import React from 'react'
import './index.css'

const Logout = () => {
  const handleLogout = () => {
    // Show a confirmation pop-up before logging out
    const shouldLogout = window.confirm('Are you sure you want to logout?')

    if (shouldLogout) {
      // Perform logout action (e.g., clear authentication token or session data)
      // For example, if you are using local storage for token-based authentication:
      localStorage.removeItem('access_token')

      // Redirect the user to the login page or any other appropriate page after logout
      window.location.href = '/login' // Replace '/login' with your desired logout destination
    }
  }

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
