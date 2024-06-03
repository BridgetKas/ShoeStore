import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecyclingIcon from '@mui/icons-material/Recycling';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';
import styles from './features.module.css'

function FeaturesComp() {
  const featuresArr = [
    {
      feature:<LocalShippingIcon/>,
      title:"Free Delivery",
      description:"Free shipping on all orders"
    },
    {
      feature:< RecyclingIcon/>,
      title:"Return Policy",
      description:"Free shipping on all orders"
    },
    {
      feature:<SupportAgentIcon/>,
      title:"24/7 Support",
      description:"Free shipping on all orders"
    },
    {
      feature:<PaymentsIcon />,
      title:"Secure Payments",
      description:"Free shipping on all orders      "
    },
  ]
  return (
    <div className={styles.mainContainer}> 
      {featuresArr.map((item,index) =>(
        <div key={index} className={styles.featuresContainer}>
          <div>{item.feature}</div>
          <div>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
          </div>
        
        </div>
      ))}
    </div>
  )
}

export default FeaturesComp