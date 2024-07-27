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
        <BlogComp title='Astronomy Binoculars A Great Alternative' image={blog1}/>
        <BlogComp title='The Basics of Buying A Telescope' image={blog2}/>
        <BlogComp title='Glossary of Telescopes' image={blog3}/>
        <BlogComp title='The Night Sky' image={blog4}/>
        <BlogComp title='Telescopes 101' image={blog5}/>

        <Stack   >
          <Pagination count={5} variant="outlined" shape="rounded"  />
        </Stack>

        <div className={styles.serachContainer}>
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
          />
        </div>
      </div>
     
    </div>
  )
}


export default BlogPage