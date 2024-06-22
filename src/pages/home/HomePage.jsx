import DealsComp from "../../components/common/Deals/deals";
import ShoeComp from "../../components/common/Shoe/Shoes";
import LogoComp from "../../components/logos/logo";
import FeaturesComp from "../../components/features/features";
import OverlayComp from "../../components/overLayShoes/overlay";
import BannerComp from "../../components/Banner/banner";
import ExclusiveComp from "../../components/exclusive/exclusive";
import PaginationComp from "../Shop/page";

function HomePage() {
  return (
    <div>
      <BannerComp/>
      <FeaturesComp/>
      <OverlayComp/>
      <ShoeComp/>
      <DealsComp/>
      <LogoComp/>
      <ExclusiveComp/>
      <PaginationComp/>
    </div>
  )
}

export default HomePage


