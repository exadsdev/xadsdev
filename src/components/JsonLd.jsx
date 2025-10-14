// src/components/JsonLd.jsx
"use client";

import Script from "next/script";
import { site } from "@/lib/site";

/* ----------------------- helpers ----------------------- */
function absUrl(pathOrUrl) {
  if (!pathOrUrl) return `${site.url}/og-default.jpg`;
  return /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${site.url}${pathOrUrl}`;
}
function sid(str) {
  return String(str || "x").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function iso(dateLike) {
  try { return new Date(dateLike || Date.now()).toISOString(); } catch { return new Date().toISOString(); }
}
function isoDuration({ h=0, m=0, s=0 } = {}) {
  const parts = [h ? `${h}H` : "", m ? `${m}M` : "", s ? `${s}S` : ""].join("");
  return `PT${parts || "0S"}`;
}

/* ---------------- WebSite (+ Sitelinks Search Box) ---------------- */
export function JsonLdWebSite() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": site.url,
    "name": "รับยิงแอดสายเทา",                 // ✅ ชื่อหลัก (แนะนำ)
    "alternateName": [
      "AdsDev",
      "รับยิงAdsสายเทา",
      "รับยิงโฆษณาสายเทา",
      "รับยิงแอด สีเทา"
    ],
    "publisher": {
      "@type":"Organization",
      "name": "AdsDev",
      "logo": { "@type":"ImageObject", "url": `${site.url}${site.logo || "/logo.png"}` }
    },
    "potentialAction": {
      "@type":"SearchAction",
      "target": `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  return <Script id="ld-website" type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- SiteNavigationElement (บอกเมนูหลัก) ---------------- */
export function JsonLdSiteNavigation({ items = [] }) {
  // items: [{ name:'บริการ', url:'/services' }, ...]
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((it, i) => ({
      "@type": "SiteNavigationElement",
      "position": i + 1,
      "name": it.name,
      "url": absUrl(it.url)
    }))
  };
  return <Script id="ld-sitenav" type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- Organization ---------------- */
export function JsonLdOrganization() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.url,
    "logo": absUrl(site.logo || "/logo.png"),
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": site.phone || "",
      "contactType": "sales",
      "areaServed": "TH",
    }],
    "sameAs": [site.social?.facebook, site.social?.youtube, site.social?.tiktok, site.social?.x]
      .filter(Boolean),
  };
  return <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- WebPage (ช่วย Rich Result Image หน้า non-article) ---------------- */
