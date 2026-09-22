"use strict";

const config = window.PREQ_CONFIG || {};
document.querySelectorAll("[data-link], [data-author]").forEach(link => {
  const url = link.hasAttribute("data-author")
    ? config.authors?.[link.dataset.author]
    : config.links?.[link.dataset.link];

  if (typeof url === "string" && url.trim()) {
    link.href = url.trim();
    link.removeAttribute("aria-disabled");
    link.removeAttribute("title");
    if (/^https?:\/\//i.test(url.trim())) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  } else {
    link.removeAttribute("href");
    link.setAttribute("aria-disabled", "true");
    link.title = "Link to be added";
  }
});
