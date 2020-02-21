import { Person, Relationship } from '../types'

const peopleUrl = 'https://gist.githubusercontent.com/Tiagoperes/1fa73c17081f40b6af23dbc53ca09cd3/raw/4a698cb4750ee14cab00e16146df4882d0d5000f/people.json'
const relationshipsUrl = 'https://gist.githubusercontent.com/Tiagoperes/1fa73c17081f40b6af23dbc53ca09cd3/raw/a0511cc534749ed2641a8b1f63a2944632540ca5/relationships.json'

export async function fetchPeople() {
  const response = await fetch(peopleUrl)
  return (await response.json()) as Array<Person>
}

export async function fetchRelationships() {
  const response = await fetch(relationshipsUrl)
  return (await response.json()) as Array<Relationship>
}
