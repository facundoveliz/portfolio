import { NextPage } from 'next';
import {
  Wrapper, Content, Apps, Github, Link,
} from './styles';

type CardProps = {
  title: string;
  content1: string;
  content2: string;
  apps: string;
  github: string;
  demo?: string;
};

const Card: NextPage<CardProps> = ({
  title,
  content1,
  content2,
  apps,
  github,
  demo,
}) => (
  <Wrapper>
    <h3>{title}</h3>
    <Content>{content1}</Content>
    <Content>{content2}</Content>
    <Apps>{apps}</Apps>
    <Github href={github} onClick={() => window.open(github)} />
    {demo ? <Link href={demo} onClick={() => window.open(demo)} /> : null}
  </Wrapper>
);

export default Card;
