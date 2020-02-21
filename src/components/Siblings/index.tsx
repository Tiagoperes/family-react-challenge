/* This component has a dumb behavior and implementing its logic is the objective of this challenge.
Feel free to alter the code as much as you want. */

import React, { FC, useEffect, useState } from 'react'
import { map } from 'lodash'
import { findChildrenAndSpouseByPersonId, findPersonById } from '../../utils/find'
import { Person, Relationship } from '../../types'
import { StyledPersonCard, SiblingGroup } from './styled'

interface Props {
  peopleIds: Array<number>,
  people: Array<Person>,
  relationships: Array<Relationship>
}

const Siblings: FC<Props> = ({ peopleIds, people, relationships }) => {
  const person = people[0]
  const children = [people[1], people[2], people[3]]

  return (
    <>
      <SiblingGroup>
        <StyledPersonCard
          {...person}
          spouseName="Maria das dores"
          onClick={() => console.log('clicked!')}
          isSelected
        />
      </SiblingGroup>
      <SiblingGroup>
        {map(children, child => <StyledPersonCard key={child.id} {...child} />)}
      </SiblingGroup>
    </>
  )
}

export default Siblings
