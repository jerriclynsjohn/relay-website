import satori from "satori";
import { SITE_DATA } from "@config";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont";

export default async () => {
  return satori(
    <div
      style={{
        background: "#fefbfb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid #000",
          background: "#ecebeb",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid #000",
          background: "#fefbfb",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90%",
              maxHeight: "90%",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 72, fontWeight: "bold" }}>{SITE_DATA.product.name}</p>
            <p style={{ fontSize: 28 }}>{SITE_DATA.product.description}</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span style={{ overflow: "hidden", fontWeight: "bold" }}>
              {new URL(SITE_DATA.product.url).hostname}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: (await loadGoogleFonts(
        SITE_DATA.product.name + SITE_DATA.product.description + SITE_DATA.product.url
      )) as FontOptions[],
    }
  );
};