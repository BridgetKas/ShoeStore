import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image1 from '../../../assets/ShopImages/p1.jpg';
import image2 from '../../../assets/ShopImages/p3.jpg';
import image3 from '../../../assets/ShopImages/p4.jpg';
import image4 from '../../../assets/ShopImages/p5.jpg';
import image5 from '../../../assets/ShopImages/p6.jpg';
import image6 from '../../../assets/ShopImages/p8.jpg';
import image7 from '../../../assets/ShopImages/p2.jpg';
import image8 from '../../../assets/ShopImages/p7.jpg';
import prev from '../../../assets/prev.png'
import next from '../../../assets/next.png'





import styles from './shoe.module.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoopIcon from '@mui/icons-material/Loop';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

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
export default function ShoeComp() {
  return (
    <div className={styles.mainContainer}>
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
      <div className={styles.container}>
        {
          menu.map((item,index) => (
            <Card sx={{ maxWidth:'100%'}} key={index} className={styles.cardContainer}>
              <CardMedia
                sx={{ height: 250 }}
                image={item.image}
              />
              <CardContent className={styles.priceContainer} sx={{padding:0}}>
                <Typography variant="h3" color="black" className={styles.name} 
                  sx={{fontWeight:500,fontSize:"16px",textAlign:"left"}}>
                  Addias New Hammer Sole for Sports Person.
                </Typography>
                <Typography component="a" className={styles.finalPrice}>
                  $150
                </Typography>
                <Typography  component="a" className={styles.originalPrice}>
                  $150
                </Typography>
              </CardContent>
              <CardActions>
                <div className={styles.iconContainer}>
                  <ShoppingBagIcon/>
                </div>
                <div className={styles.iconContainer}>
                  <FavoriteBorderIcon/>
                </div>
                <div className={styles.iconContainer}>
                  <LoopIcon/>
                </div>
                <div className={styles.iconContainer}>
                  <FullscreenExitIcon/>
                </div>
              </CardActions>
            </Card>
          )
          )
        }
      </div>
    </div>
  );
}
