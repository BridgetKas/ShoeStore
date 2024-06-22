import photo1 from '../../assets/ShoeGallery/c1.jpg'
import photo2 from '../../assets/ShoeGallery/c2.jpg'
import photo3 from '../../assets/ShoeGallery/c3.jpg'
import photo4 from '../../assets/ShoeGallery/c4.jpg'
import photo5 from '../../assets/DealsImages/c5.jpg'
import styles from './overlay.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function BasicGrid() {
  return (
    <div className={styles.mainContainer}>
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
  );
}





