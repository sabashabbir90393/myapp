import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getPasswordStrength = () => {
    if (!password) {
      return {
        label: "",
        width: "w-0",
        text: "",
      };
    }

    if (password.length < 6) {
      return {
        label: "Weak password",
        width: "w-1/3",
        text: "text-red-600",
      };
    }

    if (password.length < 10) {
      return {
        label: "Good password",
        width: "w-2/3",
        text: "text-amber-600",
      };
    }

    return {
      label: "Strong password",
      width: "w-full",
      text: "text-emerald-600",
    };
  };

  const passwordStrength = getPasswordStrength();

 const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!username.trim() || !password.trim()) {
    setError("Please enter your username and password.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  try {
    setLoading(true);

    const data = await signupUser(username.trim(), password);

    if (!data.token) {
      setError("Account created, but authentication token was not received.");
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("username", username.trim());

    setSuccess("Account created successfully. Redirecting to dashboard...");

    setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 800);

  } catch (error) {
    console.error(error);

    if (error.response?.data?.error) {
      setError(error.response.data.error);
    } else {
      setError("Unable to connect to the server. Please try again.");
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#f4f7fb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">

        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.22)] lg:grid-cols-[0.95fr_1.05fr]">

          {/* BRAND PANEL */}
          <section className="relative hidden overflow-hidden bg-slate-950 p-10 lg:flex lg:min-h-[680px] lg:flex-col lg:justify-between xl:p-14">

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />

            <div className="relative z-10">

              {/* LOGO */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25">
                  A
                </div>

                <span className="text-lg font-bold tracking-tight text-white">
                  AuthSpace
                </span>
              </div>

              {/* CONTENT */}
              <div className="mt-24 max-w-md">

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                  Create your account
                </p>

                <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-white xl:text-5xl">
                  Your account.
                  <br />
                  Your secure access.
                </h1>

                <p className="mt-6 text-[15px] leading-7 text-slate-400">
                  Create your account and access a secure authentication
                  system powered by encrypted passwords and JWT sessions.
                </p>

              </div>
            </div>

            {/* SECURITY STATUS */}
            <div className="relative z-10 flex items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">

              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              Secure account protection enabled

            </div>

          </section>

          {/* SIGNUP PANEL */}
          <section className="flex items-center p-6 sm:p-10 lg:p-14">

            <div className="mx-auto w-full max-w-md">

              {/* MOBILE BRAND */}
              <div className="mb-12 flex items-center gap-3 lg:hidden">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                  A
                </div>

                <span className="text-lg font-bold tracking-tight text-slate-900">
                  AuthSpace
                </span>

              </div>

              {/* HEADER */}
              <div>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Get started
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your details to create a secure account.
                </p>

              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div
                  role="alert"
                  className="mt-7 flex gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5"
                >

                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                    !
                  </div>

                  <p className="text-sm leading-5 text-red-700">
                    {error}
                  </p>

                </div>
              )}

              {/* SUCCESS MESSAGE */}
              {success && (
                <div
                  role="status"
                  className="mt-7 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5"
                >

                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </div>

                  <p className="text-sm leading-5 text-emerald-700">
                    {success}
                  </p>

                </div>
              )}

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                {/* USERNAME */}
                <div>

                  <label
                    htmlFor="username"
                    className="mb-2.5 block text-sm font-semibold text-slate-700"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    autoComplete="username"
                    disabled={loading}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                </div>

                {/* PASSWORD */}
                <div>

                  <label
                    htmlFor="password"
                    className="mb-2.5 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      disabled={loading}
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pr-12 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    {/* EYE BUTTON */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >

                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3l18 18"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.58 10.58a2 2 0 002.84 2.84"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.88 4.24A10.7 10.7 0 0112 4c5.05 0 8.39 4.17 9.5 6a15.8 15.8 0 01-3.03 3.73"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.61 6.61C4.92 7.66 3.69 9.22 2.5 11c1.11 1.83 4.45 6 9.5 6 1.4 0 2.68-.34 3.82-.87"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
                          />

                          <circle
                            cx="12"
                            cy="12"
                            r="2.5"
                          />
                        </svg>
                      )}

                    </button>

                  </div>

                  {/* PASSWORD STRENGTH */}
                  {password && (
                    <div className="mt-3">

                      <div className="flex h-1.5 gap-1 overflow-hidden rounded-full bg-slate-100">

                        <div
                          className={`h-full rounded-full bg-current transition-all duration-300 ${passwordStrength.width} ${passwordStrength.text}`}
                        />

                      </div>

                      <p
                        className={`mt-2 text-xs font-medium ${passwordStrength.text}`}
                      >
                        {passwordStrength.label}
                      </p>

                    </div>
                  )}

                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                >

                  {loading ? (
                    <span className="flex items-center gap-2.5">

                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Creating account...

                    </span>
                  ) : (
                    "Create account"
                  )}

                </button>

              </form>

              {/* LOGIN LINK */}
              <div className="mt-8 border-t border-slate-100 pt-7 text-center">

                <p className="text-sm text-slate-500">
                  Already have an account?{" "}

                  <Link
                    to="/"
                    className="font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Login
                  </Link>
                </p>

              </div>

              {/* SECURITY NOTE */}
              <p className="mt-7 text-center text-xs leading-5 text-slate-400">
                Your password is securely hashed before being stored.
              </p>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}

export default Signup;