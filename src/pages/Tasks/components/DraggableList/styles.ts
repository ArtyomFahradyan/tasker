import styled from 'styled-components';

export const ListWrapper = styled.div<{ $direction: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'horizontal' ? 'row' : 'column')};
  flex-wrap: wrap;
`;

export const ListItemsWrapper = styled.div`
  div:last-child {
    & > div {
      margin-bottom: 0;
    }
  }
`;
