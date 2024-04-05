import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

} from "recharts";


const Chart = ({title, data, dataKey1, dataKey2, grid}) => {
 return (
    <div className="chart">
      <h3 className="chartTitle">{title} </h3>
   
      <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
       {grid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis dataKey={dataKey1} />
      <YAxis />
      <Tooltip />
  
 
      <Line type="monotone" dataKey={dataKey2} stroke="#7D3C98" />
    </LineChart>
  
    </div>
  );
};

export default Chart;
