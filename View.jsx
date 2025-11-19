import { useState } from "react";

export default function View() {
  const [items, setItems] = useState([
    { name: "Potato", price: 10, qty: 0 },
    { name: "Tomato", price: 15, qty: 0 },
    { name: "Onion", price: 8, qty: 0 },
    { name: "Papaya", price: 10, qty: 0 },
    { name: "white radish", price: 12, qty: 0 },
    { name: "Apple", price: 20, qty: 0 },
    { name: "Avacoda", price: 25, qty: 0 },
    { name: "blackberry", price: 30, qty: 0 },
    { name: "White Cabbage", price: 10, qty: 0 },
    { name: "Carrot", price: 11, qty: 0 },
    { name: "Cauliflower", price: 18, qty: 0 },
    { name: "Dragon fruit", price: 40, qty: 0 },
    { name: "Grapes", price: 28, qty: 0 },
    { name: "Guova", price: 20, qty: 0 },
    { name: "Jackfruite", price: 32, qty: 0 },
    { name: "Ladyfinger", price: 8, qty: 0 },
    { name: "Mango", price: 10, qty: 0 },
    { name: "Cherries", price: 25, qty: 0 },
    { name: "Palm fruit", price: 18, qty: 0 },
    { name: "Pineapple", price: 35, qty: 0 },
    { name: "Promegranet", price: 18, qty: 0 },
    { name: "Rambutan", price: 50, qty: 0 },
    { name: "strawberry", price: 45, qty: 0 },
    { name: "fruit basket", price: 150, qty: 0 },
    { name: "vegtable basket", price: 125, qty: 0 },
   


  ]);

  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(""); 

  const handleQtyChange = (index, value) => {
    const newItems = [...items];
    newItems[index].qty = Number(value);
    setItems(newItems);
  };

  const calculateTotal = () => {
    const sum = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(sum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order placed successfully!\nPayment Mode: ${payment}\nTotal: ₹${total}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      {/* Left Box (Form + Table) */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-orange-600 text-center">
          Venkat Basket
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid gap-3 mb-6">
          <input
            className="input border px-3 py-2 rounded-md"
            placeholder="First name *"
            required
          />
          <input
            className="input border px-3 py-2 rounded-md"
            placeholder="Last name"
          />
          <input
            className="input border px-3 py-2 rounded-md"
            placeholder="Phone"
          />
          <input
            type="email"
            className="input border px-3 py-2 rounded-md"
            placeholder="Email *"
            required
          />
          <textarea
            className="input border px-3 py-2 rounded-md h-20"
            placeholder="Write a Address here..."
          />

          {/* ✅ Payment Options */}
          <div className="mt-2">
            <p className="font-semibold text-gray-700 mb-2">Select Payment Method:</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Credit Card"
                  checked={payment === "Credit Card"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Credit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={payment === "UPI"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                UPI
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Vasu Vanu"
                  checked={payment === "Vasu Vanu"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                cash on Delivery 
              </label>
            </div>
          </div>

          
        </form>

        {/* Basket Table */}
        <table className="border border-gray-300 w-full text-center rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border px-2 py-2">Item</th>
              <th className="border px-2 py-2">Price</th>
              <th className="border px-2 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-2 py-2">{item.name}</td>
                <td className="border px-2 py-2">{item.price}</td>
                <td className="border px-2 py-2">
                  <input
                    type="number"
                    min="0"
                    value={item.qty}
                    onChange={(e) => handleQtyChange(index, e.target.value)}
                    className="w-16 border rounded px-1 py-1 text-center"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Button + Total */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <button
            onClick={()=>{
              calculateTotal();
              setTimeout(() => {
                alert("✅ Order placed successfully!");
              },100);
            }}
            
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition text-sm"
          >
           
           Calculate Total Cost
          </button>
          
          <p className="mt-3 text-base font-semibold text-gray-700">
            Total Cost: <span className="text-orange-600">₹{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
