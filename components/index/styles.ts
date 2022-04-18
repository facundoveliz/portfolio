import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export const Wrapper = styled.div``;

export const Introduction = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.foregroundSoft};
    margin-bottom: 6px;
    &:last-child {
      font-size: 18px;
      color: ${({ theme }) => theme.foregroundSofter};
    }
  }
  svg {
    margin-right: 12px;
  }
  h1 {
    font-size: 48px;
  }
`;

export const SkillsWrapper = styled.div`
  div {
    background: ${({ theme }) => theme.backgroundSoft};
    padding: 24px;
    width: auto;
    border-radius: 4px;
    margin: 24px 0;
    p {
      width: auto;
      display: flex;
      padding: 12px;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  h2 {
    margin: 48px 0;
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
