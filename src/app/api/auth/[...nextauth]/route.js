import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: "6e1f1f40939a75bcf7f4",
      clientSecret: "34f2ddc7a146fda05e32f5fd9c6a803c98150423",
    }),
    GoogleProvider({
      clientId:
        "80375417783-iudrprnsiddhoa33ln6gt9irad7elvc0.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { handler as GET, handler as POST };
