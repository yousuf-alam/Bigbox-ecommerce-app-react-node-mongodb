const data = {
    products: [
      {
        _id: '1',
        name: 'Nike Slim TShirt',
        category: 'TShirts',
        image: '/img/1.jpeg',
        price: 120,
        countInstock:24,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '2',
        name: 'Yamha R15 V3',
        category: 'Bike',
        image: '/img/2.jpeg',
        price: 511000,
        countInstock:2,
        brand: 'yamaha',
        rating: 4.0,
        numReviews: 10,
        description: 'racing Bike',
      },
      {
        _id: '3',
        name: 'Redmi note 8',
        category: 'Phone',
        image: '/img/3.jpeg',
        price: 13220,
        countInstock:31,
        brand: 'Xiomi',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality smart phone',
      },
      {
        _id: '4',
        name: 'Edifier Headphone',
        category: 'headphone',
        image: '/img/4.jpeg',
        price: 1278,
        countInstock:12,
        brand: 'Edifier',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality headphone',
      },
      {
        _id: '5',
        name: 'One plus 7 pro',
        category: 'phone',
        image: '/img/5.jpeg',
        price: 45565,
        countInstock:23,
        brand: 'oneplus',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality smart',
      },
      {
        _id: '6',
        name: 'IPAD Pro',
        category: 'Tab',
        image: '/img/6.jpeg',
        price: 112139,
        countInstock:21,
        brand: 'apple',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        _id: '7',
        name: 'Regal Bed',
        category: 'bed',
        image: '/img/7.jpeg',
        price: 20500,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality bed',
      },
      {
        _id: '8',
        name: 'aprila racing bike',
        category: 'Bike',
        image: '/img/8.jpeg',
        price: 790100,
        countInstock:0,
        brand: 'aprila',
        rating: 4.0,
        numReviews: 10,
        description: 'awesome racing bike',
      },
      {
        _id: '9',
        name: 'samsung led tv',
        category: 'Shirts',
        image: '/img/9.jpeg',
        price: 34220,
        countInstock:36,
        brand: 'samsung',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        _id: '10',
        name: 'Iphone SE2020',
        category: 'Phone',
        image: '/img/10.jpg',
        price: 45900,
        countInstock:9,
        brand: 'iphone',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        _id: '11',
        name: 'Pulser 150 double disk',
        category: 'Pants',
        image: '/img/11.png',
        price: 65,
        countInstock:42,
        brand: 'pulser',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '12',
        name: 'Iphone 12 Pro Max',
        category: 'Phone',
        image: '/img/12.jpeg',
        price: 113000,
        countInstock:23,
        brand: 'apple',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        _id: '13',
        name: 'Mac book Pro m1 chip',
        category: 'laptop',
        image: '/img/13.jpg',
        price: 137120,
        brand: 'apple',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '14',
        name: 'Royal Enfield',
        category: 'Shirts',
        image: '/img/14.jpeg',
        price: 920100,
        countInstock:18,
        brand: 'royal enfield',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '15',
        name: 'samsung double door fridge',
        category: 'Shirts',
        image: '/img/15.jpeg',
        price: '80315',
        countInstock:34,
        brand: 'samsung',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        _id: '16',
        name: 'Soyabin oil',
        category: 'oil',
        image: '/img/16.jpeg',
        price: 678,
        countInstock:19,
        brand: 'pran',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        _id: '17',
        name: 'Puma Slim shirt',
        category: 'Pants',
        image: '/img/17.jpeg',
        price: 1665,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '18',
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/img/18.jpeg',
        price: 2130,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
      {
        _id: '19',
        name: 'Blutooth speaker',
        category: 'speaker',
        image: '/img/19.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '20',
        name: 'Xiomi pad6',
        category: 'Shirts',
        image: '/img/20.jpg',
        price: 30100,
        countInstock:10,
        brand: 'xiomi',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '21',
        name: 'Lacoste Panjabee',
        category: 'Shirts',
        image: '/img/21.jpeg',
        price: 1320,
        countInstock:16,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      
    ],
  };
  export default data;