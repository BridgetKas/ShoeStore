import DealsComp from '../../components/common/Deals/deals';
import HeaderComp from '../../layout/Header/header';
import SelectComp from './selectcomp';
import styles from './page.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'
import image1 from '../../assets/ShopImages/p1.jpg';
import image2 from '../../assets/ShopImages/p3.jpg';
import image3 from '../../assets/ShopImages/p4.jpg';
import image4 from '../../assets/ShopImages/p5.jpg';
import image5 from '../../assets/ShopImages/p6.jpg';
import image6 from '../../assets/ShopImages/p8.jpg';
import ShoeComp from '../../components/common/Shoe/shoeComp';
import Product from './product';

function valuetext(value) {
  return `$${value}`;
}

const menu = [
  {
    image:image1
  },
  {
    image:image2
  },
  {
    image:image3
  },
  {
    image:image4
  },
  {
    image:image5
  },
  {
    image:image6
  },
 
]

function ShopPage() {
  const [value, setValue] = useState([0,500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <HeaderComp title='Shop' firstpage='first' nextpage='next'/>

      {/* CATEGORY SECTION */}
      <div className={styles.maincategoryContainer}>
        <div className={styles.shopContainer}>
          <div className={styles.sideContainer}>
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

              <div className={styles.browse}>Product Filters</div>
              <div className={styles.container}>
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
              <div className={styles.line}></div>
              <div className={styles.container}>
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
              <div className={styles.line}></div>
            </div>

            {/* PRICE RANGE SECTION */}
            <div className={styles.priceContainer}>
              <div className={styles.brand}>Price</div>
              <div className={styles.sliderContainer}>
                <Box sx={{ width:"81%",margin:"auto" }}>
                  <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    color='primary'
                  />
                </Box>
              </div>
              <p className={styles.price}>Price:<span className={styles.cash}>$500.00 to $10000.00</span>
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.selectContainer}>
              <SelectComp textcolor='gray' background='white'/>
            </div>
            <div className={styles.shoeContainer}>
              {
                menu.map((item,index) => (
                  <div key={index} className={styles.shoeCompContainer}>
                    <ShoeComp shoeImage={item.image} key={index} style={styles.heightContainer}/>
                  </div>
                )
                )
              }
            </div>
            <div>
              <SelectComp textcolor='gray' background='white' showDefaultSort={false}/>
            </div>
          </div>
        </div>
      </div>
      <DealsComp/>
      <Product/>

    </div>
  )
}

export default ShopPage