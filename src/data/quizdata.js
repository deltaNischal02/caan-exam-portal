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
      difficulty:'Medium',
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
      difficulty:'Easy',
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
    {
      id: 'chapter-one-rffs',
      title: 'Airport Rescue and Fire Fighting Services',
      difficulty:'Medium',
      questions: [
        {
          id: 1,
          questionText: 'According to the RFFS manual, what factors should be reviewed annually to ensure effectiveness?',
          options: [
            { id: 1, text: 'Weather conditions and flight schedules' },
            { id: 2, text: 'Passenger satisfaction and ticket sales' },
            { id: 3, text: 'Runway maintenance and airport budget' },
            { id: 4, text: 'Stakeholder feedback and amendments to ICAO Annex-14' },
          ],
          correctOptionId: 4,
        },
        {
          id: 2,
          questionText: 'Which document prevails in case of conflict between the RFFS manual and the Airport Emergency Plan (AEP)?',
          options: [
            { id: 1, text: 'The RFFS manual' },
            { id: 2, text: 'The local government directive' },
            { id: 3, text: 'The Airport Emergency Plan (AEP)' },
            { id: 4, text: 'The airport operations manual' },
          ],
          correctOptionId: 3,
        },
        {
          id: 3,
          questionText: 'What is the role of the fire station chief in the implementation of the RFFS manual?',
          options: [
            { id: 1, text: 'To manage airport security' },
            { id: 2, text: 'To ensure daily routines and SOPs are followed' },
            { id: 3, text: 'To approve amendments to the manual' },
            { id: 4, text: 'To coordinate with mutual aid agencies' },
          ],
          correctOptionId: 2,
        },
        {
          id: 4,
          questionText: 'What kind of map is essential for the RFFS to have for effective emergency response?',
          options: [
            { id: 1, text: 'A passenger seating chart' },
            { id: 2, text: 'A topographical map' },
            { id: 3, text: 'A weather map' },
            { id: 4, text: 'A grid map showing access roads and water supplies' },
          ],
          correctOptionId: 4,
        },
        {
          id: 5,
          questionText: 'How should the response time for RFFS be evaluated?',
          options: [
            { id: 1, text: 'By comparing with other airports' },
            { id: 2, text: 'According to ICAO standards' },
            { id: 3, text: 'By the airport manager’s discretion' },
            { id: 4, text: 'Based on average passenger numbers' },
          ],
          correctOptionId: 2,
        },
        {
          id: 6,
          questionText: 'What should be the primary concern for RFFS during an aircraft fire?',
          options: [
            { id: 1, text: 'Maintaining airport cleanliness' },
            { id: 2, text: 'Ensuring the safety and survival of passengers and crew' },
            { id: 3, text: 'Protecting the aircraft from damage' },
            { id: 4, text: 'Minimizing airport downtime' },
          ],
          correctOptionId: 2,
        },
        {
          id: 7,
          questionText: 'Which international standards are used by the RFFS to assess its effectiveness?',
          options: [
            { id: 1, text: 'EASA regulations' },
            { id: 2, text: 'ISO standards' },
            { id: 3, text: 'ICAO Annex-14 and Airport Services Manual Part-1' },
            { id: 4, text: 'FAA guidelines' },
          ],
          correctOptionId: 3,
        },
        {
          id: 8,
          questionText: 'In what circumstances should the RFFS manual be amended?',
          options: [
            { id: 1, text: 'After significant incidents or when new regulations are introduced' },
            { id: 2, text: 'Every five years, regardless of changes' },
            { id: 3, text: 'When the airport’s management changes' },
            { id: 4, text: 'When requested by passengers' },
          ],
          correctOptionId: 1,
        },
        {
          id: 9,
          questionText: 'What should be included in the RFFS’s annual review?',
          options: [
            { id: 1, text: 'Passenger feedback and satisfaction' },
            { id: 2, text: 'Weather data and historical records' },
            { id: 3, text: 'Effectiveness of response times and readiness of equipment' },
            { id: 4, text: 'Staff turnover and training costs' },
          ],
          correctOptionId: 3,
        },
        {
          id: 10,
          questionText: 'What is the primary extinguishing agent used by RFFS, according to the manual?',
          options: [
            { id: 1, text: 'Foam mixed with water' },
            { id: 2, text: 'Water' },
            { id: 3, text: 'Dry chemical powder' },
            { id: 4, text: 'Carbon dioxide' },
          ],
          correctOptionId: 1,
        },
        {
          id: 11,
          questionText: 'Which document governs the organization and operation of the RFFS in Nepal?',
          options: [
            { id: 1, text: 'ICAO Annex-14, Chapter 9' },
            { id: 2, text: 'Civil Aviation Authority of Nepal Act' },
            { id: 3, text: 'The airport’s operations manual' },
            { id: 4, text: 'The airport manager’s directive' },
          ],
          correctOptionId: 1,
        },
        {
          id: 12,
          questionText: 'Who is responsible for proposing amendments to the RFFS manual?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The fire station chief' },
            { id: 3, text: 'The Civil Aviation Authority of Nepal, Aviation Fire Division/Department' },
            { id: 4, text: 'Local government' },
          ],
          correctOptionId: 3,
        },
        {
          id: 13,
          questionText: 'What is the purpose of the RFFS grid map?',
          options: [
            { id: 1, text: 'To show passenger check-in locations' },
            { id: 2, text: 'To outline the layout of airport terminals' },
            { id: 3, text: 'To indicate topography, access roads, and water supply locations' },
            { id: 4, text: 'To display weather patterns' },
          ],
          correctOptionId: 3,
        },
        {
          id: 14,
          questionText: 'Who should coordinate with mutual aid agencies during an airport emergency?',
          options: [
            { id: 1, text: 'The airport security team' },
            { id: 2, text: 'The fire station chief' },
            { id: 3, text: 'The air traffic control tower' },
            { id: 4, text: 'The airport manager' },
          ],
          correctOptionId: 2,
        },
        {
          id: 15,
          questionText: 'How often should the RFFS manual be reviewed and updated?',
          options: [
            { id: 1, text: 'Every two years' },
            { id: 2, text: 'Annually' },
            { id: 3, text: 'Every six months' },
            { id: 4, text: 'Whenever there is a change in airport management' },
          ],
          correctOptionId: 2,
        },
        {
          id: 16,
          questionText: 'What is the correct response if an RFFS facility becomes temporarily unavailable?',
          options: [
            { id: 1, text: 'Close the airport until it is resolved' },
            { id: 2, text: 'Continue operations without the facility' },
            { id: 3, text: 'Notify the Civil Aviation Authority of Nepal and reinstate the facility as quickly as possible' },
            { id: 4, text: 'Ignore the issue and proceed as usual' },
          ],
          correctOptionId: 3,
        },
        {
          id: 17,
          questionText: 'What should be done to maintain the effectiveness of the RFFS during an emergency?',
          options: [
            { id: 1, text: 'Minimize resource usage to conserve equipment' },
            { id: 2, text: 'Ensure all personnel follow the SOPs and use the correct extinguishing agents' },
            { id: 3, text: 'Allow personnel to improvise based on the situation' },
            { id: 4, text: 'Rely on mutual aid agencies' },
          ],
          correctOptionId: 2,
        },
        {
          id: 18,
          questionText: 'In what situation should the RFFS not be deployed?',
          options: [
            { id: 1, text: 'For non-aircraft related building fires' },
            { id: 2, text: 'During regular maintenance checks' },
            { id: 3, text: 'For minor runway incidents' },
            { id: 4, text: 'When there is an aircraft on the ground' },
          ],
          correctOptionId: 1,
        },
        {
          id: 19,
          questionText: 'What must be considered when deploying RFF resources to non-aircraft-related incidents?',
          options: [
            { id: 1, text: 'That it doesn’t impact airport operations' },
            { id: 2, text: 'That it does not prejudice the response objective and minimum discharge rates specified' },
            { id: 3, text: 'That it doesn’t require additional personnel' },
            { id: 4, text: 'That it is within budget constraints' },
          ],
          correctOptionId: 2,
        },
        {
          id: 20,
          questionText: 'What is a critical consideration for maintaining RFF equipment?',
          options: [
            { id: 1, text: 'Ensuring equipment is stored properly and regularly checked' },
            { id: 2, text: 'Keeping equipment hidden from public view' },
            { id: 3, text: 'Maintaining equipment only after it fails' },
            { id: 4, text: 'Using equipment only in emergencies' },
          ],
          correctOptionId: 1,
        },
        {
          id: 21,
          questionText: 'Who is responsible for daily station routines at the fire station?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The air traffic controller' },
            { id: 3, text: 'The chief of the fire station' },
            { id: 4, text: 'The airport security team' },
          ],
          correctOptionId: 3,
        },
        {
          id: 22,
          questionText: 'Which document provides the legal foundation for the RFFS in Nepal?',
          options: [
            { id: 1, text: 'Civil Aviation Act 1959' },
            { id: 2, text: 'ICAO Annex-14' },
            { id: 3, text: 'Airport Emergency Plan (AEP)' },
            { id: 4, text: 'Airport management guidelines' },
          ],
          correctOptionId: 1,
        },
        {
          id: 23,
          questionText: 'What is the function of the RFFS during an emergency?',
          options: [
            { id: 1, text: 'To manage airport parking' },
            { id: 2, text: 'To ensure the safe evacuation and rescue of passengers and crew' },
            { id: 3, text: 'To assist with baggage handling' },
            { id: 4, text: 'To coordinate with air traffic control' },
          ],
          correctOptionId: 2,
        },
        {
          id: 24,
          questionText: 'How should RFF personnel handle partially used extinguishing agents?',
          options: [
            { id: 1, text: 'Mix them with new agents' },
            { id: 2, text: 'Store them without sealing' },
            { id: 3, text: 'Dispose of them immediately' },
            { id: 4, text: 'Seal and store them properly' },
          ],
          correctOptionId: 4,
        },
        {
          id: 25,
          questionText: 'Who is responsible for ensuring that the RFFS is always ready for immediate deployment?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The fire station chief' },
            { id: 3, text: 'The local government' },
            { id: 4, text: 'The air traffic controller' },
          ],
          correctOptionId: 2,
        },
        {
          id: 26,
          questionText: 'What is the consequence of not following the RFFS manual during an emergency?',
          options: [
            { id: 1, text: 'Increased risk of injury or death' },
            { id: 2, text: 'More efficient airport operations' },
            { id: 3, text: 'Improved passenger satisfaction' },
            { id: 4, text: 'Reduced response times' },
          ],
          correctOptionId: 1,
        },
        {
          id: 27,
          questionText: 'Which of the following should be included in RFFS equipment checks?',
          options: [
            { id: 1, text: 'Fuel levels in vehicles' },
            { id: 2, text: 'Passenger manifests' },
            { id: 3, text: 'Weather patterns' },
            { id: 4, text: 'Ticket sales data' },
          ],
          correctOptionId: 1,
        },
        {
          id: 28,
          questionText: 'What should be the first step taken by RFF personnel in the event of an aircraft accident?',
          options: [
            { id: 1, text: 'Notify the media' },
            { id: 2, text: 'Deploy the RFFS rapidly and effectively' },
            { id: 3, text: 'Alert the passengers' },
            { id: 4, text: 'Activate airport security' },
          ],
          correctOptionId: 2,
        },
        {
          id: 29,
          questionText: 'Who has the authority to approve amendments to the RFFS manual?',
          options: [
            { id: 1, text: 'The airport manager' },
            { id: 2, text: 'The Director General of the Civil Aviation Authority of Nepal' },
            { id: 3, text: 'The fire station chief' },
            { id: 4, text: 'The local government' },
          ],
          correctOptionId: 2,
        },
        {
          id: 30,
          questionText: 'What should be done if a provision in the RFFS manual contradicts the AEP?',
          options: [
            { id: 1, text: 'The AEP shall prevail' },
            { id: 2, text: 'The RFFS manual shall prevail' },
            { id: 3, text: 'The airport manager decides' },
            { id: 4, text: 'The local government intervenes' },
          ],
          correctOptionId: 1,
        }
      ]
    }
    
];
export default quizzes;