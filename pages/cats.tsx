import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { useAccount } from "../providers";

const URL = `https://api.thecatapi.com/v1/images/search?limit=9`;

// apothikevoume se ena variable to url

export default function Home() {
  const account = useAccount();
  // apothikevoume se ena variable tin function pou mas dinei tin dinatotita na xrisimopoioume to context

  useEffect(() => {
    axios.get(URL).then((e) => {
      account.setImages(e.data);
    });
  }, []);

  //xrisimopoioume to useEffect gia na ginei mia fora render i selida stin arxi kai meta na parthoun meso tou axios ta dedomena apo ton server kai na  apothikeftoun to global state tou context

  return (
    <div>
      <Header />
      <br />
      <div className="grid grid-cols-5 gap-4">
        {account.images.map((obj) => (
          // kanoume map ti lista me ta images kai epistrefoume ta images sin ta favourite buttons
          <div key={obj.id} className="relative">
            <img className="w-full h-full" src={obj.url} />
            <div
              onClick={() => {
                const newList = account.images.map((im) => {
                  // kanoume mesa sto button pali map tin lista me ta images
                  //  an einai to id tou element pou patisame idio me to id tou element tis listas tote epiistrefoume to element sin to kleidi  favourite
                  if (im.id === obj.id) {
                    return { ...obj, favourite: !obj.favourite };
                  } else {
                    return im;
                  }
                  // aliws epistrefoume to element opws einia
                });
                account.setImages(newList);
                // apothikevoume ti nea lista sto global state tou context
              }}
              className="btn absolute z-50 bottom-0 w-full mt-4"
            >
              {obj.favourite ? "unfavourite" : "favourite"}
              {/* otan to favourite tou object  einai true tote emfanizetai sto button to unfavourite allios emfanizetai to favourite  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
