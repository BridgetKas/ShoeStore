import styles from './cards.module.css'


const miniBlog = [
  {
    title:"blbobl",
    tagline:"mnmnkh",
    image:"../../assets/cat-post-1.jpg"
  },
  {
    title:"blbobl",
    tagline:"mnmnkh"
  },
  {
    title:"blbobl",
    tagline:"mnmnkh"
  },

]

function Cards({title,tagline}) {
  return (
    <div className={styles.mainContainer}>

      {miniBlog.map((item,index) =>(
        <div key={index} className={styles.container} style={{background:"url(item.image)"}}>
          <div className={styles.blog}>
            <h2>{title}</h2>
            <hr/>
            <p>{tagline}</p>
          </div>
        </div>
      ))}
     
    </div>

  )
}

export default Cards