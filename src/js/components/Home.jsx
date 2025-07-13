import React from "react";
import { Top } from "./Top";
import { ImgCard } from "./ImgCard";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";


const Home = () => {
  return (
    <>
      <Top />

      <Jumbotron />

    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
        <ImgCard
      nombre= "ReactDOM"
      imagen= "https://blogs.purecode.ai/blogs/wp-content/uploads/2024/01/23d807c8-692f-4f0f-ae13-83423dad1ee2.png"
      texto = "It is used to render a React element into a DOM node. The ReactDOM.
                                     render function is usually called once in a React application, 
                                    in the root JavaScript file. In the above code,
                                     the render method in the App component returns a React element "
       />
       </div>
       <div className="col-md-4 mb-4">
      <ImgCard
      nombre= "React Native"
      imagen= "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png"
      texto = "Functional components in React Native are JavaScript functions that render a React element
                                     They can accept a single argument which is an object containing component properties 
                                     They can also use state and lifecycle behavior with hooks
                                     Class Components in React Native are ES6 Classes that extend React"

       />
       </div>
       <div className="col-md-4 mb-4">
       <ImgCard
      nombre= "JSX"
      imagen= "https://simplecode.io/static/230aba5188d8176602c3ff5d15648b2e/8c79c/learn-react-what-is-jsx.png"
      texto = "SX, or JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. 
                                    It's primarily used in React applications to define the structure and layout of components. While it looks like HTML, 
                                    it's actually a syntax extension that gets transformed into regular JavaScript code specifically,
                                     React.createElement calls during the compilation process."

       />
        </div>
      </div>
      <hr className="featurette-divider bg-light"></hr>
    </div>

    <Footer />
    </>
  );
};
export default Home;