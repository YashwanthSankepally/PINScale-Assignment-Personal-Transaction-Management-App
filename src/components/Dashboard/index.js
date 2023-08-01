import React, {useState, useEffect} from 'react'
import Chart from 'chart.js'
import './index.css'

const Dashboard = ({isAdmin}) => {
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalDebit, setTotalDebit] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState([])
  const [dailyChartData, setDailyChartData] = useState([])

  // Function to fetch data from API based on user role (admin or non-admin)
  const fetchData = async () => {
    try {
      let totalCreditsApiUrl
      let totalDebitsApiUrl
      let recentTransactionsApiUrl
      let dailyChartDataApiUrl

      if (isAdmin) {
        totalCreditsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin?transaction_type=credit'
        totalDebitsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin?transaction_type=debit'
        recentTransactionsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/all-transactions?page=1&limit=3'
        dailyChartDataApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin'
      } else {
        totalCreditsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals?type=credit'
        totalDebitsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals?type=debit'
        recentTransactionsApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/all-transactions?page=1&limit=3'
        dailyChartDataApiUrl =
          'https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days'
      }

      const [
        totalCreditsResponse,
        totalDebitsResponse,
        recentTransactionsResponse,
        dailyChartDataResponse,
      ] = await Promise.all([
        fetch(totalCreditsApiUrl),
        fetch(totalDebitsApiUrl),
        fetch(recentTransactionsApiUrl),
        fetch(dailyChartDataApiUrl),
      ])

      const [
        totalCreditsData,
        totalDebitsData,
        recentTransactionsData,
        dailyChartData,
      ] = await Promise.all([
        totalCreditsResponse.json(),
        totalDebitsResponse.json(),
        recentTransactionsResponse.json(),
        dailyChartDataResponse.json(),
      ])

      setTotalCredit(totalCreditsData.total)
      setTotalDebit(totalDebitsData.total)
      setRecentTransactions(recentTransactionsData)
      setDailyChartData(dailyChartData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [isAdmin])

  return (
    <div className="dashboard-container">
      <div className="total-credit-debit">
        <div>
          <h3>Total Credit</h3>
          <p>{totalCredit}</p>
        </div>
        <div>
          <h3>Total Debit</h3>
          <p>{totalDebit}</p>
        </div>
      </div>

      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          {recentTransactions.map(transaction => (
            <li key={transaction.id}>
              {transaction.transaction_name} - {transaction.transaction_type} -{' '}
              {transaction.amount}
            </li>
          ))}
        </ul>
      </div>

      <div className="daily-chart">
        <h3>Daily Chart</h3>
        <BarChart width={600} height={300} data={dailyChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="credit" fill="#8884d8" name="Credit" />
          <Bar dataKey="debit" fill="#82ca9d" name="Debit" />
        </BarChart>
      </div>
    </div>
  )
}

export default Dashboard
