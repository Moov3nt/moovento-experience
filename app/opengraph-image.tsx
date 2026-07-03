import { ImageResponse } from "next/og";

export const alt = "Moovento — Making the Invisible Valuable";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#050505",
          color: "#ECE7DF",
          fontFamily: "Arial, Helvetica, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Nodo alto sinistra */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 92,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#A8B68A",
            opacity: 0.75,
            boxShadow: "0 0 48px rgba(168, 182, 138, 0.28)",
          }}
        />

        {/* Nodo destra */}
        <div
          style={{
            position: "absolute",
            top: 170,
            right: 150,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#A8B68A",
            opacity: 0.55,
            boxShadow: "0 0 56px rgba(168, 182, 138, 0.24)",
          }}
        />

        {/* Nodo basso */}
        <div
          style={{
            position: "absolute",
            right: 260,
            bottom: 90,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#A8B68A",
            opacity: 0.42,
            boxShadow: "0 0 72px rgba(168, 182, 138, 0.22)",
          }}
        />

        {/* Contenuto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 78px 70px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "-0.03em",
              }}
            >
              moovento
            </div>

            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.38em",
                color: "#A8B68A",
              }}
            >
              SYSTEMS · RELATIONS · VALUE
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 900,
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.42em",
                color: "#A8B68A",
                marginBottom: 24,
              }}
            >
              MAKING THE INVISIBLE VALUABLE
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 78,
                fontWeight: 300,
                lineHeight: 0.98,
                letterSpacing: "-0.055em",
              }}
            >
              <div>Rendere visibile</div>
              <div>il valore invisibile.</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 32,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#8E8E8E",
              }}
            >
              <div>Comprendiamo le relazioni</div>
              <div>che muovono un sistema.</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}