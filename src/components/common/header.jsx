import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import styles from './header.module.css'

function HeaderComp({firstpage,nextpage,separator, title}) {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.pageTitle}>{title}</h1>
      </div>
      <Breadcrumbs separator={separator}>
        <Typography>{firstpage}</Typography>
        <Typography>{nextpage}</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default HeaderComp