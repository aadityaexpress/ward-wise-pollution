import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pollution")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ward-Wise Pollution Dashboard</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Ward</th>
            <th>PM2.5</th>
            <th>PM10</th>
            <th>NO2</th>
            <th>CO2</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.pm25}</td>
              <td>{d.pm10}</td>
              <td>{d.no2}</td>
              <td>{d.co2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
