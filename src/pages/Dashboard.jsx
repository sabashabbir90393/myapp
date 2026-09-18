import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">

      {/* TOP NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* BRAND */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
              A
            </div>

            <div>
              <p className="text-base font-bold tracking-tight text-slate-950">
                AuthSpace
              </p>

              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Secure platform
              </p>
            </div>

          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4.5 w-4.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 17l5-5-5-5"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3"
              />
            </svg>

            Logout
          </button>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">

        {/* PAGE HEADER */}
        <div className="max-w-3xl">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Authenticated session
            </span>

          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Welcome to your dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Your identity has been verified successfully. Your account is
            protected by token-based authentication.
          </p>

        </div>

        {/* STATUS CARDS */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

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
                    d="M12 3l8 4v5c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>

              </div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                Active
              </span>

            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-950">
              Authentication
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your current session has been authenticated successfully.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect
                    width="16"
                    height="11"
                    x="4"
                    y="10"
                    rx="2"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10V7a4 4 0 018 0v3"
                  />

                  <circle
                    cx="12"
                    cy="15"
                    r="1"
                  />
                </svg>

              </div>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-600">
                Protected
              </span>

            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-950">
              Secure session
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Access is protected using a signed authentication token.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">

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
                    d="M20 11.5A8.1 8.1 0 0112.5 20 8 8 0 114 7.5"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h5"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 4v5h-5"
                  />
                </svg>

              </div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                Verified
              </span>

            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-950">
              Token verification
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your authentication token was verified by the server.
            </p>

          </div>

        </div>

        {/* SECURITY SECTION */}
        <div className="mt-8">

          {/* SECURITY OVERVIEW */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">

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
                    d="M12 3l8 4v5c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>

              </div>

              <div>

                <h2 className="text-lg font-bold text-slate-950">
                  Security overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your authentication flow is currently operating normally.
                </p>

              </div>

            </div>

            <div className="mt-7 divide-y divide-slate-100">

              <div className="flex items-center justify-between py-4">

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Account authentication
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Credentials verified by the backend
                  </p>
                </div>

                <span className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Verified
                </span>

              </div>

              <div className="flex items-center justify-between py-4">

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Session protection
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Protected route access is enabled
                  </p>
                </div>

                <span className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active
                </span>

              </div>

              <div className="flex items-center justify-between py-4">

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Server verification
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Token verified through authentication API
                  </p>
                </div>

                <span className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Secure
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center">

          <p className="text-xs text-slate-400">
            AuthSpace · Secure authentication system
          </p>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;