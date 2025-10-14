// src/lib/site.js
export const site = {
  name: process.env.NEXT_PUBLIC_NAME || "รับยิงAdsสายเทา",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xadsdev.com",
  logo: "/logo.png",

  // Contacts (ใส่จริงได้เลยหรืออ่านจาก ENV อื่น ๆ)
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  line: process.env.NEXT_PUBLIC_LINE || "/@014gmrmy?ts=10142055&oat_content=url",  
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Bangkok, Thailand",

  // Analytics
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "",

  // Social (ให้มี object เสมอ เพื่อไม่ undefined)
  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "",
    // ถ้ามีแพลตฟอร์มอื่น ๆ เติมตรงนี้ได้เลย
  },
};
