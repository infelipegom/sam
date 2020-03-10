export default function(price) {
  return price.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
}