export function JsonLdWebPage({ name, description, image, breadcrumbUrl }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "url": breadcrumbUrl ? absUrl(breadcrumbUrl) : site.url,
    "description": description || name,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": absUrl(image || "/og-default.jpg"),
    }
  };
  return <Script id={`ld-webpage-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- Service (+ Offer & Rich Image) ---------------- */
export function JsonLdService({
  name,
  description,
  image,
  price = "9900",
  priceCurrency = "THB",
  unitText = "เดือน",
  offers = [], // optional extra offers [{name, price, priceCurrency}]
}) {
  const baseOffer = {
    "@type": "Offer",
    "priceCurrency": priceCurrency,
    "price": String(price),
    "eligibleQuantity": { "@type": "QuantitativeValue", "unitText": unitText }
  };

  const moreOffers = Array.isArray(offers) && offers.length
    ? offers.map(o => ({
        "@type": "Offer",
        "priceCurrency": o.priceCurrency || priceCurrency,
        "price": String(o.price),
        "name": o.name,
        "availability": o.availability || "https://schema.org/InStock"
      }))
    : [];

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": { "@type": "Organization", "name": site.name, "url": site.url },
    "image": absUrl(image || "/og-default.jpg"),
    "offers": [baseOffer, ...moreOffers]
  };

  return <Script id={`ld-service-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- Product / Productized Service ---------------- */
export function JsonLdProduct({
  name,
  description,
  images = [],
  sku,
  brand = { name: "AdsDev" },
  offer,          // { price, priceCurrency, url, availability }
  aggregateOffer, // { lowPrice, highPrice, priceCurrency, offerCount, offers?[] }
  category = "https://schema.org/Service",
  rating          // (ตัวเลือก) { ratingValue, reviewCount } — ใช้เมื่อมีข้อมูลจริง
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Product", "Service"],
    "name": name,
    "description": description || name,
    "image": (images.length ? images : [`${site.url}/og-default.jpg`]).map(absUrl),
    "brand": {
      "@type": "Organization",
      "name": brand.name || "AdsDev",
      "logo": absUrl(site.logo || "/logo.png"),
      "url": site.url
    },
    ...(sku ? { "sku": sku } : {}),
    "category": category
  };

  if (offer) {
    data.offers = {
      "@type": "Offer",
      "price": String(offer.price),
      "priceCurrency": offer.priceCurrency || "THB",
      "availability": offer.availability || "https://schema.org/InStock",
      ...(offer.url ? { "url": offer.url } : {})
    };
  } else if (aggregateOffer) {
    data.offers = {
      "@type": "AggregateOffer",
      "priceCurrency": aggregateOffer.priceCurrency || "THB",
      "lowPrice": String(aggregateOffer.lowPrice),
      "highPrice": String(aggregateOffer.highPrice),
      "offerCount": String(
        aggregateOffer.offerCount || (aggregateOffer.offers?.length || 0)
      ),
      ...(Array.isArray(aggregateOffer.offers) ? { "offers": aggregateOffer.offers } : {})
    };
  }

  if (rating?.ratingValue && rating?.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": String(rating.ratingValue),
      "reviewCount": String(rating.reviewCount)
    };
  }

  return (
    <Script
      id={`ld-product-${sid(name)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------------- Course (+ optional Offer) ---------------- */
export function JsonLdCourse({ name, description, image, offers = [] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": { "@type": "Organization", "name": site.name, "sameAs": site.url },
    "image": absUrl(image || "/og-default.jpg")
  };

  if (Array.isArray(offers) && offers.length) {
    data.offers = offers.map(o => ({
      "@type": "Offer",
      "priceCurrency": o.priceCurrency || "THB",
      "price": String(o.price),
      "availability": o.availability || "https://schema.org/InStock"
    }));
  }

  return <Script id={`ld-course-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- FAQ Page ---------------- */
export function JsonLdFAQ({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (items || []).map(it => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a }
    }))
  };
  return <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- Article / BlogPosting (+ Rich Result Image) ---------------- */
export function JsonLdArticle({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified
}) {
  const url = `${site.url}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": url,
    "headline": title,
    "description": description || title,
    "image": [absUrl(image || "/og-default.jpg")],
    "author": { "@type": "Organization", "name": site.name },
    "publisher": {
      "@type": "Organization",
      "name": site.name,
      "logo": { "@type": "ImageObject", "url": absUrl(site.logo || "/logo.png") }
    },
    "datePublished": iso(datePublished),
    "dateModified": iso(dateModified)
  };
  return <Script id={`ld-article-${sid(slug || title)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- VideoObject ---------------- */
export function JsonLdVideo({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,  // {h,m,s}
  contentUrl,
  embedUrl
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description || name,
    "thumbnailUrl": Array.isArray(thumbnailUrl) ? thumbnailUrl.map(absUrl) : [absUrl(thumbnailUrl)],
    "uploadDate": iso(uploadDate),
    ...(duration ? { "duration": isoDuration(duration) } : {}),
    ...(contentUrl ? { "contentUrl": contentUrl } : {}),
    ...(embedUrl ? { "embedUrl": embedUrl } : {})
  };
  return <Script id={`ld-video-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- HowTo ---------------- */
export function JsonLdHowTo({ name, description, steps = [], totalTime }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description || name,
    ...(totalTime ? { "totalTime": isoDuration(totalTime) } : {}),
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
      ...(s.image ? { "image": absUrl(s.image) } : {})
    }))
  };
  return <Script id={`ld-howto-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- AggregateRating (ใช้เมื่อมีรีวิวจริง) ---------------- */
export function JsonLdAggregateRating({ itemName, ratingValue, reviewCount, itemType = "Service" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": itemType,
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(ratingValue),
      "reviewCount": String(reviewCount)
    }
  };
  return <Script id={`ld-rating-${sid(itemName)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- OfferCatalog ---------------- */
export function JsonLdOfferCatalog({ name, items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": name,
    "itemListElement": (items || []).map(it => ({
      "@type": "Offer",
      "name": it.name,
      "priceCurrency": it.priceCurrency || "THB",
      "price": String(it.price),
      "availability": it.availability || "https://schema.org/InStock",
      "category": it.category || "https://schema.org/Service"
    }))
  };
  return <Script id={`ld-offercatalog-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- ItemList ---------------- */
export function JsonLdItemList({ name, items = [] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": absUrl(it.url),
      ...(it.name ? { "name": it.name } : {}),
      ...(it.image ? { "image": absUrl(it.image) } : {})
    }))
  };
  return <Script id={`ld-itemlist-${sid(name)}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------------- BreadcrumbList ---------------- */
export function JsonLdBreadcrumb({ items }) {
  const list = (items || []).map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url ? absUrl(it.url) : undefined
  }));
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "หน้าแรก", "item": site.url },
      ...list.map((it, idx) => ({ ...it, position: idx + 2 }))
    ]
  };
  return <Script id="ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
