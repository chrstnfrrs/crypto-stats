import { getCryptos } from '../repositories/currencies-repository'
import { getExchangeRates } from '../repositories/exchange-rate-repository'

const getSupportedCryptos = async () => {
  const cryptos = await getCryptos()
  const exchangeRates = await getExchangeRates()

  const supportedCryptos = cryptos.filter((crypto) => exchangeRates[crypto.id])

  const data = supportedCryptos.map((crypto) => ({
    id: crypto.id,
    name: crypto.name,
    value: 1 / exchangeRates[crypto.id],
  }))

  return data
}

export { getSupportedCryptos }