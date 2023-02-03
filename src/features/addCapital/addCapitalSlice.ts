import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Spending {
  week: number;
  month: number;
  sixMonth: number;
  year: number;
  allTime: number;
}
interface AccountHistory {
  id: number;
  date: number;
  balance: number;
}
interface Accounts {
  id: number;
  accountName: string;
  currentBalance: number;
  accountHistory: AccountHistory[];
  spending: Spending;
}

interface Income {
  id: number;
  name: string;
  amount: number;
  dateOfPayment: number;
}

interface Expenses {
  id: number;
  name: string;
  amount: number;
  dateOfPayment: number;
}

interface UserInfo {
  id: 0;
  accounts: Accounts[];
  totalSpending: Spending;
  totalCapital: number;
  income: Income[];
  expenses: Expenses[];
}

const initialState: UserInfo = {
  id: 0,
  accounts: [
    {
      id: 0,
      accountName: 'Main',
      currentBalance: 0,
      accountHistory: [
        {
          id: 0,
          date: Date.now(),
          balance: 0,
        },
      ],
      spending: {
        week: 0,
        month: 0,
        sixMonth: 0,
        year: 0,
        allTime: 0,
      },
    },
  ],
  totalSpending: {
    week: 0,
    month: 0,
    sixMonth: 0,
    year: 0,
    allTime: 0,
  },
  totalCapital: 0,
  income: [
    {
      id: 0,
      name: 'MainIncome',
      amount: 0,
      dateOfPayment: 31,
    },
  ],
  expenses: [
    {
      id: 0,
      name: 'MainExpense',
      amount: 0,
      dateOfPayment: 31,
    },
  ],
};

const updateUserInfo = createSlice({
  name: 'addCapital',
  initialState,
  reducers: {
    updateTotalCapital: (state, action: PayloadAction<number>) => {
      state.totalCapital = action.payload;
    },
    updateIncome: (
      state,
      action: PayloadAction<{ incomeAmount; incomeDate }>,
    ) => {
      state.income[0].amount = action.payload.incomeAmount;
      state.income[0].dateOfPayment = action.payload.incomeDate;
    },
  },
});

export const { updateTotalCapital, updateIncome } = updateUserInfo.actions;

export default updateUserInfo.reducer;
