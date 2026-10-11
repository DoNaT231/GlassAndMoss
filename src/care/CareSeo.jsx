import { useEffect } from "react";
import { faq } from "./guideData";

const TITLE = "Terrárium gondozási útmutató | Glass & Moss";
const DESCRIPTION =
  "Tudd meg, hogyan gondozd zárt terráriumodat! Öntözés, fény, páratartalom, mohák, ékszerorchideák és trópusi növények gondozása.";
const URL = "https://glassandmoss.hu/terrarium-gondozas";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  const created = !element;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  const previous = element.getAttribute("content");
  element.setAttribute("content", content);
  return () => {
    if (created) {
      element.remove();
      return;
    }
    if (previous == null) element.removeAttribute("content");
    else element.setAttribute("content", previous);
  };
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  const created = !element;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  const previous = element.getAttribute("href");
  element.setAttribute("href", href);
  return () => {
    if (created) {
      element.remove();
      return;
    }
    if (previous == null) element.removeAttribute("href");
    else element.setAttribute("href", previous);
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Egy apró világ gondozása",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "hu",
      mainEntityOfPage: URL,
      author: { "@type": "Organization", name: "Glass & Moss", url: "https://glassandmoss.hu/" },
      publisher: { "@type": "Organization", name: "Glass & Moss", url: "https://glassandmoss.hu/" },
      datePublished: "2026-10-09",
      dateModified: "2026-10-09",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: "https://glassandmoss.hu/" },
        { "@type": "ListItem", position: 2, name: "Terrárium gondozási útmutató", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function CareSeo() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;
    const restore = [
      setMeta("name", "description", DESCRIPTION),
      setMeta("property", "og:title", TITLE),
      setMeta("property", "og:description", DESCRIPTION),
      setMeta("property", "og:url", URL),
      setMeta("property", "og:type", "article"),
      setCanonical(URL),
    ];
    return () => {
      document.title = previousTitle;
      restore.forEach((fn) => fn());
    };
  }, []);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  );
}
