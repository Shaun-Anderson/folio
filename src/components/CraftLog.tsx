import css from "../styles/home.css";
const CraftLog = () => {
  return (
    <section>
      <div className="container-title">
        <svg
          height={16}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
        <h3>Craft log</h3>
        <p style={{ fontSize: "0.8rem" }}>Random things I have worked on.</p>
      </div>
      <ul className="craft-grid">
        <li className="" style={{ listStyleType: "none" }}>
          <a href="" className="craft">
            <img src="" alt="Thumbnail" />
            <div style={{ display: "flex" }}>
              <svg
                width={18}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <rect
                  x="48"
                  y="48"
                  width="64"
                  height="64"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <rect
                  x="144"
                  y="48"
                  width="64"
                  height="64"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <rect
                  x="48"
                  y="144"
                  width="64"
                  height="64"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
                <rect
                  x="144"
                  y="144"
                  width="64"
                  height="64"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                />
              </svg>
              <h4>roam.uno (wip)</h4>
            </div>
            <p>Freelancing platform</p>
          </a>
        </li>
        <li className="" style={{ listStyleType: "none" }}>
          <a href="" className="craft">
            <h4>roam.uno (wip)</h4>
            <p>Freelancing platform</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CraftLog;
