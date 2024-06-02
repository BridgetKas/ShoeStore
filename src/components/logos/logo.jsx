import logo1 from '../../assets/logos/1.png'
import logo2 from '../../assets/logos/2.png'
import logo3 from '../../assets/logos/3.png'
import logo4 from '../../assets/logos/4.png'
import logo5 from '../../assets/logos/5.png'
import styles from './logo.module.css'


function LogoComp() {
  const logoArr = [
    {
      logo:logo1
    },
    {
      logo:logo2
    },
    {
      logo:logo3
    },
    {
      logo:logo4
    },
    {
      logo:logo5
    }
  ]
  return (
    <div className={styles.mainContainer}>
      {
        logoArr.map((item,index) => (
          <div key={index} className={styles.logoContainer}>
            {item.logo}
          </div>
        ))
      }
    </div>
  )
}

export default LogoComp