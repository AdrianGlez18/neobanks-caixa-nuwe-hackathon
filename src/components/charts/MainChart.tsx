// Packages
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import styled from '@emotion/styled';

// Files
import { mainChartData } from '../../data/charts';

const cardinal = curveCardinal.tension(0.2);

class MainChart extends PureComponent {
  render() {
    return (

      <ResponsiveContainer width="100%" height="100%" >
        <Responsive>
          <AreaChart
            width={1200}
            height={500}
            data={mainChartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          </AreaChart>
        </Responsive>
      </ResponsiveContainer>
    );
  }
}

export default MainChart;

const Responsive = styled.div`
  overflow-x:auto;
  min-width: 60vw;
`