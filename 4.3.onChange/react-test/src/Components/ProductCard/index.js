import{
    Card, CardBody, CardText
} from 'reactstrap';


const ProductCard = (props) => {
        console.log("en ProductCard props", props)
        const {title, description, category, image, rating} = props.cardData
        // const colorMap = {
        // rate
        // }
    return(

    <Card>
        <img alt="Card image"
            src={image}/>
        <CardBody>
        <CardText>{image}</CardText>
            <CardText>{title}</CardText>
            <CardText>{description}</CardText>
            <CardText>{category}</CardText>
            <CardText>{rating.rate}</CardText>
        </CardBody>
    </Card>
    )
}


export default ProductCard