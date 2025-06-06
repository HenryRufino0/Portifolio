'use client';

import styles from './Sobre.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Sobre() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.sobre} ${visible ? styles.visible : ''}`} id="sobre" ref={ref}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <h2 className={styles.titulo}>🙋‍♂️ 💻 Sobre Mim</h2>
          <p>
            Sou apaixonado por tecnologia desde cedo. Me especializei em desenvolvimento fullstack,
            com foco em soluções que otimizam tempo e melhoram a experiência do usuário. Trabalhei
            com automações, APIs, visualizações de dados e tenho forte atuação em backend com Python
            e frontend com JavaScript.
          </p>
          <p>
            Também atuo com DevOps, banco de dados e metodologias ágeis. Gosto de aprender e aplicar
            tecnologias novas, sempre buscando eficiência e resultados.
          </p>
        </div>
        <div className={styles.imagem}>
          <Image
            src="/SouthPark_Char.png"
            alt="Sobre Henry"
            width={10000}
            height={10000}
            className={styles.imgAnimada}
          />
        </div>
      </div>
    </section>
  );
}
