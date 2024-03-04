"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/app/styles/common.module.css";
export default function Component() {
  const { data: session } = useSession();
  console.log(session);
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
      <div className={styles.signinContainer}>
        <div className={styles.maincontainerSignin}>
          <h2>You are not Signed in </h2>
          <h3 className={styles.htag}>sign in using </h3>
          <br />
          <div className={styles.provider}>
            {" "}
            <button
              button
              onClick={() => signIn("github")}
              className={styles.providerbutton}
            >
              Github
            </button>
            <button
              button
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