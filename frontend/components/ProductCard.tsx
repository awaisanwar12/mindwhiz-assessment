import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="card-price">${product.price.toFixed(2)}</div>
        <Link href={`/product/${product._id}`}>
          <button className="btn btn-primary" style={{ width: '100%' }}>View Details</button>
        </Link>
      </div>
    </div>
  );
}
