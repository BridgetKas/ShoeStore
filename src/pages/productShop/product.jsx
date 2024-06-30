import bannerImage from '../../assets/banner-img.png'
import styles from './product.module.css'
import ButtonIcon from '../../components/common/buttonIcon'
import ButtonComp from '../../components/common/Button'
import { colors } from "../../utilis/color"
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react'


function Product() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.mainproductContainer}>
          <div className={styles.productImageContainer}>
            <img src={bannerImage} className={styles.productImage}/>
          </div>
          <div className={styles.productdescriptionContainer}>
            <h1 className={styles.jeans}>Faded SkyBlu Denim Jeans</h1>
            <h1 className={styles.productPrice}>$149.99</h1>
            <p>Category:    <span className={styles.household}>Household</span></p>
            <p>Availability:    <span className={styles.stock}>In Stock</span></p>
            <hr/>
            <p>
              Mill Oil is an innovative oil filled radiator with the most modern technology. 
              If you are looking for something that can make your interior look awesome, 
              and at the same time give you the pleasant warm feeling during the winter.
            </p>
            <div className={styles.qualityContainer}>
              <p>Quality:</p>
              <div >
                <input type='number' value='1'/>
              </div>
            </div>
            <div className={styles.iconContainer}>
              <ButtonComp variant="contained" 
                size="large" 
                btnTitle="ADD TO CART"  
                style={{ background: colors.yellowGrad}} 
                onClick={() => alert('Clicked')}
              />
              <ButtonIcon size="small" 
                color="white" 
                icon={<DiamondIcon />} 
                backgroundColor="orange" 
              />
              <ButtonIcon size="small" 
                color="white" 
                icon={<FavoriteBorderIcon />} 
                backgroundColor="orange" 
              />
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description" value="1" />
              <Tab label="Specification" value="2" />
              <Tab label="Comments" value="3" />
              <Tab label="Reviews" value="4" />

            </TabList>
          </Box>
          <TabPanel value="1">Beryl Cook is one of Britain’s most talented and amusing artists .
            Beryl’s pictures feature women of all shapes and sizes enjoying themselves .
            Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15,
            where she went to secretarial school and then into an insurance office. 
            After moving to London and then Hampton, she eventually married her next door neighbour from Reading, 
            John Cook. 
            He was an officer in the Merchant Navy and after he left the sea in 1956, 
            they bought a pub for a year before
            John took a job in Southern Rhodesia with a motor company. 
            Beryl bought their young son a box of watercolours, and when showing him how to use it, 
            she decided that she herself quite enjoyed painting. 
            John subsequently bought her a child’s painting set for her birthday and 
            it was with this that she produced her first significant work, 
            a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. 
            It was aptly named ‘Hangover’ by Beryl’s husband and
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item four</TabPanel>

        </TabContext>
      </Box>
    </div>
  )
}

export default Product