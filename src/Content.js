import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";

// I. CALL API
//  1. useEffect(callback)
//      - gọi callback mỗi khi component re-render
//      - gọi callback sau khi component thêm element vào DOM
//  2. useEffect(callback, [])
//      - chỉ gọi callback 1 lần sau khi component mounted
//  3. useEffect(callback, [deps])
//      - callback sẽ được gọi lại mỗi khi deps thay đổi
// ------------------
// 1. callback luôn được gọi sau khi component mounted
// 2. cleanup function luôn được gọi khi unmounted
// 3. cleanup function luôn được gọi trước khi callback được gọi (trừ khi mounted)
// ------------------

// // call API, hiện ra title của từng mục
// const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
// function Content() {
//   const [title, setTitle] = useState("");
//   const [data, setData] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) {
//         setShowGoToTop(true);
//       } else {
//         setShowGoToTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // clean function
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setType(tab)}
//           style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
//         >
//           {tab}
//         </button>
//       ))}
//       {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}

//       {data.map((data) => (
//         <li key={data.id}>{data.title || data.name}</li>
//       ))}
//       {showGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20,
//           }}
//         >
//           Go to Top
//         </button>
//       )}
//     </div>
//   );
// }

// // hiện ra kích thước chiều ngang mành hình mỗi khi thay đổi
// function Content() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // cleanup function
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   );
// }

// // làm đồng hồ đếm ngược
// function Content() {
//   const [countdown, setCountdown] = useState(180);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCountdown(countdown - 1);
//   //   }, 1000);
//   // }, [countdown]);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setCountdown((prev) => prev - 1);
//       console.log("Countdown");
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, []);

//   return (
//     <div>
//       <h1>{countdown}</h1>
//     </div>
//   );
// }

// // chọn avatar
// function Content() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {
//     // cleanup
//     return () => {
//       avatar && URL.revokeObjectURL(avatar.preview);
//     };
//   }, [avatar]);

//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvatar} />
//       {avatar && <img src={avatar.preview} alt="" width="80%" />}
//     </div>
//   );
// }

const lessons = [
  {
    id: 1,
    name: "Lesson 1",
  },
  {
    id: 2,
    name: "Lesson 2",
  },
  {
    id: 3,
    name: "Lesson 3",
  },
];
function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
