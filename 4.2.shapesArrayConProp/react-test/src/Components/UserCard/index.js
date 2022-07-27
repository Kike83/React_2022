import{ 
    Card, CardBody, CardText } from 'reactstrap';


const UserCard = (props) => {
        const {name, gender, dob, picture} = props.cardData 
        const colorMap = {
            female:'bg-purple',
            male:'bg-yellow'
        }
    return(
        <Card>
            <img alt='Card imagen' src={picture.large} />
            <CardBody>
                <CardText>{name.first} {name.last}</CardText>
                <CardText className={colorMap[gender]}>{gender}</CardText>
                <CardText>{dob.age}</CardText>
          </CardBody>
        </Card>
    )
}


export default UserCard