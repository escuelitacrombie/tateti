import { useEffect, useState } from "preact/hooks";

export function App() {
  const [tableBoard, setTableBoard] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [whoPlay, setWhoPlay] = useState<"player1" | "player2">("player1");

  /**Asignar valores */
  const handlePlayInTheBoard = (indexRow: number, indexCell: number) => {
    if (whoPlay === "player1") {
      const previusTable = tableBoard;
      if (!previusTable[indexRow][indexCell]) {
        previusTable[indexRow][indexCell] = "O";
        setTableBoard([...previusTable]);
        setWhoPlay("player2");
      }
    } else {
      const previusTable = tableBoard;
      if (!previusTable[indexRow][indexCell]) {
        previusTable[indexRow][indexCell] = "X";
        setTableBoard([...previusTable]);
        setWhoPlay("player1");
      }
    }
  };

  useEffect(() => {
    /**Validar */
    tableBoard.forEach((row) => {
      if (row.every((cell) => cell === "X")) {
        alert("Ganaste player 2");
      } else if (row.every((cell) => cell === "O")) {
        alert("Ganaste player 1");
      }
    });
    for (let i = 0; i < tableBoard.length; i++) {
      const lineX = [];
      const lineO = [];
      for (let j = 0; j < tableBoard[i].length; j++) {
        console.log(`${j} ${i}`);
        if (tableBoard[j][i] === "X") {
          lineX.push(true);
        } else if (tableBoard[j][i] === "O") {
          lineO.push(true);
        }
      }

      if (lineX.length === 3) {
        alert("Ganaste player 2");
      } else if (lineO.length === 3) {
        alert("Ganaste player 1");
      }
    }
  }, [tableBoard]);

  return (
    <div>
      <nav>
        <div>Logo</div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Maps</li>
        </ul>
      </nav>
      <h1 className="text-red-500 font-bold">Tateti</h1>

      <main className={"w-full"}>
        {tableBoard.map((row, indexRow) => (
          <div className={"flex"}>
            {row.map((ceil, indexCell) => (
              <button onClick={() => handlePlayInTheBoard(indexRow, indexCell)}>
                {ceil}
              </button>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
