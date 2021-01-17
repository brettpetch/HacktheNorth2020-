# Senti


This app is a journaling application that allows users to journal with ease. We use [Vader Sentimant Analysis](https://github.com/vaderSentiment/vaderSentiment-js) to determine the positivity of a set of words with emoji support, then return analytics for users to see how their day went.

On the backend, we have expressjs for our API endpoint, then have a reactjs front end. This allows for our application to evolve and return the useful data to other applications.
In the future we intend to further develop this app to 

### Emoticon Support
Emoticons are a great quick indicator of whether someone had a good or bad day. By using Vader, sentimant of these icons is possible. This allows us to determine of the user has had either a good or bad experience.

### Extensible API
This api will be available to the public in the future for other applications to use our stable backbone. 

#### Requests: 
```json
{
  "c_sentence": "I feel supported by my family, I miss them. My friends, they’ve been ignoring me. It feels very lonely.",
  "h_sentence": "I used to be, but not anymore. I feel like I can’t motivate myself without others supporting me.",
  "i_sentence": "I often feel I cannot express my true emotions. I usually lock them up inside.",
  "m_sentence": "I do, but I don’t know how to reach them. They feel out of reach.",
  "e_sentence": "No. I feel like I am going with the flow and I don’t know where it’s taking me."
}
```

### Installation
Cool! Let's get started. To get the API up and running, go on over to the server folder, run npm install, then start it by doing ``node server.js``. The API will be served at 127.0.0.1:3000.

### 
