import React, { useState } from "react";

import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration2.svg";
import LoadingIcon from "../../base-components/loadingIcon";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const { isLoading, isError, isSuccess, message, user } = useAppSelector(
    (state) => state.auth
  );
  return (
    <>
      {isLoading && <LoadingIcon iconColor="white" />}
      <div>
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            {/* BEGIN: Login Info */}
            <div className="hidden xl:flex flex-col min-h-screen">
              <Link to="/" className="-intro-x flex items-center pt-5">
                <img alt="Logo" className="w-6" src={logoUrl} />
                <span className="text-white text-lg ml-3"> J-sprout </span>
              </Link>
              <div className="my-auto">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="-intro-x w-1/2 -mt-16"
                  src={illustrationUrl}
                />
                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  A few more clicks to <br />
                  sign in to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">
                  Manage your account.
                </div>
                <div className="-intro-x mt-3 text-md text-white text-opacity-70 dark:text-slate-400">
                  Don't have an account?{" "}
                  <a
                    onClick={() => setHasAccount(!hasAccount)}
                    className="text-white text-lg cursor-pointer"
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                  {hasAccount ? "Sign In" : "Register"}
                </h2>
                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                  A few more clicks to sign in to your account. Manage your
                  account.
                </div>
                <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">
                  {hasAccount ? "Don't have account?" : "Have account"}{" "}
                  <a
                    onClick={() => setHasAccount(!hasAccount)}
                    className="text-slate-600 cursor-pointer"
                  >
                    Click here
                  </a>
                </div>
                {hasAccount ? <LoginForm /> : <RegisterForm />}

                <div className="intro-x mt-5 xl:mt-7 text-slate-600 dark:text-slate-500 text-center">
                  <a
                    className="text-primary dark:text-slate-200 cursor-pointer"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {hasAccount
                      ? "Don't have an account?"
                      : "I have an account"}
                  </a>
                </div>
                <div
                  className={`intro-x mt-10 xl:mt-24 ${
                    !hasAccount && "xl:mt-10"
                  } text-slate-600 dark:text-slate-500 text-center xl:text-left`}
                >
                  By signin up, you agree to our <span></span>
                  <a className="text-primary dark:text-slate-200" href="">
                    Terms and Conditions
                  </a>
                  <span> </span>&<span> </span>
                  <a className="text-primary dark:text-slate-200" href="">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
