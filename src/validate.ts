// именованный экспорт
export function validate() {
  console.log('valid')
}

// именованный экспорт
export function click() {
  console.log('click')
}

// дефолтный экспорт
export default {
  click: click,
  valid: validate,
}
