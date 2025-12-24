import { Button, Checkbox, Divider, Input } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";

export default function LoginForm() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
        localStorage.setItem("userInfo", JSON.stringify({
        email: data.user.email,
        id: data.user.id,
      }));
      toast.success(`Welcome ${data.user.email}`);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
  const onSubmit = (data) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <div className="gap-y-10 flex flex-col md:grow-0 grow">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="gap-y-10 flex flex-col">
        <div className="flex flex-col gap-y-3">
          <span className="lg:text-5xl text-4xl font-semibold ">sign in</span>
          <p className="text-gray-400">
            Enter your email and password to sign in!
          </p>
        </div>
        <Button
          className="bg-blue-50 w-full capitalize text-blue-950 dark:bg-white/10 dark:text-white"
          startContent={<FcGoogle />}
          size="lg"
        >
          sign in with Google
        </Button>
      </div>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)} className="gap-y-5 flex flex-col">
        <Input
          ref={inputRef}
          {...register("email", { required: "email is required" })}
          label="Email"
          labelPlacement="outside"
          placeholder="mail@gmail.com"
          variant="bordered"
          type="email"
          size="lg"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <Input
          ref={inputRef}
          {...register("password", {
            required: "Password is required",
          })}
          label="Password"
          labelPlacement="outside"
          placeholder=""
          variant="bordered"
          type="password"
          size="lg"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <div className="flex justify-between items-center">
          <Checkbox defaultSelected>keep my login</Checkbox>
          <Link
            to="/forgot-password"
            className="text-primary hover:underline dark:text-white"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" size="lg" color="primary">
          sign in
        </Button>
        <p className="capitalize gap-x-3 dark:text-gray-400">
          not register yet?{" "}
          <Link
            to="register"
            className="text-primary hover:underline dark:text-white"
          >
            create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
