import styles from './blogDetails.module.css'
import { SideBarBlog } from '../Blog/cards'
import HeaderComp from '../../layout/Header/header'


function BlogDetails() {
  return (
    <div >
      <HeaderComp title='Blog' firstpage='first' nextpage='next'/>
      <div className={styles.mainOuterContainer}>
        <SideBarBlog/>
      </div>

        

    </div>
  )
}

export default BlogDetails