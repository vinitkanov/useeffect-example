import { useEffect, useState } from "react";

export default function App() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    console.log("Text ini akan muncul sekali saja");
  }, []);

  return (
    <div>
      <h1>Apakah kamu sudah mengerjakan tugas?</h1>
      <p className={`p-4 ${isDone ? "bg-green-100" : "bg-red-100"} w-fit`}>
        {isDone ? "Ya sudah mengerjakan" : "Maaf belum mengerjakan"}
      </p>

      <button
        className="bg-black p-2 text-white cursor-pointer"
        onClick={() => setIsDone(!isDone)}
      >
        {isDone ? "Belum" : "Sudah"}
      </button>
    </div>
  );
}
