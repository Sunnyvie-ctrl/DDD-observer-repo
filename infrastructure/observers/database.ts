import { Observer } from "./observer.js"

export const ProductCreatedDatabase: Observer = (event) => {
  if (event.type === "ProductCreated") {
    console.log(`DB: Product ${event.productId} saved to database`)
  }
}

export const PriceUpdatedDatabase: Observer = (event) => {
  if (event.type === "PriceUpdated") {
    console.log(`DB: Updated price for product ${event.productId} to ${event.newPrice}`)
  }
}

export const StockReducedDatabase: Observer = (event) => {
  if (event.type === "StockReduced") {
    console.log(`DB: Stock for product ${event.productId} reduced to ${event.newLevel}`)
  }
}