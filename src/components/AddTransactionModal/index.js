import React, {useState} from 'react'
import './index.css'

const AddTransactionModal = ({onAddTransaction}) => {
  const [transactionName, setTransactionName] = useState('')
  const [transactionType, setTransactionType] = useState('Credit')
  const [transactionCategory, setTransactionCategory] = useState(
    'Entertainment',
  )
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState('')

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    if (!transactionName || !amount || !date) {
      setError('All fields are required')
    } else if (transactionName.length > 30) {
      setError('Transaction Name should have a maximum of 30 characters')
    } else if (isNaN(amount) || Number(amount) <= 0) {
      setError('Amount should be a numeric value greater than zero')
    } else {
      setError('')
      const newTransaction = {
        transaction_name: transactionName,
        transaction_type: transactionType,
        category: transactionCategory,
        amount: parseFloat(amount),
        date,
      }
      // Call the callback function to add the transaction
      onAddTransaction(newTransaction)
      // Clear the form fields after successful submission
      setTransactionName('')
      setTransactionType('Credit')
      setTransactionCategory('Entertainment')
      setAmount('')
      setDate('')
    }
  }

  return (
    <div className="add-transaction-modal">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Transaction Name:</label>
          <input
            type="text"
            value={transactionName}
            onChange={e => setTransactionName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={e => setTransactionType(e.target.value)}
          >
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div className="form-group">
          <label>Transaction Category:</label>
          <select
            value={transactionCategory}
            onChange={e => setTransactionCategory(e.target.value)}
          >
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  )
}

export default AddTransactionModal
