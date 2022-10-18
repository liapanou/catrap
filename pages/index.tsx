import { Header } from "../components/header";
import { useAccount } from "../providers";

export default function Home() {
  const account = useAccount();
  return (
    <div>
      <Header />

      {account.loggedIn ? (
        <div className="h-screen flex  flex-col justify-center items-center mt-5 text-9xl">
          Hello {account.username}😀
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            account.login(true);
          }}
          className="h-screen flex  flex-col justify-center items-center mt-5"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              required
              onChange={(evt) => {
                account.setUsername(evt.currentTarget.value);
              }}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-wide m-4">Submit</button>
        </form>
      )}
    </div>
  );
}
