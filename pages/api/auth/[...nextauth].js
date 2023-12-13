import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise  from '@/lib/mongodb'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      scope: 'profile email',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: "mongodb+srv://mahardikadwi-ecommerce:ecommerce123@cluster0.zchr5i1.mongodb.net/next-ecommerce?retryWrites=true&w=majority",
})