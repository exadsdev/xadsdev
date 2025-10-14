// src/components/Breadcrumbs.jsx
import Link from "next/link";
import { JsonLdBreadcrumb } from "@/components/JsonLd";

export default function Breadcrumbs({ items }) {
  // items: [{ name:'บริการ', url:'/services' }, { name:'Google Ads' }]
  return (
    <>
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/">หน้าแรก</Link></li>
          {items.map((it, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {!isLast && it.url ? <Link href={it.url}>{it.name}</Link> : it.name}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLdBreadcrumb items={items} />
    </>
  );
}
