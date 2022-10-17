import Link from "next/link";
import clsx from "clsx";
import { useAccount } from "../../providers";

export function Header() {
  const account = useAccount();

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1"></div>
      <div className="flex gap-x-2">
        <Link href="/">
          <a
            className={clsx({
              hidden: account.loggedIn,
            })}
          >
            Login
          </a>
        </Link>
        <Link href="/cats">
          <a
            className={clsx({
              hidden: !account.loggedIn,
            })}
          >
            Cats
          </a>
        </Link>

        <Link href="/favourites">
          <a
            className={clsx({
              hidden: !account.loggedIn,
            })}
          >
            Favourites
          </a>
        </Link>

        <Link href="/">
          <a
            onClick={() => {
              account.logout();
            }}
            className={clsx({
              hidden: !account.loggedIn,
            })}
          >
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
}
