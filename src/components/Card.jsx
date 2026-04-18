import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ course, Likedcourses, setLikedcourses }) => {
 

  function clickhandler() {
    if (Likedcourses.includes(course.id)) {
      setLikedcourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      if (Likedcourses.length === 0) {
        setLikedcourses([course.id]);
      } else {
        setLikedcourses((prev) => [...prev, course.id]);
      }

      toast.success("Liked Successfully!");
    }
  }

  return (
    <div className="w-[300px] bg-[#16132a] bg-opacity-80 round overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div
          className="w-[40px] h-[40px] bg-white rounded-full
             absolute right-2 bottom-[-12px] grid place-items-center"
        >
          <button onClick={clickhandler}>
           {
            Likedcourses.includes(course.id)? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
           }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
            {
            course.description.length>100?(course.description.substr(0,100)+".."):(course.description)
            }
        </p>
      </div>
    </div>
  );
};

export default Card;
