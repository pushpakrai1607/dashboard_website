import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './pieChartBox.scss';

const data = [
  { name: "Mobile", value: 200, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 400, color: "#FFBB28" },
  { name: "Tablet", value: 100, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
      <h1>
        Leads By Sources
      </h1>
      <div className="chart">
        <ResponsiveContainer height={300} width='100%'>

          <PieChart>
            <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '5px' }} />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}

              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>

          </PieChart>

        </ResponsiveContainer>
      </div>


      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>

        ))}
      </div>
    </div>
  )
}

export default PieChartBox
