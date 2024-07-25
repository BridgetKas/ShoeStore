import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ButtonComp from '../../components/common/Button';




function BlogComp({image,title}) {
  return (
    <div>
      <div>
        <p>Food, <span>Technology,</span>Politics,Lifestyle</p>
      </div>
      <div>
        <div>
          <p>Mark Wiens</p>
          <PersonOutlineIcon/>
        </div>
        <div>
          <p>12 Dec,2018</p>
          <CalendarMonthIcon/>
        </div>
        <div>
          <p>1.2M Views</p>
          <VisibilityIcon/>
        </div>
        <div>
          <p>06 Comments</p>
          <ChatBubbleOutlineIcon/>
        </div>
      </div>
      <div>
        <img src={image}/>
      </div>
      <h2>{title}</h2>
      <p>
        MCSE boot camps have its supporters and its detractors. 
        Some people do not understand why you should have to 
        spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
      </p>
      <ButtonComp btnTitle="VIEW MORE"/>

    </div>
  )
}

export default BlogComp