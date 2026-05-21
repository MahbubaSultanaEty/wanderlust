import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("wanderlust");

export const auth = betterAuth({
   trustedOrigins: ["https://wanderlust-delta-two.vercel.app"],
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOLGE_CLIENT_SECRET
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      // max 7 days
      maxAge: 7 * 24* 60 *60
}
  },
  plugins: [
    jwt()
  ]
});
