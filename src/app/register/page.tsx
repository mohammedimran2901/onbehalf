"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Navigation */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#e91e63" }}>
          OnBehalf
        </Link>
        <Link href="/login" style={{ color: "#333" }}>
          Already have an account? <span style={{ color: "#e91e63" }}>Log In</span>
        </Link>
      </nav>

      <div style={{ maxWidth: "600px", margin: "3rem auto", padding: "0 1rem" }}>
        <div style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "2.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Create Your Account
          </h1>

          {/* Progress Steps */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem", gap: "1rem" }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: step >= s ? "#e91e63" : "#e0e0e0",
                color: step >= s ? "#fff" : "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}>
                {s}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h2 style={{ marginBottom: "1.5rem" }}>Your Details (Matchmaker)</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Email *</label>
                  <input type="email" placeholder="your@email.com" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Password *</label>
                  <input type="password" placeholder="Create a password" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>First Name *</label>
                  <input type="text" placeholder="Your first name" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Last Name *</label>
                  <input type="text" placeholder="Your last name" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Nickname (display name) *</label>
                  <input type="text" placeholder="How you will appear on the site" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Phone Number *</label>
                  <input type="tel" placeholder="For verification" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <button onClick={() => setStep(2)} style={{
                  width: "100%", padding: "1rem", background: "#e91e63", color: "#fff",
                  border: "none", borderRadius: "4px", fontWeight: "600", marginTop: "1rem"
                }}>
                  Continue to Step 2
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ marginBottom: "1.5rem" }}>Single Friend's Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Your Relationship *</label>
                  <select style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                    <option>Select relationship</option>
                    <option>Parent</option>
                    <option>Sibling</option>
                    <option>Aunt/Uncle</option>
                    <option>Cousin</option>
                    <option>Friend</option>
                    <option>Other Family</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Friend's First Name *</label>
                  <input type="text" placeholder="First name" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Gender *</label>
                  <select style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Age *</label>
                  <input type="number" placeholder="Age" style={{
                    width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd"
                  }} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Religion *</label>
                  <select style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                    <option>Select religion</option>
                    <option>Sunni</option>
                    <option>Shia</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Location *</label>
                  <select style={{ width: "100%", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                    <option>Select city</option>
                    <option>London</option>
                    <option>Manchester</option>
                    <option>Birmingham</option>
                    <option>Leeds</option>
                    <option>Bradford</option>
                  </select>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button onClick={() => setStep(1)} style={{
                    flex: 1, padding: "1rem", background: "#fff", color: "#333",
                    border: "1px solid #ddd", borderRadius: "4px", fontWeight: "600"
                  }}>
                    Back
                  </button>
                  <button onClick={() => setStep(3)} style={{
                    flex: 1, padding: "1rem", background: "#e91e63", color: "#fff",
                    border: "none", borderRadius: "4px", fontWeight: "600"
                  }}>
                    Continue to Step 3
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ marginBottom: "1.5rem" }}>Choose Membership</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <label style={{
                  border: "2px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}>
                  <input type="radio" name="membership" />
                  <div>
                    <h3 style={{ margin: 0 }}>Free Membership</h3>
                    <p style={{ margin: "0.25rem 0 0", color: "#666" }}>Basic search, limited profile views</p>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: "1.5rem", fontWeight: "bold" }}>£0</div>
                </label>

                <label style={{
                  border: "2px solid #e91e63",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "#fff0f3"
                }}>
                  <input type="radio" name="membership" defaultChecked />
                  <div>
                    <h3 style={{ margin: 0 }}>Premium Membership</h3>
                    <p style={{ margin: "0.25rem 0 0", color: "#666" }}>Unlimited messages, advanced search, full access</p>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: "1.5rem", fontWeight: "bold", color: "#e91e63" }}>
                    £10<span style={{ fontSize: "1rem" }}>/mo</span>
                  </div>
                </label>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "flex", alignItems: "start", gap: "0.5rem", cursor: "pointer" }}>
                  <input type="checkbox" />
                  <span style={{ fontSize: "0.875rem", color: "#666" }}>
                    I agree to the <Link href="/terms" style={{ color: "#e91e63" }}>Terms and Conditions</Link> and <Link href="/privacy" style={{ color: "#e91e63" }}>Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setStep(2)} style={{
                  flex: 1, padding: "1rem", background: "#fff", color: "#333",
                  border: "1px solid #ddd", borderRadius: "4px", fontWeight: "600"
                }}>
                  Back
                </button>
                <button style={{
                  flex: 1, padding: "1rem", background: "#e91e63", color: "#fff",
                  border: "none", borderRadius: "4px", fontWeight: "600"
                }}>
                  Complete Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}