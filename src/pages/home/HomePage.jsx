import ButtonComp from "../../components/common/Button"
import { colors } from "../../utilis/color"

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ButtonComp variant="contained" size="medium" btnTitle="Hello" color="secondary" rounded="medium"/>
      <ButtonComp variant="contained" size="small" btnTitle="World"  style={{ background: colors.yellowGrad}} rounded="small"/>
    </div>
  )
}

export default HomePage


