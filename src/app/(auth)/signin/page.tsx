import { signIn } from "@/lib/auth";

export default function SignIn() {

    const githubSignIn = async () => {
        "use server";

        await signIn("github");
    }

  return (
    <div>
        <h1>Sign In</h1>

        <form action={githubSignIn}>
            <button type="submit">Continue with GitHub</button>
        </form>

        <form action=""></form>
    </div>
  )
}