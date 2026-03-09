import { ProductId, ProductName, PriceNumber, StockLevel } from "./types.js"

export type Product = {
    id: ProductId
    name: ProductName
    price: PriceNumber
    stock: StockLevel
}