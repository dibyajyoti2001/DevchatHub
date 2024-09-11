import { LockClosedIcon } from "@heroicons/react/20/solid";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

export default function Login() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="w-1/3 p-8 flex justify-center items-center gap-5 flex-col bg-gray-900 shadow-md rounded-2xl my-16 border-primary border-[1px]">
        <h1 className="inline-flex items-center text-2xl mb-4 flex-col">
          <LockClosedIcon className="h-8 w-8 mb-2" /> Login
        </h1>
        <Input placeholder="Enter the email..." type="email" />
        <Input placeholder="Enter the password..." type="password" />
        <Button fullWidth>Login</Button>
        <small className="text-zinc-300">
          Didn't have an account?{" "}
          <a className="text-primary hover:underline" href="/login">
            Register
          </a>
        </small>
      </div>
    </div>
  );
}
