# List of React Fundamental concepts used in the project
1. React Router:
Used to create a single-page application (SPA) with routes for different pages, utilizing createBrowserRouter, Navigate, NavLink, and Outlet components from react-router-dom.
Routes are configured to display specific pages based on the URL, making navigation seamless without full page reloads.

2. Component Structure:
The project is divided into multiple reusable components, such as Home, Dashboard, Wishlist, and Cart, as well as smaller UI components (GadgetsCards, CartList, etc.). This modular structure promotes code reuse and separation of concerns.

3. State Management with useState:
useState is used to manage local state within components, such as the cartList, wishlish, and totalcost states in Cart and Wishlist. This enables dynamic UI updates based on user interactions (e.g., adding/removing items from cart or wishlist).

4. Data Fetching with useLoaderData:
useLoaderData from react-router-dom is utilized to fetch data when loading specific routes, ensuring that the required data is available when the component renders. This is used in the routes for loading product and category data.

5. Side Effects with useEffect:
useEffect is applied for various side effects, such as setting the document title (e.g., Dashboard and Home), loading data on component mount, and updating the UI when localStorage data changes.

6. Conditional Rendering:
Conditional rendering is used for elements like the Purchase button (disabling it if the cart is empty) and displaying items based on route conditions. This enhances the user experience by showing or hiding elements based on specific conditions.

7. Props for Data Passing:
Props are used to pass data from parent to child components (e.g., passing the categories data to CategoriesSidebar and wishlish to WishLists), promoting a structured and predictable data flow.

8. Local Storage for Persistent Data:

Local storage is used to persist cart and wishlist data, enabling users to retain their selections across sessions. Functions such as getformCart, addToCart, and storeCartRemove interact with localStorage.

## What you have used for handling and managing data (context API/local storage)

For handling and managing data in this project, local storage has been primarily used to persist user selections (such as items in the cart and wishlist) across sessions. Here’s how it's been utilized:

 => Local Storage: 

Storing Cart and Wishlist Data:
When users add or remove items from the cart or wishlist, functions interact with localStorage to save and retrieve this data.
For example, addToCart and storeCartRemove functions manage cart items in local storage, allowing items to persist even if the user refreshes the page or closes the browser.

=> Fetching Data on Load:

Functions like getformCart and getformWish are used to retrieve existing data from local storage when the components mount. This allows the project to initialize the cart and wishlist with saved data, giving users a seamless experience.

## 5 features of your website/project

1.  Dynamic Product Display with Filtering and Sorting:
Users can view a collection of products with details like images, titles, and prices, fetched dynamically through an API.
A sorting feature allows users to organize products by price, category, or other filters, enhancing the browsing experience.

2. Cart and Wishlist Functionality:
Users can easily add or remove items to their cart and wishlist, with all changes saved to local storage for persistence across sessions.
The cart and wishlist totals are updated in real-time, giving users an accurate view of their selections without needing to refresh the page.

3. Responsive Design with Mobile Optimization:
Built with Tailwind CSS, the layout adjusts seamlessly across various screen sizes, ensuring optimal usability on mobile, tablet, and desktop devices.
Key sections, such as the navbar, product grid, and footer, dynamically rearrange based on the screen size for a smooth browsing experience.

4. Interactive, Accessible Modals for Product Details:
Each product has a dedicated modal window that provides detailed information, improving accessibility and user engagement.
The modals use a clean, minimalistic design with intuitive navigation, enhancing the user experience.

5. Real-Time Notifications and Feedback
React-Toastify is used for providing real-time feedback, such as confirming when items are added to the cart or wishlist or notifying users of an error.
This feedback keeps users informed of actions, improving usability and making the app feel responsive and interactive.

# Attach Live Website Link: 
live link: https://gadgets-heaven-sumondev6.netlify.app

# Attach Requirement Document Link:
programming%20hero/milestone-8/B10-A8-gadget-heaven/Batch-10_Assignment-08.pdf