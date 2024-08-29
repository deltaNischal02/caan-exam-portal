import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card"; // Adjust the path if necessary
import Modal from "../components/Modal"; // Import your custom Modal component
import ProgressBar from "../components/ProgressBar";

const TopicsSelectionPageWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const ConfigSection = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const FilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Space between the cards */
  margin-top: -5rem;
  padding: 10rem;
  border: 3px solid black; //remove when required
  // height:50rem;
  // width:50rem;
`;

const PaginationWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectWrapper = styled.div`
  margin-top: 2rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const StartButton = styled.button`
  margin: 1rem;
  color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 8px 20px;
    font-size: 17px;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.4s ease;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px; /* Rounded corners */
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

  &:hover {
    background-color: white;
    color:blue;
    border-color:blue;
  }
`;

const TopicsSelectionPage = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  // Sample Data
  const topics = {
    "general-knowledge": [
      {
        id: "history",
        title: "History",
        description: "Test your knowledge of historical events.",
        icon: "📜",
        category: "History",
        imageurl: "history.jpg",
        resources: [{ name: "Resource 1", link: "#", type: "PDF" }],
      },
      {
        id: "geography",
        title: "Geography",
        description: "Explore the world with geography quizzes.",
        icon: "🌍",
        category: "Geography",
        imageurl: "geography.jpg",
        resources: [{ name: "Resource 2", link: "#", type: "Video" }],
      },
      {
        id: "history",
        title: "History",
        description: "Test your knowledge of historical events.",
        icon: "📜",
        category: "History",
        imageurl: "history.jpg",
        resources: [{ name: "Resource 1", link: "#", type: "PDF" }],
      },
      {
        id: "geography",
        title: "Geography",
        description: "Explore the world with geography quizzes.",
        icon: "🌍",
        category: "Geography",
        imageurl: "geography.jpg",
        resources: [{ name: "Resource 2", link: "#", type: "Video" }],
      },
      {
        id: "history",
        title: "History",
        description: "Test your knowledge of historical events.",
        icon: "📜",
        category: "History",
        imageurl: "history.jpg",
        resources: [{ name: "Resource 1", link: "#", type: "PDF" }],
      },
    ],
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Title");
  const [currentPage, setCurrentPage] = useState(1);
  const [topicsPerPage] = useState(10);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [difficulty, setDifficulty] = useState("Easy");
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [quizDuration, setQuizDuration] = useState(30);

  const filteredTopics = topics[quizId]?.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || topic.category === selectedCategory)
  );

  const sortedTopics = filteredTopics?.sort((a, b) => {
    if (sortOption === "Title") return a.title.localeCompare(b.title);
    return 0;
  });

  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = sortedTopics?.slice(
    indexOfFirstTopic,
    indexOfLastTopic
  );

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const handleStartQuiz = () => {
    if (selectedTopic) {
      navigate(`/quiz/${quizId}/${selectedTopic}`, {
        state: {
          difficulty,
          numberOfQuestions,
          quizDuration,
        },
      });
    }
  };

  return (
    <TopicsSelectionPageWrapper>
      <ConfigSection>
        <h2>Progress Bar</h2>
        <ProgressBar />
        <h2>Configure Your Quiz</h2>
        {selectedTopic && (
          <div>
            <p>
              <strong>Selected Topic:</strong>{" "}
              {
                topics[quizId]?.find((topic) => topic.id === selectedTopic)
                  ?.title
              }
            </p>
            <SelectWrapper>
              <Select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Select>
              <Select
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(e.target.value)}
              >
                {[5, 10, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} Questions
                  </option>
                ))}
              </Select>
              <Select
                value={quizDuration}
                onChange={(e) => setQuizDuration(e.target.value)}
              >
                {[15, 30, 45, 60].map((num) => (
                  <option key={num} value={num}>
                    {num} Minutes
                  </option>
                ))}
              </Select>
            </SelectWrapper>
            <StartButton onClick={handleStartQuiz}>Start Quiz</StartButton>
          </div>
        )}
      </ConfigSection>
      <MainContent>
        <h1>SELECT TOPIC FOR {quizId.replace("-", " ").toUpperCase()}</h1>

        {/* Search Bar */}
        <SearchBar
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filters and Sorting */}
        <FilterSortWrapper>
          <div>
            <FilterButton onClick={() => setSelectedCategory("All")}>
              All
            </FilterButton>
            <FilterButton onClick={() => setSelectedCategory("History")}>
              History
            </FilterButton>
            <FilterButton onClick={() => setSelectedCategory("Geography")}>
              Geography
            </FilterButton>
          </div>
          <SortSelect
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Title">Sort by Title</option>
          </SortSelect>
        </FilterSortWrapper>

        {/* Cards Container */}
        <CardsContainer>
          {currentTopics?.map((topic) => (
            <Card
              key={topic.id}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleTopicSelect(topic.id)}
              titleFontSize="1rem"
              descriptionFontSize="0.8rem"
              iconFontSize="1.2rem"
            />
          )) || <p>No topics available</p>}
        </CardsContainer>

        {/* Pagination */}
        <PaginationWrapper>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </PaginationButton>
          <PaginationButton onClick={() => setCurrentPage((prev) => prev + 1)}>
            Next
          </PaginationButton>
        </PaginationWrapper>
      </MainContent>
    </TopicsSelectionPageWrapper>
  );
};

export default TopicsSelectionPage;
