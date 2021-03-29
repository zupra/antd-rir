// import faker from 'faker/locale/ru'

function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}


/*
const Comments = Array.from({ length: randomInt(0, 3) }, (_, idx) => ({
  id: idx + 1,
  user: faker.name.findName(),
  comment: faker.lorem.sentences(),
  date: new Date(faker.date.past()).toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }),
  replies: Array.from({ length: randomInt(0, 3) }, (_, j) => ({
    id: `${idx}_${j}`,
    user: faker.name.findName(),
    comment: faker.lorem.sentences(),
    date: new Date(faker.date.past()).toLocaleString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  })),
}))
*/



export { randomInt }