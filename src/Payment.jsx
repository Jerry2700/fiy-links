import Navbar from "./Navbar";
import axios from "axios";
import "./Payment.css";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";


const Payment=()=>{
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate();



  const savingpayment=(x,y,status)=>{
    const token = localStorage.getItem("token");
      
    axios.put('"http://192.168.0.108:8080/payment/update-order',
      {
        razorpayOrderId: y,
        razorpayPaymentId: x,
        paymentStatus:status,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }

    ).then((response)=>{
      console.log(response);
      alert(response.data)
    })
    .catch(error=>{console.log(error)})
  }


  const paymentrequest=(event,plan,amount)=>{
    const token = localStorage.getItem("token");

    axios
    .post(
     "http://192.168.0.108:8080/payment/create-order",
      { paymentPlan: plan, paymentAmount: amount },
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      console.log(response);

      const options = {
        key: "rzp_test_sWKbQJQipWCqCf", // Enter the Key ID generated from the Dashboard
        amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "FIY-LINK",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {

          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
           const x =response.razorpay_payment_id;
           const y=response.razorpay_order_id;
          
          
             
           savingpayment(x,y,'Paid');


        },
        prefill: {
          name: '',
          email: '',
          contact:'',
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
    
      const rzp1 = new Razorpay(options);
    
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);


        const x =response.error.metadata.payment_id;
        const y=response.error.metadata.order_id;
        

        savingpayment(x,y,'Faild');

      });
    
      rzp1.open();

      
    })
    .catch((error) => {
      console.log(error);
    });
};


const handlefree=()=>{
  navigate('/radhe')
}
  
    

    
    return(
        <>
        <div >
        <Navbar /> </div>
        <div className="main-card-payment"> 
  
  
  <div className="pricing-table">
    <div className="pricing-card">
      <h3 className="pricing-card-header">Free</h3>
      <div className="price"><sup>RS</sup>0<span>/MO</span></div>
      <ul>
      <li>No YouTube embeding</li>
        <li>Social Media Icons</li>
        
        
        <li>No Search Option</li>
        <li>No Mobile AppLink</li>
        <li> 1 Customize Link</li>
        <li>2 Theme Only</li>
        <li>No Analytic</li>
        {/* <li>10 Links</li> */}



      </ul>
      <a href="#" className="order-btn" onClick={handlefree} >Continue</a>
    </div>

    <div className="pricing-card">
      <h3 className="pricing-card-header">Silver</h3>
      <div className="price"><sup>Rs</sup>199<span>/MO</span></div>
      <ul>
        <li>Social Media Icons</li>
        <li>YouTube embeding</li>
        <li>No Search Option</li>
        <li>No Mobile AppLink</li>
        <li>Analytic Available</li>
        <li>Customize Link</li>
       
        
        <li>5 Theme Only</li>

        
      </ul>
      <a href="#" className="order-btn"  onClick={event => paymentrequest(event, 'SILVER',199)} >Buy Now</a>
    </div>

    <div className="pricing-card">
      <h3 className="pricing-card-header">Gold</h3>
      <div className="price"><sup>Rs</sup>499<span>/MO</span></div>
      <ul>
      <li>Social Media Icons</li>
        <li>YouTube embeding</li>
        <li>Analytic Available</li>
       
        <li> Mobile AppLink</li>
        <li>Customize Link</li>
        
        <li> Search Option</li>
        <li> All Theme </li>
        
      </ul>
      <a href="#" className="order-btn"  onClick={event => paymentrequest(event, 'GOLD',499)}>Buy Now</a>
    </div>
  
  
  </div>
  
</div>
        </>
    )
}
export default Payment;