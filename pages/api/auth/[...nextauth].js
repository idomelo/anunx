import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
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