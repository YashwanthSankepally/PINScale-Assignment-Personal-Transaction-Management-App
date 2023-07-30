import React, {useEffect, useState} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Dashboard = ({role}) => {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Make the necessary API calls based on the user's role
        let totalsApiUrl
        let recentTransactionsApiUrl
        let daywiseTotalsApiUrl

        if (role === 'admin') {
          totalsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin'
          recentTransactionsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3'
          daywiseTotalsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin'
        } else if (role === 'user') {
          totalsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals'
          recentTransactionsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3'
          daywiseTotalsApiUrl =
            'https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days'
        }

        const [
          totalsResponse,
          recentTransactionsResponse,
          daywiseTotalsResponse,
        ] = await Promise.all([
          fetch(totalsApiUrl),
          fetch(recentTransactionsApiUrl),
          fetch(daywiseTotalsApiUrl),
        ])

        const [
          totalsData,
          recentTransactionsData,
          daywiseTotalsData,
        ] = await Promise.all([
          totalsResponse.json(),
          recentTransactionsResponse.json(),
          daywiseTotalsResponse.json(),
        ])

        setDashboardData({
          totals: totalsData,
          recentTransactions: recentTransactionsData,
          daywiseTotals: daywiseTotalsData,
        })

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [role])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h1>
      {dashboardData && (
        <div>
          {/* Render total credits and total debits */}
          {role === 'admin' && (
            <div>
              <p>Total Credits: {dashboardData.totals.totalCredits}</p>
              <p>Total Debits: {dashboardData.totals.totalDebits}</p>
            </div>
          )}

          {/* Render recent transactions */}
          <div>
            <h3>Recent Transactions</h3>
            <ul>
              {dashboardData.recentTransactions.map(transaction => (
                <li key={transaction.id}>{transaction.description}</li>
              ))}
            </ul>
          </div>

          {/* Render the bar chart for daily total credits and total debits */}
          {dashboardData.daywiseTotals &&
            dashboardData.daywiseTotals.length > 0 && (
              <div>
                <h3>Daily Total Credits and Debits</h3>
                <BarChart
                  width={600}
                  height={300}
                  data={dashboardData.daywiseTotals}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="totalCredits"
                    fill="#8884d8"
                    name="Total Credits"
                  />
                  <Bar
                    dataKey="totalDebits"
                    fill="#82ca9d"
                    name="Total Debits"
                  />
                </BarChart>
              </div>
            )}
        </div>
      )}
    </div>
  )
}

export default Dashboard
