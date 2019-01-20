<h2>Running Locally</h2>

1) Clone into a new directory

2) cd into said directory

3) run npm install (or yarn)

4) run npm start

<h2>Design Choices</h2>

Q) Where's your state management library??

A) I decided to opt for lifting the state up into a parent component, cause the all child components were not that deep in. Also, there were only really 2 states that were shared between sibling components so redux or mobX both seemed a little overkill. I was close to using React's improved Context API and using a Provider and Consumer pattern to manage local state, but opted against it (even that seemed overkill).

<br />

Q) When are you fetching the data?

A) Because it's static data, I'm fetching it at the beginning and caching it to save some HTTP requests.

<br />

Q) What are you using to match search queries to keywords?

A) I'm just leveraging javascripts builtin search method. In an ideal scenario, the search would be done from serverside with a more hollistic matching algorithm, but wanted to keep this app serverless for the sake of being able to host it on github pages haha.

<br />

Q) Why React?

A) To be honest, this could've been pretty well done with vanilla JS, with a modular pattern and a pub/sub model, but React by itself is super quick to set up so I figured why not?
