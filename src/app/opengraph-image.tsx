import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0c0f14, #1a1f2a)",
          color: "#e4ddd3",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 96px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <div
            style={{
              letterSpacing: 8,
              textTransform: "uppercase",
              fontSize: 18,
              color: "#c9a96e",
              marginBottom: 18,
            }}
          >
            Премиальные зеркала на заказ
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 300,
            }}
          >
            Napoli — зеркала
            <br />
            для вашего интерьера
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              opacity: 0.85,
            }}
          >
            Индивидуальные размеры, подсветка, монтаж и доставка.
          </div>
        </div>

        <div
          style={{
            width: 260,
            height: 360,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.22)",
            background:
              "linear-gradient(135deg,#c5d3e0 0%,#e8edf2 25%,#b8c9d9 50%,#dce5ed 75%,#c5d3e0 100%)",
            boxShadow:
              "0 28px 80px rgba(0,0,0,0.65), inset 0 0 80px rgba(255,255,255,0.12)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

