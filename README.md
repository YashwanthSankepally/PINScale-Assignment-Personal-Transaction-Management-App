# Personal Transaction Management App

## Description

This is a Personal Transaction Management App that allows users to record their personal transactions. The app includes role-based access, where an Admin User can view all transactions recorded across the application.

### Login

#### Admin User

Admin User can log in using the following credentials:

- **Email:** `admin@gmail.com`
- **Password:** Admin@123

#### Non-Admin Users

Non-Admin Users can log in using the following credentials:

| Email              | Password     | User Id |
| ------------------ | ------------ | ------- |
| jane.doe@gmail.com | janedoe@123  | 1       |
| samsmith@gmail.com | samsmith@123 | 2       |
| rahul@gmail.com    | rahul@123    | 4       |
| teja@gmail.com     | teja@123     | 5       |
| loki@gmail.com     | loki@123     | 6       |
| ramesh@gmail.com   | ramesh@123   | 7       |
| suresh@gmail.com   | suresh@123   | 8       |
| prem@gmail.com     | prem@123     | 9       |
| piyush@gmail.com   | piyush@123   | 10      |
| isha@gmail.com     | isha@123     | 12      |
| seema@gmail.com    | seema@123    | 14      |
| seema@123          | arjun@123    | 15      |
| radha@gmail.com    | radha@123    | 16      |
| phani@gmail.com    | phani@123    | 17      |

### Validations

- Email: The value provided should be in e-mail format.
- Password: The password should be masked.

## Screen Link

Design is left to your choice.

## API

The application interacts with the following API:

- **API URL:** `https://bursting-gelding-24.hasura.app/api/rest/get-user-id`

## Getting Started

