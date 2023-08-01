import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import YourTransactionsPage from './components/YourTransactionsPage'
import AllTransactionsPage from './components/AllTransactionsPage'
import AddTransactionModal from './components/AddTransactionModal'
import UpdateTransactionModal from './components/UpdateTransactionModal'
import DeleteTransactionFunctionality from './components/DeleteTransactionFunctionality'
import Profile from './components/Profile'
import Logout from './components/Logout'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Public Routes */}
          <Route path="/login" component={Login} />

          {/* Protected Routes */}
          <Route path="/" exact>
            <Sidebar />
            <Dashboard />
          </Route>
          <Route path="/your-transactions" exact>
            <Sidebar />
            <YourTransactionsPage />
          </Route>
          <Route path="/all-transactions" exact>
            <Sidebar />
            <AllTransactionsPage />
          </Route>
          <Route path="/add-transaction" exact>
            <Sidebar />
            <AddTransactionModal />
          </Route>
          <Route path="/update-transaction/:id" exact>
            <Sidebar />
            <UpdateTransactionModal />
          </Route>
          <Route path="/delete-transaction/:id" exact>
            <Sidebar />
            <DeleteTransactionFunctionality />
          </Route>
          <Route path="/profile" exact>
            <Sidebar />
            <Profile />
          </Route>
          <Route path="/logout" exact>
            <Sidebar />
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
