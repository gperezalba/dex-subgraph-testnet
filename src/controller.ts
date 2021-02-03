import {
  NewToken,
  NewPNFToken
} from "../generated/Controller/Controller"
import { createPackable } from "./packable";
import { createToken } from "./token";

export function handleNewToken(event: NewToken): void {
  createToken(event.params.newToken);
}

export function handleNewPNFToken(event: NewPNFToken): void {
  createToken(event.params.newToken);
  createPackable(event);
}