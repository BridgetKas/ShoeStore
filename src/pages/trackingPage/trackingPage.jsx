import ButtonComp from '../../components/common/Button';
import Input from '../../components/common/input';


function TrackingPage() {
  return (
    <div>
      <h3>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</h3>
      <Input placehoder="Order Id" />
      <Input placehoder ="Billing Email address" />
      <ButtonComp btnTitle="Track Order"/>

    </div>
  )
}

export default TrackingPage