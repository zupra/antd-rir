import faker from 'faker/locale/ru'
export default (context, inject) => {
  inject('faker', faker)
}