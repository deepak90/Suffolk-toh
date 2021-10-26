# Suffolk-toh
Angular has a Tour of Heroes tutorial which goes through the development of a prototypical app.  Here is a link to the tutorial: https://angular.io/tutorial.  At Suffolk, buildings are our heroes so we’ve made a couple of changes.  Specifically, went to the last part of the tutorial(https://angular.io/tutorial/toh-pt6), we downloaded the files for the finished project (https://angular.io/generated/zips/toh-pt6/toh-pt6.zip), and put them in this repository as the initial commit.  We then updated 2 files to move from hero names to building names and to add sample cost and area data: 

1. **hero.ts** added 2 new fields to the Hero type, cost and area (both are numbers and represent the cost in dollars and the area in square feet)
2. **in-memory-data.service.ts** changed names from hero names to building names.  Added cost and area info for the buildings.

We immediately liked the changes but we’d like to take it further and we’d like some help.  Here’s what we have in mind:

1. The app currently has no Suffolk branding and we haven’t changed the UI at all to show the additional data of cost and area.  Please update the app to reflect Suffolk branding.  Also, please change the list view (/heroes) to display cost along with building name.
2. The dashboard currently displays by position in the list.  Our users care deeply about cost and cost per square foot.  Please change it so the dashboard shows the top 4 building by cost, and add a the total cost as well as the cost/square foot to the four buildings displayed.

If you'd like to help us and be considered for joining our team, please clone this repo, make your changes on a branch, and submit a pull request when you're ready for us to look at them. We value team work at Suffolk, so please reach out if you have any questions.  We welcome feedback about the structure of this exercise too. Your best bet is to email any questions and feedback you have to Dave, Michael, and Kian (drolin@suffolk.com, mcarr@suffolk.com, kkenahan@suffolk.com).  

Good luck and Happy coding!
