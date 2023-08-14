import NavBar from "./layout/sidebar";
import SubCategory from "./Components/SubCategory";
import Category from "./Components/Category";
import {Route, Routes } from 'react-router-dom';
import SubSubCategory from "./Components/subSubCategory";

const App = () => {
  const element = (
    <div style={{display:"flex"}}>
      <NavBar></NavBar>

      <Routes>
        <Route exact path="/" component={Category} />
        <Route path="/sub-category" component={SubCategory} />
        <Route path="/sub-sub-category" component={SubSubCategory} />
        </Routes>

    </div>
  );

  return element;
};

export default App;
