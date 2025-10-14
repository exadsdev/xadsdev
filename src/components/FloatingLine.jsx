"use client";

import Image from "next/image";
import styles from "./FloatingLine.module.css";
import { site } from "@/lib/site";

function lineUrlFromEnv(line) {
  const id = String(line || "").replace(/^@/, "");
  return id ? `https://line.me/R/ti/p/${id}` : null;
}

export default function FloatingLine() {
  const href = lineUrlFromEnv(site.line);

  if (!href) return null;

  // ✅ ถ้าอยากใช้รูปของคุณเอง แทนโลโก้ LINE: เปลี่ยน src เป็น "/my-avatar.jpg"
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ติดต่อเรา ทาง LINE"
      className={`${styles.fab} ${styles.bounce}`}
    >
      <span className={styles.pulse} />

      {/* รูปจะ “ครอบเต็มวง” ด้วย fill + object-fit: cover */}
      <div className={styles.imgWrap}>
        <Image
          src="/line.png"   // ⬅️ รูปโปร่งใส/ทรงสี่เหลี่ยมก็ได้ เดี๋ยวเราตัดเป็นวงกลมให้
          alt="LINE"
          fill
          priority
          className={styles.img}
          sizes="64px"
        />
      </div>

      <span className={styles.badge}>แชท</span>
    </a>
  );
}
