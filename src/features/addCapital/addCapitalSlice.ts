import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Accounts {
  accountName: string;
  currentBalance: number;
  accountHistory: AccountHistory[];
}

interface AccountHistory {
  date: number;
  balance: number;
}

interface Income {
  name: string;
  amount: number;
  dateOfPayment: number;
}

interface Expenses {
  name: string;
  amount: number;
  dateOfPayment: number;
}

interface UserInfo {
  accounts: Accounts[];
  spending: {
    week: number;
    month: number;
    sixMonth: number;
    year: number;
    allTime: number;
  };
  totalCapital: number;
  income: Income[];
  expenses: Expenses[];
}

const initialState: UserInfo = {
  accounts: [
    {
      accountName: 'Main',
      currentBalance: 0,
      accountHistory: [
        {
          date: Date.now(),
          balance: 0,
        },
      ],
    },
  ],
  spending: {
    week: 0,
    month: 0,
    sixMonth: 0,
    year: 0,
    allTime: 0,
  },
  totalCapital: 0,
  income: [
    {
      name: 'MainIncome',
      amount: 0,
      dateOfPayment: 31,
    },
  ],
  expenses: [
    {
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
  },
});

export const { updateTotalCapital } = updateUserInfo.actions;

export default updateUserInfo.reducer;
