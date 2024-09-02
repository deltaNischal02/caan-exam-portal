const quizzes = [
    {
      id: 'general-knowledge',  // Change ID to match the URL parameter
      title: 'General Knowledge Quiz',
      difficulty: 'Easy',
      questions: [
        {
          id: 1,
          questionText: 'What is the capital of France?',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Rome' },
            { id: 4, text: 'Berlin' },
          ],
          correctOptionId: 1,
        },
        {
          id: 2,
          questionText: 'Which planet is known as the Red Planet?',
          options: [
            { id: 1, text: 'Earth' },
            { id: 2, text: 'Mars' },
            { id: 3, text: 'Jupiter' },
            { id: 4, text: 'Saturn' },
          ],
          correctOptionId: 2,
        },
        {
            id: 3,
            questionText: 'What is my name?',
            options: [
              { id: 1, text: 'nischal  ' },
              { id: 2, text: 'nis' },
              { id: 3, text: 'nanna' },
              { id: 4, text: 'lalla' },
            ],
            correctOptionId: 1,
          }
        // Add more questions as needed
      ],
    },
    {
      id: 'general-knowledge',  // Change ID to match the URL parameter
      title: 'General Knowledge Quiz',
      difficulty: 'Medium',
      questions: [
        {
          id: 1,
          questionText: 'What is the capital of nepal?',
          options: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Rome' },
            { id: 4, text: 'Berlin' },
          ],
          correctOptionId: 1,
        },
        {
          id: 2,
          questionText: 'Which planet is known as the Red Planet?',
          options: [
            { id: 1, text: 'Earth' },
            { id: 2, text: 'Mars' },
            { id: 3, text: 'Jupiter' },
            { id: 4, text: 'Saturn' },
          ],
          correctOptionId: 2,
        },
        {
            id: 3,
            questionText: 'What is my name?',
            options: [
              { id: 1, text: 'nischal  ' },
              { id: 2, text: 'nis' },
              { id: 3, text: 'nanna' },
              { id: 4, text: 'lalla' },
            ],
            correctOptionId: 1,
          }
        // Add more questions as needed
      ],
    },
    // Add more quizzes as needed
    {
      id: 'caan-rules',
      title: 'CAAN Rules and Regulations',
      questions: [
        // Your questions here
        {
          id: 1,
          questionText: 'What is the principal objective of Rescue and Fire Fighting Services (RFFS)?',
          options: [
            { id: 1, text: 'To maintain airport security' },
            { id: 2, text: 'To save lives in the event of an aircraft accident or incident' },
            { id: 3, text: 'To manage air traffic' },
            { id: 4, text: 'To monitor airport operations' },
          ],
          correctOptionId: 2,
        },
      ],
      
    },
    {
      id: 'training-courses',
      title: 'Training Courses',
      questions: [
        {
          id: 1,
          questionText: 'What is the principal objective of Rescue and Fire Fighting Services (RFFS)?',
          options: [
            { id: 1, text: 'To maintain airport security' },
            { id: 2, text: 'To save lives in the event of an aircraft accident or incident' },
            { id: 3, text: 'To manage air traffic' },
            { id: 4, text: 'To monitor airport operations' },
          ],
          correctOptionId: 2,
        },
        {
          id: 2,
          questionText: 'How long should RFFS be provided after the last aircraft departs?',
          options: [
            { id: 1, text: '10 minutes' },
            { id: 2, text: '15 minutes' },
            { id: 3, text: '30 minutes' },
            { id: 4, text: '1 hour' },
          ],
          correctOptionId: 2,
        },
        {
          id: 3,
          questionText: 'What should the level of RFFS be commensurate with?',
          options: [
            { id: 1, text: 'The size of the airport' },
            { id: 2, text: 'The number of passengers' },
            { id: 3, text: 'The size of aircraft using the airport' },
            { id: 4, text: 'The airport budget' },
          ],
          correctOptionId: 3,
        },
        {
          id: 4,
          questionText: 'Which organization’s standards does the RFFS in Nepal adhere to?',
          options: [
            { id: 1, text: 'United Nations' },
            { id: 2, text: 'European Union Aviation Safety Agency (EASA)' },
            { id: 3, text: 'Federal Aviation Administration (FAA)' },
            { id: 4, text: 'International Civil Aviation Organization (ICAO)' },
          ],
          correctOptionId: 4,
        },
        {
          id: 5,
          questionText: 'Which of the following is excluded from the RFFS requirements?',
          options: [
            { id: 1, text: 'Aircraft fires' },
            { id: 2, text: 'Runway incidents' },
            { id: 3, text: 'Building fires' },
            { id: 4, text: 'Emergency landings' },
          ],
          correctOptionId: 3,
        },
        {
          id: 6,
          questionText: 'Who is responsible for organizing, equipping, staffing, and training the RFFS?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The fire department' },
            { id: 3, text: 'Airport Civil Aviation offices under the Civil Aviation Authority of Nepal' },
            { id: 4, text: 'Local government' },
          ],
          correctOptionId: 3,
        },
        {
          id: 7,
          questionText: 'What should be described in the Aerodrome Manual?',
          options: [
            { id: 1, text: 'Flight schedules' },
            { id: 2, text: 'Passenger handling procedures' },
            { id: 3, text: 'Policies and procedures relating to the provision and management of the RFFS' },
            { id: 4, text: 'Baggage handling procedures' },
          ],
          correctOptionId: 3,
        },
        {
          id: 8,
          questionText: 'Where should information about the scale/level of protection provided by airports be made available?',
          options: [
            { id: 1, text: 'On the airport\'s website' },
            { id: 2, text: 'In the Aeronautical Information Publication (AIP) of Nepal' },
            { id: 3, text: 'In the airport\'s operations manual' },
            { id: 4, text: 'In the airport\'s annual report' },
          ],
          correctOptionId: 2,
        },
        {
          id: 9,
          questionText: 'What is the role of the chief of the fire station in daily operations?',
          options: [
            { id: 1, text: 'To handle airport finances' },
            { id: 2, text: 'To prepare and implement daily station routines and Standard Operating Procedures (SOP)' },
            { id: 3, text: 'To manage passenger flow' },
            { id: 4, text: 'To oversee air traffic control' },
          ],
          correctOptionId: 2,
        },
        {
          id: 10,
          questionText: 'What must all RFF personnel assume at all times?',
          options: [
            { id: 1, text: 'That the airport is secure' },
            { id: 2, text: 'That all flights are on time' },
            { id: 3, text: 'The possibility of and need for extinguishing fires during aircraft operations' },
            { id: 4, text: 'That the weather will be favorable' },
          ],
          correctOptionId: 3,
        },
        {
          id: 11,
          questionText: 'What is the principal extinguishing agent used by the RFFS?',
          options: [
            { id: 1, text: 'Water' },
            { id: 2, text: 'Sand' },
            { id: 3, text: 'Foam mixed with water' },
            { id: 4, text: 'Carbon dioxide' },
          ],
          correctOptionId: 3,
        },
        {
          id: 12,
          questionText: 'What is the first step in the event of an aircraft accident or incident?',
          options: [
            { id: 1, text: 'Notify the media' },
            { id: 2, text: 'Activate the airport security' },
            { id: 3, text: 'The RFFS should be deployed rapidly and effectively' },
            { id: 4, text: 'Alert the passengers' },
          ],
          correctOptionId: 3,
        },
        {
          id: 13,
          questionText: 'Who approves amendments to the RFFS manual?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The Director General of the Civil Aviation Authority of Nepal' },
            { id: 3, text: 'The chief of the fire station' },
            { id: 4, text: 'The local government' },
          ],
          correctOptionId: 2,
        },
        {
          id: 14,
          questionText: 'What should be done if any provisions of the RFFS manual contradict the Airport Emergency Plan (AEP)?',
          options: [
            { id: 1, text: 'The provisions of the RFFS manual shall prevail' },
            { id: 2, text: 'The provisions of the AEP shall prevail' },
            { id: 3, text: 'The airport management will decide' },
            { id: 4, text: 'The local government will intervene' },
          ],
          correctOptionId: 2,
        },
        {
          id: 15,
          questionText: 'What should be included in the grid map provided by the RFFS?',
          options: [
            { id: 1, text: 'Flight schedules' },
            { id: 2, text: 'Restaurant locations' },
            { id: 3, text: 'Topography, access roads, and location of water supplies' },
            { id: 4, text: 'Passenger check-in counters' },
          ],
          correctOptionId: 3,
        },
        {
          id: 16,
          questionText: 'Who is responsible for ensuring the RFFS is organized, equipped, staffed, and trained?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'Local government' },
            { id: 3, text: 'Airport Civil Aviation offices under the Civil Aviation Authority of Nepal' },
            { id: 4, text: 'The fire department' },
          ],
          correctOptionId: 3,
        },
        {
          id: 17,
          questionText: 'What is the minimum response time the RFFS should aim to achieve?',
          options: [
            { id: 1, text: '1 minute' },
            { id: 2, text: '2 minutes' },
            { id: 3, text: '5 minutes' },
            { id: 4, text: '10 minutes' },
          ],
          correctOptionId: 2,
        },
        {
          id: 18,
          questionText: 'How often should the RFFS manual be reviewed?',
          options: [
            { id: 1, text: 'Monthly' },
            { id: 2, text: 'Every two years' },
            { id: 3, text: 'Annually' },
            { id: 4, text: 'Every six months' },
          ],
          correctOptionId: 3,
        },
        {
          id: 19,
          questionText: 'Who is responsible for preparing and implementing daily station routines and SOPs at the fire station?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The air traffic controller' },
            { id: 3, text: 'The chief of the fire station' },
            { id: 4, text: 'The security personnel' },
          ],
          correctOptionId: 3,
        },
        {
          id: 20,
          questionText: 'What is the responsibility of the Airport Civil Aviation Office regarding RFFS?',
          options: [
            { id: 1, text: 'To provide in-flight services' },
            { id: 2, text: 'To ensure the RFFS is organized, equipped, trained, and operated' },
            { id: 3, text: 'To handle baggage claims' },
            { id: 4, text: 'To manage airport parking' },
          ],
          correctOptionId: 2,
        },
        {
          id: 21,
          questionText: 'What should the RFFS personnel consider at all times according to the manual?',
          options: [
            { id: 1, text: 'Weather conditions' },
            { id: 2, text: 'Passenger comfort' },
            { id: 3, text: 'The possibility of fire during aircraft operations' },
            { id: 4, text: 'Airport cleanliness' },
          ],
          correctOptionId: 3,
        },
        {
          id: 22,
          questionText: 'What kind of map should the RFFS have for the airport?',
          options: [
            { id: 1, text: 'A tourist map' },
            { id: 2, text: 'A weather map' },
            { id: 3, text: 'A grid map' },
            { id: 4, text: 'A shopping directory' },
          ],
          correctOptionId: 3,
        },
        {
          id: 23,
          questionText: 'What kind of emergencies is the RFFS primarily concerned with?',
          options: [
            { id: 1, text: 'Medical emergencies' },
            { id: 2, text: 'Power outages' },
            { id: 3, text: 'Aircraft-related emergencies' },
            { id: 4, text: 'Lost luggage' },
          ],
          correctOptionId: 3,
        },
        {
          id: 24,
          questionText: 'Which of the following is a key responsibility of the RFFS?',
          options: [
            { id: 1, text: 'Checking passports' },
            { id: 2, text: 'Handling baggage' },
            { id: 3, text: 'Extinguishing fires' },
            { id: 4, text: 'Selling tickets' },
          ],
          correctOptionId: 3,
        },
        {
          id: 25,
          questionText: 'What does RFFS stand for?',
          options: [
            { id: 1, text: 'Regional Flight Frequency System' },
            { id: 2, text: 'Rescue and Fire Fighting Service' },
            { id: 3, text: 'Runway Flight Facilitation Service' },
            { id: 4, text: 'Radio Frequency Fire Service' },
          ],
          correctOptionId: 2,
        },
        {
          id: 26,
          questionText: 'What should the response time of the RFFS be under optimal conditions?',
          options: [
            { id: 1, text: '10 minutes' },
            { id: 2, text: '5 minutes' },
            { id: 3, text: '2 minutes' },
            { id: 4, text: '15 minutes' },
          ],
          correctOptionId: 3,
        },
        {
          id: 27,
          questionText: 'Who needs to coordinate with mutual aid agencies during an emergency?',
          options: [
            { id: 1, text: 'The airport’s customer service' },
            { id: 2, text: 'The fire chief' },
            { id: 3, text: 'The air traffic controller' },
            { id: 4, text: 'The airport’s cleaning staff' },
          ],
          correctOptionId: 2,
        },
        {
          id: 28,
          questionText: 'What is a key component of the RFFS’s equipment?',
          options: [
            { id: 1, text: 'Gardening tools' },
            { id: 2, text: 'Passenger seating charts' },
            { id: 3, text: 'Fire extinguishing agents' },
            { id: 4, text: 'Office supplies' },
          ],
          correctOptionId: 3,
        },
        {
          id: 29,
          questionText: 'What is the legal enforcement behind the RFFS manual?',
          options: [
            { id: 1, text: 'Local government policies' },
            { id: 2, text: 'Airport management guidelines' },
            { id: 3, text: 'International Civil Aviation Organization (ICAO) standards' },
            { id: 4, text: 'Airline operational procedures' },
          ],
          correctOptionId: 3,
        },
        {
          id: 30,
          questionText: 'What kind of clothing should RFF personnel wear during operations?',
          options: [
            { id: 1, text: 'Casual wear' },
            { id: 2, text: 'Formal uniforms' },
            { id: 3, text: 'Protective clothing' },
            { id: 4, text: 'Sports gear' },
          ],
          correctOptionId: 3,
        },
        
      ],
    },
    
];
export default quizzes;