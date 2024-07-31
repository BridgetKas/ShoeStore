import styles from './blogDetails.module.css'
import { SideBarBlog } from '../Blog/cards'
import HeaderComp from '../../layout/Header/header'
// import BlogComp from '../Blog/blog'
import featureImage from '../../assets/feature-img1.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import post1 from '../../assets/post-img1.jpg'
import post2 from '../../assets/post-img2.jpg'
import prevImage from '../../assets/prev.jpg'
import nextImage from '../../assets/next.jpg'
import comment1 from '../../assets/c1 (1).jpg'
import comment2 from '../../assets/c2 (1).jpg'
import comment3 from '../../assets/c3 (1).jpg'
import comment4 from '../../assets/c4 (1).jpg'
import comment5 from '../../assets/c5 (1).jpg'
import ButtonComp from '../../components/common/Button';








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
                <div className={styles.iconContainer}>
                  <FacebookIcon color='primary' fontSize='small'/>
                  <TwitterIcon color='primary' fontSize='small'/>
                  <GitHubIcon color='primary' fontSize='small'/>
                  <RedditIcon color='primary' fontSize='small'/>

                </div>
              </div>
            </div>
            <div>
              <h2 className={styles.blogHeading}><a >Astronomy Binoculars A Great Alternative</a></h2>
              <p className={styles.blogDescription}>
                MCSE boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to 
                spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
              </p>
              <p className={styles.blogDescription}>
                Boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to spend money on boot camp when you can get 
                the MCSE study materials yourself at a fraction of the camp price. 
                However, who has the willpower to actually sit through a self-imposed MCSE training. 
                who has the willpower to actually sit through a self-imposed.
              </p>
              <p className={styles.blogDescription}>
                Boot camps have its supporters and its detractors. 
                Some people do not understand why you should have to spend money on boot camp 
                when you can get the MCSE study materials yourself at a fraction of the camp price. 
                However, who has the willpower to actually sit through a self-imposed MCSE training. 
                who has the willpower to actually sit through a self-imposed
              </p>
            </div>
          </div>
          <p className={styles.featureDescription}>
            MCSE boot camps have its supporters and its detractors. 
            Some people do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of the camp price.
            However, who has the willpower to actually sit through a self-imposed MCSE training.
          </p>
          <div className={styles.blogDetailsImage}>
            <div className={styles.detailsImageContainer}>
              <img src={post1} className={styles.detailsImage} />
            </div>
            <div className={styles.detailsImageContainer}>
              <img src={post2} className={styles.detailsImage}/>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <p className={styles.features}>
              MCSE boot camps have its supporters and its detractors. 
              Some people do not understand why you should have to spend money on boot camp 
              when you can get the MCSE study materials yourself at a fraction of the camp price.
              However, who has the willpower.
            </p>
            <p className={styles.bootCamp}>
              MCSE boot camps have its supporters and its detractors. 
              Some people do not understand why you should have to spend money on boot camp 
              when you can get the MCSE study materials yourself at a fraction of the camp price. 
              However, who has the willpower.
            </p>
          </div>
          <div className={styles.nextPreviousContainer}>
            <div className={styles.directionContainer}>
              <div>
                <img src={prevImage}/>
              </div>
              <div className={styles.postDescription}>
                <p className={styles.direction}>Prev Post</p>
                <p className={styles.post}>Space The Final Frontier</p>
              </div>
            </div>
            <div className={`${styles.directionContainer} ${styles.nextContainer}`}>
              <div className={styles.postDescription}>
                <p className={styles.direction}>Next Post</p>
                <p className={styles.post}>Telescopes 101</p>
              </div>
              <div>
                <img src={nextImage}/>
              </div>
            </div>
          </div>
          <div>
            <p>05 Comments</p>
            <div>
              <CommentComp image={comment1} title="Emily Blunt"/>
              <CommentComp image={comment2} title="Elsie Cunningham"/>
              <CommentComp image={comment3} title="Annie Stephens"/>
              <CommentComp image={comment4} title="Maria Luna"/>
              <CommentComp image={comment5} title="Ina Hayes"/>

            </div>

          </div>
          <SideBarBlog/>
        </div>
      </div>
    </div>
  )
}


function CommentComp ({image,title}) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.imageCommentContainer}>
        <div>
          <img src={image}/>
        </div>
        <div>
          <h3 className={styles.commenter}>{title}</h3>
          <div>
            <p className={styles.date}>December 4, 2018 at 3:12 pm</p>
            <p>Never say goodbye till the end comes!</p>
          </div>
        </div>
      </div>
      <div>
        <ButtonComp variant="outlined" size="small" btnTitle="REPLY"/>
      </div>
    </div>
  )
}

export default BlogDetails