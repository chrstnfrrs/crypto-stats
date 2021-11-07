import { goFetch } from '../adapters/fetch-adapter'

const getExchangeRates = async () => {
  const { data: { rates } } = await goFetch({ route: '/exchange-rates?currency=USDC' })

  return rates
}

export { getExchangeRates }