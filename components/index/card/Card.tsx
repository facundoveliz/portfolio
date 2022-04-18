import { NextPage } from 'next';
import {
  Wrapper, Content, Apps, Github, Link,
} from './styles';

type CardProps = {
  title: string;
  content: string;
  apps: string;
  github: string;
  demo: string;
};

const Card: NextPage<CardProps> = ({
  title, content, apps, github, demo,
}) => (
  <Wrapper>
    <h3>{title}</h3>
    <Content>{content}</Content>
    <Apps>{apps}</Apps>
    <Github href={github} onClick={() => window.location.assign(github)} />
    <Link href={demo} onClick={() => window.location.assign(demo)} />
  </Wrapper>
);

export default Card;
