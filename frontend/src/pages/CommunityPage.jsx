
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/community-page.css";

const CommunityPage = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/memories");
        setMemories(response.data);
      } catch (error) {
        console.error("Error fetching memories:", error);
      }
    };

    fetchMemories();
  }, []);

  return (
    <div className="community-page">
      <h1>Community Memories</h1>
      <Link to="/memories/new" className="add-memory-btn">
        Add Memory
      </Link>
      <div className="memory-list">
        {memories.map((memory) => (
          <div key={memory._id} className="memory-card">
            <h2>{memory.title}</h2>
            <p>{memory.description}</p>
            <p>By: {memory.user}</p>
            <div className="memory-images">
              {memory.images.map((image, index) => (
                <img key={index} src={`http://localhost:5000/${image}`} alt="Memory" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
