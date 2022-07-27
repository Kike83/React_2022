import ProductCard from '../ProductCard'

const List = (props) => {
    const {data} = props
        return(
            <div className="d-flex gap-3 flex-wrap">
            {data.map(producto => {
             return <ProductCard 
             cardData={producto}/>
            })}
           </div>
        ) 
}


export default List