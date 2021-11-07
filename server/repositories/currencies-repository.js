import { goFetch } from '../adapters/fetch-adapter'

const getCryptos = async () => {
  const currencies = await goFetch({ base: 'exchange', route: '/currencies' })

  const cryptos = currencies.filter((currency) => currency.details.type === 'crypto')
  
  const sortedCryptos = cryptos.sort((a, b) => a.details.sort_order - b.details.sort_order)

  return sortedCryptos
}

export { getCryptos }
