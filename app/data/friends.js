var friendsData = [
  {
      "name":"Mario",
      "photo":"https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
      },
  {
  "name":"Yoda",
  "photo":"https://upload.wikimedia.org/wikipedia/en/6/6f/Yoda_Attack_of_the_Clones.png",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Peach",
  "photo":"https://upload.wikimedia.org/wikipedia/en/d/d5/Peach_%28Super_Mario_3D_World%29.png",
  "scores":[
     9,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Darth Vader",
  "photo":"https://vignette3.wikia.nocookie.net/starwars/images/3/37/Vader_TFU.jpg/revision/latest/scale-to-width-down/210?cb=20081111171655",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Luigi",
  "photo":"https://www.mariowiki.com/images/thumb/5/5c/Luigi_MP10.png/150px-Luigi_MP10.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Archer",
  "photo":"https://img.buzzfeed.com/buzzfeed-static/static/2016-03/18/17/enhanced/webdr04/enhanced-21194-1458335393-5.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Morty",
  "photo":"http://img1.wikia.nocookie.net/__cb20140116010409/rickandmorty/images/e/e8/Morty.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Ragnar",
  "photo":"https://staticdelivery.nexusmods.com/mods/110/images/77611-9-1470233288.gif",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Ken",
  "photo":"https://upload.wikimedia.org/wikipedia/en/a/a5/Ken_Masters.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
},
{
  "name":"Ryu",
  "photo":"https://upload.wikimedia.org/wikipedia/en/e/e5/Ryu_TvC.png",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
}
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;


// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.