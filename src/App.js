import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import YourTransactions from './components/YourTransactions'
import AllTransactions from './components/AllTransactions'
import AddTransaction from './components/AddTransaction'
import UpdateTransaction from './components/UpdateTransaction'
import DeleteTransaction from './components/DeleteTransaction'
import Profile from './components/Profile'
import Logout from './components/Logout'

const App = () => {
  const [role, setRole] = useState('')

  const handleLogin = userRole => {
    setRole(userRole)
  }

  const handleLogout = () => {
    setRole('')
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* Public Routes */}
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>

          {/* Private Routes */}
          {role && (
            <>
              <Sidebar role={role} />
              <Route exact path="/">
                <Dashboard role={role} />
              </Route>
              <Route path="/dashboard">
                <Dashboard role={role} />
              </Route>
              <Route path="/your-transactions">
                <YourTransactions />
              </Route>
              {role === 'admin' && (
                <>
                  <Route path="/all-transactions">
                    <AllTransactions />
                  </Route>
                  <Route path="/update-transaction/:id">
                    <UpdateTransaction />
                  </Route>
                  <Route path="/delete-transaction/:id">
                    <DeleteTransaction />
                  </Route>
                </>
              )}
              <Route path="/add-transaction">
                <AddTransaction />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/logout">
                <Logout onLogout={handleLogout} />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  )
}

export default App
