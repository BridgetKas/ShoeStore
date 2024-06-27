
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'
import styles from './page.module.css'

function valuetext(value) {
  return `$${value}`;
}

export default function PriceRangeComp() {
  const [value, setValue] = useState([0,500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.priceContainer}>
      <div className={styles.brand}>Price</div>
      <div className={styles.sliderContainer}>
        <Box sx={{ width:"81%",margin:"auto" }}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}
            color='primary'
          />
        </Box>
      </div>
      <p className={styles.price}>Price:<span className={styles.cash}>$500.00 to $10000.00</span>
      </p>
    </div>
  );
}

