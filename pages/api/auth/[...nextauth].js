import NextAuth from 'next-auth';
import CoinbaseProvider from 'next-auth/providers/coinbase';
import { createCoinbaseLink } from '../../../server/utils/coinbase-link-utils';

export default NextAuth({
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.accountId = token.accountId;
      return session;
    },
    redirect({ url, baseUrl }) {
      const isAuthRoute = ['admin'].some((route) => url.endsWith(route));

      if (isAuthRoute) {
        return baseUrl;
      }

      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async signIn({ user, credentials, account, profile }) {
      return true;
    },
  },
  providers: [
    CoinbaseProvider({
      authorization: createCoinbaseLink(),
      clientId: process.env.COINBASE_CLIENT_ID,
      clientSecret: process.env.COINBASE_CLIENT_SECRET,
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
});
