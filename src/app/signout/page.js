import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
const signout = () => {
  return (
    <center className={styles.signedin}>
      <h2>Signing out</h2>
      <Link href="/">
        <button>Go to homepage</button>
      </Link>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
    </center>
  );
};

export default signout;
