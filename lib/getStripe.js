import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LD798ECCfAt4YXgY77cprPw81PmFl5f8RwucCnDl6V1RnSxIVOcgXBDPl4KEY4SZ74wXeStU46JWdY0BE1u4c1B00lXFDUrK7"
    );
    console.log(stripePromise);
  }

  return stripePromise;
};

export default getStripe;
