import { Link } from "react-router-dom";

export default function ProductCard({product}) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-card-image" alt={product.name} />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <h3 className="product-card-price">${product.price}</h3>
        <div className="product-card-actions">
          <Link className="btn btn-secondary">View Details</Link>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
