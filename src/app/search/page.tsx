import Link from "next/link";

export default function SearchPage() {
  const profiles = [
    { name: "Aisha", age: 24, location: "London", sect: "Sunni", occupation: "Doctor", education: "Degree", height: "5'4\"", relation: "Sister" },
    { name: "Omar", age: 28, location: "Manchester", sect: "Sunni", occupation: "Engineer", education: "Degree", height: "5'10\"", relation: "Brother" },
    { name: "Fatima", age: 26, location: "Birmingham", sect: "Shia", occupation: "Teacher", education: "Masters", height: "5'3\"", relation: "Friend" },
    { name: "Ahmed", age: 30, location: "Leeds", sect: "Sunni", occupation: "Business Owner", education: "Degree", height: "5'11\"", relation: "Cousin" },
    { name: "Zainab", age: 25, location: "Bradford", sect: "Sunni", occupation: "Pharmacist", education: "Degree", height: "5'5\"", relation: "Sister" },
    { name: "Yusuf", age: 32, location: "Glasgow", sect: "Sunni", occupation: "Accountant", education: "Masters", height: "6'0\"", relation: "Friend" },
  ];

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
          <Link href="/search" style={{ color: "#e91e63", fontWeight: "600" }}>Search</Link>
          <Link href="/how-it-works" style={{ color: "#333" }}>How it Works</Link>
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

      <div style={{ display: "flex", flex: 1 }}>
        {/* Filters Sidebar */}
        <aside style={{
          width: "300px",
          background: "#f8f9fa",
          padding: "2rem",
          borderRight: "1px solid #e0e0e0"
        }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Filters</h2>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Gender</label>
            <select style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>All</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Age Range</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <select style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                <option>18</option>
                <option>20</option>
                <option>25</option>
              </select>
              <span style={{ padding: "0.5rem" }}>to</span>
              <select style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}>
                <option>30</option>
                <option>35</option>
                <option>40</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Location</label>
            <select style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>All UK</option>
              <option>London</option>
              <option>Manchester</option>
              <option>Birmingham</option>
              <option>Leeds</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600" }}>Sect</label>
            <select style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ddd" }}>
              <option>All</option>
              <option>Sunni</option>
              <option>Shia</option>
            </select>
          </div>

          <button style={{
            width: "100%",
            padding: "0.75rem",
            background: "#e91e63",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "600"
          }}>
            Apply Filters
          </button>
        </aside>

        {/* Results */}
        <main style={{ flex: 1, padding: "2rem" }}>
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Search Results</h1>
            <span style={{ color: "#666" }}>Showing {profiles.length} profiles</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem"
          }}>
            {profiles.map((profile) => (
              <div key={profile.name} style={{
                background: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "1px solid #e0e0e0"
              }}>
                <div style={{
                  height: "180px",
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                    <h3 style={{ margin: 0 }}>{profile.name}, {profile.age}</h3>
                    <span style={{
                      background: "#e91e63",
                      color: "#fff",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                      fontSize: "0.75rem"
                    }}>
                      PREMIUM
                    </span>
                  </div>
                  <p style={{ color: "#666", marginBottom: "0.25rem" }}>📍 {profile.location}</p>
                  <p style={{ color: "#666", marginBottom: "0.25rem" }}>🕌 {profile.sect}</p>
                  <p style={{ color: "#666", marginBottom: "0.25rem" }}>💼 {profile.occupation}</p>
                  <p style={{ color: "#666", marginBottom: "0.25rem" }}>📚 {profile.education}</p>
                  <p style={{ color: "#666", marginBottom: "1rem" }}>📏 {profile.height}</p>
                  <p style={{ color: "#e91e63", fontSize: "0.875rem", marginBottom: "1rem" }}>
                    On behalf of {profile.relation}
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Link href={`/profile/${profile.name.toLowerCase()}`} style={{
                      flex: 1,
                      textAlign: "center",
                      background: "#e91e63",
                      color: "#fff",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      fontSize: "0.875rem"
                    }}>
                      View Profile
                    </Link>
                    <button style={{
                      flex: 1,
                      background: "#fff",
                      color: "#e91e63",
                      border: "1px solid #e91e63",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      fontSize: "0.875rem"
                    }}>
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}