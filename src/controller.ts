import {
  NewToken
} from "../generated/Controller/Controller"
import { createToken } from "./token";

export function handleNewToken(event: NewToken): void {
  createToken(event.params.newToken);
}