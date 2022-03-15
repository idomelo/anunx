import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const res = await axios.post(
          "http://localhost:3000/api/auth/signin",
          credentials
        )

        const user = res.data
        console.log(user)

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin?i=1',
  },

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },
  
  database: process.env.MONGODB_URI,
})