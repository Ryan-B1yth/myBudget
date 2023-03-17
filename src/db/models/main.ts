import mongoose from 'mongoose';

export enum PaymentFrequency {
  Weekly,
  Monthly,
}

export enum DayOfPayment {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

const Schema = mongoose.Schema;

const accountHistorySchema = new Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Accounts',
      },
    ],
    balance: {
      type: Number,
    },
  },
  { timestamps: true },
);

const spendingSchema = new Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    week: {
      type: Number,
    },
    month: {
      type: Number,
    },
    sixMonths: {
      type: Number,
    },
    year: {
      type: Number,
    },
    allTime: {
      type: Number,
    },
  },
  { timestamps: true },
);

const accountSchema = new Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    accountName: {
      type: String,
    },
    currentBalance: {
      type: Number,
    },
    accountHistroy: {
      type: Schema.Types.ObjectId,
      ref: 'AccountsHistory',
    },
  },
  { timestamps: true },
);

const changeInCapitalSchema = new Schema(
  {
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    priority: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    frequency: {
      type: Number,
      enum: PaymentFrequency,
    },
    dateOfPayment: {
      type: Number,
    },
    dayOfPayment: {
      type: String,
      enum: DayOfPayment,
    },
  },
  { timestamps: true },
);

const userSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    accounts: {
      type: Schema.Types.ObjectId,
      ref: 'Accounts',
    },
    spending: {
      type: Schema.Types.ObjectId,
      ref: 'Spending',
    },
    totalCapital: {
      type: Number,
    },
    income: {
      type: Schema.Types.ObjectId,
      ref: 'Income',
    },
    expenses: {
      type: Schema.Types.ObjectId,
      ref: 'Expenses',
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);
const Accounts = mongoose.model('Accounts', accountSchema);
const AccountsHistory = mongoose.model('AccountsHistory', accountHistorySchema);
const Spending = mongoose.model('Spending', spendingSchema);
const Income = mongoose.model('Income', changeInCapitalSchema);
const Expenses = mongoose.model('Expenses', changeInCapitalSchema);

export { User, Accounts, AccountsHistory, Income, Expenses, Spending };
