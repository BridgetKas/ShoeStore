import HeaderComp from '../../layout/Header/header';
import CategoryComp from './category';
import SelectComp from './selectcomp';




function ShopPage() {
  return (
    <div>
      <HeaderComp title='Shop' firstpage='first' nextpage='next'/>
      <SelectComp textcolor='gray' background='white'/>
      <CategoryComp/>
    </div>
  )
}

export default ShopPage