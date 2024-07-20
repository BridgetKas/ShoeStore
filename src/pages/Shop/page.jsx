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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

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

const productFilterArr = [
  {
    title:"Brands",
    listItems : ['Apple(29)', 'Asus(29)', 'Gionee(19)','Micromax(19)', 'Samsung(19)']
  },
  {
    title:"Colors",
    listItems : ['Black(29)','Black Leather(29)','Black with red(19)','Gold(19)','Spacegrey(19)']
  }
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
              <div>
                <div className={styles.browse}>Product Filters</div>
                {productFilterArr.map((item,index) => (
                  <FilterComp key={index} title={item.title} listItems={item.listItems}/>

                ))}
              </div>
            </div>
            <div className={styles.line}></div>

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

    </div>
  )
}


function FilterComp({title,listItems}) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.brand}>{title}</div>
      <FormControl className={styles.radioContainer}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
        >
          {listItems.map((listItem,index) => (
            <FormControlLabel value={listItem} control={<Radio />} label={listItem}  key={index}/>
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}
export default ShopPage