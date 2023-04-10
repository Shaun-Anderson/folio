import "../styles/home.css";
import "../styles/glow.css";
import "../styles/shimmer.css";
const Intro = () => {
  return (
    <section>
      <div className="header">
        <svg
          className="logo-path"
          width={18}
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            stroke-width="40px"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M 48.079 442.741 C 117.713 447.05 356.971 444.294 454.683 443.625 C 497.662 339.863 310.073 54.891 231.536 54.891 C 152.999 54.891 0.28 327.346 48.079 442.741 Z"
          />

          <path
            stroke="currentColor"
            stroke-width="40px"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            d="M 150.058 116.579 C 174.38 96.247 399.808 403.518 360.113 436.7"
          />
        </svg>
        <h1>Shaun Anderson</h1>
      </div>
      <article className="intro-container">
        <p className="intro">
          <i>Building meaningful user interactions </i> on web, mobile & desktop
          in <span className="location">Melbourne, Australia</span>. Currently{" "}
          <span style={{ fontSize: "0.8rem" }}>@ </span>
          Forage while freelancing by night.
        </p>
        <ul className="now-container">
          <li className="now">
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
            <p>
              Currently exploring: <span>AI, design & motion</span>
            </p>
          </li>
          <li className="now">
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
            <p>
              Currently reading: <span>"Build" by Tony Fadell</span>
            </p>
          </li>
        </ul>
        <p className="animate-in" style={{ animationDelay: "var(--delay7)" }}>
          I like creating experiences, doesnt matter the platform. I want to
          excel in all aspects of crafting a perfect user experience and am
          trying to develop products that solve actual problems. In my spare
          time I like to draw, garden & exercise.
        </p>
      </article>
    </section>
  );
};

export default Intro;
