"use client";

export default function BackgroundField() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "red",
        zIndex: 999999,
      }}
    />
  );
}