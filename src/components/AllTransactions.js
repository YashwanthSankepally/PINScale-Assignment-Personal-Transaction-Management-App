import React, {useEffect, useState} from 'react'

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [selectedTab, setSelectedTab] = useState('all')
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)

  const pageSize = 10 // Number of transactions to load per page
  let currentPage = 1

  const loadTransactions = async page => {
    try {
      const response = await fetch(
        `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?page=${page}`,
      )
      const data = await response.json()

      // If data is empty or fewer than pageSize, it means we have loaded all transactions
      setHasMore(data.length >= pageSize)

      // If it's the first page, set transactions to data, otherwise append new data to existing transactions
      setTransactions(prevTransactions =>
        page === 1 ? data : [...prevTransactions, ...data],
      )

      setLoading(false)
    } catch (error) {
      console.error('Error fetching transactions:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    loadTransactions(currentPage)
  }, [])

  const handleLoadMore = () => {
    if (hasMore) {
      currentPage++
      setLoading(true)
      loadTransactions(currentPage)
    }
  }

  const handleTabClick = tab => {
    setSelectedTab(tab)
  }

  const filteredTransactions =
    selectedTab === 'credit'
      ? transactions.filter(transaction => transaction.type === 'credit')
      : selectedTab === 'debit'
      ? transactions.filter(transaction => transaction.type === 'debit')
      : transactions

  return (
    <div>
      <h1>All Transactions</h1>
      <div>
        <button onClick={() => handleTabClick('all')}>All Transactions</button>
        <button onClick={() => handleTabClick('credit')}>Credit</button>
        <button onClick={() => handleTabClick('debit')}>Debit</button>
      </div>

      <ul>
        {filteredTransactions.map(transaction => (
          <li key={transaction.id}>
            <p>User Name: {transaction.userName}</p>
            <p>Transaction Name: {transaction.name}</p>
            <p>Category: {transaction.category}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </li>
        ))}
      </ul>

      {loading && <div>Loading...</div>}
      {!loading && !hasMore && <div>No more transactions to load.</div>}

      {/* Add a Load More button if there are more transactions to load */}
      {hasMore && !loading && (
        <button onClick={handleLoadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  )
}

export default AllTransactions
