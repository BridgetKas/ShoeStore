import styles from './cards.module.css'
import image1 from '../../assets/cat-post-1.jpg'
import image2 from '../../assets/cat-post-2.jpg'
import image3 from '../../assets/cat-post-3.jpg'




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

function Cards() {
  return (
    <div className={styles.mainContainer}>

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

  )
}


export default Cards