import { useEffect, useState } from 'react'
import './App.css'
import ItemsList from './Components/ItemsList'
import allProducts from './mocks/products'

function App () {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [products, setProducts] = useState(allProducts)
  const addProduct = id => {
    console.log(id)
    const selectedProduct = products.find(product => product.id === id)
    console.log(selectedProduct)
    setSelectedProducts([
      ...selectedProducts,
      { ...selectedProduct, purchased: true }
    ])
  }
  const removeProduct = id => {
    console.log(id)
    const remainingProducts = selectedProducts.filter(
      product => product.id !== id
    )
    setSelectedProducts(remainingProducts)
  }

  const categoriesList = allProducts.reduce((accum, current) => {
    return !accum.includes(current.category)
      ? [...accum, current.category]
      : accum
  }, [])

  console.log(categoriesList)

   const filterHandler = (event) =>{
      
   const value = event.target.value
   const result = allProducts.filter((cv,index)=>{
    return cv.category === value
   })
   setProducts(result)    
   }

  return (
    <div className='App'>
        <div class="form-floating">
        <select onChange={filterHandler} class="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option  selected>Open this select menu</option>
          {categoriesList.map((category,index)=>{
            return <option  value={category} key={index}>{category}</option>
          })}
        </select>
        <label for="floatingSelect">Works with selects</label>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h1>Catálogo de productos</h1>
            <ItemsList
              productsArray={products}
              addProductHandler={addProduct}
            />
          </div>
          <div className='col-12 col-md-6'>
            <h1>Carrito de compras</h1>
            {!selectedProducts.length ? (
              <h2>Selecciona algún producto de la lista</h2>
            ) : (
              <>
                <h3>
                  Total:
                  {selectedProducts.reduce((acc, curr) => acc + curr.price, 0)}
                </h3>
                <ItemsList
                  productsArray={selectedProducts}
                  removeProductHandler={removeProduct}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App