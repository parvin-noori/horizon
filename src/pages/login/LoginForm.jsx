import { Button, Checkbox, Divider, Input } from "@heroui/react";
import googleIcon from "/imgs/google-icon.svg";
import { Form, Link } from "react-router";

export default function LoginForm() {
  return (
    <div className="gap-y-10 flex flex-col">
      <div className="gap-y-10 flex flex-col">
        <div className="flex flex-col gap-y-3">
          <span className="lg:text-5xl text-4xl font-semibold text-blue-950">
            sign in
          </span>
          <p className="text-gray-400">
            Enter your email and password to sign in!
          </p>
        </div>
        <Button
          className="bg-blue-50 w-full capitalize text-blue-950"
          startContent={googleIcon}
          size="lg"
        >
          sign in with Google
        </Button>
      </div>
      <Divider />
      <Form className="gap-y-5 flex flex-col">
        <Input
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="mail@gmail.com"
          variant="bordered"
          type="email"
          isRequired
          size="lg"
        />
        <Input
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="min 8 characters"
          variant="bordered"
          type="password"
          isRequired
          size="lg"
        />
        <div className="flex justify-between items-center">
          <Checkbox defaultSelected>keep my login</Checkbox>
          <Link to="/forgot-password" className="text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        <Button size="lg" color="primary">sign in</Button>
        <p className="capitalize gap-x-3">not register yet? <Link to="register" className="text-primary">create an account</Link></p>
      </Form>
    </div>
  );
}
