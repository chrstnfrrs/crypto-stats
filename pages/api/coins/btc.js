import { $fetch } from 'ohmyfetch'

const handler = async (_req, res) => {
  const {data} = await $fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')

  res.status(200).json({ data: data.rates.USD })
}

export default handler
