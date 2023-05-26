export default function Product() {
  //const products = ["Laptop", "Phone", "Router"];
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Mobile", price: 400 },
    { id: 3, name: "Laptop", price: 800 },
  ];

  const fruits = ["Apple", "Mango", "Banana"];
  /*const productList = products.map((product)=>(
    <h3 key={product.id}>
        {product.name}: ${product.price}</h3>
    ));
    */

  const fruitsList = fruits.map((fruit, index) => (
    <h3 key={index}> {fruit} </h3>
  ));
  return <div> {fruitsList} </div>;
}
