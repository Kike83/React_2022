import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Cards = props => {
    const { name = "Usuario", gender = "Género", dob = "Birthday o cumpleaños", picture = "foto", color = "primary" } = props
    return
    {`
    <Card style={{ width: '18rem'}}>
  <img
    alt="Card image"
    src="${picture.large}"
  />
  <CardBody>
    <CardTitle tag="h5">
      ${name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      ${dob.age}
    </CardSubtitle>
    <CardText>
      ${gender}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    `}
}


export default Cards