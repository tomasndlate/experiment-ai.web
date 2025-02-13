import { signIn } from "@/lib/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignIn() {

    const githubSignIn = async () => {
        "use server";
        await signIn("github");
    }

  return (
    <div className="w-full h-full p-10 flex justify-center items-center">
        <section className="w-full max-w-md h-fit flex flex-col justify-center gap-4 text-center">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <br />
          <div className="flex flex-col gap-2">
            <form action={githubSignIn}>
              <button type="submit" className="w-full h-fit p-4 flex items-center justify-center gap-4 bg-zinc-800 text-white rounded-md">
                <FaGithub className="text-xl"/>
                <span>Continue with GitHub</span>
              </button>
            </form>
            {/* <form action="">
              <button type="submit" className="w-full h-fit p-4 flex items-center justify-center gap-4 bg-sky-800 text-white rounded-md">
                <FaGoogle className="text-xl"/>
                <span>Continue with Google</span>
              </button>
            </form> */}
          </div>

          <div className="flex justify-center items-center gap-4">
            <hr className="h-0.5 w-full bg-zinc-700" />
            <p>or</p>
            <hr className="h-0.5 w-full bg-zinc-700" />
          </div>

          {/* <form action="" className="flex flex-col gap-2">
            <input type="text" name="email" placeholder="Email" className="w-full h-fit p-4 rounded-md bg-transparent border border-1 border-zinc-400"/>
            <input type="password" name="password" placeholder="Password" className="w-full h-fit p-4 rounded-md bg-transparent border border-1 border-zinc-400"/>
            <button type="submit" className="w-full h-fit p-4 flex items-center justify-center gap-4 bg-zinc-950 text-white rounded-md">
              <span>Sign In</span>
            </button>
          </form> */}
        </section>
    </div>
  )
}