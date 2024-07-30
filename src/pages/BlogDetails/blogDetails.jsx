import styles from './blogDetails.module.css'
import { SideBarBlog } from '../Blog/cards'
import HeaderComp from '../../layout/Header/header'
// import BlogComp from '../Blog/blog'
import featureImage from '../../assets/feature-img1.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


function BlogDetails() {
  return (
    <div >
      <HeaderComp title='Blog Details' firstpage='first' nextpage='next'/>
      <div className={styles.mainContainer}>
        <div className={styles.mainOuterContainer}>
          <div className={styles.blogImageContainer}>
            <img src={featureImage} className={styles.blogImage}/>
          </div>
          <div>
            <div className={styles.mainBlogContainer}>
              <p className={styles.blogTitle}>
                Food,<span className={styles.blog}>Technology,</span>Politics,Lifestyle
              </p>
              <div className={styles.blogContainer}>
                <div className={styles.blogDetails}>
                  <p>Mark Wiens</p>
                  <PersonOutlineIcon color='primary'/>
                </div>
                <div className={styles.blogDetails}>
                  <p>12 Dec,2018</p>
                  <CalendarMonthIcon color='primary'/>
                </div>
                <div className={styles.blogDetails}>
                  <p>1.2M Views</p>
                  <VisibilityIcon color='primary'/>
                </div>
                <div className={styles.blogDetails}>
                  <p>06 Comments</p>
                  <ChatBubbleOutlineIcon color='primary'/>
                </div>
              </div>
            </div>
            <div>
              <h2 className={styles.blogHeading}><a >Astronomy Binoculars A Great Alternative</a></h2>
              <p className={styles.blogDescription}>
                MCSE boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to 
                spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                Boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to spend money on boot camp when you can get 
                the MCSE study materials yourself at a fraction of the camp price. 
                However, who has the willpower to actually sit through a self-imposed MCSE training. 
                who has the willpower to actually sit through a self-imposed.
                Boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to spend money on boot camp 
                when you can get the MCSE study materials yourself at a fraction of the camp price. 
                However, who has the willpower to actually sit through a self-imposed MCSE training. 
                who has the willpower to actually sit through a self-imposed
              </p>
            </div>
          </div>
          <SideBarBlog/>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails