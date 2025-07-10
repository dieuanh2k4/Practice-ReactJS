import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <div>
      <p className={context.theme}>
        Wiki là một loại ứng dụng xây dựng và quản lý các trang thông tin do
        nhiều người cùng phát triển. Đặc điểm nổi bật của wiki là thông tin
        không được xây dựng một cách tập trung theo nguyên tắc phân quyền như
        thường thấy ở các ứng dụng CMS hay forum mà theo nguyên tắc phân tán: ai
        cũng có thể chỉnh sửa, thêm mới, bổ sung thông tin lên các trang tin và
        không ghi lại dấu ấn là ai đã cung cấp thông tin đó. Tác giả của wiki
        theo triết lý của những người đã xây dựng phần mềm wiki là: tác giả của
        thông tin này là chúng ta. Những trang tin như vậy được xây dựng và bổ
        sung dựa trên động lực của cộng đồng.
      </p>
    </div>
  );
}

export default Paragraph;
