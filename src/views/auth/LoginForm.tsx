import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../featuers/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, message, user } = useAppSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClickHandler = () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      toast.error("Please provide you Email and password");
      return;
    }

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    console.log(email, password);
  };
  const forgetPasswordHandler = () => {
    navigateTo("/forgot-password");
  };

  useEffect(() => {
    if (isError) {
      toast.error(`${message}`);
    }
    if (isSuccess || user) {
      navigateTo("/dashboard");
    }
    if (!user) {
      navigateTo("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, dispatch]);
  return (
    <>
      <div className="intro-x mt-8">
        <div className="intro-x mb-4 text-white  text-center font-medium text-2xl leading-tight">
          Login
        </div>
        <input
          type="email"
          className="intro-x login__input form-control py-3 px-4 block"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="intro-x login__input form-control py-3 px-4 block mt-4"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
        <div className="flex items-center mr-auto">
          <input
            id="remember-me"
            type="checkbox"
            className="form-check-input border mr-2"
          />
          <label className="cursor-pointer select-none" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button onClick={forgetPasswordHandler}>Forgot Password?</button>
      </div>
      <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
        <button
          type="submit"
          className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
          onClick={loginClickHandler}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
