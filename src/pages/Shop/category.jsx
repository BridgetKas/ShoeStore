import styles from './page.module.css'

function CategoryComp() {
  return (
    <div className={styles.mainCategory}>
      <div className={styles.browse}>Browse Categories</div>
      <ul className={styles.categoryContainer}>
        <li><a>Fruits and Vegeatables</a> (53)</li>
        <li><a>Meat and Fish</a> (53)</li>
        <li><a>Cooking</a> (53)</li>
        <li><a>Beverages</a> (53)</li>
        <li><a>Home and Cleaning</a> (53)</li>
        <li><a>Pest Control</a> (53)</li>
        <li><a>Office Products</a> (53)</li>
        <li><a>Beauty Products</a> (53)</li>
        <li><a>Health Products</a> (53)</li>
        <li><a>Pet Care</a> (53)</li>
        <li><a>Home Appliances</a> (53)</li>
        <li><a>Baby care</a> (53)</li>
      </ul>

    </div>
  )
}

export default CategoryComp