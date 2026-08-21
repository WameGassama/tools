import { ImageResponse } from "next/og"

export const alt = "Gennemsnitsberegner.dk – Del eller indlejr en beregner"
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
            color: "#625fff",
            marginBottom: 24,
          }}
        >
          Gennemsnitsberegner.dk
        </div>
        <div style={{ fontSize: 32, color: "#3f3f46", textAlign: "center" }}>
          Del eller indlejr en beregner på din side
        </div>
      </div>
    ),
    { ...size }
  )
}
