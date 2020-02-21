import styled from 'styled-components'

export const Card = styled.div<{ isSelected?: boolean }>`
  border-radius: 10;
  box-shadow: #DDD 2px 2px 6px;
  background-color: ${({ isSelected }) => (isSelected ? '#a3a8e6' : '#FFF')};
  padding: 20px;
  width: 300px;
`
