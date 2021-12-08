/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51K4A1LSIAjewpMd4Bt5iAJLYl71NVsUIgRQvOTklgdkbVuPGKKy8jndjp0TQR8Fz8Cr5rxMh1LNWOyQAvbBrMi2800gGfZKcfp'
);

export const bookTour = async (tourId) => {
  try {
    // 1. Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2. create checout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
