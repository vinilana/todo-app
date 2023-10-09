import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "./components/board/Board";

export function ChallengeComponent() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Board />
    </DndProvider>
  );
}
