import mongoose from 'mongoose';

import { Income, User } from '../models/main';

export const getMainIncome = async (req, res) => {
  const income = await Income.find().sort({ _id: -1 }).limit(1);
  // console.log(income);
  res.send(income);
  return income;
};

export const createIncome = async (req, res) => {
  const { name, amount, frequency, dateOfPayment } = req.body;
  console.log(name, amount, frequency, dateOfPayment);
  try {
    const income = await Income.create({
      name,
      amount,
      frequency,
      dateOfPayment,
    });
    res.status(200).json(income);
  } catch (error) {
    console.log(error);
  }
  console.log('Working');
};

// get accountHistory - AccountsHistory.findById(userId)
// post accountHistory - AccountsHistory.findByIdAndUpdate(_id)

// get spending - Spending.findById(userId)
// post spending - Spending.findByIdAndUpdate(_id)

// get all accounts - Accounts.findById(userId)
// get single account - Accounts.findById(_id)
// post new account
// update account
// delete account

// get total capital
// post total capital

// get all incomes
// get single income
// post new income
// update income
// delete income

// get all expenses
// get single expense
// post new expense
// update expense
// delete expense
