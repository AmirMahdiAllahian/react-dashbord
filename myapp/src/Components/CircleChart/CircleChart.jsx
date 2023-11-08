import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
 Chart as ChartJs,
ArcElement,
Legend,
Tooltip
} from 'chart.js'
ChartJs.register({
	ArcElement,
	Legend,
	Tooltip,
});
export default function CircleChart() {
 const data={
      labels:['Sale','Distribute','Return',''],
           datasets:[{
            label:'Analytics',
            data:[9,3,5,3],
            backgroundColor:['#FF8F6B','#FFD66B','#5B93FF','white'],
            borderColor:['#FF8F6B','#FFD66B','#5B93FF','white']
          }]  ,

    }

const options = {

    }
     return (
    <Doughnut
    style={{width:'75%',height:'75%',margin:'auto'}}

    options={options}
    data={data}
    >
    
    </Doughnut>
  )
     }