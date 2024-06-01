import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../../assets/ShopImages/p1.jpg';
import image2 from '../../../assets/ShopImages/p3.jpg';
import image3 from '../../../assets/ShopImages/p4.jpg';
import image4 from '../../../assets/ShopImages/p5.jpg';
import image5 from '../../../assets/ShopImages/p6.jpg';
import image6 from '../../../assets/ShopImages/p8.jpg';

const menu = [
  {
    image:image1
  },
  {
    image:image2
  },
  {
    image:image3
  },
  {
    image:image4
  },
  {
    image:image5
  },
  {
    image:image6
  }
]
export default function ShoeComp() {
  return (
    menu.map((item,index) => (
      <Card sx={{ maxWidth: 345 }} key={index}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Addias New Hammer Sole for Sports Person.
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $150
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

    )
    )
  );
}
