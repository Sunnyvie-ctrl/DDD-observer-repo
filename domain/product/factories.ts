import { Product } from "./product.js"
import {
  ProductId,
  ProductName,
  PriceNumber,
  Quantity,
  StockLevel,
} from "./types.js"

export function createPrice(value: number): PriceNumber {
  if (value < 0) {
    throw new Error("Price must be positive")
  }

  return value as PriceNumber
}

export function createStockLevel(value: number): StockLevel {
  if (value < 0) {
    throw new Error("Stock cannot be negative")
  }

  return value as StockLevel
}

export function createQuantity(value: number): Quantity {
  if (value <= 0) {
    throw new Error("Quantity must be greater than zero")
  }

  return value as Quantity
}

export function createProduct(
  id: string,
  name: ProductName,
  price: PriceNumber,
  stock: StockLevel
): Product {

  if (!id) {
    throw new Error("Product must have an ID")
  }

  return {
    id: id as ProductId,
    name,
    price,
    stock
  }
}

export function reduceStock(
  product: Product,
  quantity: Quantity
): StockLevel {

  const newStock = product.stock - quantity

  if (newStock < 0) {
    throw new Error("Stock cannot go below zero")
  }

  return newStock as StockLevel
}