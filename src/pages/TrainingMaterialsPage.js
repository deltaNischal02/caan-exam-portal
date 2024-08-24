import React, { useState } from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";

const TrainingMaterialsPageWrapper = styled.div`
  padding: 2rem;
`;

const SearchBar = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 1rem;
  }

  select {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const MaterialsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const MaterialCard = styled.div`
  flex: 1 1 calc(25% - 1.5rem);
  position: relative;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    background: url(${(props) => props.imageUrl}) center/cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: brightness(0.7); /* Darken the image for better text visibility */
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 1rem;
    color: #ffffff;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .download-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #0052cc;
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #003d99;
    }
  }
`;

const TrainingMaterialsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTopic, setFilterTopic] = useState("");

  const trainingMaterials = [
    {
      id: 1,
      title: "Fire Safety Training",
      topic: "Safety",
      description: "Comprehensive guide on fire safety measures.",
      imageUrl: "/images/fire-safety.jpg",
      pdfUrl: "/downloads/fire-safety.pdf",
    },
    {
      id: 2,
      title: "Aircraft Handling Procedures",
      topic: "Operations",
      description: "Step-by-step procedures for aircraft handling.",
      imageUrl: "/images/aircraft-handling.jpg",
      pdfUrl: "/downloads/aircraft-handling.pdf",
    },
    {
      id: 3,
      title: "Emergency Evacuation Procedures",
      topic: "Safety",
      description: "Guidelines for emergency evacuation.",
      imageUrl: "/images/emergency-evacuation.jpg",
      pdfUrl: "/downloads/emergency-evacuation.pdf",
    },
    {
      id: 4,
      title: "Aircraft Maintenance Overview",
      topic: "Maintenance",
      description: "Basic principles of aircraft maintenance.",
      imageUrl: "/images/aircraft-maintenance.jpg",
      pdfUrl: "/downloads/aircraft-maintenance.pdf",
    },
    // Add more materials here
  ];

  const filteredMaterials = trainingMaterials.filter((material) => {
    return (
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterTopic === "" || material.topic === filterTopic)
    );
  });

  return (
    <TrainingMaterialsPageWrapper>
      <h1>Training Materials</h1>
      <SearchBar>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterTopic}
          onChange={(e) => setFilterTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          <option value="Safety">Safety</option>
          <option value="Operations">Operations</option>
          <option value="Maintenance">Maintenance</option>
          {/* Add more topics as needed */}
        </select>
      </SearchBar>
      <MaterialsList>
        {filteredMaterials.map((material) => (
          <MaterialCard
            key={material.id}
            imageUrl={material.imageUrl}
            onClick={() => window.open(material.pdfUrl, "_blank")} // Open PDF in new tab
          >
            <div className="content">
              <h3>{material.title}</h3>
              <p>{material.description}</p>
              <a
                href={material.pdfUrl}
                className="download-button"
                download
                onClick={(e) => e.stopPropagation()} // Prevents opening the PDF when download button is clicked
              >
                <FaDownload /> Download
              </a>
            </div>
          </MaterialCard>
        ))}
      </MaterialsList>
    </TrainingMaterialsPageWrapper>
  );
};

export default TrainingMaterialsPage;
