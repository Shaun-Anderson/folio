import React from "react";
import css from "../styles/home.css";
import glowcss from "../styles/glow.css";
import shimmercss from "../styles/shimmer.css";
const Intro = () => {
  return (
    <section>
      <h1 style={{ fontWeight: 400 }}>Shaun Anderson</h1>
      <article
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <p className="intro">
          <i>Building meaningful user interactions </i> on web, mobile & native
          in <span className="location">Melbourne, Australia</span>. Currently{" "}
          <span style={{ fontSize: "0.8rem" }}>@ </span>
          Forage while freelancing by night.
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li
            className="now"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              animationDelay: "var(--delay6)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="16"
              />
              <polygon
                points="176 80 112 112 80 176 144 144 176 80"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
            <p style={{ fontSize: "0.9rem" }}>
              Currently exploring:{" "}
              <span style={{ color: "var(--grey1)" }}>AI, design & motion</span>
            </p>
          </li>
          <li
            className="now"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              animationDelay: "var(--delay8)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <polyline
                points="176 32 176 128 143.99 104 112 128 112 32"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <path
                d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
              <polyline
                points="48 216 48 224 192 224"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              />
            </svg>
            <p style={{ fontSize: "0.9rem" }}>
              Currently reading:{" "}
              <span style={{ color: "var(--grey1)" }}>
                "Build" by Tony Fadell
              </span>
            </p>
          </li>
        </ul>
        <p className="animate-in" style={{ animationDelay: "var(--delay7)" }}>
          I like creating experiences, doesnt matter the platform. I want to
          excel at creating a perfect user experience in all aspects. In my
          spare time I like to draw, garden & exercise.
        </p>
      </article>
    </section>
  );
};

export default Intro;
