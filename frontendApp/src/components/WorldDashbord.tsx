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
        <Copyright />
      </Box>
    </Container>
  );
}