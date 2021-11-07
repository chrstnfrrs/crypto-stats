const createCoinbaseLink = () => {
  const scopes = ['wallet:user:email', 'wallet:user:read', 'wallet:accounts:read', 'wallet:transactions:read']
  
  return `https://www.coinbase.com/oauth/authorize?scope=${scopes.join('+')}`
}

export { createCoinbaseLink }