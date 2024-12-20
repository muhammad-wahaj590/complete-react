import React from 'react'

function ProductCard({imageUrl, price, title, description}) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard
