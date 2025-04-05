import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { SupabaseAdapter } from "@auth/supabase-adapter";

console.log("process env",process.env)
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password
                //   const pwHash = saltAndHashPassword(credentials.password)

                // logic to verify if the user exists
                user = await getUserFromDb(credentials.email, credentials.password)
                console.log("authorize ", user)
                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    throw new Error("Invalid credentials.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
    adapter: SupabaseAdapter({ 
        debug:true,
        url: process.env.SUPABASE_URL,
        // secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
        secret:process.env.SUPABASE_SECRET
    }),
    // callbacks: {
    //     async session({ session, user }) {
    //       const signingSecret = process.env.SUPABASE_JWT_SECRET
    //       if (signingSecret) {
    //         const payload = {
    //           aud: "authenticated",
    //           exp: Math.floor(new Date(session.expires).getTime() / 1000),
    //           sub: user.id,
    //           email: user.email,
    //           role: "authenticated",
    //         }
    //         session.supabaseAccessToken = jwt.sign(payload, signingSecret)
    //       }
    //       return session
    //     },
    //   },
    
})

const getUserFromDb = async () => {
    return { "name": "zhou", "age": 18 }
}