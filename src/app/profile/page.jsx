"use client"
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Mail, CalendarDays, UserCircle } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user);
    };
    fetchSession();
  }, []);

  if (!user) return <p>Loading...</p>;

return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        padding: "36px 28px",
        width: 340,
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
          {user.image ? (
            <Image
              src={user.image || "/placeholder.png"}
              alt={user.name}
              width={90}
              height={90}
              style={{ borderRadius: "50%", border: "4px solid #667eea" }}
            />
          ) : (
            <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
              <UserCircle size={52} color="#fff" />
            </div>
          )}
        </div>

        <h2 style={{ margin: "0 0 4px", color: "#1a1a1a", fontSize: 22 }}>{user.name}</h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, margin: "8px 0" }}>
          <Mail size={15} color="#667eea" />
          <span style={{ color: "#555", fontSize: 14 }}>{user.email}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 6 }}>
          <CalendarDays size={15} color="#764ba2" />
          <span style={{ color: "#aaa", fontSize: 13 }}>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
        </div>

        <div style={{ marginTop: 20, padding: "10px 20px", background: "linear-gradient(135deg, #667eea, #764ba2)", borderRadius: 8, display: "inline-block" }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Active Member</span>
        </div>
      </div>
    </div>
  );
}