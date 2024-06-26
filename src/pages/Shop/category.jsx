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
      <div>
        <div className={styles.browse}>Product Filters</div>
        <div className={styles.brand}>Brands</div>
        <div className={styles.labelContainer}>
          <input type="radio" id="apple"  value="apple" />
          <label htmlFor="apple">Apple(29)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="asus"  value="asus" />
          <label htmlFor="asus">Asus(29)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="gionee"  value="gionee"  />
          <label htmlFor="gionee">Gionee(19)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="micromax"  value="micromax" />
          <label htmlFor="micromax">Micromax(19)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="samusung"  value="samusung" />
          <label htmlFor="samusung">Samusung(19)</label>
        </div>
      </div>
      <div>
        <div className={styles.brand}>Color</div>
        <div className={styles.labelContainer}>
          <input type="radio" id="black"  value="black" />
          <label htmlFor="black">Black(29)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="blackleather"  value="BL" />
          <label htmlFor="BL">Black Leather(29)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="Black with red"  value="BWR"  />
          <label htmlFor="BWR">Black with Red(19)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="micromax"  value="micromax" />
          <label htmlFor="micromax">Gold(19)</label>
        </div>
        <div className={styles.labelContainer}>
          <input type="radio" id="samusung"  value="samusung" />
          <label htmlFor="samusung">Spacegrey(19)</label>
        </div>
      </div>
    </div>
  )
}

export default CategoryComp