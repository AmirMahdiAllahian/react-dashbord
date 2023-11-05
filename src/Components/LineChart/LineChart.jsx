import React from 'react'
import { Line } from 'react-chartjs-2';
import {
 Chart as ChartJs,
LineElement,
CategoryScale,//x axis
LinearScale,// y axis
PointElement,
Legend,
Tooltip
} from 'chart.js'
ChartJs.register({
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
	Tooltip,
})
export default function CircleChart() {
	const data={
		labels:['10 am','11 am','12 am','01 am','02 am','03 am','04 am','05 am','06 am','07 am'],
		datasets:[{
			data:[58,65,33,85,75,95,45,55,35,77],
			backgroundColor:'white',
			borderColor:'#5BC4FF', 
			pointBorderColor:'pink',
			fill:true,
			tension:0.4
		}]
	}
	const options = {
		plugins:{
			legend:true 
	},
		scales:{
				y:{
					min:25,
					max:95
				},
	
		}
				

}
  return (
	<Line
	style={{width:'72%',height:'75%',margin:'7%  auto 0 auto'}}
	data={data}
	options={options}
	>


	</Line>
  )
}
