# Expense Tracker

Expense Tracker is a simple web application built using React to help you manage your finances. You can add and categorize your income and expenses, view totals, and filter transactions by category.

## Website Link

Website is live [here](https://trackingexpense-wb29.onrender.com)

## Features

- Add income and expenses
- Delete any transaction
- Filter transactions by category in both income and expense sections
- View totals for filtered transactions by category
- View total income, total expenses, and net income at the top of the page
- Transactions are stored locally using the browser's local storage
- Transactions gets sorted according to dates

## Project Structure

The project is created using Create React App and styled with Tailwind CSS and some custom CSS. Here is the structure of the project:
```
expense-tracker/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Maincontent.js
│ │ ├── Modal.js
│ │ ├── Total.js
│ │ ├── TransactionForm.js
│ │ └── TransactionList.js
│ ├── context/
│ │ ├── Appreducer.js
│ │ └── Globalstate.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
├── .gitignore
├── package.json
└── README.md
└── tailwind.config.js

```
### Components

1. **App.js**
   - The root component that sets up the application structure. It includes the `Header`, `Total`, and two `Maincontent` components (one for income and one for expenses).

2. **Header.js**
   - A simple header component that displays the title of the application.

3. **Maincontent.js**
   - This component manages the main content for either income or expense transactions. It includes buttons to add transactions and displays a list of transactions through the `TransactionList` component. It also includes a modal for adding transactions using the `TransactionForm` component.

4. **Modal.js**
   - A modal component that displays the `TransactionForm` when adding a new transaction.

5. **Total.js**
   - A component that calculates and displays the total income, total expenses, and net income.

6. **TransactionForm.js**
   - A form component for adding new transactions. It includes fields for the date, description, category, and amount.

7. **TransactionList.js**
   - This component displays the list of transactions. It allows filtering by category and calculates the total amount for the displayed transactions.

### Context and State Management

1. **Globalstate.js**
   - Provides a context and a provider for managing the global state of the transactions. It uses `useReducer` for state management.

2. **Appreducer.js**
   - A reducer that handles actions for getting transactions, adding a transaction, and deleting a transaction. It also sorts transactions by date whenever they are added or deleted.

### Styling

- **Tailwind CSS**: The project uses Tailwind CSS for utility-first styling. Custom styles are added in `App.css` and `index.css`.

### Local Storage

- The transactions are stored in the browser's local storage to persist data across sessions. The `Globalstate.js` file handles reading from and writing to local storage.

## Installation and Setup

1. Clone the repository:
   git clone https://github.com/thakur2002/Expense-Tracker.git
3. Navigate to the project directory:
   cd expense-tracker
4. Install the dependencies:
      npm install
5. Start the development server:
    npm start
   
## Usage
- To add a transaction, click the "Add Income" or "Add Expense" button, fill in the form, and submit.
- To delete a transaction, click the "Delete" button next to the transaction.
- To filter transactions by category, select a category from the dropdown menu.
- View total amount for filtered transactions by category
- The total income, total expenses, and net income are displayed at the top of the page.
- Transactions are stored locally using the browser's local storage

 


