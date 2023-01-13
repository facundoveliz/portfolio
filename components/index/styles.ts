import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export const Wrapper = styled.div``;

export const Introduction = styled.div`
  margin-top: 30px;
  height: 60vh;
  @media (max-width: 650px) {
    margin-top: 0;
    height: 100vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.foregroundSoft};
    margin-bottom: 6px;
  }
  div {
    margin-top: 6px;
    svg {
      margin-right: 12px;
    }
  }
  h1 {
    font-size: 48px;
  }
`;

export const Description = styled.div`
  p {
    font-size: 19px;
    text-align: justify;
    color: ${({ theme }) => theme.foregroundSoft};
    margin-bottom: 20px;
  }
`;

export const Skills = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  /* background: red; */
  width: 100%;
  div {
    padding: 4px;
    text-align: center;
    width: 120px;
    p {
      width: 100px;
    }
    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const SkillsWrapper = styled.div`
  @media (min-width: 650px) {
    h2 {
      margin-top: 128px;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  h2 {
    margin: 48px 0 48px;
  }
`;

export const Email = styled(MdOutlineMail)`
  cursor: pointer;
  height: 28px;
  width: 28px;
  margin-right: 8px;
`;

export const Github = styled(FaGithub)`
  cursor: pointer;
  height: 28px;
  width: 28px;
  margin-right: 8px;
`;

export const LinkedIn = styled(FaLinkedin)`
  cursor: pointer;
  height: 28px;
  width: 28px;
  margin-right: 8px;
`;
