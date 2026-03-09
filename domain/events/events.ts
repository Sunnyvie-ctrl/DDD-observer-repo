import { ProductId, PriceNumber, Quantity, StockLevel } from "../product/types.js"

export type ProductCreatedEvent = {
  readonly type: "ProductCreated"
  readonly productId: ProductId
}

export type PriceUpdatedEvent = {
  readonly type: "PriceUpdated"
  readonly productId: ProductId
  readonly newPrice: PriceNumber
}

export type StockReducedEvent = {
  readonly type: "StockReduced"
  readonly productId: ProductId
  readonly newLevel: StockLevel
  readonly quantity: Quantity
}

export type DomainEvent =
  | ProductCreatedEvent
  | PriceUpdatedEvent
  | StockReducedEvent