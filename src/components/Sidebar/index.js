import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Sidebar = ({isAdmin}) => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        {isAdmin ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/all-transactions">All Transactions</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/your-transactions">Your Transactions</Link>
          </>
        )}
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </div>
  )
}

export default Sidebar
