import { getSession } from 'next-auth/react';

const createCoinbaseHeaders = async ({ context }) => {
  const session = await getSession(context);

  const accessToken = session.accessToken

  const headers = {
    Authorization: `Bearer ${accessToken}`
  }

  return headers
}

export { createCoinbaseHeaders }
