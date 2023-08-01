import React, {useState} from 'react'
import './index.css'

const DeleteTransaction = ({transactionId, onDeleteTransaction}) => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Function to handle delete button click
  const handleDeleteClick = () => {
    setShowConfirmation(true)
  }

  // Function to handle cancel button click
  const handleCancelClick = () => {
    setShowConfirmation(false)
  }

  // Function to handle confirm delete button click
  const handleConfirmDeleteClick = () => {
    // Call the callback function to delete the transaction
    onDeleteTransaction(transactionId)
    setShowConfirmation(false)
  }

  return (
    <div className="delete-transaction">
      {showConfirmation ? (
        <div className="confirmation">
          <p>Are you sure you want to delete this transaction?</p>
          <div className="confirmation-buttons">
            <button onClick={handleConfirmDeleteClick}>Yes, Delete</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="delete-icon" onClick={handleDeleteClick}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      )}
    </div>
  )
}

export default DeleteTransaction
