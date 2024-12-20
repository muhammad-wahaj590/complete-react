import {useState, useEffect} from 'react'
import ProductCard from './ProductCard';


function ProductList() {
  const [products, setProducts] = useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res))
      console.log(setProducts);
  }, [])
  
  return (
    <div>
      {
        products.map(product => <div><ProductCard imageUrl={product.image} title={product.title} price={product.price} description={product.description} /></div>)
      }
    </div>
  )
}

export default ProductList

