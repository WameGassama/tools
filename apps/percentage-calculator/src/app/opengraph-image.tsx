import { ImageResponse } from "next/og"

export const alt = "Procentregner.dk – Beregn procent nemt og hurtigt"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            fontStyle: "italic",
            color: "#1447e6",
            marginBottom: 24,
          }}
        >
          Procentregner.dk
        </div>
        <div style={{ fontSize: 32, color: "#3f3f46", textAlign: "center" }}>
          Beregn procent — gratis og på få sekunder
        </div>
      </div>
    ),
    { ...size }
  )
}
