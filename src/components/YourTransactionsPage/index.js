import React, {useState, useEffect} from 'react'
import './index.css'

const YourTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [activeTab, setActiveTab] = useState('all')

  // Function to fetch all transactions for the user
  const fetchTransactions = async () => {
    try {
      const response = await fetch(
        'https://bursting-gelding-24.hasura.app/api/rest/all-transactions',
      )
      const data = await response.json()
      setTransactions(data)
    } catch (error) {
      console.error('Error fetching transactions:', error)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  // Function to handle tab change
  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  // Filter transactions based on activeTab
  const filteredTransactions =
    activeTab === 'credit'
      ? transactions.filter(
          transaction => transaction.transaction_type === 'Credit',
        )
      : activeTab === 'debit'
      ? transactions.filter(
          transaction => transaction.transaction_type === 'Debit',
        )
      : transactions

  return (
    <div className="your-transactions-container">
      <div className="tabs">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => handleTabChange('all')}
        >
          All Transactions
        </button>
        <button
          className={activeTab === 'credit' ? 'active' : ''}
          onClick={() => handleTabChange('credit')}
        >
          Credit
        </button>
        <button
          className={activeTab === 'debit' ? 'active' : ''}
          onClick={() => handleTabChange('debit')}
        >
          Debit
        </button>
      </div>

      <div className="transactions-list">
        {filteredTransactions.map(transaction => (
          <div className="transaction-item" key={transaction.id}>
            <div>
              <p>Transaction Name: {transaction.transaction_name}</p>
              <p>Category: {transaction.category}</p>
              <p>Amount: {transaction.amount}</p>
              <p>Date: {transaction.date}</p>
            </div>
            <div className="transaction-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YourTransactions
