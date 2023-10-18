import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TargetSelect() {
  const [target, setTarget] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 ,p:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">target</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={target}
          label="Target"
          defaultValue='Total'
          onChange={handleChange}
        >
          <MenuItem value={10}>Total</MenuItem>
          <MenuItem value={20}>AJDC 2024 2d</MenuItem>
          <MenuItem value={30}>AJDC 2024 1d</MenuItem>
          <MenuItem value={40}>DMOC 2023 1d</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}