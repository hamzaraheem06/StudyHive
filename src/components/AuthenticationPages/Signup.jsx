import React, { useState } from "react";
import { Input, Button, InvalidError } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex max-w-80 flex-col gap-5 justify-between p-2">
      {error && <InvalidError error={error} />}

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-primary ">
          Welcome to our Website!
        </h1>
        <p className="text-sm opacity-65">Create an account now</p>
      </div>
      <form onSubmit={handleSubmit(create)} className="flex flex-col gap-3">
        <Input
          label="Username: "
          placeHolder="Enter a username"
          type="text"
          {...register("name", {
            required: true,
          })}
        />

        <Input
          label="Email: "
          placeHolder="Email address"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                  value
                ) || "Email entered must be a valid address",
            },
          })}
        />

        {/* <Input
          label="Phone: "
          placeHolder="Enter your phone number"
          type="text"
          {...register("phoneNumber", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^[a-z0-9_-]{3,16}$/.test(value) || "Email a valid number",
            },
          })}
        />

        <Input
          label="Address: "
          placeHolder="Enter your address"
          type="text"
          {...register("address", {
            required: true,
          })}
        /> */}

        <Input
          label="Password: "
          placeHolder="Enter a password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />

        <p className="text-sm opacity-65">
          Already have an account?{" "}
          <Link
            className="transition-all hover:text-primary font-semibold"
            to="/login"
          >
            Sign in
          </Link>
        </p>
        <div className="py-1">
          <Button text="Create account" btnType="btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
}
export default Signup;
