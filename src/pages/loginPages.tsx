import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = { email: string; pwd: string; pwdAgain: string };

const Registrace = ({ data: { handleRegistration } }) => {
   const canSubmit = true;
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>();

   return (
      <div className="horizontal-center">
         <div className="section wf-section">
            <div className="container w-container">
               <div className="w-form">
                  <form
                     id="wf-form-Login"
                     name="wf-form-Login"
                     data-name="Login"
                     method="post"
                     onSubmit={handleSubmit((x) => {
                        setLoading(true);
                        handleRegistration(x).then((response) =>
                           setLoading(false)
                        );
                     })}
                     className="form"
                  >
                     <h1>Registrace</h1>
                     <div className="form__container">
                        <input
                           {...register("email", { required: true })}
                           placeholder="Email"
                           className="input w-input"
                        />
                        <input
                           {...register("pwd", {
                              required: true,
                              minLength: 8,
                           })}
                           type="password"
                           placeholder="Heslo"
                           className={`input w-input ${
                              errors.pwd && "has-error"
                           }`}
                        />
                        {errors.pwd && (
                           <div className="error-msg">
                              Heslo musí mít alespoň 8 znaků
                           </div>
                        )}
                        <input
                           {...register("pwdAgain", { required: true })}
                           type="password"
                           placeholder="Heslo znovu"
                           className="input w-input"
                        />
                     </div>
                     <input
                        type="submit"
                        value={loading ? "Načítám..." : "Zaregistrovat se"}
                        className={`btn btn-primary w-button ${
                           !canSubmit && "is-disabled"
                        } ${loading && "is-loading"}`}
                        disabled={canSubmit || loading ? false : true}
                     />
                     <div className="text is-description">
                        Již máš účet?{" "}
                        <a href="login" className="link">
                           Přihlásit se
                        </a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

const Login = ({ data: { handleLogin } }) => {
   const canSubmit = true;
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      let mounted = true;

      return () => {
         mounted = false;
      };
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>();
   return (
      <div className="horizontal-center">
         <div className="section wf-section">
            <div className="container w-container">
               <div className="w-form">
                  <form
                     id="wf-form-Login"
                     name="wf-form-Login"
                     data-name="Login"
                     method="post"
                     onSubmit={handleSubmit((x) => {
                        setLoading(true);
                        handleLogin(x).then((response) => setLoading(false));
                     })}
                     className="form"
                  >
                     <h1>Login</h1>
                     <div className="form__container">
                        <input
                           {...register("email", { required: true })}
                           placeholder="Email"
                           className="input w-input"
                        />
                        <input
                           {...register("pwd", {
                              required: true,
                              minLength: 8,
                           })}
                           type="password"
                           placeholder="Heslo"
                           className={`input w-input ${
                              errors.pwd && "has-error"
                           }`}
                        />
                        {errors.pwd && (
                           <div className="error-msg">
                              Hesla musí mít více než 8 znaků
                           </div>
                        )}
                     </div>
                     <input
                        type="submit"
                        value={loading ? "Načítám..." : "Přihlásit se"}
                        className={`btn btn-primary w-button ${
                           !canSubmit && "is-disabled"
                        } ${loading && "is-loading"}`}
                        disabled={canSubmit || loading ? false : true}
                     />
                     <div className="text is-description">
                        Ještě nemáš účet?{" "}
                        <a href="registrace" className="link">
                           Registrace
                        </a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export { Registrace, Login };
