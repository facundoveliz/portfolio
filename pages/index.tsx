import type { NextPage } from 'next';
import Head from 'next/head';
import {
  SiChakraui,
  SiExpress,
  SiGit,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiSequelize,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import Card from '../components/index/card/Card';
import {
  Github,
  LinkedIn,
  Introduction,
  ProjectsWrapper,
  SkillsWrapper,
  Wrapper,
  Email,
} from '../components/index/styles';

const Home: NextPage = () => (
  <Wrapper>
    <Head>
      <title>Facundo Veliz</title>
      <meta name="description" content="Facundo Veliz Portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Introduction>
      <h1>Facundo Veliz</h1>
      <p>Fullstack Web Dev</p>
      <p>Made in Buenos Aires, Argentina</p>
      <h2>About me 📕</h2>
      <p>
        I like to build web apps as a hobby and I would love to make it a full
        time job. I enjoy reading fantasy books and watching TV shows, I&apos;m
        also a linux aficionate and nowadays spend most of my time coding or
        studying in university for my carreer of programming technician.
      </p>
      <div>
        <Email
          href="facundoveliz9@gmail.com"
          onClick={() => window.open('mailto:facundoveliz9@gmail.com')}
        />
        <Github
          href="https://github.com/facundoveliz"
          onClick={() => window.open('https://github.com/facundoveliz')}
        />
        <LinkedIn
          href="https://www.linkedin.com/in/facundoveliz/"
          onClick={() => window.open('https://www.linkedin.com/in/facundoveliz/')}
        />
      </div>
    </Introduction>

    <h2>What I know 🧠</h2>
    <SkillsWrapper>
      <div>
        <SiJavascript />
        <p>Javascript</p>
      </div>
      <div>
        <SiTypescript />
        <p>Typescript</p>
      </div>
      <div>
        <SiReact />
        <p>React and Redux</p>
      </div>
      <div>
        <SiNextdotjs />
        <p>NextJS</p>
      </div>
      <div>
        <SiJest />
        <p>Unit Testing</p>
      </div>

      <div>
        <SiSass />
        <p>SCSS/Sass</p>
      </div>
      <div>
        <SiChakraui />
        <p>ChakraUI</p>
      </div>
      <div>
        <SiStyledcomponents />
        <p>Styled Components</p>
      </div>
      <div>
        <SiTailwindcss />
        <p>Tailwind CSS</p>
      </div>

      <div>
        <SiNodedotjs />
        <p>Node</p>
      </div>
      <div>
        <SiExpress />
        <p>Express</p>
      </div>
      <div>
        <SiMongodb />
        <p>MongoDB</p>
      </div>
      <div>
        <SiSequelize />
        <p>SQL with Sequelize</p>
      </div>
      <div>
        <SiGit />
        <p>Git</p>
      </div>
      <div>
        <SiLinux />
        <p>Linux and CLI</p>
      </div>
    </SkillsWrapper>

    <ProjectsWrapper>
      <h2>My work 📦</h2>
      <Card
        title="Vendo"
        content="Ecommerce app with most used features in the market"
        apps="#react #sass #node #mongodb #aws"
        github="https://github.com/facundoveliz/vendo-ecommerce"
        demo="https://vendo-ecommerce.burki.club/"
      />

      <Card
        title="Somos Mas"
        content="Foundraising fictional app made for Alkemy in a group of 4 devs"
        apps="#react #chakraui #node #sequelize"
        github="https://github.com/facundoveliz/OT123-CLIENT"
        demo="https://github.com/facundoveliz/OT123-SERVER"
      />

      <Card
        title="Personal Budget"
        content="A simple budget management app"
        apps="#nextjs #typescript #styled-components #node #mongodb"
        github="https://github.com/facundoveliz/personal-budget"
        demo="https://personal-budget.burki.club/"
      />
    </ProjectsWrapper>
  </Wrapper>
);

export default Home;
