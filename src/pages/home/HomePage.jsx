import ButtonComp from "../../components/common/Button"
import ButtonIcon from "../../components/common/buttonIcon"
import Input from "../../components/common/input"
import SelectInput from "../../components/common/selectInput";
import { colors } from "../../utilis/color"
import AddIcon from '@mui/icons-material/Add';
import LogInPage from "../LogInPage/LogPage";
import TrackingPage from "../trackingPage/trackingPage";
import Contact from "../Contact/contact";
import HeaderComp from "../../components/common/header";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ButtonComp variant="contained" size="medium" btnTitle="Hello" color="secondary" rounded="medium"/>
      <ButtonComp variant="contained" 
        size="small" 
        btnTitle="World"  
        style={{ background: colors.yellowGrad}} 
        onClick={() => alert('Clicked')}
      />
      <Input icon={<AddIcon/>} />
      <ButtonIcon size="small" 
        color="white" 
        icon={<AddIcon/>} 
        backgroundColor="red" 
        text="Some People"
      />
      <SelectInput/>
      <LogInPage/>
      <TrackingPage/>
      <Contact/>
      <HeaderComp firstpage="HELLO" nextpage="WHATNOW" separator={<NavigateNextOutlinedIcon />} title="YOO"/>
    </div>
  )
}

export default HomePage


