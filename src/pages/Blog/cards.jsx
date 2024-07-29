import BlogComp from './blog'
import HeaderComp from '../../layout/Header/header'
import styles from './cards.module.css'
import image1 from '../../assets/cat-post-1.jpg'
import image2 from '../../assets/cat-post-2.jpg'
import image3 from '../../assets/cat-post-3.jpg'
import blog1 from '../../assets/m-blog-1.jpg'
import blog2 from '../../assets/m-blog-2.jpg'
import blog3 from '../../assets/m-blog-3.jpg'
import blog4 from '../../assets/m-blog-4.jpg'
import blog5 from '../../assets/m-blog-5.jpg'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import author from '../../assets/author.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import post1 from '../../assets/post1.jpg'
import post2 from '../../assets/post2.jpg'
import post3 from '../../assets/post3.jpg'
import post4 from '../../assets/post4.jpg'
import EmailIcon from '@mui/icons-material/Email';
import ButtonComp from '../../components/common/Button'





const miniBlog = [
  {
    title:"POLITICS",
    tagline:"Be part of politics",
    image:image1
  },
  {
    title:"FOOD",
    tagline:"Let the food be finished",
    image:image2
  },
  {
    title:"SOCIAL LIFE",
    tagline:"Enjoy your social life together",
    image:image3
  },

]

function BlogPage() {
  return (
    <div >
      <HeaderComp title='Blog' firstpage='first' nextpage='next'/>
      <div className={styles.mainContainer}>
        <div >
          {miniBlog.map((item,index) =>(
            <div key={index} className={styles.container}>
              <div className={styles.blog}>
                <h2>{item.title}</h2>
                {/* <hr/> */}
                <p>{ item.tagline}</p>
                <img src={item.image}/>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.mainouterContainer}>
          <div >
            <BlogComp title='Astronomy Binoculars A Great Alternative' image={blog1}/>
            <BlogComp title='The Basics of Buying A Telescope' image={blog2}/>
            <BlogComp title='Glossary of Telescopes' image={blog3}/>
            <BlogComp title='The Night Sky' image={blog4}/>
            <BlogComp title='Telescopes 101' image={blog5}/>
            <div className={styles.numberContainer}>
              <Stack   >
                <Pagination count={5} variant="outlined" shape="rounded"  />
              </Stack>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.mainSearchContainer}>
              <TextField
                variant="outlined"
                placeholder="Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </div>
        

            <div className={styles.authorContainer}>
              <div>
                <img src={author}/>
              </div>
              <div>
                <p className={styles.authorName}>Charlie Barber</p>
                <p className={styles.authorName}>Senior blog writer</p>
                <div className={styles.iconContainer}>
                  <FacebookIcon color='primary'/>
                  <TwitterIcon color='primary'/>
                  <GitHubIcon color='primary'/>
                </div>
              </div>
              <div>
                <p className={styles.bootCamps}>
                  Boot camps have its supporters andit sdetractors. 
                  Some people do not understand why you should have to spend money on boot camp when you can get. 
                  Boot camps have itssuppor ters andits detractors.
                </p>
              </div>
            </div>
            <div className={styles.mainpostContainer}>
              <div className={styles.postContainer}>
                <p className={styles.post}>Popular Posts</p>
              </div>
              <div className={styles.postsContainer}>
                <div>
                  <img src={post1} />
                </div>
                <div>
                  <p className={styles.postDescription}>Space The Final Frontier</p>
                  <p className={styles.postTime}>02 Hours ago</p>
                </div>
              </div>
              <div  className={styles.postsContainer}>
                <div>
                  <img src={post2} />
                </div>
                <div>
                  <p className={styles.postDescription}>The Amazing Hubble</p>
                  <p className={styles.postTime}>02 Hours ago</p>
                </div>
              </div>
              <div  className={styles.postsContainer}>
                <div>
                  <img src={post3} />
                </div>
                <div>
                  <p className={styles.postDescription}>Astrology or Astronomy</p>
                  <p className={styles.postTime}>02 Hours ago</p>
                </div>
              </div>
              <div  className={styles.postsContainer}>
                <div>
                  <img src={post4} />
                </div>
                <div>
                  <p className={styles.postDescription}>Asteroids telescope</p>
                  <p className={styles.postTime}>02 Hours ago</p>
                </div>
              </div>
            </div>
            <div className={styles.mainadvertContainer}>
              <div className={styles.advertContainer}>
                <p className={styles.advert}>
                  300x250 PX
                  AD GOES HERE
                </p>
              </div>
            </div>
            <div className={styles.outerpostContainer}>
              <div className={styles.postContainer}>
                <p className={styles.post}>Popular Posts</p>
              </div>
            
              <div className={styles.container}>
                <p className={styles.postsDetail}>Technology</p>
                <p className={styles.postsDetail}>37</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>LifeStyle</p>
                <p className={styles.postsDetail}>24</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>Fashion</p>
                <p className={styles.postsDetail}>59</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>Art</p>
                <p className={styles.postsDetail}>29</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>Food</p>
                <p className={styles.postsDetail}>15</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>Architecture</p>
                <p className={styles.postsDetail}>09</p>
              </div>
              <div className={styles.container}>
                <p className={styles.postsDetail}>Adventure</p>
                <p className={styles.postsDetail}>44</p>
              </div>
           
            </div>
            <div className={styles.newsContainer}>
              <div>
                <div className={styles.postContainer}>
                  <p className={styles.post}>News Letter</p>
                </div>
              </div>
              <p className={styles.newsLetter}>
                Here, I focus on a range of items and features that we use in life 
                ithout giving them a second thought.
              </p>
              <div className={styles.inputBlogContainer}>
                <div className={styles.subContainer}>
                  <InputBlog placeholder="Enter email" icon={<EmailIcon/>} fullWidth  /> 
                </div>
                <ButtonComp btnTitle='Subscribe' variant='outlined' style={{height:"56px"}} size='large'/> 
              </div>
              <p className={styles.unsubscribe}>You can  unsubscribe at any time</p>
            </div>
            <div className={styles.tagContainer}>
              <div className={styles.postContainer}>
                <p className={styles.post}>Tag Clouds</p>
              </div>
              <div className={styles.btnContainer}>
                <ButtonComp btnTitle="Technology" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Fashion" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Architecture" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Fashion" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Food" variant='outlined'size="small"/>
                <ButtonComp btnTitle="Technology" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Lifestyle" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Art" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Adventure" variant='outlined'size="small"/>
                <ButtonComp btnTitle="Food" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Lifestyle" variant='outlined' size="small"/>
                <ButtonComp btnTitle="Adventure" variant='outlined' size="small"/>


              </div>
            </div>

          </div>
      
        </div>
      </div>
     
    </div>
  )
}

function InputBlog({placeholder, required=false, icon, color,margin,fullWidth,multiline}) {
  return (
    <div>
      <TextField  
        variant="outlined"  
        placeholder={placeholder} 
        required={required}
        color={color}
        InputProps={{
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        }}
        margin={margin}
        fullWidth={fullWidth}
        multiline={multiline}
      />

    </div>
  )
}


export default BlogPage