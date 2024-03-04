"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/app/styles/common.module.css";
import Head from "next/head";
import { metadata } from "@/app/signin/metadata";
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h3>signed in as {session.user.email}</h3>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className={styles.signinContainer}>
        <div className={styles.maincontainerSignin}>
          <h2>You are not Signed in </h2>
          <h3 className={styles.htag}>sign in using </h3>
          <br />
          <div className={styles.provider}>
            {" "}
            <button
              onClick={() => signIn("github")}
              className={styles.providerbutton}
            >
              Github
            </button>
            <button
              onClick={() => signIn("google")}
              className={styles.providerbutton}
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
