# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

DOM -- Document Object Model

HTML Page ---- browser --- converts your html code to a tree like structure (DOM)

html - head - meta - body - p

Whole tree used to be destroyed and then it will apply changes --- new tree will be formed
(This hampers performance)

Real DOM
Virtual DOM --- lightweight copy of real DOM

New virtual DOM tree is created as soon as we do any change in real DOM with the updated change

Diffing algorithm --- compares both the virtual DOM trees and find the node which is changed

Only changed node will be updated in real DOM

Functional Component --- new way
Class Based Component --- old way

Single Page Application - (SPA) => one HTML Page  
rendering components in this single HTML Page

Client Side Routing --- no server is involved

npm package to implement react router ---- react-router-dom

Props Drilling --> passing props from parent to deep nested child component
Context ---> Helps us avoid props drilling. Helps to create shared context which can be used by any React component. Context is a part of React (useContext Hook)

Redux ----> State Management. Separate JS Library called redux needs to be installed. Helps us avoid props drilling.

react-redux , reduxtookit

// Add Items to Cart using Redux

Store ---> storing shared information we use Store
Slices ----> cart slice (store data related to cart) , payment Slice (store data related to payment) , userSlice(store data related to user)

Clicking on Add Button ----> an action gets dispatched (useDispatch)
Action calls reducer function ---> every action will have a reducer function
Reducer function will update items in the cart

useSelector --- selector to basically select items from the cart
