import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/auth";
import { googleLogin, getCurrentUser } from "../api/auth";
import GoogleButton from "../components/GoogleButton";
import { getMyPortfolio, createPortfolio } from "../api/portfolio";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const data = await register(form);

      console.log("Registration successful:", data);
      localStorage.setItem("access_token", data.access_token);
      const emailName = form.email.split("@")[0];

      const slug = emailName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      await createPortfolio({
        slug: slug,
        title: `${emailName}'s Portfolio`,
        template: "default",
      });
      setMessage("Account created successfully.");
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      console.error(error);

      const detail = error.response?.data?.detail;

      if (Array.isArray(detail)) {
        const passwordError = detail.find((item) =>
          item.loc?.includes("password"),
        );

        if (passwordError) {
          setError(passwordError.msg);
        } else {
          setError(detail[0]?.msg || "Invalid registration details.");
        }
      } else {
        setError(detail || "Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    setError("");

    try {
      const data = await googleLogin(response.credential);

      localStorage.setItem("access_token", data.access_token);

      const user = await getCurrentUser();

      try {
        await getMyPortfolio();
      } catch (error) {
        if (error.response?.status === 404) {
          const emailName = user.email.split("@")[0];

          const slug = emailName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

          await createPortfolio({
            slug,
            title: `${emailName}'s Portfolio`,
            template: "default",
          });
        } else {
          throw error;
        }
      }

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.detail || "Unable to sign up with Google.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Google sign-up was unsuccessful.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {/* Header */}

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Start building your professional portfolio.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          {/* Error */}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Success */}

          {message && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
              <p className="text-sm text-emerald-700">{message}</p>
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs text-slate-400">OR</span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <GoogleButton
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </form>

        {/* Login */}

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-violet-600 hover:text-violet-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
