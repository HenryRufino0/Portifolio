'use client';

import styles from './Projetos.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';

const projetos = [

  {
    titulo: 'Este Portifólio',
    descricao: 'Portifolio online',
    imagem: '/projetos-images/portifolio.png',
    link:'https://portifolio-git-main-henry-rufinos-projects.vercel.app'
  },

  {
    titulo: 'Site Valle Log Transportes',
    descricao: 'Site para a empresa Valle Log Transportes.',
    imagem: 'projetos-images/vallelog.png',
    link: 'https://vallelogtransportes.com.br'
  },

  {
    titulo: 'Timer Online',
    descricao: 'Timer online na web.',
    imagem: '/projetos-images/timer.png',
    link: 'https://web-timer-js.vercel.app'
  },
  {
    titulo: 'Gerador de Senhas',
    descricao: 'Gerador de senhas aleatórias online.',
    imagem: '/projetos-images/password.png',
    link: 'https://password-generator-js-six-sooty.vercel.app'
  },
  
  {
    titulo: 'Projeto Clone Spotify',
    descricao: 'Projeto clone do Spotify para web',
    imagem: '/projetos-images/spotify.png',
    link: 'https://github.com/HenryRufino0/Spotify-Copy-Project'
  },
  {
    titulo: 'CRUD Simples',
    descricao: 'CRUD com React + Node',
    imagem: '/projetos-images/crud.png',
    link: 'https://github.com/HenryRufino0/CodeLeap---CRUD-Test'
  },
  {
    titulo: 'TCC: Automatização de Tarefas',
    descricao: 'Ferramenta que decide se uma tarefa deve ser automatizada com IA.',
    imagem: '/projetos-images/tcc.png',
    link: 'https://github.com/HenryRufino0/Should-I-have-automate-this-task-'
  },
  {
    titulo: 'Comparador de Planilhas',
    descricao: 'Compara automaticamente planilhas e gera novo arquivo.',
    imagem: '/projetos-images/comparador.png',
    link: 'https://github.com/HenryRufino0/Spreadsheet-Comparator'
  },
  {
    titulo: 'Sorriso - Teste Optotipo',
    descricao: 'Teste de optotipo online com avaliação de acuidade visual.',
    imagem: '/projetos-images/optotech.png',
    link: 'https://github.com/HenryRufino0/Optotech'
  },
  {
    titulo: 'Analisador de Nanofibras',
    descricao: 'Analisa imagens e mede diâmetro de nanofibras com Python.',
    imagem: '/projetos-images/nanofiber.png',
    link: 'https://github.com/HenryRufino0/NanoFiber-Analyzer'
  },




];

export default function Projetos() {
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
    <section
      id="projetos"
      ref={ref}
      className={`${styles.projetos} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.titulo}>💻 Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((proj, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imgWrapper}>
              <img src={proj.imagem} alt={proj.titulo} />
              <a
  href={proj.link}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.overlay}
>
  <FaEye size={32} color="#fff" />
</a>

            </div>
            <div className={styles.cardTexto}>
              <h3>{proj.titulo}</h3>
              <p>{proj.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
