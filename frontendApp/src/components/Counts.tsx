import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { dayjs } from '../utils/dateutil';


export default function Counts(props :{count_title:string,count:number}){
    const today :string = dayjs().tz("Asia/Tokyo").format("YYYY,MMM,DD")
    return (
        <React.Fragment>
        <Title>{props.count_title}</Title>
        <Typography component="p" variant="h4">
          {props.count}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
                     {today} 
        </Typography>
      </React.Fragment>
  
    )
}