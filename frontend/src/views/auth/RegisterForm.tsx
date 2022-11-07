import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { register, reset } from "../../featuers/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { IUserRegData } from "../../utils/types";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, message, user } = useAppSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(`${message}`);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, message, navigate, isSuccess]);

  const registerClickHandler = () => {
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      toast.error(`${message}`);
      return;
    }
    if (password !== password2) {
      toast.error(`${message}`);
    } else {
      const userData: IUserRegData = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <div className="">
        <div className="intro-x mt-8 text-white  text-center font-medium text-2xl leading-tight">
          Register
        </div>

        <div className="intro-x mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            value={firstName}
            className="intro-x login__input form-control py-3 px-4 block"
            placeholder="First name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            value={lastName}
            className="intro-x login__input form-control py-3 px-4 block"
            placeholder="Last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            className="intro-x login__input form-control py-3 px-4 block col-span-2"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            className="intro-x login__input form-control py-3 px-4 block col-span-2"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            value={password2}
            className="intro-x login__input form-control py-3 px-4 block col-span-2"
            placeholder="Comfirme Password"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </div>
        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
          <button
            className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
            onClick={registerClickHandler}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
