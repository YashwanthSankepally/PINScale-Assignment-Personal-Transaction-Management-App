import React, {useState} from 'react'

const DeleteTransaction = ({transactionId, onDelete}) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleDelete = async () => {
    try {
      // Send a request to the API to delete the transaction with the given transactionId
      const response = await fetch(
        `https://bursting-gelding-24.hasura.app/api/rest/delete-transaction/${transactionId}`,
        {
          method: 'DELETE',
        },
      )

      if (response.ok) {
        setShowToast(true)
        onDelete(transactionId) // Notify the parent component to update the transactions list
      } else {
        alert('Failed to delete the transaction. Please try again later.')
      }
    } catch (error) {
      console.error('Error deleting the transaction:', error)
      alert('Failed to delete the transaction. Please try again later.')
    }
  }

  const handleConfirmDelete = () => {
    handleDelete()
    setShowConfirmation(false) // Hide the confirmation pop-up after deletion
  }

  const handleCancelDelete = () => {
    setShowConfirmation(false) // Hide the confirmation pop-up if the user cancels deletion
  }

  return (
    <div>
      <h1>Delete Transaction</h1>
      {showConfirmation && (
        <div>
          <p>Are you sure you want to delete this transaction?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}

      {!showConfirmation && (
        <button onClick={() => setShowConfirmation(true)}>
          Delete Transaction
        </button>
      )}

      {showToast && (
        <div>
          Transaction deleted successfully.
          {/* Add styles to display toast notification */}
        </div>
      )}
    </div>
  )
}

export default DeleteTransaction
