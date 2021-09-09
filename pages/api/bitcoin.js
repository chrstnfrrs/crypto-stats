import fetch from 'node-fetch'

export default async () => {
  const btc = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
  const data = await btc.json()

  console.log('data', data.data.rates.USD)

  return data.data.rates.USD
}