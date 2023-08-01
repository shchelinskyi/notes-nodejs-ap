# Notes manager Api

Notes Manager  is a simple REST API built with Node.js, Express, and TypeScript. It allows users to manage notes, including creating, updating, deleting, and retrieving notes.

## Getting Started

To get started with Notes manager Api, follow the steps below:

### Prerequisites

* Node.js (version 14.0 or higher) must be installed on your machine.


### Installation

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run npm install to install all dependencies.
4. Run `npm start` to start the development server.
5. Use documentation https://cutt.ly/twsSnFPe


### Get all notes
Method GET<br>
http://localhost:3004/api/notes

### Get aggregated data statistics
Method GET<br>
http://localhost:3004/api/notes

### Get Retrieve item
Method GET<br>
http://localhost:3004/api/notes/:id

### Create a note object
Method POST <br>
http://localhost:3004/api/notes <br>
Body example <br>
  {
  "nameValue": "Testing tasks",
  "categoryValue": "Idea",
  "contentValue": "task1, task2, task3",
  "datesValue": " ",
  "archived": false
  }

### Remove item
Method DELETE<br>
http://localhost:3004/api/notes/:id

### Edit item
Method PATCH<br>
http://localhost:3004/api/notes/:id <br>
Body example <br>
{
"nameValue": "Dev mobile App for language learning",
"categoryValue": "Idea",
"contentValue": "React Native, MUI",
"datesValue": "",
"archived": false
}

