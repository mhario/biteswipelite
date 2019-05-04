BiteSwipeLite
=============
## Mark Hario
### mhar.io

Hello and thank you for stopping by! This here is a pre-MVP build for a simple and fun way to pick where to go for dinner, coffee, or drinks. 

Essentially, the idea is to shuffle the results of a Yelp query and present them individually. If something seems reasonably appealing, swipe right on it; if not, swipe left. Once a few swipe rights are saved, a winner is randomly chosen from among the results. The user will then be presented with a simple 'results' page with directions; hopefully thereby ridding one of maddening indecision.

This process will improve with time, ideally recording preferences for a user over time. I'd also like to add more options for various cuisine preferences, etc. I'm also intending there to be a 'group' feature so a few friends can choose a place together in a silly, fun way. 

More options come to mind, but for the moment I'm still building towards an MVP. My to-list is thus outlined:
* The 'result' page does not exist,
* the main menu isn't quite half*baked,
* the whole thing is ugly, (but hey, I like it.)
* improve algorithm for shuffling results
* improve error handling across the board lol
* 

I've pulled the original CRA-provided Readme content into a separate file; CRAReadme.md. Essentially all you need is one terminal with:  
`npm run start`  
and another with  
`npm run server`.  

The server acts as a proxy to Yelp and provides the token to the end user.

Thanks for stopping by and reading! Please feel free to offer any feedback or employment.

Mark Hario  
hario.mark@gmail.com
