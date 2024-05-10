import "../styles/things.css";
import inkt from "../assets/inkt-wip.webp"; // Image is 1600x900
import mage from "../assets/mage.png"; // Image is 1600x900
import solr from "../assets/solr-wip.webp"; // Image is 1600x900
import Image from "astro/components/Image.astro";


type ThingCardProps = {
  link: string;
  title: string;
  description: string;
  badges?: string[];
  img?: {src: string; alt: string, pos?: 'left' | 'bottom'};
  wip?: boolean;
  compact?: boolean;
};
const ThingCard = (props: ThingCardProps) => {
  
  const { link, title, description, badges, img, wip, compact } = props;
  return (
    <a className={`thing-card ${wip ? "wip" : ""}`} href={link}>
      <article className={`container ${img?.pos === 'bottom' && 'img-below'}`}>
        <div className={`details-container ${compact && 'compact'}`}>
          {wip && <div className="wip-badge">work in progress</div>}


<div className="headings">
        <h3>{title}</h3>
        <h4>{description}</h4>
        </div>
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
      Things <i className="subheading">Projects, art and anything else I think of</i>
    </h3>
    <ul className="mason">
    <li className="col-span-6">
        <ThingCard
          link="https://github.com/Shaun-Anderson/folio"
          title="folio"
          description="The code for this site."
          badges={[
            "Astro", "React", "Vanilla CSS"
          ]}
          compact
        />
      </li>

      <li className="col-span-3">
        <ThingCard
          link="https://figcv.com"
          title="figcv"
          description="Simple Resume/CV generator that look good."
          badges={[
            "React", "NextJS", "Supabase", "Tailwind", "TRPC"
          ]}
          wip
        />
      </li>
      <li className="art">
        <img src={mage.src} alt="A description of my image."/>
      </li>
      <li className="col-span-3">
        <ThingCard
          link="https://breadd.app"
          title="Breadd.app"
          description="Invoice management for solo ventures."
          wip
          badges={[
            "React", "NextJS", "PlanetScale", "Tailwind", "TRPC"
          ]}
          img={{src: solr, alt: "Screenshot of inkt app", pos: "bottom"}}

        />
      </li>
      <li className="col-span-6">
      <ThingCard
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

    </ul>
  </section>
);

export default Things;
