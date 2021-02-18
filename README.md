## Drazah Razzle React Boilerplate
This is a little opinionated boilerplate for creating SPA client-side application with React.  You can use it to start a project or simply to watch a way to use Razzle, React Hook Form, etc.

## Motivation
This is my reusable boilerplate for a SPA. It's opinionated of course.  
- I picked Razzle over CRA because i want to customize webpack or babel without ejecting.
- React and React-Router for the core of the application.
- Axios and React Query for the communication with the database. I choose to avoid Redux because React Query is more suitable ofr the usual data-fetching with his great caching system. But, of course, Redux can easily be added to that, if the need of a complex client state system.
- i18next for the easy internationalization.
- Material Ui for the design, only because i'm not a designer and i prefer focus on reliable components but Tailwind.css should be more suitable if the design is very custom.
- Storybook for the documentation of the components. 


## Tech/framework used
 - Razzle
 - React
 - React-Router
 - React Hook Form
 - React Query
 - Axios
 - Storybook
 - i18next
 - Material UI
 

## Features
The boilerplate provide an authentication page. my API often work with a https secure cookie which contain a JWT token and this is why Axios is configured that way.  
For the structure, I prefer to have a Page folder, like in NextJS, and a sharedComponent for all the general and reusable components. I like to have a services folder too.  


## Installation
Clone the repository.   
Launch yarn install.  
Add your API url in Core/config.js

The scripts available are in packages.json. For exemple, to start the local server, you can launch "razzle start --type=spa"