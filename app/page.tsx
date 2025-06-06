'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Experiencias from './components/Experiencias';
import Skills from './components/Skills';
import Contato from './components/Contato';
import styles from './page.module.css';
import Projetos from './components/Projetos';
import Conquistas from './components/Conquistas';


export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.className = dark ? styles.dark : styles.light;
  }, [dark]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <main className={styles.main}>

      <nav className={styles.navScroll}>
        <button onClick={() => scrollTo('apresentacao')}>Início</button>
        <button onClick={() => scrollTo('sobre')}>Sobre</button>
        <button onClick={() => scrollTo('experiencias')}>Experiências</button>
        <button onClick={() => scrollTo('projetos')}>Projetos</button>
        <button onClick={() => scrollTo('conquistas')}>Conquistas</button>
        <button onClick={() => scrollTo('skills')}>Skills</button>
        <button onClick={() => scrollTo('contato')}>Contato</button>
        
      </nav>

      <Hero toggleMode={() => setDark(!dark)} dark={dark} />
      <Sobre />
      <Experiencias />
      <Projetos />
      <Skills />
      <Conquistas />
      <Contato />
      

      

   

    </main>
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Henry Lírio Rufino. Todos os direitos reservados.</p>
      <p>Portifolio desenvolvido usando React + Next.js</p>
    </footer>
    </>
  );

  
}

