import { useState } from "react";
import { Header } from "../components/header";
import { useAccount } from "../providers";

export default function Login() {
  const account = useAccount();
  const userName = account?.username;

  return (
    <div>
      <Header />
      {/* <div>loggedIn: {loggedIn ? "true" : "false"}</div> */}
      <div onClick={() =>} className="btn">
        login
      </div>
    </div>
  );
}
