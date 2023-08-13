
import axios from "axios";
import { useEffect, useState } from "react";

const SubCategoryMaster = () => {

  // ----------------- binding dropdown -------------------
  const [subCategoryData, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/api/category");
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data for drop down", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const options = subCategoryData.map((item) => ({
    key: item._id,
    text: item.name,
    value: item._id,
  }));

  const onSubmit = (data) => {
    console.log(data);
  };



  const element = (
    <>
     
    </>
  );
  return element;
};

export default SubCategoryMaster;
