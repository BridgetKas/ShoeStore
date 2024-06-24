import HeaderComp from '../../layout/Header/header';
import SelectComp from './selectcomp';




function ShopPage() {
  return (
    <div>
      <HeaderComp title='Shop' firstpage='first' nextpage='next'/>
      <SelectComp textcolor='gray' background='white'/>
    </div>
  )
}

export default ShopPage