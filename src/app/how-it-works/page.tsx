import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#e91e63" }}>
          OnBehalf
        </Link>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="/search" style={{ color: "#333" }}>Search</Link>
          <Link href="/how-it-works" style={{ color: "#e91e63", fontWeight: "600" }}>How it Works</Link>
          <Link href="/login" style={{ color: "#333" }}>Log In</Link>
          <Link href="/register" style={{
            background: "#e91e63",
            color: "#fff",
            padding: "0.5rem 1.5rem",
            borderRadius: "4px",
            fontWeight: "500"
          }}>
            Join Free
          </Link>
        </div>
      </nav>

      <div style={{ flex: 1 }}>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
          color: "#fff",
          padding: "4rem 2rem",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>How OnBehalf Works</h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto" }}>
            The trusted way to help your single friends and family find their perfect match
          </p>
        </section>

        {/* Steps */}
        <section style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
          {[
            {
              step: "1",
              title: "Sign Up as a Matchmaker",
              desc: "Create your account and become a verified matchmaker. You are the trusted friend or family member who will help find a suitable partner.",
              details: ["Complete your profile", "Verify your identity", "Add your first single friend"]
            },
            {
              step: "2",
              title: "Create Your Friend's Profile",
              desc: "Add detailed information about your single friend including their preferences, background, and what they are looking for in a partner.",
              details: ["Add photos", "Describe personality", "Specify preferences", "Set privacy controls"]
            },
            {
              step: "3",
              title: "Browse & Search",
              desc: "Search through thousands of verified profiles. Use our advanced filters to find compatible matches based on religion, location, age, and more.",
              details: ["Advanced search filters", "Compatibility matching", "Location-based search", "Religion & sect preferences"]
            },
            {
              step: "4",
              title: "Connect & Communicate",
              desc: "Reach out to other matchmakers on behalf of your single friend. Exchange messages, arrange meetings, and help facilitate connections.",
              details: ["Private messaging", "Photo sharing", "Arrange meetings", "Get to know families"]
            },
            {
              step: "5",
              title: "Find the Perfect Match",
              desc: "Help your friend find their soulmate. Our community of genuine matchmakers makes the process safe, respectful, and successful.",
              details: ["Verified profiles", "Community ratings", "Success stories", "Ongoing support"]
            }
          ].map((item, index) => (
            <div key={item.step} style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "3rem",
              alignItems: "start",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#e91e63",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                flexShrink: 0
              }}>
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ marginBottom: "0.5rem" }}>{item.title}</h2>
                <p style={{ color: "#666", marginBottom: "1rem" }}>{item.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
                  {item.details.map((detail) => (
                    <li key={detail} style={{ color: "#e91e63" }}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Why Choose */}
        <section style={{ background: "#f8f9fa", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Why Families Trust OnBehalf</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }}>
              {[
                { title: "Verified Profiles", desc: "All matchmakers and profiles are verified to ensure authenticity" },
                { title: "Privacy Control", desc: "You control who sees your friend's photos and personal details" },
                { title: "Respectful Community", desc: "Built on Islamic values of respect, honesty, and family involvement" },
                { title: "Success Rate", desc: "Over 1,000 successful matches made through our platform" }
              ].map((item) => (
                <div key={item.title} style={{ textAlign: "center", padding: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#666" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Ready to Help Someone Find Love?</h2>
          <p style={{ color: "#666", marginBottom: "2rem" }}>Join thousands of matchmakers making a difference</p>
          <Link href="/register" style={{
            display: "inline-block",
            background: "#e91e63",
            color: "#fff",
            padding: "1rem 3rem",
            borderRadius: "4px",
            fontWeight: "600",
            fontSize: "1.1rem"
          }}>
            Get Started - It's Free
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ background: "#333", color: "#fff", padding: "2rem", textAlign: "center" }}>
        <p style={{ color: "#aaa" }}>&copy; {new Date().getFullYear()} OnBehalf. All rights reserved.</p>
      </footer>
    </div>
  );
}