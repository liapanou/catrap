import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { useAccount } from "../providers";

const URL = `https://api.thecatapi.com/v1/images/search?limit=9`;

// apothikevoume se ena variable to url

export default function Home() {
  const account = useAccount();
  // apothikevoume se ena variable tin function pou mas dinei tin dinatotita na xrisimopoioume to context
  const isEmpty = account.images.filter((obj) => obj.favourite).length === 0;
  // an den eho favourite na dixnei den exeis favourites
  return (
    <div>
      <Header />
      <br />
      {isEmpty ? "no favourites" : null}
      <div className="grid grid-cols-5 gap-4">
        {account.images
          .filter((obj) => obj.favourite)
          // prin kanoume tin idia diadikasia  kanoume filter tin lista etsi oste na epistrefei mono ta images pou ehoun favourite true
          .map((obj) => (
            <div className="relative">
              <img className="w-full h-full" src={obj.url} />
              <div
                onClick={() => {
                  const newList = account.images.map((im) => {
                    // kanoume mia kainourgia lista me allagmeno mono to element pou patisame os pros to favourite
                    //  an einai to id tou element pou patisame idio me to id tou element tis listas tote epistrefoume to element  pou patisame allagmeno os pros to kleidi  favourite
                    if (im.id === obj.id) {
                      return { ...obj, favourite: false };
                    } else {
                      return im;
                    }
                    // aliws epistrefoume to element opws einia
                  });
                  account.setImages(newList);
                  // apothikevoume ti nea lista sto global state tou context kai allazei to state opote ginetai rerender
                }}
                className="btn absolute z-50 bottom-0 w-full mt-4"
              >
                unfavourite
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
