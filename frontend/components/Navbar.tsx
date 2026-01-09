import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<{ role: string } | null>(null);

  useEffect(() => {
    // Check local storage for mock user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  return (
    <nav style={{ background: 'white', padding: '1rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#39B54A' }}>
          MindWhiz Shop
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Products</Link>
          {user && user.role === 'admin' && (
            <Link href="/add-product">Add Product</Link>
          )}
          {user ? (
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '1rem' }}>
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
