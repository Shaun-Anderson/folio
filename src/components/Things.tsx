import "../styles/things.css";
import inkt from "../assets/inkt-wip.webp"; // Image is 1600x900

type ThingCardProps = {
  type: "project" | "art";
  link: string;
  title: string;
  description: string;
  badges?: string[];
  img?: {src: string; alt: string};
  wip?: boolean;
};
const ThingCard = (props: ThingCardProps) => {
  const { type, link, title, description, badges, img, wip } = props;
  return (
    <a className={`thing-card ${wip ? "wip" : ""}`} href={link}>
      <article className="container">
        <div className="details-container">
          {wip && <div className="wip-badge">work in progress</div>}
        {type === "project" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
          </svg>
        )}
        <h1>{title}</h1>
        <h2>{description}</h2>
        {badges && 
          <ul className="thing-badge-container">
            {badges.map((badge) => <li className="badge">{badge}</li>)}
          </ul>
        }
        </div>
        {img && <div className="thing-image-container"><img src={img.src} alt={img.alt} className="thing-image"></img></div>}
      </article>
    </a>
  );
};

const Things = () => (
  <section className="things">
    {/* Socials */}
    <h3 className="heading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path>
      </svg>
      Things <i className="subheading">Most things here are wip</i>
    </h3>
    <ul className="mason">
    <li>
        <ThingCard
          type="art"
          link="https://figcv.com"
          title="figcv"
          description="Simple Resume/CV generator that look good."
          badges={[
            "React", "NextJs", "Supabase", "Tailwind", "TRPC"
          ]}
          wip
        />
      </li>
      <li>
      <ThingCard
          type="art"
          link="https://twitter.com/ando_null/status/1767468325838487788"
          title="inkt"
          description="Writing companion for novelists and scriptwriters."
          badges={[
            "Svelte", "SvelteKit", "Rust", "Tauri", "Tailwind"
          ]}
          img={{src: inkt, alt: "Screenshot of inkt app"}}
          wip
        />
      </li>
      <li>
        <ThingCard
          type="art"
          link="https://solr.fyi"
          title="Solr"
          description="Freelance management without the stress."
          wip
        />
      </li>
    </ul>
  </section>
);

export default Things;