To get started with the Personal Transaction Management App, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/personal-transaction-app.git
   ```

## Sidebar

After logging in to the application, the user will be presented with a sidebar that allows them to easily navigate to all the pages available to them based on their role.

### Admin User:

- Dashboard
- All Transactions
- Profile
- Logout

**Screen Link:** [Figma - Admin User](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)

### Non-Admin User:

- Dashboard
- Your Transactions
- Profile
- Logout

**Screen Link:** [Figma - Non-Admin User](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)

## Dashboard

After logging in to the application, the user should be navigated to this page by default. The content displayed on the Dashboard varies depending on the user's role.

### Admin User:

- Total Credit and Total Debit amounts of all the users.
- Recent three transactions sorted based on the transaction date.
- A Bar Chart showing the daily total credit and total debt of all the users in the last 7 days.

![Admin User Dashboard](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)

**Admin User Dashboard APIs:**

- Get Total Credits And Total Debits: [https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin](https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin)
- Recent 3 transactions: [https://bursting-gelding-24.hasura.app/api/rest/all-transactions](https://bursting-gelding-24.hasura.app/api/rest/all-transactions) (Paginate this API to get the recent 3 transactions)
- Get Last 7 days Daily Credit And Debit: [https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin](https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin)

### Non-Admin Users:

- Total Credit and Total Debit amount of the user.
- Recent 3 transactions done by the user sorted based on the transaction date.
- A Bar Chart showing the daily total credit and total debit of the user in the last week.

![Non-Admin User Dashboard](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)

**Non-Admin User Dashboard APIs:**

- Get Total Credits And Total Debits: [https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals](https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals)
- Recent 3 transactions: [https://bursting-gelding-24.hasura.app/api/rest/all-transactions](https://bursting-gelding-24.hasura.app/api/rest/all-transactions) (Paginate this API to get the recent 3 transactions)
- Get the Last 7 days’ Daily Credit And Debit: [https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days](https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days)

## Your Transactions - Non-Admin User Only

When the page is opened, the user should be able to see the following Tabs:

- All Transactions: Displays the list of all the transactions done by the user.
- Credit: Displays the list of **Credit** type of transactions done by the user.
- Debit: Displays the list of the **Debit** type of transactions done by the user.

The list of transactions should be an infinite scroll pagination list, allowing the user to scroll through transactions seamlessly.

Each Transaction should consist of the following details:

- Transaction Name
- Category
- Amount
- Date
- Option to Update or Delete the Transaction

The user should be able to update a transaction by clicking on the Edit Button on the transaction.

**Screen Links:**

- All Transactions: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)
- Credit: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev)
- Debit: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/all-transactions](https://bursting-gelding-24.hasura.app/api/rest/all-transactions)

## All Transactions - Admin User Only

When the page is opened, the admin user should be able to see the following Tabs:

- All Transactions: Displays the list of all the transactions done by all the users.
- Credit: Displays the list of **Credit** type of transactions done by all the users.
- Debit: Displays the list of the **Debit** type of transactions done by all the users.

The list of transactions should be an infinite scroll pagination list, allowing the admin user to scroll through transactions seamlessly.

Each Transaction should consist of the following details:

- User Name
- Transaction Name
- Category
- Amount
- Date

**Screen Links:**

- All Transactions: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2545&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2545&mode=dev)
- Credit: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev)
- Debit: [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/all-transactions](https://bursting-gelding-24.hasura.app/api/rest/all-transactions)

## Add Transaction

Only Non-Admin users should be able to view the **Add Transaction** button in the header. When the user clicks on **Add Transaction**, a pop-up should be shown to enter the following details:

- Transaction Name - Input type **Text**
- Transaction Type - Input type **Select** with options Credit, Debit
- Transaction Category - Input type **Select** with options Entertainment, Food, Shopping, etc…
- Amount - Input type Number
- Date - Input type Date

**Validations:**

- All the above-mentioned fields are required(\*)
- **Transaction Name -** This field should have a maximum of 30 characters
- **Amount -** Should only accept numeric values, and the value should always be greater than zero

Once the user has added a transaction successfully, a toast should be displayed saying the same. The newly added transaction should be displayed in the list of transactions, and the newly updated total amounts should be displayed in the **Dashboard**.

**Screen Link:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/add-transaction](https://bursting-gelding-24.hasura.app/api/rest/add-transaction)

## Update Transaction

Only Non-Admin users should be able to update an existing transaction by clicking on the edit icon on any existing transaction. When the user clicks on the **Edit Icon**, a pop-up should be shown to enter the following details:

- Transaction Name - Input type **Text**
- Transaction Type - Input type **Select** with options Credit, Debit
- Transaction Category - Input type **Select** with options Entertainment, Food, Shopping, etc…
- Amount - Input type Number
- Date - Input type Date

**Validations:**

- All the above-mentioned fields are required(\*)
- **Transaction Name -** This field should have a maximum of 30 characters
- **Amount -** Should only accept numeric values, and the value should always be greater than zero

Once the user has updated a transaction successfully, a toast should be displayed saying the same. The updated transaction details should be reflected in the list of transactions, and the newly updated total amounts should be displayed in the **Dashboard**.

**Screen Link:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3602&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3602&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/update-transaction](https://bursting-gelding-24.hasura.app/api/rest/update-transaction)

## Delete Transaction

Only Non-Admin users should be able to delete an existing transaction by clicking on the delete icon on any existing transaction. When the user clicks on the **Delete Icon**, show a confirmation pop-up for the action.

Once the user has deleted a transaction successfully, a toast should be displayed saying the same. The newly updated total amounts should be displayed in the **Dashboard**.

**Screen Link:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2759&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2759&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/delete-transaction](https://bursting-gelding-24.hasura.app/api/rest/delete-transaction)

## Profile

When the user opens the profile page, the user should be able to view the following details:

- Profile Icon
- Name
- Username
- Email
- Date Of Birth

**Screen Link:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2162&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2162&mode=dev)

**API:** [https://bursting-gelding-24.hasura.app/api/rest/profile](https://bursting-gelding-24.hasura.app/api/rest/profile)

## Logout

When the user clicks logout, show a confirmation pop-up for the action. Once the user logs out of the application, the user should not be able to access any of the authenticated pages.

**Screen Link:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3038&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3038&mode=dev)
