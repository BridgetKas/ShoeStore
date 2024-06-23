import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
import PaginationComp from './pagination';

export default function SelectComp() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value=""> <em>Default sorting</em> </MenuItem>
          <MenuItem value={20}>Default sorting</MenuItem>
          <MenuItem value={30}>Default sorting</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value=""> <em>Show 12</em> </MenuItem>
          <MenuItem value={20}>Show 12</MenuItem>
          <MenuItem value={30}>Show 12</MenuItem>
        </Select>
      </FormControl>
      <PaginationComp/>
    </div>
  );
}

