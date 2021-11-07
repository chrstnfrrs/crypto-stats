import { $fetch } from "ohmyfetch"

const baseUrls = {
  coinbase: 'https://api.coinbase.com/v2',
  exchange: 'https://api.exchange.coinbase.com',
}

const goFetch = async ({ base = 'coinbase', route, headers }) => {
  headers = {
    ...headers,
    'CB-VERSION': '2021-08-19'
  }
  return await $fetch(`${baseUrls[base]}${route}`, { headers })
}

export { goFetch }