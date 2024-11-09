import { Districts } from "@/types/type";
import brandImage1 from "../../public/images/brands/airbnb.png";
import brandImage2 from "../../public/images/brands/cisco.png";
import brandImage3 from "../../public/images/brands/ebay.png";
import brandImage4 from "../../public/images/brands/microsoft.png";
import brandImage5 from "../../public/images/brands/uber.png";
export const products = [
  {
    id: "1",
    name: "Aspirin",
    slug: "aspirin",
    image: "https://i.ibb.co/pb2hQs5/5-14-1000x1000-min.jpg",
    description: "Pain reliever and fever reducer.",
    variants: [
      { id: "v1", name: "500mg", price: 10 },
      { id: "v2", name: "1000mg", price: 15 },
    ],
    price: 10,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "2",
    name: "Ibuprofen",
    slug: "ibuprofen",
    image: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
    description: "Anti-inflammatory drug for pain relief.",
    variants: [
      { id: "v1", name: "200mg", price: 12 },
      { id: "v2", name: "400mg", price: 20 },
    ],
    price: 12,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "3",
    name: "Vitamin C",
    slug: "vitamin-c",
    image: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
    description: "Boosts immune system and antioxidant.",
    variants: [
      { id: "v1", name: "500mg", price: 18 },
      { id: "v2", name: "1000mg", price: 25 },
    ],
    price: 18,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "4",
    name: "Amoxicillin",
    slug: "amoxicillin",
    image: "https://i.ibb.co/SVMsLFH/shop-4-4-1000x1000-min.jpg",
    description: "Antibiotic for bacterial infections.",
    variants: [
      { id: "v1", name: "500mg", price: 22 },
      { id: "v2", name: "1000mg", price: 30 },
    ],
    price: 22,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "5",
    name: "Cetirizine",
    slug: "cetirizine",
    image: "https://i.ibb.co/Hg0zZkQ/shop-4-7-1000x1000-min.jpg",
    description: "Antihistamine for allergy relief.",
    variants: [{ id: "v1", name: "10mg", price: 14 }],
    price: 14,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "6",
    name: "Metformin",
    slug: "metformin",
    image: "https://i.ibb.co/8cb2G7H/shop-4-8-1000x1000-min.jpg",
    description: "Medication for type 2 diabetes.",
    variants: [
      { id: "v1", name: "500mg", price: 25 },
      { id: "v2", name: "1000mg", price: 35 },
    ],
    price: 25,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "7",
    name: "Omeprazole",
    slug: "omeprazole",
    image: "https://i.ibb.co/GxTVSVk/shop-4-9-1000x1000-min.jpg",
    description: "Proton pump inhibitor for acid reflux.",
    variants: [{ id: "v1", name: "20mg", price: 20 }],
    price: 20,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "8",
    name: "Lisinopril",
    slug: "lisinopril",
    image: "https://i.ibb.co/X330FTj/shop-4-10-1000x1000-min.jpg",
    description: "Medication for high blood pressure.",
    variants: [
      { id: "v1", name: "10mg", price: 25 },
      { id: "v2", name: "20mg", price: 30 },
    ],
    price: 25,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "9",
    name: "Diphenhydramine",
    slug: "diphenhydramine",
    image: "https://i.ibb.co/vYThXwW/shop-4-12-1000x1000-min.jpg",
    description: "Antihistamine for sleep and allergy.",
    variants: [{ id: "v1", name: "25mg", price: 9 }],
    price: 9,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
  {
    id: "10",
    name: "Hydrochlorothiazide",
    slug: "hydrochlorothiazide",
    image: "https://i.ibb.co/HnjZXdg/shop-5-13-1000x1000-min.jpg",
    description: "Diuretic for high blood pressure and fluid retention.",
    variants: [{ id: "v1", name: "25mg", price: 17 }],
    price: 17,
    stockStatus: true,
    stockQuantity: 10,
    rating: 3,
    totalReview: 12,
    brand: "Waterproofing & Caulking",
    category: "Roofing (Metal)",
    status: "active",
  },
];

export const reviews = [
  {
    _id: "65bc6cb184f8f11afa043cdc",
    rating: 5,
    name: "Sarah Johnson",
    review:
      "Outstanding service! The products exceeded my expectations, and the delivery was prompt. Will definitely be a repeat customer.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043cdd",
    rating: 4,
    name: "Michael Rodriguez",
    review:
      "Great selection of products. The website is user-friendly, and the checkout process was smooth. Fast shipping too!",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043cde",
    rating: 5,
    name: "Emily Turner",
    review:
      "Impressed with the quality of the items. Customer support was also very helpful in answering my queries. Highly recommended!",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043cdf",
    rating: 3,
    name: "David Smith",
    review:
      "Good experience overall, but there was a slight delay in delivery. Products were as described, though.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce0",
    rating: 5,
    name: "Jessica Lee",
    review:
      "Fantastic customer service! Quick response to inquiries, and the product quality exceeded my expectations. Will buy again!",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce1",
    rating: 4,
    name: "Christopher Brown",
    review:
      "The website is easy to navigate, and the product range is diverse. Had a positive shopping experience overall.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce2",
    rating: 2,
    name: "Amanda White",
    review:
      "Disappointed with the product quality. It didn't match the description on the website. Customer service was slow to respond.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce3",
    rating: 5,
    name: "Jonathan Taylor",
    review:
      "Excellent online shopping experience! The order arrived on time, and the product exceeded my expectations. Highly recommend this store!",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce4",
    rating: 3,
    name: "Rachel Miller",
    review:
      "Average service. The product quality was decent, but the delivery took longer than expected. Could use improvement.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
  {
    _id: "65bc6cb184f8f11afa043ce5",
    rating: 4,
    name: "Brian Turner",
    review:
      "Happy with my purchase. The product arrived in good condition, and the customer support team was helpful when I had a question.",
    title: "Customer",
    image: "https://i.ibb.co/0C1ymgJ/1694401431829.jpg",
  },
];

export const divisions = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Chattogram" },
  { id: 3, name: "Khulna" },
  { id: 4, name: "Rajshahi" },
  { id: 5, name: "Barishal" },
  { id: 6, name: "Sylhet" },
  { id: 7, name: "Rangpur" },
  { id: 8, name: "Mymensingh" },
];

export const districts: Districts = {
  Dhaka: [
    {
      id: 1,
      name: "Dhaka",
      upazilas: ["Central Dhaka", "North Dhaka", "South Dhaka"],
    },
    {
      id: 2,
      name: "Gazipur",
      upazilas: ["Gazipur Sadar", "Kaliakoir", "Sreepur"],
    },
    {
      id: 3,
      name: "Narayanganj",
      upazilas: ["Narayanganj Sadar", "Araihazar", "Baldhara"],
    },
    {
      id: 4,
      name: "Tangail",
      upazilas: ["Tangail Sadar", "Madhupur", "Basail"],
    },
    {
      id: 5,
      name: "Kishoreganj",
      upazilas: ["Kishoreganj Sadar", "Bajitpur", "Karimganj"],
    },
    {
      id: 6,
      name: "Manikganj",
      upazilas: ["Manikganj Sadar", "Singair", "Shibalaya"],
    },
    {
      id: 7,
      name: "Madaripur",
      upazilas: ["Madaripur Sadar", "Ranishwar", "Kalkini"],
    },
    {
      id: 8,
      name: "Munshiganj",
      upazilas: ["Munshiganj Sadar", "Lohajang", "Sreenagar"],
    },
    {
      id: 9,
      name: "Shariatpur",
      upazilas: ["Shariatpur Sadar", "Zanjira", "Naria"],
    },
    {
      id: 10,
      name: "Chandpur",
      upazilas: ["Chandpur Sadar", "Haimchar", "Shahrasti"],
    },
  ],
  Chattogram: [
    {
      id: 1,
      name: "Chattogram",
      upazilas: ["Chattogram Sadar", "Banderban", "Rangamati"],
    },
    {
      id: 2,
      name: "Cox's Bazar",
      upazilas: ["Cox's Bazar Sadar", "Teknaf", "Ukhiya"],
    },
    {
      id: 3,
      name: "Cumilla",
      upazilas: ["Cumilla Sadar", "Brahmanpara", "Laksham"],
    },
    {
      id: 4,
      name: "Feni",
      upazilas: ["Feni Sadar", "Daganbhuiyan", "Parshuram"],
    },
    {
      id: 5,
      name: "Khagrachari",
      upazilas: ["Khagrachari Sadar", "Dighinala", "Mahalchhari"],
    },
    {
      id: 6,
      name: "Lakshmipur",
      upazilas: ["Lakshmipur Sadar", "Ramganj", "Ramgati"],
    },
    {
      id: 7,
      name: "Bandarban",
      upazilas: ["Bandarban Sadar", "Ruma", "Thanchi"],
    },
    {
      id: 8,
      name: "Brahmanbaria",
      upazilas: ["Brahmanbaria Sadar", "Nabinagar", "Bijoynagar"],
    },
  ],
  Khulna: [
    { id: 1, name: "Khulna", upazilas: ["Khulna Sadar", "Dacope", "Rupsa"] },
    {
      id: 2,
      name: "Jessore",
      upazilas: ["Jessore Sadar", "Bagherpara", "Jhikargachha"],
    },
    {
      id: 3,
      name: "Satkhira",
      upazilas: ["Satkhira Sadar", "Kalaroa", "Debhata"],
    },
    {
      id: 4,
      name: "Bagerhat",
      upazilas: ["Bagerhat Sadar", "Chitalmari", "Morrelganj"],
    },
    {
      id: 5,
      name: "Jashore",
      upazilas: ["Jashore Sadar", "Chaugachha", "Keshabpur"],
    },
    {
      id: 6,
      name: "Kushtia",
      upazilas: ["Kushtia Sadar", "Kumarkhali", "Mirpur"],
    },
    {
      id: 7,
      name: "Meherpur",
      upazilas: ["Meherpur Sadar", "Gangni", "Mujibnagar"],
    },
    {
      id: 8,
      name: "Chuadanga",
      upazilas: ["Chuadanga Sadar", "Alamdanga", "Damurhuda"],
    },
  ],
  Rajshahi: [
    {
      id: 1,
      name: "Rajshahi",
      upazilas: ["Rajshahi Sadar", "Bagmara", "Puthia"],
    },
    { id: 2, name: "Pabna", upazilas: ["Pabna Sadar", "Chatmohar", "Santhia"] },
    {
      id: 3,
      name: "Naogaon",
      upazilas: ["Naogaon Sadar", "Manda", "Raninagar"],
    },
    {
      id: 4,
      name: "Joypurhat",
      upazilas: ["Joypurhat Sadar", "Khetlal", "Kalai"],
    },
    { id: 5, name: "Bogra", upazilas: ["Bogra Sadar", "Dhunat", "Sherpur"] },
    {
      id: 6,
      name: "Chapainawabganj",
      upazilas: ["Chapainawabganj Sadar", "Shibganj", "Gomostapur"],
    },
    {
      id: 7,
      name: "Sirajganj",
      upazilas: ["Sirajganj Sadar", "Kamarkhand", "Chauhali"],
    },
    {
      id: 8,
      name: "Kushtia",
      upazilas: ["Kushtia Sadar", "Kumarkhali", "Mirpur"],
    },
  ],
  Barishal: [
    {
      id: 1,
      name: "Barishal",
      upazilas: ["Barishal Sadar", "Wazirpur", "Gournadi"],
    },
    {
      id: 2,
      name: "Bhola",
      upazilas: ["Bhola Sadar", "Lalmohan", "Tazumuddin"],
    },
    {
      id: 3,
      name: "Patuakhali",
      upazilas: ["Patuakhali Sadar", "Kalapara", "Bauphal"],
    },
    {
      id: 4,
      name: "Jhalokati",
      upazilas: ["Jhalokati Sadar", "Babuganj", "Kathalia"],
    },
    {
      id: 5,
      name: "Jashore",
      upazilas: ["Jashore Sadar", "Chaugachha", "Keshabpur"],
    },
    {
      id: 6,
      name: "Kushtia",
      upazilas: ["Kushtia Sadar", "Kumarkhali", "Mirpur"],
    },
  ],
  Sylhet: [
    {
      id: 1,
      name: "Sylhet",
      upazilas: ["Sylhet Sadar", "Jaintiapur", "Companiganj"],
    },
    {
      id: 2,
      name: "Moulvibazar",
      upazilas: ["Moulvibazar Sadar", "Kulaura", "Barlekha"],
    },
    {
      id: 3,
      name: "Habiganj",
      upazilas: ["Habiganj Sadar", "Chunarughat", "Lakhai"],
    },
    {
      id: 4,
      name: "Sunamganj",
      upazilas: ["Sunamganj Sadar", "Durgapur", "Biswanath"],
    },
    {
      id: 5,
      name: "Jaintiapur",
      upazilas: ["Jaintiapur", "Khadimnagar", "Sadar"],
    },
    { id: 6, name: "Kulaura", upazilas: ["Kulaura", "Bishwanath", "Barlekha"] },
  ],
  Rangpur: [
    {
      id: 1,
      name: "Rangpur",
      upazilas: ["Rangpur Sadar", "Pirganj", "Kurigram"],
    },
    {
      id: 2,
      name: "Dinajpur",
      upazilas: ["Dinajpur Sadar", "Kaharole", "Birampur"],
    },
    {
      id: 3,
      name: "Thakurgaon",
      upazilas: ["Thakurgaon Sadar", "Ranishwar", "Haripur"],
    },
    {
      id: 4,
      name: "Gaibandha",
      upazilas: ["Gaibandha Sadar", "Sundarganj", "Palashbari"],
    },
    {
      id: 5,
      name: "Kurigram",
      upazilas: ["Kurigram Sadar", "Nageswari", "Bhurungamari"],
    },
    {
      id: 6,
      name: "Lalmonirhat",
      upazilas: ["Lalmonirhat Sadar", "Patgram", "Aditmari"],
    },
  ],
  Mymensingh: [
    {
      id: 1,
      name: "Mymensingh",
      upazilas: ["Mymensingh Sadar", "Trishal", "Gafargaon"],
    },
    {
      id: 2,
      name: "Jamalpur",
      upazilas: ["Jamalpur Sadar", "Islampur", "Dewanganj"],
    },
    {
      id: 3,
      name: "Netrokona",
      upazilas: ["Netrokona Sadar", "Kenduli", "Durgapur"],
    },
    {
      id: 4,
      name: "Kishoreganj",
      upazilas: ["Kishoreganj Sadar", "Bajitpur", "Karimganj"],
    },
    {
      id: 5,
      name: "Habiganj",
      upazilas: ["Habiganj Sadar", "Chunarughat", "Lakhai"],
    },
  ],
};

export const notifications = [
  {
    id: 1,
    image: "https://www.svgrepo.com/show/492676/avatar-boy.svg",
    name: "Realty Team",
    message: "New property listed: 4-bedroom house in downtown!",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    image: "https://www.svgrepo.com/show/492680/avatar-girl.svg",
    name: "Jane Doe",
    message: "Price drop alert: 2-bedroom apartment now 10% off.",
    timestamp: "09:00 AM",
  },
  {
    id: 3,
    image: "https://www.svgrepo.com/show/492669/avatar-boy.svg",
    name: "John Smith",
    message: "New inquiry received for the luxury villa in the suburbs.",
    timestamp: "08:00 AM",
  },
  {
    id: 4,
    image: "https://www.svgrepo.com/show/492683/avatar-girl.svg",
    name: "Open House",
    message: "Open house event today at 5 PM for the new listings.",
    timestamp: "07:00 AM",
  },
];
export const faqs = [
  {
    id: 1,
    question: "How can we help?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
  {
    id: 2,
    question: "How can I make refund from your website?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
  {
    id: 3,
    question: "Do you store any of my information?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
  {
    id: 4,
    question: "Should I talk to the bank before booking a home?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
  {
    id: 5,
    question: "How do i make payments using my credit card?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
  {
    id: 6,
    question: "How do i link multiple accounts with my phone?",
    response:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
  },
];
export const feeds = [
  {
    id: 1,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image:
      "https://assets.contenthub.wolterskluwer.com/api/public/content/1762154188974a21b9acf65da620a486?v=2dd64622",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
  {
    id: 2,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image:
      "https://d2zhlgis9acwvp.cloudfront.net/images/uploaded/pharmacists.jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
  {
    id: 3,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image:
      "https://static.vecteezy.com/system/resources/previews/009/283/996/large_2x/portrait-of-female-pharmacist-using-tablet-in-a-modern-pharmacy-drugstore-free-photo.jpg",
    category: "interior",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
  {
    id: 4,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image:
      "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/asian-pharmacist-ss-19-927x617.jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
  {
    id: 5,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image: "https://assets.rbl.ms/32867886/origin.jpg",
    category: "interior",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
  {
    id: 6,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 29, 2023",
    image:
      "https://assets.contenthub.wolterskluwer.com/api/public/content/e6cb7cdca47a466ea505659b1ceb2bc6?v=fbad7082",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Wabweni Brian",
      avatar:
        "https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp",
    },
  },
];
export const brands = [
  brandImage1,
  brandImage2,
  brandImage3,
  brandImage4,
  brandImage5,
];
export const teamMembers = [
  {
    id: 1,
    name: "Wabz Braize",
    role: "Front-end developer",
    image: "https://unitedthemes.com/wp-content/uploads/2018/09/team2.jpg",
  },
  {
    id: 2,
    name: "Ethan Hunt",
    role: "Backend  engineer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEABy10QnLp_dlJWIWx8KKu7rV9L6MBKUyeIkuGRMUqYu8VM3F_G4O0YtvXU1j4id_24&usqp=CAU",
  },
  {
    id: 3,
    name: "Raven Kent",
    role: "UI Designer",
    image:
      "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Web developer",
    image:
      "https://essential-addons.com/wp-content/uploads/2020/01/Team-Member-02-1.png",
  },
];

export const orderData = [
  {
    name: "Arafat Hosen",
    address: "Kawran Bazar, Dhaka",
    division: "Rajshahi",
    district: "Pabna",
    subDistrict: "Chatmohar",
    phone: "01622398341",
    cartItems: [
      {
        id: "1",
        image: "https://i.ibb.co/pb2hQs5/5-14-1000x1000-min.jpg",
        name: "Aspirin",
        price: 10,
        stockQuantity: 10,
        quantity: 6,
      },
      {
        id: "2",
        image: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
        name: "Ibuprofen",
        price: 12,
        stockQuantity: 10,
        quantity: 3,
      },
      {
        id: "3",
        image: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
        name: "Vitamin C",
        price: 18,
        stockQuantity: 10,
        quantity: 3,
      },
    ],
    email: "arfathossen541@gmail.com",
    status: "completed",
    total: 150,
    orderId: "jlu5huuocl",
    orderDate: "13th August 2024",
    paymentMethod: "Cash On Delivery",
  },
  {
    name: "Arafat Hosen",
    address: "Kawran Bazar, Dhaka",
    division: "Rajshahi",
    district: "Pabna",
    subDistrict: "Chatmohar",
    phone: "01622398341",
    cartItems: [
      {
        id: "1",
        image: "https://i.ibb.co/pb2hQs5/5-14-1000x1000-min.jpg",
        name: "Aspirin",
        price: 10,
        stockQuantity: 10,
        quantity: 6,
      },
      {
        id: "2",
        image: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
        name: "Ibuprofen",
        price: 12,
        stockQuantity: 10,
        quantity: 3,
      },
      {
        id: "3",
        image: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
        name: "Vitamin C",
        price: 18,
        stockQuantity: 10,
        quantity: 3,
      },
    ],
    email: "arfathossen541@gmail.com",
    status: "cancelled",
    total: 150,
    orderId: "jlu5hdsd5ruuocl",
    orderDate: "13th August 2024",
    paymentMethod: "Cash On Delivery",
  },
  {
    name: "Arafat Hosen",
    address: "Kawran Bazar, Dhaka",
    division: "Rajshahi",
    district: "Pabna",
    subDistrict: "Chatmohar",
    phone: "01622398341",
    cartItems: [
      {
        id: "1",
        image: "https://i.ibb.co/pb2hQs5/5-14-1000x1000-min.jpg",
        name: "Aspirin",
        price: 10,
        stockQuantity: 10,
        quantity: 6,
      },
      {
        id: "2",
        image: "https://i.ibb.co/bLKP624/5-15-1000x1000-min.jpg",
        name: "Ibuprofen",
        price: 12,
        stockQuantity: 10,
        quantity: 3,
      },
      {
        id: "3",
        image: "https://i.ibb.co/02WmJdc/5-19-1000x1000-min.jpg",
        name: "Vitamin C",
        price: 18,
        stockQuantity: 10,
        quantity: 3,
      },
    ],
    email: "arfathossen541@gmail.com",
    status: "shipping",
    total: 150,
    orderId: "weq354yr",
    orderDate: "13th August 2024",
    paymentMethod: "Cash On Delivery",
  },
];
