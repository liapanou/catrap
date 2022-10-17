import axios from "axios";
import { useEffect } from "react";
import { Header } from "../components/header";
import { useAccount } from "../providers";

export default function Home() {
  const account = useAccount();

  useEffect(() => {
    axios.get("asdljkadsj").then((e) => {
      const data = e.data;
      //  {src: `https://}[]
      const myData = data.map((e) => e.src);
      account.setImages(myData);
    });
  }, []);

  return (
    <div>
      <Header />
      <br />

      <input className="input input-bordered" type="text" />
      <input className="input input-bordered" type="text" />
      <button
        onClick={() => {
          account.login(true);
        }}
        type="submit"
        className="btn"
      >
        Submit
      </button>
    </div>
  );
}
