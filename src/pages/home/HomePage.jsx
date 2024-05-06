import ButtonComp from "../../components/common/Button"
import ButtonIcon from "../../components/common/buttonIcon"
import Input from "../../components/common/input"
import { colors } from "../../utilis/color"
import AddIcon from '@mui/icons-material/Add';

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
        text="Some People"/>
    </div>
  )
}

export default HomePage


