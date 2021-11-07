import { getAccounts, getTransactions } from "../repositories/accounts-repository"

const getUserAccountInfo = async ({ context }) => {
  const { data: accounts } = await getAccounts({ context })

  const { id } = accounts.find((acc) => acc.id.length > 5)

  const data = await getTransactions({ id, context })

  // const usedWallets = accounts.filter((account) => account.balance.amount)

  return data
}

export {
  getUserAccountInfo
}
