const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const WebsiteContent = require('./models/WebsiteContent');
const Amenity = require('./models/Amenity');
const FAQ = require('./models/FAQ');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Default hardcoded admin credentials
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';

// Seed data function
const seedDatabase = async () => {
    const contentCount = await WebsiteContent.count();
    if (contentCount === 0) {
        await WebsiteContent.create({
            hero_title: 'Build Your Dream Home',
            hero_subtitle: 'Discover premium properties in the heart of the city.',
            hero_button: 'Explore Projects',
            overview_title: 'Project Overview',
            overview_description: 'This is a premium residential project offering modern amenities and a sustainable lifestyle.',
            connectivity_title: 'Nearby Connectivity',
            connectivity_description: 'Located in a prime area with easy access to highways, schools, and hospitals.',
            about_title: 'About Us',
            about_description: 'We are leading real estate developers committed to quality and excellence.',
            construction_label: 'Construction update for Feb 2026',
        });

        await Amenity.bulkCreate([
            { title: 'Swimming Pool', description: 'Olympic size pool for your relaxation.' },
            { title: 'Gymnasium', description: 'State-of-the-art fitness center.' },
            { title: 'Clubhouse', description: 'Exclusive space for community gatherings.' },
        ]);

        await FAQ.bulkCreate([
            { question: 'What is the possession date?', answer: 'The project is scheduled for completion by December 2027.' },
            { question: 'Are bank loans available?', answer: 'Yes, we are tied up with all major banks for home loans.' },
        ]);

        console.log('Database seeded with default content.');
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('Infinity Residences API is running...');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.get('/content', async (req, res) => {
    try {
        const website_content = await WebsiteContent.findOne();
        const amenities = await Amenity.findAll();
        const faq = await FAQ.findAll();
        res.json({ website_content, amenities, faq });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/content', async (req, res) => {
    try {
        const { website_content, amenities, faq } = req.body;

        // Update main content
        await WebsiteContent.update(website_content, { where: { id: website_content.id || 1 } });

        // Update amenities (Replace all for simplicity)
        await Amenity.destroy({ where: {}, truncate: true });
        await Amenity.bulkCreate(amenities.map(a => ({ title: a.title, description: a.description })));

        // Update FAQ (Replace all for simplicity)
        await FAQ.destroy({ where: {}, truncate: true });
        await FAQ.bulkCreate(faq.map(f => ({ question: f.question, answer: f.answer })));

        res.json({ success: true, message: 'Content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sync and Start
const PORT = process.env.PORT || 5000;
sequelize.sync().then(async () => {
    await seedDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
