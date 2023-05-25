import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import Success from "./alert/Success";
import Loading from "./Loading";

export default function Main() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [points, setPoints] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [point, setPonit] = useState(10);
  const [content, setContent] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [showDialogSuccess, setShowDialogSuccess] = useState(false);

  // Gọi api hiển thị danh sách feedback
  const loadData = async () => {
    setShowLoading(true);
    await axios
      .get("http://localhost:8000/api/v1/feedbacks")
      .then((res) => {
        setFeedbacks(res.data);
        setTotalFeedback(res.data.data.length);
      })
      .catch((err) => console.log(err));
    setShowLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Xóa một feedback theo id
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/v1/feedbacks/${id}`)
      .then((res) => {
        if (res.data.status === "OK") {
          loadData();
          setTimeout(() => {
            setShowDialogSuccess(true);
          }, 200);
        }
      })
      .catch((err) => console.log(err));
  };

  // Đóng dialog xóa thành công
  const closeDialogSuccess = () => {
    setShowDialogSuccess(false);
  };

  // Lấy độ dài của danh sách dữ liệu
  let lengthData = feedbacks.data?.length;

  // Tình điểm trung bình
  const handleTotalAVG = () => {
    const reduce = feedbacks.data?.reduce(
      (total, feedback) => feedback.Points + total,
      0
    );
    return reduce / lengthData || 0;
  };

  // Lấy point
  const getPointValue = (value) => {
    setPonit(value);
  };

  const newFeedback = {
    Content: content,
    Points: point,
  };

  const handleSubmit = () => {
    console.log(newFeedback);
    axios
      .post("http://localhost:8000/api/v1/feedbacks/", newFeedback)
      .then((res) => {
        console.log(res.data);
        setContent("");
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {showDialogSuccess ? <Success /> : <></>}

      {showLoading ? <Loading /> : <></>}
      <div className="main">
        <div className="main-header">
          <div className="form">
            <div className="form-header">Thầy Phú dạy có hay không?</div>
            <div className="form-body">
              {points.map((pointValue, index) => (
                <button
                  className={` btn ${point === pointValue ? "active" : ""}`}
                  onClick={() => getPointValue(pointValue)}
                >
                  {pointValue}
                </button>
              ))}
            </div>
            <div className="form-input">
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nhập nhận xét..."
                className="form-input"
                type="text"
              />
              <button onClick={handleSubmit} className="btn-send">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="total">{totalFeedback} reviews</div>
          <div className="rate">Average Rating: {handleTotalAVG()}</div>
        </div>
        <div className="feedback-container">
          {/* feedback */}
          {feedbacks.data?.map((feedback) => (
            <div className="feedback" key={feedback.FeedbackId}>
              <div className="feedback-header">
                <div className="point">{feedback.Points}</div>
                <div className="feedback-header-right">
                  <div className="edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div
                    className="delete"
                    onClick={() => handleDelete(feedback.FeedbackId)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
              <div className="feedback-body">{feedback.Content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
