import NextAuth from "next-auth"
import CoinbaseProvider from "next-auth/providers/coinbase"

export default NextAuth({
  // Configure one or more authentication providers
  callbacks: {
    async signIn(params) {
      console.log('params', params)
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  providers: [
    CoinbaseProvider({
      clientId: process.env.COINBASE_CLIENT_ID,
      clientSecret: process.env.COINBASE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
})
