import React, {useState} from 'react'

const UpdateTransaction = ({transactionData, onUpdate, onCancel}) => {
  const [updatedTransactionData, setUpdatedTransactionData] = useState({
    transactionName: transactionData.transactionName,
    transactionType: transactionData.transactionType,
    transactionCategory: transactionData.transactionCategory,
    amount: transactionData.amount,
    date: transactionData.date,
  })

  const [showToast, setShowToast] = useState(false)

  const handleInputChange = event => {
    const {name, value} = event.target
    setUpdatedTransactionData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()

    // Perform client-side validation
    if (
      !updatedTransactionData.transactionName ||
      !updatedTransactionData.transactionType ||
      !updatedTransactionData.transactionCategory ||
      !updatedTransactionData.amount ||
      !updatedTransactionData.date
    ) {
      alert('All fields are required.')
      return
    }

    if (updatedTransactionData.transactionName.length > 30) {
      alert('Transaction Name should have a maximum of 30 characters.')
      return
    }

    const amountValue = parseFloat(updatedTransactionData.amount)
    if (isNaN(amountValue) || amountValue <= 0) {
      alert('Amount should be a numeric value greater than zero.')
      return
    }

    // Submit the updated data to the API
    try {
      const response = await fetch(
        'https://bursting-gelding-24.hasura.app/api/rest/update-transaction',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTransactionData),
        },
      )

      if (response.ok) {
        setShowToast(true)
        onUpdate(updatedTransactionData)
      } else {
        alert('Failed to update the transaction. Please try again later.')
      }
    } catch (error) {
      console.error('Error updating the transaction:', error)
      alert('Failed to update the transaction. Please try again later.')
    }
  }

  return (
    <div>
      <h1>Update Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Name:
          <input
            type="text"
            name="transactionName"
            value={updatedTransactionData.transactionName}
            onChange={handleInputChange}
            maxLength={30}
            required
          />
        </label>
        <label>
          Transaction Type:
          <select
            name="transactionType"
            value={updatedTransactionData.transactionType}
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
            value={updatedTransactionData.transactionCategory}
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
            value={updatedTransactionData.amount}
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
            value={updatedTransactionData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Update Transaction</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>

      {showToast && (
        <div>
          Transaction updated successfully.
          {/* Add styles to display toast notification */}
        </div>
      )}
    </div>
  )
}

export default UpdateTransaction
