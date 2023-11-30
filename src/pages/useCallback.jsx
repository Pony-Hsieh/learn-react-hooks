import { useCallback, useState } from "react";

function Example1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function doSomething(a, b) {
    console.log("doSomething");
    return a + b;
  }

  const memoizedCallback = useCallback(() => {
    console.log("useCallback");
    doSomething(a, b);
  }, [a, b]);

  return (
    <div>
      <h3>useCallback Example1</h3>
      <p>a: {a}</p>
      <input
        type="text"
        onChange={(e) => {
          setA(e.target.value);
        }}
      />
      <p>b: {b}</p>
      <input
        type="text"
        onChange={(e) => {
          setB(e.target.value);
        }}
      />
      <p>a + b: {a + b}</p>
    </div>
  );
}

function UserCard({ user }) {
  /* Step: call api 取得用戶資訊 */

  return (
    <div>
      <h3>User</h3>
    </div>
  );
}

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      // post("/product/" + productId + "/buy", {
      //   referrer,
      //   orderDetails,
      // });
    },
    [productId, referrer]
  );
  /* 
  
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
  */

  return (
    <div>
      <h2>useCallback</h2>
    </div>
  );
}

// export default ProductPage;
export default Example1;
