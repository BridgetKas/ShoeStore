import HeaderComp from '../../layout/Header/header';
import CategoryComp from './category';
import PaginationComp from './pagination';
import PriceRangeComp from './pricerange';
import SelectComp from './selectcomp';




function ShopPage() {
  return (
    <div>
      <HeaderComp title='Shop' firstpage='first' nextpage='next'/>
      <SelectComp textcolor='gray' background='white'/>
      <CategoryComp/>
      <PriceRangeComp/>
      <PaginationComp/>
    </div>
  )
}

export default ShopPage