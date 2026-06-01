import Link from "next/link";

export default function HomePage() {
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
          <Link href="/how-it-works" style={{ color: "#333" }}>How it Works</Link>
          <Link href="/success-stories" style={{ color: "#333" }}>Success Stories</Link>
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

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
        color: "#fff",
        padding: "5rem 2rem",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "700" }}>
          Find Love for Someone You Care About
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          OnBehalf is the trusted matchmaking platform where friends and family help single Muslims find their perfect partner
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/register" style={{
            background: "#fff",
            color: "#e91e63",
            padding: "1rem 2rem",
            borderRadius: "4px",
            fontWeight: "600",
            fontSize: "1.1rem"
          }}>
            Get Started - It's Free
          </Link>
          <Link href="/search" style={{
            background: "transparent",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "4px",
            fontWeight: "600",
            fontSize: "1.1rem",
            border: "2px solid #fff"
          }}>
            Browse Profiles
          </Link>
        </div>
      </section>

      {/* Search Box Section */}
      <section style={{ background: "#f8f9fa", padding: "2rem" }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
            Quick Search
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginBottom: "1rem"
          }}>
            <select style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Looking for</option>
              <option>Bride</option>
              <option>Groom</option>
            </select>
            <select style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Age from</option>
              <option>18</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
            </select>
            <select style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Age to</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
              <option>50</option>
            </select>
            <select style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Religion</option>
              <option>Sunni</option>
              <option>Shia</option>
              <option>Other</option>
            </select>
            <select style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>Location</option>
              <option>London</option>
              <option>Manchester</option>
              <option>Birmingham</option>
              <option>Leeds</option>
              <option>Bradford</option>
              <option>Glasgow</option>
            </select>
          </div>
          <Link href="/search" style={{
            display: "block",
            textAlign: "center",
            background: "#e91e63",
            color: "#fff",
            padding: "1rem",
            borderRadius: "4px",
            fontWeight: "600"
          }}>
            Search Now
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
          How OnBehalf Works
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { step: "1", title: "Create a Profile", desc: "Sign up as a matchmaker and create profiles for your single friends or family members" },
            { step: "2", title: "Browse & Connect", desc: "Search through verified profiles and connect with other matchmakers on behalf of your single friend" },
            { step: "3", title: "Start Conversations", desc: "Message other matchmakers, arrange meetings, and help your friend find their perfect match" }
          ].map((item) => (
            <div key={item.step} style={{ textAlign: "center", padding: "1.5rem" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#e91e63",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "0 auto 1rem"
              }}>
                {item.step}
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Profiles */}
      <section style={{ background: "#f8f9fa", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
            Featured Profiles
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}>
            {[
              { name: "Aisha", age: 24, location: "London", relation: "Sister" },
              { name: "Omar", age: 28, location: "Manchester", relation: "Brother" },
              { name: "Fatima", age: 26, location: "Birmingham", relation: "Friend" },
              { name: "Ahmed", age: 30, location: "Leeds", relation: "Cousin" }
            ].map((profile) => (
              <div key={profile.name} style={{
                background: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <div style={{
                  height: "200px",
                  background: "linear-gradient(135deg, #e91e63 0%, #ff9800 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "3rem"
                }}>
                  👤
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ marginBottom: "0.5rem" }}>{profile.name}, {profile.age}</h3>
                  <p style={{ color: "#666", marginBottom: "0.5rem" }}>📍 {profile.location}</p>
                  <p style={{ color: "#666", marginBottom: "1rem" }}>On behalf of {profile.relation}</p>
                  <Link href={`/profile/${profile.name.toLowerCase()}`} style={{
                    display: "block",
                    textAlign: "center",
                    background: "#e91e63",
                    color: "#fff",
                    padding: "0.75rem",
                    borderRadius: "4px"
                  }}>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
          Membership Options
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>
          <div style={{
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            padding: "2rem",
            textAlign: "center"
          }}>
            <h3 style={{ marginBottom: "1rem" }}>Free</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "1rem" }}>
              £0
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", textAlign: "left" }}>
              <li style={{ padding: "0.5rem 0" }}>✓ Create profile</li>
              <li style={{ padding: "0.5rem 0" }}>✓ Basic search</li>
              <li style={{ padding: "0.5rem 0" }}>✓ View limited profiles</li>
              <li style={{ padding: "0.5rem 0", color: "#999" }}>✗ Send messages</li>
              <li style={{ padding: "0.5rem 0", color: "#999" }}>✗ Advanced search</li>
            </ul>
            <Link href="/register" style={{
              display: "block",
              border: "2px solid #e91e63",
              color: "#e91e63",
              padding: "0.75rem",
              borderRadius: "4px",
              fontWeight: "600"
            }}>
              Get Started
            </Link>
          </div>

          <div style={{
            border: "2px solid #e91e63",
            borderRadius: "8px",
            padding: "2rem",
            textAlign: "center",
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#e91e63",
              color: "#fff",
              padding: "0.25rem 1rem",
              borderRadius: "12px",
              fontSize: "0.875rem"
            }}>
              Most Popular
            </div>
            <h3 style={{ marginBottom: "1rem" }}>Premium</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "1rem" }}>
              £10<span style={{ fontSize: "1rem", color: "#666" }}>/month</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", textAlign: "left" }}>
              <li style={{ padding: "0.5rem 0" }}>✓ Everything in Free</li>
              <li style={{ padding: "0.5rem 0" }}>✓ Unlimited messages</li>
              <li style={{ padding: "0.5rem 0" }}>✓ Advanced search filters</li>
              <li style={{ padding: "0.5rem 0" }}>✓ View all photos</li>
              <li style={{ padding: "0.5rem 0" }}>✓ Priority listing</li>
            </ul>
            <Link href="/register" style={{
              display: "block",
              background: "#e91e63",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "4px",
              fontWeight: "600"
            }}>
              Upgrade Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#e91e63", color: "#fff", padding: "4rem 2rem" }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          textAlign: "center"
        }}>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>10,000+</div>
            <div>Registered Members</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>5,000+</div>
            <div>Active Matchmakers</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>1,000+</div>
            <div>Successful Matches</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#333", color: "#fff", padding: "3rem 2rem 1rem" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem"
        }}>
          <div>
            <h3 style={{ marginBottom: "1rem" }}>OnBehalf</h3>
            <p style={{ color: "#aaa" }}>The trusted platform for matchmaking within the Muslim community</p>
          </div>
          <div>
            <h4 style={{ marginBottom: "1rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/search" style={{ color: "#aaa" }}>Search</Link></li>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/how-it-works" style={{ color: "#aaa" }}>How it Works</Link></li>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/success-stories" style={{ color: "#aaa" }}>Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: "1rem" }}>Support</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/faq" style={{ color: "#aaa" }}>FAQ</Link></li>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/contact" style={{ color: "#aaa" }}>Contact Us</Link></li>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/safety" style={{ color: "#aaa" }}>Safety Tips</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: "1rem" }}>Legal</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/privacy" style={{ color: "#aaa" }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: "0.5rem" }}><Link href="/terms" style={{ color: "#aaa" }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid #555", color: "#aaa" }}>
          &copy; {new Date().getFullYear()} OnBehalf. All rights reserved.
        </div>
      </footer>
    </div>
  );
}