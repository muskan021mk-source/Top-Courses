import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./assets/data";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

function App() {
  const [Courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const[category ,setCategory]=useState(filterData[0].title); 

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      console.log("Fetched output:", output);
      setCourses(output.data); 
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#3b3b5a]">
      <Navbar />
      <div className="bg-[#3b3b5a]">
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={Courses} category={category} />}
        </div>
      </div>
    </div>
  );
}

export default App;
