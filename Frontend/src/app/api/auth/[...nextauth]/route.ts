import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import userLogin from "@/lib/userLogIn";

export const authOptions:AuthOptions={
    providers:[
        //! use Credentials Provider (got template from https://next-auth.js.org/configuration/providers/credentials)
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

              if(!credentials) return null;

              const user = await userLogin(credentials.email,credentials.password)
        
              // If no error and we have user data, return it
              if (user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          }),


    ],
    session:{strategy:'jwt'},
    callbacks:{
        async jwt({token,user}) {
            return {...token,...user}
        },
        async session({session,token,user}) {
            session.user=token as any
            return session
        }
    }
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST};