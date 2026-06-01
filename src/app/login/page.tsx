import Link from "next/link";

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "420px", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ fontSize: "2rem", fontWeight: "bold", color: "#e91e63" }}>
            OnBehalf
          </Link>
          <p style={{ color: "#666", marginTop: "0.5rem" }}>Welcome back! Log in to continue.</p>
        </div>

        <div style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "2.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Email</label>
              <input type="email" placeholder="your@email.com" style={{
                width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
              }} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Password</label>
              <input type="password" placeholder="Enter your password" style={{
                width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                <input type="checkbox" />
                <span style={{ fontSize: "0.875rem" }}>Remember me</span>
              </label>
              <Link href="/forgot-password" style={{ fontSize: "0.875rem", color: "#e91e63" }}>
                Forgot password?
              </Link>
            </div>
            <button type="submit" style={{
              width: "100%", padding: "1rem", background: "#e91e63", color: "#fff",
              border: "none", borderRadius: "4px", fontWeight: "600", marginTop: "0.5rem"
            }}>
              Log In
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <p style={{ color: "#666" }}>
              Don't have an account?{' '}
              <Link href="/register" style={{ color: "#e91e63", fontWeight: "600" }}>
                Join Free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}