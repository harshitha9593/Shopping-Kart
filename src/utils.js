
const fetch_kart_list = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    //console.log(data);
    
    return data;
  };
module.exports = fetch_kart_list; 
//export default fetch_kart_list;