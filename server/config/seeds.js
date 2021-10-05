const db = require('./connection');
const { User, Product, Category, Order } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Cleansers' },
        { name: 'Toners/Exfoliators' },
        { name: 'Serums' },
        { name: 'Moisturizers' },
        { name: 'Face Oils' },
        { name: 'Sunscreen' },

    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Gentle Foaming Cleanser',
            description:
                'This gentle cleanser with a natural rose scent is MUST in your daily routine.',
            image: 'gentle_cleanse.jpg',
            category: categories[0]._id,
            price: 10.99,
            quantity: 500
        },
        {
            name: 'Deep Clean Cleansing Gel',
            category: categories[0]._id,
            description:
                'Give your pores a proper cleansing with our Deep Clean Cleansing Gel.',
            image: 'deep_cleanse.jpg',
            price: 9.99,
            quantity: 100
        },
        {
            name: 'Brightening Toner',
            description:
                'Promotes bright and smooth skin upon regular use.',
            image: 'toner.jpg',
            category: categories[1]._id,
            price: 11.99,
            quantity: 500
        },
        {
            name: 'Overnight Exfoliator',
            category: categories[1]._id,
            description:
                'Exfoliate the day away with this overnight exfoliator that helps renew the skin by smoothing away dead skin cells while you sleep! ',
            image: 'exfoliant.jpg',
            price: 8.99,
            quantity: 20
        },
        {
            name: 'Hyaluronic Acid Serum',
            category: categories[2]._id,
            description:
                'Alleviate dry skin with our Hyaluronic Acid Serum. This serum draws moisture to the skin, promoting a more vitalized complexion. ',
            image: 'hyal_serum.jpg',
            price: 13.99,
            quantity: 50
        },
        {
            name: 'Multi-Peptide Serum',
            category: categories[2]._id,
            description:
                'By targeting early aging signs, this Multi-Peptide Serum promotes a healthy, youthful glow.',
            image: 'multi_serum.jpg',
            price: 11.99,
            quantity: 100
        },
        {
            name: 'Silky Face Cream',
            category: categories[3]._id,
            description:
                'This deep moisturizer will leave your skin feeling silky-smooth.',
            image: 'silky_moisture.jpg',
            price: 9.99,
            quantity: 30
        },
        {
            name: 'Priming Moisturizer',
            category: categories[3]._id,
            description:
                'Our Priming Moisturizer will minimize the appearance of your pores while leaving your skin smooth and hydrated. ',
            image: 'priming_moisture.jpg',
            price: 10.99,
            quantity: 30
        },
        {
            name: 'Max Hydration Face Oil',
            category: categories[4]._id,
            description: 'Let your skin live it\'s most hydrated life with our Max Hydration Face Oil.',
            image: 'max_oil.jpg',
            price: 1.99,
            quantity: 1000
        },
        {
            name: 'Rosehip Seed Face Oil',
            category: categories[4]._id,
            description:
                'Our Rosehip Seed Face Oil will help restore skin elasticity, leaving your skin feeling plump and hydrated.',
            image: 'rose_oil.jpg',
            price: 2.99,
            quantity: 1000
        },
        {
            name: 'Radiant Sunblock',
            category: categories[5]._id,
            description:
                'Hydrate and protect your skin with our Radiant Sunblock - SPF 46. ',
            image: 'radiant_sun.jpg',
            price: 12.99,
            quantity: 100
        },
        {
            name: 'Anti-Sheer Sunscreen',
            category: categories[5]._id,
            description:
                'The protection of sunscreen without the excessive glow - SPF 46. Best for those with oily skin types.',
            image: 'anti_sun.jpg',
            price: 14.99,
            quantity: 600
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});
