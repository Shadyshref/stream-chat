import React, { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { signup } from "../lib/api";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    mutate: signupMutate,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const handelSubmitSignUp = (e) => {
    e.preventDefault();
    signupMutate(signupData);
  };
  return (
    <div
      className="h-screen flex justify-center items-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className=" border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden">
        {/* {//signupform left side */}

        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* logo */}

          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className=" size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}
          <div className="w-full">
            <form onSubmit={handelSubmitSignUp}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Creat an Account</h2>
                  <p className="text-sm  opacity-70">
                    Join Streamify and start your language learning adventure!
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="form-control w-full">
                    <label className=" label">
                      <span className=" label-text">Full Name </span>
                    </label>
                    <input
                      type="text"
                      placeholder="shady sherif"
                      className=" input input-bordered w-full"
                      value={signupData.fullName}
                      required
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className=" label">
                      <span className=" label-text">Email </span>
                    </label>
                    <input
                      type="email"
                      placeholder="shady sherif@gmail.com"
                      className=" input input-bordered w-full"
                      value={signupData.email}
                      required
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="input input-bordered w-full pr-20"
                        value={signupData.password}
                        required
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            password: e.target.value,
                          })
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-sm text-primary font-semibold"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <p className="text-xs mt-1 opacity-70">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        required
                      />
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">
                          terms of service
                        </span>{" "}
                        and{" "}
                        <span className="text-primary hover:underline">
                          privacy policy
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary w-full " type="submit">
                  {isPending ? (
                    <>
                      <span className=" loading loading-spinner  loading-xs">
                        Loading...
                      </span>
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* {//signupform right side */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
// import React from 'react'

// const SignUpPage = () => {
//   return (
//     <div>SignUpPaddddddddddddge</div>
//   )
// }

// export default SignUpPage
