import ShoeO from '../../components/common/Shoe/shoe';
import HeaderComp from '../../layout/Header/header';
import CategoryComp from './category';
import PriceRangeComp from './pricerange';
import SelectComp from './selectcomp';




function ShopPage() {
  return (
    <div>
      <HeaderComp title='Shop' firstpage='first' nextpage='next'/>
      <SelectComp textcolor='gray' background='white'/>
      <CategoryComp/>
      <PriceRangeComp/>
      <SelectComp textcolor='gray' background='white'/>
      <ShoeO/>

    </div>
  )
}

export default ShopPage