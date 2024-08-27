
import React, { useState } from "react";
import styled from "styled-components";
import { FaDownload, FaSearch, FaFilter } from "react-icons/fa";
import Modal from "../components/Modal"; // We'll create a reusable Modal component

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f4f6f8;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

const SearchFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  .search-input {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }

  .filter-select {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    select {
      border: none;
      outline: none;
      font-size: 1rem;
      margin-left: 0.5rem;
      background-color: transparent;
    }
  }
`;

const MaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const MaterialCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .image-container {
    width: 100%;
    height: 180px;
    background-image: url(${(props) => props.imageurl});
    background-size: cover;
    background-position: center;
  }

  .content {
    padding: 1rem;

    h3 {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: #666;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tags {
      margin-top: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      span {
        background-color: #e0e7ff;
        color: #3f51b5;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.85rem;
      }
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const trainingMaterials = [
  {
    id: 1,
    title: "Fire Safety Training",
    topic: "Safety",
    description: "Learn the essential protocols and procedures to ensure fire safety in the workplace.",
    imageurl: "/images/fire-safety.jpg",
    resources: [
      { name: "Guide Document", link: "#", type: "PDF" },
      { name: "Instructional Video", link: "#", type: "Video" },
    ],
  },
  {
    id: 2,
    title: "Aircraft Handling Procedures",
    topic: "Operations",
    description: "Detailed procedures and best practices for efficient aircraft handling.",
    imageurl: "/images/aircraft-handling.jpg",
    resources: [
      { name: "Procedure Manual", link: "#", type: "PDF" },
      { name: "Checklist", link: "#", type: "Document" },
    ],
  },
  {
    id: 3,
    title: "Customer Service Excellence",
    topic: "Customer Service",
    description: "Strategies and techniques to provide outstanding customer service.",
    imageurl: "/images/customer-service.jpg",
    resources: [
      { name: "Training Slides", link: "#", type: "Presentation" },
     { name: "Role-play Scenarios", link: "#", type: "Document" },
    ],
  },
  {
    id: 4,
    title: "Customer Service Excellence",
    topic: "Customer Service",
    description: "Strategies and techniques to provide outstanding customer service.",
    imageurl: "/images/customer-service.jpg",
    resources: [
      { name: "Training Slides", link: "#", type: "Presentation" },
      { name: "Role-play Scenarios", link: "#", type: "Document" },
    ],
  },
  // Add more materials as needed
];

const TrainingMaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTopic, setFilterTopic] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleCardClick = (material) => {
    setSelectedMaterial(material);
  };

  const closeModal = () => {
    setSelectedMaterial(null);
  };

  const filteredMaterials = trainingMaterials.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterTopic ? material.topic === filterTopic : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <PageWrapper>
      <Header>
        <h1>Training Materials</h1>
      </Header>

      <SearchFilterBar>
        <div className="search-input">
          <FaSearch color="#888" />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-select">
          <FaFilter color="#888" />
          <select value={filterTopic} onChange={(e) => setFilterTopic(e.target.value)}>
            <option value="">All Topics</option>
            <option value="Safety">Safety</option>
            <option value="Operations">Operations</option>
            <option value="Customer Service">Customer Service</option>
            {/* Add more topics as needed */}
          </select>
        </div>
      </SearchFilterBar>

      {filteredMaterials.length > 0 ? (
        <MaterialsGrid>
          {filteredMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              imageurl={material.imageurl}
              onClick={() => handleCardClick(material)}
            >
              <div className="image-container" />
              <div className="content">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <div className="tags">
                  <span>{material.topic}</span>
                </div>
              </div>
            </MaterialCard>
          ))}
        </MaterialsGrid>
      ) : (
        <NoResults>No materials found matching your criteria.</NoResults>
      )}

      {selectedMaterial && (
        <Modal onClose={closeModal}>
          <h2>{selectedMaterial.title}</h2>
          <img src={selectedMaterial.imageurl} alt={selectedMaterial.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
          <p>{selectedMaterial.description}</p>
          <h3>Resources:</h3>
          <ul>
            {selectedMaterial.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.name} ({resource.type})
                </a>
              </li>
            ))}
          </ul>
          <button onClick={closeModal} style={{ marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#3f51b5", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Close
          </button>
        </Modal>
      )}
    </PageWrapper>
  );
};

export default TrainingMaterialsPage;
