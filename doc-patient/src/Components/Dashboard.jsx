import { useState, useEffect } from "react";
import axios from "axios";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Dashboard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

        const response = await axios.get(`${apiUrl}api/users`);
        //const response = await axios.get("http://localhost:3002/api/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to transform data for the chart
 // Function to transform data for the chart
const transformDataForChart = () => {
  const chartData = [];

  // Grouping user data by visitDate and summing up users for each date
  const groupedData = userData.reduce((acc, curr) => {
    const date = curr.dateVisite.split("T")[0]; // Extracting date from timestamp
    const [year, month, day] = date.split("-"); // Splitting date into year, month, and day
    const formattedDate = `${month}-${day}`; // Formatting date as month-day

    if (acc[formattedDate]) {
      acc[formattedDate] += 1;
    } else {
      acc[formattedDate] = 1;
    }
    return acc;
  }, {});

  // Converting grouped data into array format required by Recharts
  for (const date in groupedData) {
    chartData.push({ date, users: groupedData[date] });
  }

  return chartData;
};


  return (
    <div className="ml-96">

    <ComposedChart
      width={500}
      height={400}
      data={transformDataForChart()}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      }}
      >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="users" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="users" stroke="#ff7300" />
    </ComposedChart>
      </div>
  );
}
