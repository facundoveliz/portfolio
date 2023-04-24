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
  Description,
  Skills,
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
      <Description>
        <p>
          As a junior web developer with a passion for building web
          applications, I am excited to take on new challenges and expand my
          skills in the industry. I have a strong background in React and
          Node.js, and have experience in building dynamic and responsive web
          apps.
        </p>
        <p>
          I am a quick learner with great attention to detail and a passion for
          finding the best and most efficient solutions to complex problems. I
          am available for full-time, contracting, or freelance opportunities
          and am eager to work with a team of experienced developers to continue
          growing my skills and knowledge.
        </p>
      </Description>
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
      <Skills>
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
      </Skills>
    </SkillsWrapper>

    <ProjectsWrapper>
      <h2>My work 📦</h2>
      <Card
        title="Vendo"
        content1="Vendo is an e-commerce solution that I developed using React. I created a dynamic and responsive user interface that provides users with an intuitive and seamless shopping experience. The application also utilizes Sass for styling, Node for server-side logic, and MongoDB for data storage."
        content2="One of the key features of this app is the admin panel, which allows for easy management of users, products, and orders. This includes the ability to perform CRUD operations on these entities, providing full control over the content of the website. Additionally, the app features a cart system, allowing users to add products to their cart and proceed to checkout. Users are able to create an account, sign in, and update their profile."
        apps="#react #sass #node #mongodb #aws"
        github="https://github.com/facundoveliz/vendo-ecommerce"
        demo="https://vendo.facundoveliz.monster/"
      />

      <Card
        title="Personal Budget"
        content1="Budgie is a budget management website developed using NextJS, styled-components, NodeJS, MongoDB, and Typescript. This website offers users a comprehensive set of tools to help them manage their finances effectively. The user can perform CRUD operations on budget entries, which can be classified as expenses or incomes and assigned to different common categories for better organization. This allows users to keep track of their financial situation in a detailed and organized way."
        content2="It also provides with a register and login system, which includes private routes to ensure the security of user data. Also I implemented a set of unit tests that I plan to expand using Jest and Supertest. The website includes a Day and Night mode switcher. Additionally, users can edit their profiles, allowing them to update their personal information and preferences."
        apps="#nextjs #typescript #styled-components #node #mongodb"
        github="https://github.com/facundoveliz/personal-budget"
        demo="https://budgie.facundoveliz.monster/"
      />

      <Card
        title="Book Repository"
        content1="Book Repository is a personal book tracking app, utilizing technologies such as NextJS, TailwindCSS, NodeJS, SQL with Sequelize, and TypeScript. The main functionality of the website is to allow users to access a vast collection of books using the Google Books API and perform various operations, such as updating the status of the books (read, to read, currently reading), adding ratings, and notes. The website also includes a registration and login system with private routes, ensuring user privacy. "
        content2="Additionally, the website has unit tests with Jest and Supertest to ensure the stability and reliability of the website. A day and night mode switcher is also included and they can also edit their profile on the app. In summary, the Book Repository aims to provide a comprehensive and user-friendly platform for book lovers to manage their reading list and keep track of their progress."
        apps="#react #chakraui #node #sequelize"
        github="https://github.com/facundoveliz/book-repository"
        demo=""
      />
    </ProjectsWrapper>
  </Wrapper>
);

export default Home;
