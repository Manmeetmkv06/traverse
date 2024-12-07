

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/memory-form.css";

const MemoryForm = () => {
  const [formData, setFormData] = useState({ user: "", title: "", description: "" });
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user", formData.user);
    data.append("title", formData.title);
    data.append("description", formData.description);
    images.forEach((image) => data.append("images", image));

    try {
      await axios.post("http://localhost:5000/api/memories", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/memories"); // Redirect to memories page after submission
    } catch (error) {
      console.error("Error uploading memory:", error);
    }
  };

  return (
    <div className="memory-form">
      <h1>Add a New Memory</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Memory Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Memory Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="file"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemoryForm;
