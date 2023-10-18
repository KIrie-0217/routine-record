import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chart from './Chart';
import Counts from "./Counts";
import TargetSelect from './TargetSelect';
import { Link} from '@mui/material';

function Copyright(){
    return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
    );
}

export default function UserDashboard() {
  return (

    <Container maxWidth="sm">
                 <Box sx={{ my: 4 }}>
        <TargetSelect></TargetSelect>
        
        <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <Counts count_title='通した回数' count={10}/>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <Counts count_title='連続日数' count={10}/>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  <Counts count_title='総ミス数' count={10}/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={10}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart chart_title='ドロップ数・ミス数' />
                </Paper>

              </Grid>
              <Grid item xs={12} >
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart chart_title='通した数' />
                </Paper>

              </Grid>


        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}