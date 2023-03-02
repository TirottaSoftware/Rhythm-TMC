import axios from "axios";
import LineChart from "./LineChart";
import Chart from 'chart.js/auto';
import DatePicker from "./DatePicker";
import { useState } from "react";
import MovementSelector from "./MovementSelector";

export default function Home(props) {
  const [data, setData] = useState(props.data)
  const [movementType, setMovementType] = useState("EBL")

  const getByDate = async (start, end) => {
    await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/tmc?start=${start}&end=${end}`)
      .then(res => {
        setData(res.data)
      })
  }

  const chartData = {
    labels: data.map(d => `${new Date(parseInt(d.entry_date)).toTimeString().slice(0, 5)}`),
    datasets: [
      {
        label: movementType,
        data: data.map(m => m.movements[movementType].v),
        borderColor: "#9AC5E3",
        backgroundColor: "#4A45A4",
        tension: 0.25
      }
    ]
  }


  return (
    <div className="flex justify-between h-screen">
      <div className="2/12 p-4">
        <DatePicker onChange={getByDate} />
        <MovementSelector options={Object.keys(data[0].movements)} handleChange={(e) => setMovementType(e.target.value)} />
      </div>
      <div className="bg-[#F5F7F9] w-10/12 px-8">
        <h1 className="text-3xl text-center font-bold my-4">Showing data for {movementType}</h1>
        <LineChart data={chartData} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await axios
    .get(`${process.env.NEXT_PUBLIC_APP_URL}/api/tmc`)
    .then(res => {
      return res.data
    })

  return {
    props: {
      data
    }
  }

}