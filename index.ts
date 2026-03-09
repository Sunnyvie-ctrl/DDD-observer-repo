import { v4 as uuidv4 } from "uuid"

import {
  createPrice,
  createProduct,
  createQuantity,
  createStockLevel,
  reduceStock
} from "./domain/product/factories.js"

import { emitEvent, observers } from "./infrastructure/observers/observer.js"

import {
  ProductCreatedEmail,
  PriceUpdatedEmail,
  StockReducedEmail
} from "./infrastructure/observers/email.js"

import {
  ProductCreatedDatabase,
  PriceUpdatedDatabase,
  StockReducedDatabase
} from "./infrastructure/observers/database.js"


// Register observers
observers.push(ProductCreatedEmail)
observers.push(PriceUpdatedEmail)
observers.push(StockReducedEmail)

observers.push(ProductCreatedDatabase)
observers.push(PriceUpdatedDatabase)
observers.push(StockReducedDatabase)



try {

  const product = createProduct(
    uuidv4(),
    "Shirt",
    createPrice(50),
    createStockLevel(-20)
  )

  // Emit product created event
  emitEvent({
    type: "ProductCreated",
    productId: product.id
  })


  const quantity = createQuantity(5)

  const newStock = reduceStock(product, quantity)

  // Emit stock reduced event
  emitEvent({
    type: "StockReduced",
    productId: product.id,
    newLevel: newStock,
    quantity
  })


  const newPrice = createPrice(75)

  // Emit price updated event
  emitEvent({
    type: "PriceUpdated",
    productId: product.id,
    newPrice
  })


} catch (error) {

  if (error instanceof Error) {
    console.error("Error:", error.message)
  } else {
    console.error("Unknown error")
  }

}