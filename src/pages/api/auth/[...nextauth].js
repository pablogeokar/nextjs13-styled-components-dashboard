import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

export default NextAuth({
  //adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credenciais de Acesso",
      type: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      /*
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "seuemail@email.com",
        },
        password: { label: "Senha", type: "password" },
      },
      */
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // Se o email ou senha não existirem então retorna null
        if (!email || !password) {
          return null;
        }

        // Localiza o usuário de acordo com o email informado
        const user = await prisma.user.findFirst({
          where: { email },
        });

        // caso não encontre usuário então retorna null
        if (!user) return null;

        // compara a senha informada e o hash salvo no banco
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        // Se o password for invalido então retorna null
        if (!passwordIsValid) return null;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: '/login'
  },
  session: {
    jwt: true,
  },
});
