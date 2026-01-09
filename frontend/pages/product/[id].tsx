import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="container" style={{marginTop: '2rem'}}>Loading...</div>;
  if (!product) return <div className="container" style={{marginTop: '2rem'}}>Product not found</div>;

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px' }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ marginTop: 0 }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', color: '#39B54A', fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: '4px', 
              background: product.inStock ? '#e6f4ea' : '#fce8e6',
              color: product.inStock ? '#1e7e34' : '#bd2130',
              fontWeight: 'bold'
            }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '2rem' }}>{product.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button className="btn btn-primary" disabled={!product.inStock}>
               {product.inStock ? 'Add to Cart' : 'Out of Stock'}
             </button>
             <button className="btn" style={{ background: '#eee' }} onClick={() => router.back()}>
               Back
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
