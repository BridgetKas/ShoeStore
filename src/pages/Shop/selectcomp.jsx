import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
import styles from './page.module.css'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SelectComp({textcolor,background,showDefaultSort=true}) {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.select}>
        <div className={styles.formContainer}>
          {
            showDefaultSort &&
            (<FormControl sx={{ m: 1, minWidth: 120,margin:0}}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                style={{
                  color:textcolor,
                  backgroundColor:background
                }}

              >
                <MenuItem value=""> <em>Default sorting</em> </MenuItem>
                <MenuItem value={20}>Default sorting</MenuItem>
                <MenuItem value={30}>Default sorting</MenuItem>
              </Select>
            </FormControl>) 
          } 
          <FormControl sx={{ m: 1, minWidth: 100,margin:0 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              style={{
                color:textcolor,
                backgroundColor:background
              }}
            >
              <MenuItem value=""> <em>Show 12</em> </MenuItem>
              <MenuItem value={20}>Show 12</MenuItem>
              <MenuItem value={30}>Show 12</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <PaginationComp/> */}
        <Stack spacing={1}>
          <Pagination
            color='secondary'
            variant="outlined" shape="rounded"
            count={6}
            boundaryCount={1}
            defaultPage={3}
            siblingCount={0}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                sx={{margin:"0px",
                  backgroundColor:"#fff"
                }}

              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
}

