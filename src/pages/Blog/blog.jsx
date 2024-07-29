import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ButtonComp from '../../components/common/Button';
import styles from './cards.module.css'




function BlogComp({image,title}) {
  return (
    <div>
      <div className={styles.mainBlogContainer}>
        <div>
          <p className={styles.blogTitle}>Food,<span className={styles.blog}>Technology,</span>Politics,Lifestyle</p>
         
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
          <div className={styles.blogImageContainer}>
            <img src={image} className={styles.blogImage}/>
          </div>
          <h2 className={styles.blogHeading}><a >{title}</a></h2>
          <p className={styles.blogDescription}>
            MCSE boot camps have its supporters and its detractors. 
            Some people do not understand why you should have to 
            spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
          </p>
          <ButtonComp btnTitle="VIEW MORE"/>
        </div>
       
      </div>
    </div>
  )
}

export default BlogComp