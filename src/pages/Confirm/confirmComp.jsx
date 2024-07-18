import HeaderComp from "../../layout/Header/header"

function ConfirmComp() {
  return (
    <div>
      <HeaderComp title='Checkout' firstpage='first' nextpage='next'/>
      <div>
        <p>Thank you. Your order has been received</p>
        <div>
          <p>Order Info</p>
        </div>
      </div>

        

    </div>
  )
}

export default ConfirmComp