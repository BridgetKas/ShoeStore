import DealsComp from "../../components/common/Deals/deals";
import HomeBannerComp from "../../components/HomeBanner/banner";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';
import styles from './homePage.module.css'
import photo1 from '../../assets/ShoeGallery/c1.jpg'
import photo2 from '../../assets/ShoeGallery/c2.jpg'
import photo3 from '../../assets/ShoeGallery/c3.jpg'
import photo4 from '../../assets/ShoeGallery/c4.jpg'
import photo5 from '../../assets/DealsImages/c5.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import prev from '../../assets/prev.png'
import next from '../../assets/next.png'
import ButtonComp from '../../components/common/Button';
import { colors } from "../../utilis/color"
import shoe from '../../assets/e-p1.png'
import ButtonIcon from '../../components/common/buttonIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo1 from '../../assets/logos/1.png'
import logo2 from '../../assets/logos/2.png'
import logo3 from '../../assets/logos/3.png'
import logo4 from '../../assets/logos/4.png'
import logo5 from '../../assets/logos/5.png'
import image1 from '../../assets/ShopImages/p1.jpg';
import image2 from '../../assets/ShopImages/p3.jpg';
import image3 from '../../assets/ShopImages/p4.jpg';
import image4 from '../../assets/ShopImages/p5.jpg';
import image5 from '../../assets/ShopImages/p6.jpg';
import image6 from '../../assets/ShopImages/p8.jpg';
import image7 from '../../assets/ShopImages/p2.jpg';
import image8 from '../../assets/ShopImages/p7.jpg';
import DefaultShoeComp from "../../components/common/Shoe/shoeComp";

const featuresArr = [
  {
    feature:<LocalShippingIcon/>,
    title:"Free Delivery",
    description:"Free shipping on all orders"
  },
  {
    feature:< RecyclingIcon/>,
    title:"Return Policy",
    description:"Free shipping on all orders"
  },
  {
    feature:<SupportAgentIcon/>,
    title:"24/7 Support",
    description:"Free shipping on all orders"
  },
  {
    feature:<PaymentsIcon />,
    title:"Secure Payments",
    description:"Free shipping on all orders      "
  },
]

const logoArr = [
  {
    logo:logo1
  },
  {
    logo:logo2
  },
  {
    logo:logo3
  },
  {
    logo:logo4
  },
  {
    logo:logo5
  }
]

const menu = [
  {
    image:image1
  },
  {
    image:image2
  },
  {
    image:image3
  },
  {
    image:image4
  },
  {
    image:image5
  },
  {
    image:image6
  },
  {
    image:image7
  }, 
  {
    image:image8
  }
]

function HomePage() {
  return (
    <div>
      <HomeBannerComp/>

      {/* FEATURES CONTAINER */}
      <div className={styles.mainContainer}> 
        {featuresArr.map((item,index) =>(
          <div key={index} className={styles.featuresContainer}>
            <div className={styles.iconContainer}>{item.feature}</div>
            <div>
              <h6>{item.title}</h6>
              <p className={styles.description}>{item.description}</p>
            </div>
        
          </div>
        ))}
      </div>

      {/* OVERlAY cONTAINER */}
      <div className={styles.mainContainerOverLay}>
        <Box sx={{ width:"95%",
          marginRight:"auto",
          marginLeft:"auto",
        }}>
     
          <Grid container sx={{width:"100%", margin:"0px"}}  columnGap={1} rowGap={1}
            justifyContent="space-between" className={styles.container}
          > 
            <Grid item sm={12}  md={7}>
              <Grid container sx={{width:"100%",height:"100%", margin:"0px", 
                marginBottom:"20px"}} rowGap={2} columnGap={1} justifyContent="space-between"
              >
                <Grid item xs={12} sm={7.5}>
                  <img src={photo1}className={styles.image}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img src={photo2} className={styles.image}/>
                </Grid>
                <Grid item  xs={12} sm={4}>
                  <img src={photo3} className={styles.image}/>
                </Grid>
                <Grid item xs={12} sm={7.5}>
                  <img src={photo4} className={styles.image}/>
                </Grid>
           
              </Grid>
            </Grid>
            <Grid item  sm={12} md={4} sx={{ width:"100%"}}>
              <div className={styles.imageContainer}>
                <img src={photo5} className={styles.image2}/>
              </div>
            </Grid>
          </Grid>
      
        </Box>
      </div>

      {/* SHOE SECTION */}
      <div className={styles.mainShoeContainer}>
        <div className={styles.directionContainer}>
          <img src={prev}/>
          <img src={next}/>
        </div>
        <div className={styles.productsContainer}>
          <p className={styles.product}>Latest Products</p>
          <p className={styles.productdescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum possimus,non recusandae veniam tempore quisquam mollitia.
          </p>
        </div>
        
        <div className={styles.defaultShoeContainer}>
          {
            menu.map((item,index) => (
              <div key={index} className={styles.shoeCompContainer}>
                <DefaultShoeComp shoeImage={item.image} key={index} style={styles.heightContainer}/>
              </div>
            )
            )
          }
        </div>
      </div>

      {/* Exclusive Deals Section */}
      <div className={styles.mainExclusiveContainer}>
        <div className={styles.imageExclusiveContainer}>
          <h1 className={styles.exclusive}>Exclusive Hot Deal Ends Soon</h1>
          <p className={styles.description}>Who are in extremely love with eco friendly system</p>
          <div className={styles.dateContainer}>
            <div><span id="days"></span> Days</div>
            <div><span id="hours"></span> Hours</div>
            <div><span id="minutes"></span> Minutes</div>
            <div><span id="seconds"></span> Seconds</div>
          </div>
          <div className={styles.btnContainer}>
            <ButtonComp variant="contained" 
              size="medium" 
              btnTitle="Shop"  
              style={{ background: colors.yellowGrad, position:"relative", zIndex:"2"}} 
              onClick={() => alert('Clicked')}
              rounded='medium'
            />
          </div>
        
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imgContainer}>
            <img src={prev} className={styles.image}/>
          </div>
          <div className={styles.shoeContainer} >
            <img src={shoe} className={styles.shoe}/>
            <div className={styles.priceContainer}>
              <p className={styles.price}>$150.00</p>
              <p className={styles.firstPrice}>$210.00</p>
            </div>
            <div>
              <h2 className={styles.feature}>Addidas New Hammer Sole for Sports Person</h2>
              <div className={styles.iconContainer}>
                <ButtonIcon size="small" 
                  color="white" 
                  icon={<ShoppingBagIcon/>} 
                  backgroundColor="orange" 
                  text="ADD TO BAG"
                  textColor="black"
                />
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={next} className={styles.image}/>
          </div>
       
        </div>
      </div>

      {/* LOGO SECTION */}
      <div className={styles.mainLogoContainer}>
        {
          logoArr.map((item,index) => (
            <div key={index} className={styles.logoContainer}>
              <img src={item.logo} className={styles.image}/>
            </div>
          ))
        }
      </div>

      {/* DEALS SECTION */}
      <DealsComp/>
    
    </div>
  )
}

export default HomePage


