import { Observer } from "./observer.js";
export const ProductCreatedEmail: Observer = (event) => {
    if (event.type === "ProductCreated") {
        console.log(`Email: Product ${event.productId} created`)
    }
}

export const PriceUpdatedEmail: Observer = (event) => {
    if (event.type === "PriceUpdated") {
        console.log(`Email: Product ${event.productId} new price: ${event.newPrice}`)
    }
}

export const StockReducedEmail: Observer = (event) => {
    if (event.type === "StockReduced") {
        console.log(`Email: Product ${event.productId} stocks reduced to ${event.newLevel}`)
    }
}