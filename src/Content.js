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
