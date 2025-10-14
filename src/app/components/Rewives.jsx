import './styles.css';

export const metadata = {
  title: 'แกลเลอรีทุเรียน | แสดงรูปภาพอย่างเดียว (Responsive)',
  description:
    'หน้าแสดงรูปทุเรียนแบบรูปอย่างเดียว จัดเรียง 1 คอลัมน์บนมือถือ และ 3 คอลัมน์บนจอ PC',
  robots: { index: true, follow: true },
};

const setA = [
  '/img/r0.jpg',
  '/img/r1.jpg',
  '/img/r2.jpg',
  '/img/r3.jpg',
  '/img/r4.jpg',
  
];

const setB = [
  '/img/001.jpg',
  '/img/002.jpg',
  '/img/003.jpg',
  '/img/004.jpg',
  '/img/005.jpg',
  '/img/006.jpg',
];

export default function Page() {
  return (
    <main className="durian-wrap">
      <h1 className="visually-hidden">แกลเลอรีรูปทุเรียน</h1>

      <div className="durian-grid">
        {setA.map((src, i) => (
          <figure className="durian-card" key={`a-${i}`}>
            <img src={src} alt={`Durian A${i + 1}`} loading="lazy" />
          </figure>
        ))}

        {/* ตัวคั่นแบบเต็มแถว (อย่าใส่ <hr /> ไว้ใน array) */}
        <hr className="grid-sep" />

        {setB.map((src, i) => (
          <figure className="durian-card" key={`b-${i}`}>
            <img src={src} alt={`Durian B${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </main>
  );
}
