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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReviewComp from '../../components/review/review'
import reviewImage1 from '../../assets/review-1.png'
import reviewImage2 from '../../assets/review-2.png'
import reviewImage3 from '../../assets/review-3.png'
import Rating from '@mui/material/Rating';
import InputComponent from '../../components/common/inputComponent'
import HeaderComp from '../../layout/Header/header'


const tabStyles = {
  textTransform:"none",
  backgroundColor:"#fff",
}

function createData(name, length) {
  return { name, length };
}

const rows = [
  createData('Width', `${128}mm`),
  createData('Height', `${508}mm`),
  createData('Depth', `${85}mm`),
  createData('Weight', `${52}gm`),
  createData('Quality checking', 'yes'),
  createData('Freshness Duration', `${3}days`),
  createData('When packeting', 'Without touch of hand'),
  createData('Each Box contains', `${60}pcs`),



];
function Product() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HeaderComp title='Product' firstpage='first' nextpage='next'/>

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
                <input type='number' value='1' className={styles.inputNumber}/>
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
      <div className={styles.boxContainer}>
        <Box sx={{ width: '85%', typography: 'body1' , margin:"auto" }}>
          <TabContext value={value} sx={{border:"1px"}}>
            <Box sx={{ 
              borderBottom: 1, 
              borderColor: 'divider',
              backgroundColor:"#eee" , 
              display:"flex" , 
              justifyContent:"space-around", 
              padding:"10px 20px"
            }}>
              <TabList 
                onChange={handleChange} 
                aria-label="lab API tabs example"
                className={styles.labelContainer} 
                variant="scrollable" orientation="horizontal"
                visibleScrollbar={true}
              >
                <Tab label="Description" value="1" sx={tabStyles} />
                <Tab label="Specification" value="2" sx={tabStyles}/>
                <Tab label="Comments" value="3" sx={tabStyles}/>
                <Tab label="Reviews" value="4" sx={tabStyles}/>

              </TabList>
            </Box>
            <TabPanel value="1" >
              <p className={styles.description}>Beryl Cook is one of Britain’s most talented and amusing artists .
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
                It was aptly named ‘Hangover’ by Beryl’s husband and</p>
              <p className={styles.description}>
                It is often frustrating to attempt to plan meals that are designed for one. 
                Despite this fact, we are seeing more and more recipe books and Internet websites 
                that are dedicated to the act of cooking for one. 
                Divorce and the death of spouses or grown children leaving for college 
                are all reasons that someone accustomed to cooking for more than one would 
                suddenly need to learn how to adjust all the cooking practices utilized 
                before into a streamlined plan of cooking that is more efficient for one person creating less
              </p>
            </TabPanel>
            <TabPanel value="2">
              
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550, border:"none"}} size="small" aria-label="a dense table">
       
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.length}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              
            </TabPanel>
            <TabPanel value="3" className={styles.reviewContainer}>
              <div className={styles.mainreviewContainer}>
                <ReviewComp image={reviewImage1}/>
                <ReviewComp image={reviewImage2} sx={{paddingLeft:"20px"}}/>
                <ReviewComp image={reviewImage3}/>
              </div>

              <div className={styles.inputContainer}>
                <InputComponent title="Post a comment"/>
              </div>

            </TabPanel>
            <TabPanel value="4">
              <div className={styles.containerFour}>
                <div className={styles.mainContainer}>

               
                  <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                      <h1 className={styles.overall}>Overall </h1>
                      <h1 className={styles.number}>4.0</h1>
                      <p className={styles.review}>(03 Review)</p>
                    </div>
                    <Box
                      sx={{
                      // Didn't understand 
                        '& > legend': { mt: 2 },
                        display:"flex",
                        flexDirection:"column",
                      }}
                    >
                      <p className={styles.basedReview}>Based on 3 reviews</p>
                      <div className={styles.showratingContainer}>
                        <span>
                          5 star
                        </span>
                        <Rating
                          name="simple-controlled"
                          value={"5"}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />

                        <span>
                          01
                        </span>
                      </div>
                      <div className={styles.showratingContainer}>
                        <span>
                          4 star
                        </span>
                        <Rating
                          name="simple-controlled"
                          value={"4"}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <span>
                          01
                        </span>
                      </div>
                      <div className={styles.showratingContainer}>
                        <span>
                          3 star
                        </span>
                        <Rating
                          name="simple-controlled"
                          value={"3"}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <span>
                          01
                        </span>
                      </div>
                      <div className={styles.showratingContainer}>
                        <span>
                          2 star
                        </span>
                        <Rating
                          name="simple-controlled"
                          value={"2"}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                        <span>
                          01
                        </span>
                      </div>
                    </Box>
                  </div>
                  <div className={styles.reviewContainerComp}>
                    <ReviewComp image={reviewImage1}/>
                    <ReviewComp image={reviewImage2} sx={{paddingLeft:"20px"}}/>
                    <ReviewComp image={reviewImage3}/>
                  </div>
                </div>
                <div className={styles.inputreviewContainer}>
                  <p className={styles.addReview}>
                    Add a Review
                  </p>
                  <div className={styles.showratingContainer}>
                    <span>
                      Your Rating
                    </span>
                    <Rating
                      name="simple-controlled"
                      value={"5"}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <span>
                      Outstanding
                    </span>
                  </div>
               
                  <div>
                    <InputComponent/>
                  </div>
                </div>
              
              </div>
            </TabPanel>

          </TabContext>
        </Box>
      </div>
      
    </div>
  )
}

export default Product