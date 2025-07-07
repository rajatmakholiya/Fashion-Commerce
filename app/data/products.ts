import { Product } from "../types";

const productsdata: Product[] = [
 {
   id: 1,
   name: "Premium Cotton T-Shirt",
   price: 29.99,
   image:
     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
   category: "men",
   size: "M",
   color: "Blue",
 },
 {
   id: 2,
   name: "Elegant Women's Dress",
   price: 49.99,
   image:
     "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8Mg%3D%3D",
   category: "women",
   size: "S",
   color: "Red",
 },
 {
   id: 3,
   name: "Casual Kids Jeans",
   price: 39.99,
   image:
     "https://images.unsplash.com/photo-1666379685317-f37a716bc4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkJTIwamVhbnN8ZW58MHx8MHx8fDI%3D",
   category: "kids",
   size: "L",
   color: "Blue",
 },
 {
   id: 4,
   name: "Designer Handbag",
   price: 99.99,
   image:
     "https://images.unsplash.com/photo-1659011559233-7685997dee4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVzaWduZXIlMjBIYW5kYmFnfGVufDB8MXwwfHx8Mg%3D%3D",
   category: "accessories",
   color: "Brown",
 },
 {
   id: 5,
   name: "Sports Running Shoes",
   price: 79.99,
   image:
     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
   category: "accessories",
   size: "XL",
   color: "Black",
 },
 {
   id: 6,
   name: "Vintage Style Watch",
   price: 59.99,
   image:
     "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
   category: "accessories",
   color: "Silver",
 },
 {
   id: 7,
   name: "Cozy Winter Jacket",
   price: 89.99,
   image:
     "https://images.unsplash.com/photo-1613422448762-c13f05ae758a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ludGVyJTIwSmFja2V0fGVufDB8MXwwfHx8Mg%3D%3D",
   category: "men",
   size: "L",
   color: "Gray",
 },
 {
   id: 8,
   name: "Summer Beach Dress",
   price: 39.99,
   image:
     "https://images.unsplash.com/flagged/photo-1576663842078-d7f7379d8540?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBkcmVzc3xlbnwwfDF8MHx8fDI%3D",
   category: "women",
   size: "M",
   color: "Yellow",
 },
 {
   id: 9,
   name: "Kids Cartoon Hoodie",
   price: 29.99,
   image:
     "https://images.unsplash.com/photo-1540987173746-7a87c08d3ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkJTIwSG9vZGllfGVufDB8MXwwfHx8Mg%3D%3D",
   category: "kids",
   size: "S",
   color: "Green",
 },
 {
   id: 10,
   name: "Luxury Leather Belt",
   price: 49.99,
   image:
     "https://images.unsplash.com/photo-1666723043169-22e29545675c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMGJlbHR8ZW58MHwxfDB8fHwy",
   category: "accessories",
   color: "Black",
 },
 {
   id: 11,
   name: "Fashion Sunglasses",
   price: 19.99,
   image:
     "https://images.unsplash.com/photo-1577744486770-020ab432da65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfDF8MHx8fDI%3D",
   category: "accessories",
   color: "Purple",
 },
 {
   id: 12,
   name: "Premium Denim Jeans",
   price: 69.99,
   image:
     "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlbmltfGVufDB8MXwwfHx8Mg%3D%3D",
   category: "men",
   size: "XL",
   color: "Indigo",
 },
 {
   id: 13,
   name: "Elegant Evening Gown",
   price: 79.99,
   image:
     "https://images.unsplash.com/photo-1610048616025-11a3dcc9fd0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z293bnxlbnwwfDF8MHx8fDI%3D",
   category: "women",
   size: "L",
   color: "Navy",
 },
 {
   id: 14,
   name: "Kids Backpack",
   price: 39.99,
   image:
     "https://images.unsplash.com/photo-1599868082389-59b00bb8760d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwc2Nob29sJTIwYmFnfGVufDB8MXwwfHx8Mg%3D%3D",
   category: "accessories",
   color: "Red",
 },
 {
   id: 15,
   name: "Designer Wallet",
   price: 29.99,
   image:
     "https://images.unsplash.com/photo-1636023189308-06668418548d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxldHxlbnwwfDF8MHx8fDI%3D",
   category: "accessories",
   color: "Brown",
 },
 {
   id: 16,
   name: "Casual T-Shirt",
   price: 19.99,
   image:
     "https://images.unsplash.com/photo-1600328759671-85927887458d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8MXwwfHx8Mg%3D%3D",
   category: "men",
   size: "S",
   color: "White",
 },
];

export default productsdata;