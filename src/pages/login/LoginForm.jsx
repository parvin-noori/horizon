import { Button, Checkbox, Divider, Input } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "adeleParkson@user.com", password: "abc@123" },
  });

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
      const accessToken = data.session.access_token;
      localStorage.setItem("token", accessToken);
      // toast.success(`Welcome ${data.user.email}`);
      toast.success(t('signIn.validation.Loggedsuccessfully'));
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
  const onSubmit = (data) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <div className="gap-y-10 flex flex-col md:grow-0 grow text-[#2B3674] dark:text-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="gap-y-10 flex flex-col">
        <div className="flex flex-col gap-y-3">
          <span className="lg:text-5xl text-4xl font-semibold ">
            {t("signIn.title")}
          </span>
          <p className="text-gray-400">{t("signIn.subtitle")}</p>
        </div>
        <Button
          className="bg-blue-50 w-full capitalize text-blue-950 dark:bg-white/10 dark:text-white"
          startContent={<FcGoogle />}
          size="lg"
        >
          {t("signIn.google")}
        </Button>
      </div>
      <Divider />
      <form
        aria-label="login form"
        onSubmit={handleSubmit(onSubmit)}
        className="gap-y-5 flex flex-col"
      >
        <Input
          ref={inputRef}
          {...register("email", {
            required: t("signIn.validation.emailRequired"),
          })}
          label={`${t('signIn.validation.email')}`}
          classNames={{
            label: "!text-inherit",
            input: "text-black dark:text-white",
          }}
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
               required: t("signIn.validation.passwordRequired"),
          })}
          abel={`${t('signIn.validation.password')}`}
          labelPlacement="outside"
          classNames={{
            label: "!text-inherit",
            input: "text-black dark:text-white",
          }}
          variant="bordered"
          type="password"
          size="lg"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <div className="flex justify-between items-center">
          <Checkbox defaultSelected>{t('signIn.keep')}</Checkbox>
          <Link
            to="/forgot-password"
            className="text-primary hover:underline dark:text-white"
          >
            {t('signIn.forget')}
          </Link>
        </div>
        <Button type="submit" size="lg" color="primary">
          {t('signIn.signIn')}
        </Button>
        {/* <p className="capitalize gap-x-3 dark:text-gray-400">
          not register yet?{" "}
          <Link
            to="register"
            className="text-primary hover:underline dark:text-white"
          >
            create an account
          </Link>
        </p> */}
      </form>
    </div>
  );
}
