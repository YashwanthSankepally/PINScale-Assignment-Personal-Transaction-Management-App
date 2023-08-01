# Assignment

### Common Instructions:

1. Add Loading and Failure views for all the APIs.
2. Develop the UI exactly as in the Design screens.
3. Do client-side validations for all the input fields, forms, and request and response objects for API calls.
4. The UI should be responsive. The screens are not given, and the design is your call. You can achieve responsiveness using media queries, flex properties, etc.
5. Deploy your website in a public URL using Github Pages and share it in the README.md file of the project. If you don’t know how to deploy, you can follow the below video **How To Deploy A React App To Github Pages:** https://youtu.be/Q9n2mLqXFpU
6. [Figma Reference](https://www.youtube.com/watch?v=hbN9RGcQFNU)

- **APIs**
  You can check the Usage of all the APIs in the Postman Collection [here](https://www.postman.com/interstellar-firefly-777826/workspace/money-matters/collection/28254623-dcd2cdfa-4af1-49f5-bd68-a7218aedc5e7?action=share&creator=28256022).
  How to use Postman - https://www.youtube.com/watch?v=CLG0ha_a0q8&ab_channel=CodeBlessYou
    <aside>
    ⛔ As these are Public APIs, the responses will contain transactions added by other users too
    
    </aside>
    
    **API Headers**
    
    - Admin User
        
        ```jsx
        x-hasura-admin-secret: g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzY
        x-hasura-role: admin
        ```
        
    - Non-Admin User
        
        ```jsx
        x-hasura-role: user
        // Fetch the user id by providing the login credentials to Get User Id API
        x-hasura-user-id: <user_id>
        ```
        
    
    <aside>
    ⛔ Ensure that the required headers are added to the API request object and role is provided as expected for the given user in the headers
    
    </aside>


### Description:

You have to develop a Personal Transaction Management App. This role-based portal will handle a user's personal transaction record, and an Admin User should be able to view all the transactions recorded across the App

1. **Login**

   - **Admin User**
     - Admin User should be able to log in using the below credentials
       **Email:** `admin@gmail.com`
       **Password:** Admin@123
   - **Non-Admin User**
     - The user should be able to Login Using the following credentials
     - **Users**
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
   - **Validations**
     - Email - The value provided should be in e-mail format
     - Password - The password should be masked

   **Screen Link:** Design is left to your choice

   **API:** https://bursting-gelding-24.hasura.app/api/rest/get-user-id

2. **Sidebar**
   - After Logging in to the application, the user should be able to see and navigate to all the pages available to him based on his role
     **Admin User:**
     - Dashboard
     - All Transactions
     - Profile
     - Logout
     **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev
     **Non-Admin User:**
     - Dashboard
     - Your Transactions
     - Profile
     - Logout
     **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev
3. **Dashboard**
   - After Logging in to the application, the user should be navigated to this page by default
   - **Admin User** should be able to view the following on the page
     - **Total Credit** and **Total Debit** amounts of all the users
     - **Recent three transactions** are done in the app (Sorted based on the transaction date)
     - A **Bar Chart** showing the daily total credit and total debt of all the users in the last 7 days
     **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev
     - **Admin User Dashboard APIs:**
       **Get Total Credits And Total Debits** - https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin
       **Recent 3 transactions:** https://bursting-gelding-24.hasura.app/api/rest/all-transactions (Paginate this api to get the recent 3 transactions)
       **Get Last 7 days Daily Credit And Debit -** https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin
   - **Non-Admin Users** should be able to view the following on the page
     - **Total Credit** and **Total Debit** amount of the user
     - **Recent 3 transactions** done by the user (Sort based on the transaction date)
     - A **Bar Chart** showing the daily total credit and total debit of the user in the last week
     **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev
     - **Non-Admin User Dashboard APIs:**
       **Get Total Credits And Total Debits** - https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals
       **Recent 3 transactions:** https://bursting-gelding-24.hasura.app/api/rest/all-transactions (Paginate this API to get the recent 3 transactions)
       **Get the Last 7 days’ Daily Credit And Debit -** https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days
4. **Your Transactions - Non-Admin User Only**

   - When the page is opened, the user should be able to see the following Tabs
     - All Transactions - Displays the list of all the transactions done by the user
     - Credit - Displays the list of **Credit** type of transactions done by the user
     - Debit - Displays list of the **Debit** type of transactions done by the user
   - The list of transactions should be an infinite scroll pagination list
   - Each Transaction should consist of the following details
     - Transaction Name
     - Category
     - Amount
     - Date
     - Option to Update or Delete the Transaction
   - The user should be able to update a transaction by clicking on the Edit Button on the transaction
   - **Screen Links:**
     **All Transactions:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev
     **Credit:** [https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters? type=design&node-id=1-3892&mode=dev](https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev)
     **Debit:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/all-transactions

5. **All Transactions - Admin User Only**

   - When the page is opened, the user should be able to see the following Tabs
     - All Transactions - Displays the list of all the transactions done by all the users
     - Credit - Displays the list of **Credit** type of transactions done by all the users
     - Debit - Displays list of the **Debit** type of transactions done by all the users
   - The list of transactions should be an infinite scroll pagination list
   - Each Transaction should consist of the following details
     - User Name
     - Transaction Name
     - Category
     - Amount
     - Date
   - **Screen Link:**
     **All Transactions:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2545&mode=dev
     **Credit:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3892&mode=dev
     **Debit:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-4034&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/all-transactions

6. **Add Transaction**

   - Only Non-Admin users should be able to view the **Add Transaction** button in the header
   - When the user clicks on **Add Transaction** a pop-up should be shown to enter the following details
     - Transaction Name- Input type **Text**
     - Transaction Type - Input type **Select** with options Credit, Debit
     - Transaction Category - Input type **Select** with options Entertainment, Food, Shopping, etc…
     - Amount - Input type Number
     - Date - Input type Date
     - **Validations**
       - All the above-mentioned fields are required(\*)
       - **Transaction Name -** This field should have a maximum of 30 characters
       - **Amount -** Should only accept numeric values and the value should always be greater than zero
   - Once the user has added a transaction successfully show a toast saying the same
   - The newly added transaction should be displayed in the list of transactions
   - Newly updated total amounts should be displayed in the **Dashboard**

   **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-1492&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/add-transaction

7. **Update Transaction**

   - Only Non-Admin users should be able to update an existing transaction, by clicking on the edit icon on any existing transaction
   - When the user clicks on **Edit Icon** a pop-up should be shown to enter the following details
     - Transaction Name- Input type **Text**
     - Transaction Type - Input type **Select** with options Credit, Debit
     - Transaction Category - Input type **Select** with options Entertainment, Food, Shopping, etc…
     - Amount - Input type Number
     - Date - Input type Date
     - **Validations**
       - All the above-mentioned fields are required(\*)
       - **Transaction Name -** This field should have a maximum of 30 characters
       - **Amount -** Should only accept numeric values and the value should always be greater than zero
   - Once the user has updated a transaction successfully show a toast saying the same
   - The updated transaction details should be reflected in the list of transactions
   - Newly updated total amounts should be displayed in the **Dashboard**

   **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3602&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/update-transaction

8. **Delete Transaction**

   - Only Non-Admin users should be able to delete an existing transaction, by clicking on the delete icon on any existing transaction
   - When the user clicks on the **Delete** Icon show a confirmation pop-up for the action
   - Once the user has updated a transaction successfully show a toast saying the same
   - Newly updated total amounts should be displayed in the **Dashboard**

   **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2759&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/delete-transaction

9. **Profile**

   - When the user opens the profile page, the user should be able to view the following details
     - Profile Icon
     - Name
     - Username
     - Email
     - Date Of Birth

   **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-2162&mode=dev

   **API:** https://bursting-gelding-24.hasura.app/api/rest/profile

10. **Logout**

    - When the user clicks logout, show a confirmation pop-up for the action
    - Once the user logs out of the application, the user should not be able to access any of the authenticated pages

    **Screen Link:** https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/Money-Matters?type=design&node-id=1-3038&mode=dev
