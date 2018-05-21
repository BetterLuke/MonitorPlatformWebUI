import React, {Component} from 'react';
import {Chart, Axis, Tooltip, Geom, Legend, Coord} from 'bizcharts';
import * as BizCharts from "bizcharts";



class MyAnalysis extends React.Component {


    render() {
        BizCharts.setTheme('dark')
        const data = [
            { genre: 'Sports', sold: 275, income: 2300 },
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
          ];

          const cols = {
            sold: { alias: '销售量' },
            genre: { alias: '游戏种类' }
          };
  
        return (
            <Chart  height={400} data={data} scale={cols}>
                <Axis name="genre" />
                <Axis name="sold" />
                <Legend position="bottom" dy={-20} />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
        )
    }
}

export default MyAnalysis;