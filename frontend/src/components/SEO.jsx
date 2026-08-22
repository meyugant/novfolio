import { Helmet } from "react-helmet-async";

function SEO({
  title = "Novfolio – Create Your Professional Portfolio",
  description = "Create a professional online portfolio with Novfolio. Showcase your projects, skills, education, and experience with a beautiful portfolio website.",
  canonical = "https://novfolio.com/",
  image = "https://novfolio.com/og-image.png",
  noIndex = false,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:site_name" content="Novfolio" />

      <meta property="og:image" content={image} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
