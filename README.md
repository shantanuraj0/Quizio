![](Quizio.png)

<br>
<br>

# Things to do before running the Quizio
- #### add mongoDB URI(either local or server) in db-config.js file
- #### add Your web app's Firebase configuration credentials in .env file
- #### add these emailJs credentials 'YOUR_SERVICE_ID' , 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' in ContactComponent.js file 

<br>
<br>

# Steps to run the Quizio:

-  #### Open a terminal with the path set to the root directory of the project (i.e quiz directory) 
     - ####   Then run *npm install* command to install the necessary packages for frontend part.
-   #### Then with the path set to the backend directory of the project 
     - ####  Then run *npm install command* to install the required packages for backend part.
- #### After successful installation of all packages
     - #### Then run command *npm start* in the terminal with the path set to the root directory and wait for the Quizio to initiate.

<br>
<br>


# The Commands to interact with the Quizio for attempting the Quiz Via Microphone Module.
   - #### Press space : &emsp; to turn the microphone on.
   
     ####  Commands :
     
   - ##### Instructions: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To listen to all the possible commands.
   - ##### start Quiz or title:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;To listen the Quiz title and first Question.
   - ##### Select Option [number] or Choose Option [number]: &emsp;&emsp; To mark the option of the current Question.
   - ##### next question: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To increment the question index and move to the next question and listen it.
   - ##### previous question: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To decrement the question index and move to the previous question and listen it
   - ##### Repeat Question [Number]: &emsp;&emsp;&emsp; To listen a specific Question.
   - ##### Repeat Current Question: &emsp;&emsp;&emsp;&emsp; To repeat the current Question.
   - ##### submit quiz: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To end the quiz.


<br>
<br>



# Documents
- #### Software Requirements Specification (SRS) : [Pdf Link](https://drive.google.com/file/d/11vJ_V5VDi9joqTwcbKUWXOXA6qivwj5W/view?usp=sharing)
- #### Data Flow Diagram : [Pdf Link](https://drive.google.com/file/d/1B699xwXQUtphog503v5L32Y8wfIzT9PW/view?usp=sharing)
- #### Use Case Diagram : [Pdf Link](https://drive.google.com/file/d/10Lu-IoP6BdQ4diMesQLAB1FXbCU5Mnzs/view?usp=sharing)
- #### Testing Report : [Pdf Link](https://drive.google.com/file/d/1puGawjUtFN9vdchThQ5OIVqqvPMfyHB6/view?usp=sharing)
- #### PPT : [Pdf Link](https://docs.google.com/presentation/d/1vEz_ZfV7co0TawHrJ7OFwdUARpzL8Mul/edit?usp=sharing&ouid=105928336402650505502&rtpof=true&sd=true)

<br>
<br>


# Contributors
- #### Richa Singh : 1901157
- #### Solina Basak: 1901198
- #### Shivi Gupta : 1901190
- #### Shantanu Raj : 1901183

<br>
<br>

# Contributions
- ### Richa Singh(1901157) :
     - #### SRS Documentation
     - #### Data Flow Diagram & Use Case Diagram
     - #### Implementation ( AttemptQuiz.js , EvaluateQuiz.js,  Quizzes.js , DB.js, App.js )
     - #### Integration testing

- ### Solina Basak (1901198) :
     - #### SRS Documentation
     - #### Data Flow Diagram & Use Case Diagram
     - #### Implementation ( Home.js, OneTimeDashboard.js, UserDashboard.js, CreateQuiz.js, App.js )
     - #### System testing

- ### Shivi Gupta(1901190) :
     - #### SRS Documentation
     - #### Data Flow Diagram & Use Case Diagram
     - #### Implementation ( JoinQuiz.js,  NotFoundPage.js, LoadingScreen.js, AttemptedModal.js, CreatedSuccessfully.js )
     - #### System testing
     
- #### Shantanu Raj(190183) :
     - #### SRS Documentation
     - #### Data Flow Diagram & Use Case Diagram
     - #### Implementation (AttemptedBlindQuiz.js,  firebase.js, Users.js, DB.js, Responses.js, App.js )
     - #### Integration testing


    

