import { DomainEvent } from "../../domain/events/events.js"

export type Observer = (event: DomainEvent) => void

export const observers: Observer[] = []

export function emitEvent(event: DomainEvent) {
  observers.forEach((observer) => observer(event))
}