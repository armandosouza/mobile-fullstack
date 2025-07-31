import * as cartService from '../services/cart.js'
import createItem from '../services/item.js'

const cart = []
const wishList = []

console.log("Bem-vindo ao Carrinho da Shopee!")

const item1 = await createItem("Hot Wheels", 56.99, 1)
const item2 = await createItem("Hot Wheels Ferrari", 47.89, 3)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)

await cartService.removeItem(cart, item2)

await cartService.displayCart(cart)

await cartService.calculateTotal(cart)