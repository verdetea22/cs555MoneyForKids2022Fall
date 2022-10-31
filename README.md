# cs555MoneyForKids2022Fall

## Money for Kids  
[![Money for Kids](https://circleci.com/gh/verdetea22/cs555MoneyForKids2022Fall.svg?style=svg)](https://github.com/verdetea22/cs555MoneyForKids2022Fall)
- Money for Kids is a fun, web-based application that helps children learn how to use and the value of money through different teaching modules. Parents and guardians alike can help faciliate and monitor their child's learning progress. 
- Group 11 - Belle R., Mikayla M., John C., Matthew M., Dylan J. 

## In the project directory, run npm install to install the necessary packages. then you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Create multiple choice module
1. Create a new folder in the folder src/assets/modules under the name of the new module. For example, we'll use "tax" so the new folder will be called "tax". Folder name should be lowercase.
2. Create a questions.json file. This is where the questions will be added. This should be an array for each multiple choice question. The structure of each question should be:
    1. "question" : "what is sales tax?" (This is the name of the question, currently isn't displayed)
    2. "imageSrc" : "tax/salestax.jpg" (This is the file path of the question's image)
    3. "answerChoices" : ["1%", "3%", "7.5%", "4%"] (Array of possible answers for the user. All entries should be strings)
    4. "correctAnswer" : 2 (Index of the correct answer)
3. After this, if you navigate to the page "localhost:3000/modules/module/{module name}" you should see your new module. For example, for my tax module I would navigate to "localhost:3000/modules/module/tax" to see the new module
4. For a complete example, look at the src/assets/modules/module1 for an implemented example
