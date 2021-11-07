import { getSession } from 'next-auth/react';

import { goFetch } from "../adapters/fetch-adapter"
import { createCoinbaseHeaders } from "../utils/coinbase-headers-utils"

// ACCOUNTS
// GET https://api.coinbase.com/v2/accounts
// https://developers.coinbase.com/api/v2#list-accounts
const getAccounts = async ({ context }) => {
  try {
    const accounts = await goFetch({
      headers: await createCoinbaseHeaders({ context }),
      route: `/accounts`, 
    })
    console.log('accounts', accounts);

    return accounts
  } catch (error) {
    console.log('error', error)
  }
}

const getTransactions = async ({ id, context }) => {
  try {
    // const session = await getSession(context)
    const accounts = await goFetch({
      headers: await createCoinbaseHeaders({ context }),
      route: `/accounts/${id}/transactions`, 
    })
    accounts.data.forEach((a) => {
      console.log(a.details)
    })
    // console.log('accounts', );

    return accounts
  } catch (error) {
    console.log('error', error)
  }
}

// ACCOUNT
// https://api.coinbase.com/v2/accounts/:account_id
// https://developers.coinbase.com/api/v2#show-an-account
const getAccount = async ({ id }) => {
  const { data: account } = await goFetch({
    headers: await createCoinbaseHeaders(),
    route: `/accounts/${id}`
  })

  return account
}

export {
  getAccount,
  getAccounts,
  getTransactions
}