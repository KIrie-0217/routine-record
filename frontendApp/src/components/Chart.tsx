import { useTheme } from '@mui/material/styles';
import { dayjs } from '../utils/dateutil';
import * as React from 'react';
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { RoutineData } from '../types/indext';
import Title from './Title';

// Generate Sales Data
function createData(date:String,drop:number, miss: number) {
    const r : RoutineData ={ date,drop, miss };
    return r;
}

const RoutineDataList : RoutineData[] = [
    createData(dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm"),10,1),
    createData(dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm"),4,1),
    createData(dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm"),3,1),
    createData(dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm"),2,0),
    createData(dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm"),1,0),
];

export default function Chart(props:{chart_title:string}) {
    const theme = useTheme();
  
    return (
      <React.Fragment>
        <Title>{props.chart_title}</Title>
        <ResponsiveContainer>
          <LineChart
            data={RoutineDataList}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis
              dataKey="date"
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            />
            <YAxis
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            >
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
              </Label>
            </YAxis>
          <Line type="monotone" dataKey="drop" stroke="#8884d8" />
         <Line type="monotone" dataKey="miss" stroke="#3ba2f6" /> 
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
