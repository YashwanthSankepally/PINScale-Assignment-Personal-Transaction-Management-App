import React, {useState} from 'react'

const AddTransaction = ({onTransactionAdded}) => {
  const [transactionData, setTransactionData] = useState({
    transactionName: '',
    transactionType: '',
    transactionCategory: '',
    amount: '',
    date: '',
  })

  const [showToast, setShowToast] = useState(false)

  const handleInputChange = event => {
    const {name, value} = event.target
    setTransactionData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    // Perform client-side validation
    if (
      !transactionData.transactionName ||
      !transactionData.transactionType ||
      !transactionData.transactionCategory ||
      !transactionData.amount ||
      !transactionData.date
    ) {
      alert('All fields are required.')
      return
    }

    if (transactionData.transactionName.length > 30) {
      alert('Transaction Name should have a maximum of 30 characters.')
      return
    }

    const amountValue = parseFloat(transactionData.amount)
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Amount should be a numeric value greater than zero.')
      return
    }

    // Submit the data to the API
    try {
      const response = await fetch(
        'https://bursting-gelding-24.hasura.app/api/rest/add-transaction',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transactionData),
        },
      )

      if (response.ok) {
        setShowToast(true)
        onTransactionAdded()
      } else {
        alert('Failed to add the transaction. Please try again later.')
      }
    } catch (error) {
      console.error('Error adding the transaction:', error)
      alert('Failed to add the transaction. Please try again later.')
    }
  }

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Name:
          <input
            type="text"
            name="transactionName"
            value={transactionData.transactionName}
            onChange={handleInputChange}
            maxLength={30}
            required
          />
        </label>
        <label>
          Transaction Type:
          <select
            name="transactionType"
            value={transactionData.transactionType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Transaction Type</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </label>
        <label>
          Transaction Category:
          <select
            name="transactionCategory"
            value={transactionData.transactionCategory}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Transaction Category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={transactionData.amount}
            onChange={handleInputChange}
            min="0.01"
            step="0.01"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={transactionData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>

      {showToast && (
        <div>
          Transaction added successfully.
          {/* Add styles to display toast notification */}
        </div>
      )}
    </div>
  )
}

export default AddTransaction
