import { getProducts } from "../data/products";
import ProductCard from "../components/Product";

export default function Home() {
  const products = getProducts();

  return (
    <div className="page">
      {/* Heading */}
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing products at great price
        </p>
      </div>

      {/* Main */}
      <div className="container">
        <h2 className="page-title">Our-Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
