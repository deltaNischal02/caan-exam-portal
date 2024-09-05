import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card"; // Adjust the path if necessary
import Modal from "../components/Modal"; // Import your custom Modal component
import ProgressBar from "../components/ProgressBar";

const TopicsSelectionPageWrapper = styled.div`
  padding: 2rem;
  gap: 2rem;
  position: relative;
`;

const DetailSection = styled.div`
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0rem;
  height: 100vh;
  width: 22%;
  // overflow-x: auto;
  // border: 1px solid purple;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 2px solid red;
  position: absolute;
  top: 0;
  right: 2rem;
  left: calc(25%);
  width: 70%;
  height:100vh;
  padding: 2rem;
  flex: 3;
  
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
  // margin-top: -5rem;
  // padding: 10rem;
  // border: 3px solid black; //remove when required
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

const ConfigSection = styled.div`
  
  border-bottom:1px solid purple;
  
`;

const SelectWrapper = styled.div`
  // margin-top: 2rem;
  
`;
const ProgressBarWrapper = styled.div`
  border-bottom: 1px solid purple;
`;

const Select = styled.select`
  padding: 0.2rem;
  margin-right: 1rem;
  border-radius: 8px;
  border: 1px solid purple;
  font-size: small;
`;

const StartButton = styled.button`
  margin: 1rem 0rem 1rem 3rem;
  color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 5px 10px;
    font-size: 15px;
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
      { id: "history", title: "History", category: "History",description: "Test your knowledge of historical events.",icon: "📜" },
      { id: "geography", title: "Geography", category: "Geography",description: "Test your knowledge of historical events.",icon: "📜" },
    ],
    "training-courses": [
      { id: "chapter-one", title: "ARFFS Chapter 1-ARFFS", category: "ARFFS",description: "Test your knowledge of historical events." ,icon: "📜",},
      { id: "chapter-two", title: "ARFFS Chapter 2-DEFINATION", category: "DEFINATION",description: "Test your knowledge of historical events.",icon: "📜", },
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
  const [categories, setCategories] = useState([]);

// dyanamically extract categoreis
  useEffect(() => {
    if (topics[quizId]) {
      // Dynamically extract categories from the topics data for the current quiz
      const uniqueCategories = [
        "All",
        ...new Set(topics[quizId].map((topic) => topic.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [quizId]);


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
        <DetailSection>
      
        <ProgressBarWrapper>
          

        <h2>Progress Bar</h2>
        <ProgressBar />
        
        </ProgressBarWrapper>
        <ConfigSection>
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
      </DetailSection>
      <MainContent>
        <h1>SELECT TOPIC FOR {quizId.replace("-", " ").toUpperCase()}</h1>

        {/* Search Bar */}
        <SearchBar
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

         {/* Dynamic Filters and Sorting */}
         <FilterSortWrapper>
          <div>
            {categories.map((category) => (
              <FilterButton
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
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
