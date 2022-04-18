import type { NextPage } from 'next';
import Head from 'next/head';
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
        studying in university my carreer of programming technician.
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

    <SkillsWrapper>
      <h2>What I know 🧠</h2>
      <div>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>React and Redux</p>
        <p>NextJS</p>
        <p>Unit Testing</p>
      </div>

      <div>
        <p>SCSS/Sass</p>
        <p>ChakraUI</p>
        <p>Styled Components</p>
        <p>Tailwind CSS</p>
      </div>

      <div>
        <p>Node</p>
        <p>Express</p>
        <p>MongoDB</p>
        <p>SQL with Sequepze</p>
        <p>Git</p>
        <p>Linux and CLI</p>
      </div>
    </SkillsWrapper>

    <ProjectsWrapper>
      <h2>My work 📦</h2>
      <Card
        title="Vendo"
        content="Ecommerce app with most used features in the market"
        apps="#react #sass #node #mongodb"
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
        apps="#nextjs #typescript #styledcomponents #node #mongodb"
        github="https://github.com/facundoveliz/personal-budget"
        demo="https://personal-budget.burki.club/"
      />
    </ProjectsWrapper>
  </Wrapper>
);

export default Home;
