# Sentimetre

![https://raw.githubusercontent.com/brettpetch/HacktheNorth2020-/main/img/final.jpg](https://raw.githubusercontent.com/brettpetch/HacktheNorth2020-/main/img/final.jpg)

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

#### Responses: 
```json
{
    "c_score": {
        "neg": 0.29,
        "neu": 0.49,
        "pos": 0.22,
        "compound": -0.1761
    },
    "h_score": {
        "neg": 0.273,
        "neu": 0.567,
        "pos": 0.161,
        "compound": -0.3343
    },
    "i_score": {
        "neg": 0.175,
        "neu": 0.825,
        "pos": 0,
        "compound": -0.3252
    },
    "m_score": {
        "neg": 0,
        "neu": 0.827,
        "pos": 0.173,
        "compound": 0.0772
    },
    "e_score": {
        "neg": 0.124,
        "neu": 0.734,
        "pos": 0.141,
        "compound": 0.0772
    },
    "compound": -0.13623999999999997
}
```

### Installation
Cool! Let's get started. To get the API up and running

#### Server
Open up the server folder, run ``npm install``, then start it by doing ``node server.js``. The API will be served at http://127.0.0.1:3000/api/v1/response.

The API is also available from https://sudoer.dev/api/v1/response, free of charge until we get around to locking it down.

#### Front End
Make sure you've got npm installed. Use ``npm install`` from the main repository, then ``npm run build`` or ``yarn build`` for production environments. ``npm start`` or ``yarn start`` is a good way to get going in a development environment.

### Vader Sentiment Analysis
https://github.com/cjhutto/vaderSentiment

    VADER: A Parsimonious Rule-based Model for Sentiment Analysis of Social Media Text
    (by C.J. Hutto and Eric Gilbert)
    Eighth International Conference on Weblogs and Social Media (ICWSM-14). Ann Arbor, MI, June 2014.
