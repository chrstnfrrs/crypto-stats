import { goFetch } from '../adapters/fetch-adapter'
import { createCoinbaseHeaders } from '../utils/coinbase-headers-utils'

const getExchangeRates = async () => {
  const { data } = await goFetch({
    headers: createCoinbaseHeaders(),
    route: '/exchange-rates?currency=USDC'
  })

  return rates
}

export { getExchangeRates }