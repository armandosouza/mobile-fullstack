async function addItem(userCart, item) {
    userCart.push(item)
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log("Carrinho Shopee: ")
    console.log(result.toFixed(2))
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name)
    
    if(index !== -1) {
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, item) {
    const removeIndex = userCart.findIndex(i => i.name === item.name)

    if(removeIndex === -1) {
        console.log("Item não encontrado!")
        return
    }

    const userItem = userCart[removeIndex]
    if(userItem.quantity > 1) {
        userCart[removeIndex].quantity -= 1
        userItem.subtotal = () => userItem.price * userItem.quantity
    } else if(userItem.quantity === 1) {
        deleteItem(userCart, item.name)
        userItem.subtotal = () => userItem.price * userItem.quantity
    }
}

async function displayCart(userCart) {
    console.log("Carrinho Shopee:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
            ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`)
    })
}

export {
    addItem, calculateTotal, deleteItem, displayCart, removeItem
}