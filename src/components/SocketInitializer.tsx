"use client";
import { useWebSocketMock } from "../hooks/useWebSocketMock";

export default function SocketInitializer() {
  useWebSocketMock();
  return null;
}
