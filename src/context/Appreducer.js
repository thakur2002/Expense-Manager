const sortTransactionsByDate = (transactions) => {
  return transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export default (state, action) => {
    switch(action.type) {
      case 'GET_TRANSACTIONS':
        return {
          ...state,
          loading: false,
          transactions: action.payload
        }
      case 'DELETE_TRANSACTION':
        let updatedTransactions = state.transactions.filter(transaction => transaction._id !== action.payload);
        updatedTransactions=sortTransactionsByDate(updatedTransactions)
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        return {
          ...state,
          transactions: updatedTransactions
        }
      case 'ADD_TRANSACTION':
        let newTransactions = [...state.transactions, action.payload];
        newTransactions=sortTransactionsByDate(newTransactions)
        localStorage.setItem('transactions', JSON.stringify(newTransactions));
        return {
          ...state,
          transactions: newTransactions
        }
      case 'TRANSACTION_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }
  