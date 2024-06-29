import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoopIcon from '@mui/icons-material/Loop';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import styles from './shoe.module.css'

function  DefaultShoeComp({shoeImage}) {
  return (
    <Card sx={{ maxWidth:'100%'}} className={styles.cardContainer}>
      <CardMedia
        sx={{ height: 250 }}
        image={shoeImage}
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
}

export default DefaultShoeComp