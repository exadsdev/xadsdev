'use client';

import { useMemo } from 'react';

export default function AdGallery() {
  // แก้ไขรายการรูป/ลิงก์ได้ตามจริง (รองรับรูปนอกโดเมนผ่าน <img>)
  const items = useMemo(
    () => [
      {
        id: 'Google-01',
        title: 'Google Ads สายเทา',
        type: 'Search',
        img: '/img/g1.jpg',
        full: '/img/g1.jpg',
        link: '#',
      },
      {
        id: 'Google-02',
        title: 'Google Ads สายเทา ตัวอย่างแคมเปญ',
        type: 'Display',
        img: '/img/g2.jpg',
        full: '/img/g2.jpg',
        link: '#',
      },
      {
        id: 'Google-03',
        title: 'ตัวอย่าง Google AD ในหน้า คีย์เวิร์ด',
        type: 'YouTube',
        img: '/img/g3.jpg',
        full: '/img/g3.jpg',
        link: '#',
      },
      {
        id: ' Facebook-01',
        title: 'ยิงแอดโฆษณา Facebook สายเทา',
        type: 'โฆษณา Facebook สายเทา',
        img: '/img/fb1.jpg',
        full: '/img/fb1.jpg',
        link: '#',
      },
      {
        id: ' Facebook-02',
        title: 'ยิงแอดโฆษณา Facebook สายเทา',
        type: 'โฆษณา Facebook สายเทา',
        img: '/img/fb2.jpg',
        full: '/img/fb2.jpg',
        link: '#',
      },
      {
        id: ' Facebook-03',
        title: 'ยิงแอดโฆษณา Facebook สายเทา',
        type: 'โฆษณา Facebook สายเทา',
        img: '/img/fb3.jpg',
        full: '/img/fb3.jpg',
        link: '#',
      },
    ],
    []
  );

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://example.com/portfolio/google-ads#${it.id}`,
      name: it.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 m-0">ตัวอย่างผลงานโฆษณา Google</h1>
          <div className="text-muted">ตัวอย่างผลงานโฆษณา Google & Facebook สายเทา </div>
        </div>

        {/* Filter (ตัวอย่าง UI—ยังไม่กรองจริง) */}
        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="filter">
            <button className="btn btn-outline-secondary">ทั้งหมด</button>
            <button className="btn btn-outline-secondary">Google Search </button>
            <button className="btn btn-outline-secondary">Facebook โฆษณา</button>
          </div>
        </div>

        {/* Gallery */}
        <div className="row g-4">
          {items.map((it) => (
            <div key={it.id} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${it.id}`}
                  aria-label={`ดูรูป ${it.title}`}
                >
                  <img src={it.img} className="card-img-top" alt={it.title} />
                </a>
                <div className="card-body">
                  <div className="small text-uppercase text-muted">{it.type}</div>
                  <h2 className="h6 mt-1 mb-2">{it.title}</h2>
                  <a href={it.link} className="btn btn-sm btn-primary">
                    ดูรายละเอียดแคมเปญ
                  </a>
                </div>
              </div>

              {/* Modal */}
              <div
                className="modal fade"
                id={`modal-${it.id}`}
                tabIndex="-1"
                aria-labelledby={`modalLabel-${it.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`modalLabel-${it.id}`}>
                        {it.title}
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <img src={it.full} className="img-fluid rounded" alt={it.title} />
                    </div>
                    <div className="modal-footer">
                      <a href={it.link} className="btn btn-primary">
                        เปิดรายละเอียดแคมเปญ
                      </a>
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                        ปิด
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
