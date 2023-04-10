const Contact = () => (
  <section className="contact">
    {/* Socials */}
    <ul className="social-list">
      <li style={{ listStyleType: "none" }}>
        <a
          href="https://github.com/Shaun-Anderson"
          className="social-link glow-on-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
          </svg>
        </a>
      </li>
      <li style={{ listStyleType: "none" }}>
        <a
          href="https://twitter.com/_ShaunAnderson"
          className="social-link twitter-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
          </svg>
        </a>
      </li>
      <li style={{ listStyleType: "none" }}>
        <a href="https://read.cv/ando" className="social-link shimmer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
          </svg>
          <span></span>
        </a>
      </li>
    </ul>
    <p>
      If you want to reach out for business reasons or just to meet up to grab a
      coffee you can find me @{" "}
      <a href="mailto:shaun.anderson@outlook.com">shaun.anderson@outlook.com</a>{" "}
      or any socials listed above.
    </p>
  </section>
);

export default Contact;
