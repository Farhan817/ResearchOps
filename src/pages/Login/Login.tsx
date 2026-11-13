import { Eye, EyeOff, FlaskConical } from "lucide-react";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import useLogin from "./hook/useLogin";

export default function Login() {
  const [{ showPassword, loading, formik }, { setShowPassword }] = useLogin();
  const { values, errors, setFieldValue, handleSubmit } = formik;
  return (
    <div className='min-h-screen bg-app-background flex items-center justify-center px-4 py-10'>
      <div className='w-full max-w-md'>
        {/* Branding */}
        <div className='flex flex-col items-center mb-8'>
          <div className='flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/20'>
            <FlaskConical size={28} />
          </div>

          <h1 className='mt-5 text-2xl font-bold tracking-tight text-text-primary'>
            ResearchOS
          </h1>

          <p className='mt-2 text-sm text-text-secondary text-center'>
            Your workspace for smarter research operations
          </p>
        </div>

        {/* Login Card */}
        <div className='rounded-2xl border border-border bg-surface p-7 shadow-xl shadow-slate-200/40 sm:p-8'>
          <div className='mb-7'>
            <h2 className='text-xl font-semibold text-text-primary'>
              Welcome back
            </h2>

            <p className='mt-1.5 text-sm text-text-secondary'>
              Sign in to continue to your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            <Input
              label='Email address'
              type='email'
              placeholder='you@company.com'
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
              autoComplete='email'
              error={errors.email}
            />

            <Input
              label='Password'
              type={showPassword ? "text" : "password"}
              placeholder='Enter your password'
              value={values.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
              autoComplete='current-password'
              rightElement={
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='text-text-muted hover:text-text-primary transition-colors'
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            <div className='flex items-center justify-between gap-3'>
              <a
                href='/forgot-password'
                className='text-sm font-medium text-primary-600 hover:text-primary-700'
              >
                Forgot password?
              </a>
            </div>
            <Button
              type='submit'
              fullWidth
              loading={loading}
              disabled={loading}
            >
              Sign in
            </Button>
          </form>

          <div className='mt-6 border-t border-border pt-5 text-center'>
            <p className='text-sm text-text-secondary'>
              Don't have access?{" "}
              <a
                href='/register'
                className='font-medium text-primary-600 hover:text-primary-700'
              >
                Contact administrator
              </a>
            </p>
          </div>
        </div>

        <p className='mt-6 text-center text-xs text-text-muted'>
          © {new Date().getFullYear()} ResearchOS. All rights reserved.
        </p>
      </div>
    </div>
  );
}
