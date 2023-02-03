import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export enum PaymentFrequency {
  weekly,
  monthly,
}

enum PaymentDay {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

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

interface ChangeInCapital {
  id: number;
  name: string;
  amount: number;
  frequency: PaymentFrequency;
  dateOfPayment?: number;
  dayOfPayment?: PaymentDay;
}

interface UserInfo {
  id: 0;
  accounts: Accounts[];
  totalSpending: Spending;
  totalCapital: number;
  income: ChangeInCapital[];
  expenses: ChangeInCapital[];
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
      frequency: PaymentFrequency.monthly,
      dateOfPayment: 31,
    },
  ],
  expenses: [
    {
      id: 0,
      name: 'MainExpense',
      amount: 0,
      frequency: PaymentFrequency.monthly,
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
      action: PayloadAction<{ incomeName; incomeAmount; incomeDate }>,
    ) => {
      state.income[0].name = action.payload.incomeName;
      state.income[0].amount = action.payload.incomeAmount;
      state.income[0].dateOfPayment = action.payload.incomeDate;
    },
    addExpense: (
      state,
      action: PayloadAction<{
        id;
        name;
        amount;
        frequency;
        dateOfPayment?;
        dayOfPayment?;
      }>,
    ) => {
      state.expenses.push(action.payload);
    },
  },
});

export const { updateTotalCapital, updateIncome } = updateUserInfo.actions;

export default updateUserInfo.reducer;
