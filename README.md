# aconews
Assigment for Acowale machine test

## The project setup instructions.

setup part was pretty simple,

- I started by creating base directories for frontend and backend
- created new vite projectin frontend and installed necessarry tools like express

## An overview of your approach.
Once the base project was ready, I developed a base api endpoint that responses with dummy data

then in frontend I started to create the UI Components like Card, Search input, Select input and connecting the state hooks
and adding them to the main page once the UI felt complete I connected the frontend with backend once that was done

Next thing was create new firebase project, build and deploy
then I tried to use firebase functions to launch the backend but ran into some with setting up payment for blaze subscription model(firebase functions require blaze)

then I switched to AWS lambda and launched the server their along with gnews.io's api key setup and updated the frontend to fetch the data from server(launched on aws lambda)
and finally deployed the latest build of frontend on firebase
