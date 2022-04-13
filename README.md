# Things to do before running the Quizio
- #### add mongoDB URI(either local or server) in db-config.js file
- #### add Your web app's Firebase configuration credentials in .env file
- #### add these emailJs credentials 'YOUR_SERVICE_ID' , 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' in ContactComponent.js file 
- #### Build your app then copy paste all the files of public folder in frontend to the public folder of backend
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
   #### Press space : &emsp; to turn the microphone on.
   ####  Commands :
   ##### Instructions: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To listen to all the possible commands.
   ##### start Quiz or title:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;To listen the Quiz title and first Question.
   ##### Select Option [number] or Choose Option [number]: &emsp;&emsp; To mark the option of the current Question.
   ##### next question: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To increment the question index and move to the next question and listen it.
   ##### previous question: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To decrement the question index and move to the previous question and listen it
   ##### Repeat Question [Number]: &emsp;&emsp;&emsp; To listen a specific Question.
   ##### Repeat Current Question: &emsp;&emsp;&emsp;&emsp; To repeat the current Question.
   ##### submit quiz: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; To end the quiz.

