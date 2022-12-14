import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { useAccount } from "../providers";

const URL = `https://api.thecatapi.com/v1/images/search?limit=9`;

// apothikevoume se ena variable to url

export default function Home() {
  const account = useAccount();

  useEffect(() => {
    axios.get(URL).then((e) => {
      account.setImages(e.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <br />
      <div className="grid grid-cols-5 gap-4">
        {account.images.map((obj) => (
          <div key={obj.id} className="relative">
            <img className="w-full h-full" src={obj.url} />
            <div
              onClick={() => {
                const newList = account.images.map((im) => {
                  if (im.id === obj.id) {
                    return { ...obj, favourite: !obj.favourite };
                  } else {
                    return im;
                  }
                });
                account.setImages(newList);
              }}
              className="btn absolute z-50 bottom-0 w-full mt-4"
            >
              {obj.favourite ? "unfavourite" : "favourite"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
