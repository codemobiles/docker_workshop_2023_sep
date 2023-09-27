import { useEffect, useState } from "react";

export default function App() {
  const [dataArray, setdataArray] = useState([]);
  const [newData, setNewData] = useState("");
  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const response = await fetch("http://localhost:8080");
    setdataArray(await response.json());
  };

  const addData = async (data: string) => {
    await fetch("http://localhost:8080/add/" + data);
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Enter your data"
        value={newData}
        onChange={(event) => setNewData(event.target.value)}
        onKeyPress={(event) => {
          if (event.key == "Enter") {
            addData(newData);
            setNewData("");
          }
        }}
      />
      <button
        onClick={() => {
          addData(newData);
          setNewData("");
        }}
      >
        Create
      </button>
      <ul>
        {dataArray.map((e: { _id: string; name: string }) => (
          <li key={e._id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
