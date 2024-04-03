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
        const response = await axios.get("http://localhost:3000/api/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to transform data for the chart
  const transformDataForChart = () => {
    const chartData = [];

    // Grouping user data by visitDate and summing up users for each date
    const groupedData = userData.reduce((acc, curr) => {
      const date = curr.visitDate.split("T")[0]; // Extracting date from timestamp
      if (acc[date]) {
        acc[date] += 1;
      } else {
        acc[date] = 1;
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
    <ComposedChart
      width={500}
      height={400}
      data={transformDataForChart()}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
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
  );
}
