export type ProductId = string & { readonly __brand: "ProductId" }

export type ProductName =
  | "Shoes"
  | "Shirt"
  | "Pants"

export type PriceNumber = number & { readonly __brand: "PriceNumber" }

export type StockLevel = number & { readonly __brand: "StockLevel" }

export type Quantity = number & { readonly __brand: "Quantity" }