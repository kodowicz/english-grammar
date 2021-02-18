import styled from 'styled-components';

export const Button = styled.button`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  font-family: ${({ theme }) => theme.minorFamily};
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  margin: 0 auto;
  padding: 1rem 4rem;
  font-size: 1.4rem;
  border-radius: 5rem;

  @media (min-width: 768px) {
    padding: 1rem 5rem;
    font-size: 1.6rem;
  }
`;
