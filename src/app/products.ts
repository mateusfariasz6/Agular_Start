export interface Product {
    id: number;
    name: string;
    price: number;
    description: string; 
}

export const products = [
    {
        id: 1,
        name: 'Galaxy S21',
        price: 699.99,
        description: 'A large phone with one of the best scrFactory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Lavendereens'
    },
    {
        id: 2,
        name: 'Galaxy S22+',
        price: 999.61,
        description: 'A great Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version, Pink Gold with one of the best cameras'
    },
    {
        id: 3,
        name: 'Motorola One 5G',
        price: 299.99,
        description: '2021 | 2-Day battery | Unlocked | Made for US by Motorola | 6/128GB | 48MP Camera | Hazy Silver'
    },
    {
        id: 4,
        name: 'Samsung Galaxy Book Pro 360',
        price: 1227.95,
        description: '15.6-inch FHD Touchscreen, 1TB SSD, Intel Evo Platform 2.8GHz i7-1165G7 (16GB RAM, Fingerprint Reader, Windows 11 Home) Mystic Navy, NP950QDB-KB3US'
    },
    {
        id: 5,
        name: 'Newest HP',
        price: 1139.00,
        description: '17t Laptop, 17.3 HD+ Non-Touch Screen, Intel Core i7-1165G7 Quad-Core Processor, 64GB DDR4 RAM, 1TB PCIe NVMe SSD, Wi-Fi 5, Bluetooth, HDMI, Webcam, Windows 11 Home, Black'
    }
];
