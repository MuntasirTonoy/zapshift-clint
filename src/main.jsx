import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Router";
import { RouterProvider } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AuthProvider from "./Context/AuthContext/AuthContext";
// ..
AOS.init({
  offset: 120, // Offset (in px) from the original trigger point
  delay: 500, // Delay in ms
  duration: 700, // Animation duration in ms
  easing: "ease", // Default easing for animations
  once: false, // ❗ Animation will trigger every time you scroll into view
  mirror: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
