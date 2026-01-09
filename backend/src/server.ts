import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/mindwhiz';
mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB');
    seedProducts();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/products', productRoutes);
app.use('/', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('MindWhiz API is running');
});

// Seed Data (Basic implementation)
import Product from './models/productModel';

const seedProducts = async () => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            const products = [
                {
                    name: 'Wireless Headphones',
                    description: 'High quality noise cancelling wireless headphones.',
                    price: 99.99,
                    inStock: true,
                    imageUrl: 'https://placehold.co/600x400/39B54A/ffffff?text=Headphones'
                },
                {
                    name: 'Smart Watch',
                    description: 'Track your fitness and notifications.',
                    price: 149.99,
                    inStock: true,
                    imageUrl: 'https://placehold.co/600x400/39B54A/ffffff?text=Smart+Watch'
                },
                {
                    name: 'Running Shoes',
                    description: 'Comfortable shoes for long distance running.',
                    price: 89.99,
                    inStock: true,
                    imageUrl: 'https://placehold.co/600x400/39B54A/ffffff?text=Shoes'
                },
                {
                    name: 'Backpack',
                    description: 'Durable backpack for travel and work.',
                    price: 49.99,
                    inStock: true,
                    imageUrl: 'https://placehold.co/600x400/39B54A/ffffff?text=Backpack'
                },
                {
                    name: 'Mechanical Keyboard',
                    description: 'Tactile switches for the best typing experience.',
                    price: 129.99,
                    inStock: false,
                    imageUrl: 'https://placehold.co/600x400/39B54A/ffffff?text=Keyboard'
                }
            ];
            await Product.insertMany(products);
            console.log('Database seeded with initial products');
        }
    } catch (error) {
        console.error('Seeding error:', error);
    }
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
