import React from 'react'
import { Chart as ChartJs,
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function VerticalBarChart({dataSet}) {
    const data = {
        labels: ['pm1', 'pm5', 'pm10'],
        datasets: [
            {
                label: 'pm',                
                data: [dataSet[0], dataSet[1], dataSet[2]],
                backgroundColor: '#7692E4',
                borderColor: '#ddd',
                borderWidth: 1,
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Valores actuales de pm',
              }
        }
    }

  return (
    <Bar
    data= {data}
    options={options}>        
    </Bar>
  )
}

export default VerticalBarChart