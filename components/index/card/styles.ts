import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';

export const Wrapper = styled.div`
  margin-bottom: 48px;
`;

export const Content = styled.div`
  font-size: 18px;
`;

export const Apps = styled.p`
  display: flex;
  margin: 8px 0;
  color: ${({ theme }) => theme.foregroundSofter};
  font-size: 16px;
`;

export const Github = styled(FaGithub)`
  cursor: pointer;
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const Link = styled(FaLink)`
  cursor: pointer;
  height: 16px;
  width: 16px;
`;
