import { Fragment } from 'react'
import styles from './footer.module.css'
import Input from '../../components/common/input'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import image1 from '../../assets/i1.jpg'
import image2 from '../../assets/i2.jpg'
import image3 from '../../assets/i3.jpg'
import image4 from '../../assets/i4.jpg'
import image5 from '../../assets/i5.jpg'
import image6 from '../../assets/i6.jpg'
import image7 from '../../assets/i7.jpg'
import image8 from '../../assets/i8.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import RedditIcon from '@mui/icons-material/Reddit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



function Footer() {
  const footerImgs = [
    {
      image:image1,
    },
    {
      image:image2,
    },
    {
      image:image3,
    },
    {
      image:image4,
    },
    {
      image:image5,
    },
    {
      image:image6,
    },
    {
      image:image7,
    },
    {
      image:image8,
    }

  ]
  return (

    <Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.aboutContainer}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
            ut labore dolore magna aliqua.
          </p>
        </div>
        <div className={styles.newsContainer}>
          <h2>News Letter</h2>
          <p>Stay update with our latest</p>
          <div className={styles.inputContainer}>
            <Input placeholder="Enter email" icon={<NavigateNextIcon/>} fullWidth />
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <h2>Instafeed</h2>
          <div className={styles.imageContainer}>
            {footerImgs.map((item,index) =>(
              <div key={`${index}`}>
                <img src={item.image}/>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.socialContainer}>
          <h2>Follow us </h2>
          <p>Let us be social</p>
          <div className={styles.logoContainer}>
            <FacebookIcon/>
            <TwitterIcon/>
            <SportsVolleyballIcon/>
            <RedditIcon/>

          </div>
        </div>

      </div>
      <div className={styles.copyContainer}>
        <div className={styles.copy}>
          Copyright ©2024 All rights reserved | This template is made with {<FavoriteBorderIcon fontSize="small"/>} 
          by Bizzy
        </div>
      </div>
    </Fragment>
  )
}

export default Footer