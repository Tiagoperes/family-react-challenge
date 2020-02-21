import React, { FC } from 'react'
import { Card } from './styled'
import { Person } from '../../types'

interface Props extends Person {
  onClick?: () => void,
  className?: string,
  spouseName?: string,
  isSelected?: boolean,
}

const PersonCard: FC<Props> = ({
  birthDate,
  deathDate,
  country,
  gender,
  lastName,
  name,
  spouseName,
  isSelected,
  onClick,
  className,
}) => (
  <Card className={className} onClick={onClick} isSelected={isSelected}>
    <ul>
      <li>Name: {name} {lastName}</li>
      <li>Gender: {gender}</li>
      {spouseName && <li>Spouse: {spouseName}</li>}
      <li>Country: {country}</li>
      <li>Birth date: {birthDate}</li>
      {deathDate && <li>Death date: {deathDate}</li>}
    </ul>
  </Card>
)

export default PersonCard
