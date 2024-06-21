import ButtonComp from "../../components/common/Button"
import ButtonIcon from "../../components/common/buttonIcon"
import Input from "../../components/common/input"
import SelectInput from "../../components/common/selectInput";
import { colors } from "../../utilis/color"
import AddIcon from '@mui/icons-material/Add';
import LogInPage from "../LogInPage/LogPage";
import TrackingPage from "../trackingPage/trackingPage";
import Contact from "../Contact/contact";
import Cards from "../Blog/cards";
import DealsComp from "../../components/common/Deals/deals";
import ShoeComp from "../../components/common/Shoe/Shoes";
import LogoComp from "../../components/logos/logo";
import FeaturesComp from "../../components/features/features";
import OverlayComp from "../../components/overLayShoes/overlay";
import BannerComp from "../../components/homeBanner/banner";
import ExclusiveComp from "../../components/exclusive/exclusive";
import PaginationComp from "../Shop/page";

function HomePage() {
  return (
    <div>
      <BannerComp/>
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
      <FeaturesComp/>
      <LogInPage/>
      <TrackingPage/>
      <Contact/>
      <Cards title="bkbkh" tagline="ghgngh"/>
      <DealsComp/>
      <OverlayComp/>
      <LogoComp/>

      <ShoeComp/>

      <ExclusiveComp/>
      <PaginationComp/>


    </div>
  )
}

export default HomePage


