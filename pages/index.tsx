import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Facundo Veliz</title>
      <meta name="description" content="Facundo Veliz Portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Facundo Veliz</h1>
    <p>Fullstack Web Dev</p>
    <p>Made in Buenos Aires, Argentina</p>

    <section>
      <h2>What I know</h2>
      <ul>
        <li>SCSS/Sass</li>
        <li>ChakraUI</li>
        <li>Styled Components</li>
        <li>Tailwind CSS</li>

        <li>Javascript and Typescript</li>
        <li>React and Redux</li>
        <li>NextJS</li>
        <li>Unit testing (Mocha-Chai and Supertest/Jest)</li>

        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQL with Sequelize</li>

        <li>Git</li>
        <li>Linux and CLI</li>
      </ul>
    </section>

    <section>
      <h2>My work</h2>
      <div>
        <h3>Vendo Ecommerce</h3>
        <p>Ecommerce app with most used features in the market</p>
        <p>React/Sass and Node/MongoDB</p>
        <div>
          <a href="https://github.com/facundoveliz/vendo-ecommerce">Code</a>
          <a href="https://vendo-ecommerce.burki.club/">Demo</a>
        </div>
      </div>

      <div>
        <h3>Somos Mas</h3>
        <p>Foundraising fictional app made for Alkemy in a group of 4</p>
        <p>React/ChakraUI and Node/Sequelize</p>
        <div>
          <a href="https://github.com/facundoveliz/OT123-CLIENT">Code</a>
          <a href="https://github.com/facundoveliz/OT123-SERVER">Code</a>
        </div>
      </div>

      <div>
        <h3>Personal Budget</h3>
        <p>A simple budget management app</p>
        <p>NextJS/Typescript/StyledComponents and Node/MongoDB</p>
        <div>
          <a href="https://github.com/facundoveliz/personal-budget">Code</a>
          <a href="https://personal-budget.burki.club/">Demo</a>
        </div>
      </div>
    </section>

    <section>
      <h2>About me</h2>
      <p>
        I like to build web apps as a hobby and I would love to make it a full
        time job. I enjoy reading fantasy books and watching TV shows, i&apos;m
        also a linux aficionate and nowadays spend most of my time coding or
        studying in university my carreer of programming technician.
      </p>
    </section>
    <p>Email</p>
    <p>LinkedIn</p>
    <p>Github</p>
  </div>
);

export default Home;
