
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'

function valuetext(value) {
  return `$${value}`;
}

export default function PriceRangeComp() {
  const [value, setValue] = useState([500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Price</h1>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
          color='primary'
        />
      </Box>
      <p>Price:$500.00 to $10000.00
      </p>
    </div>
  );
}

