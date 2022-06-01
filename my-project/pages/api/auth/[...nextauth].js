import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.VPxjSf83SS-y6OymIFLjmQ,
      clientSecret: process.env.bZdwZAUV2LgVKEKLWTO-bTmRX5yQKQ,
    }),
    // ...add more providers here
  ],
})