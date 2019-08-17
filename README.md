# Portfolio 2019
Built with ReactJS (create-react-app)

## Be in the right folder
Please note, the actual app is in the portfolio folder, so you will need to cd into that to run `npm install`, etc... <br />
Also at this time you can just change the data object files/photos and deploy this as is. <br />
The eventual goal is a node-based dashboard with API endpoints that feeds this portfolio

## Basic design
Below is some basic sketch design, I'm not a designer but I can build pretty much anything designed(not by me). <br />
It's supposed to be a basic side bar and main content which is a "slider" that goes through projects. <br />
It is slated to be advanced, support dynamic content from API endpoints(portfolio dashboard) and will include filtering eg. between professional/personal projects.

## Initial sketches

### basic design
Here I'm just drawing out a sketch, thinking of JSON structure
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/design-detail.jpg" alt="basic sketch of design" width="500px" height="auto">

### content slider
This is a basic portfolio object slider that will have unique data eg. unique photo slider, skill categories, etc... it's not complete as of 08/06/2019 not to mention the data is populated by placeholder files not APIs.
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/portfolio-2019-slider.jpg" alt="basic content slider" width="500px" height="auto">

## Progress updates
### 08/17/2019 - added slider/dynamic rendering of project tiles based on resolution
So I forgot to do this update, I added in a basic photo slider(changes background of photo container). It's not great(no preloader) but it works assuming you have that nice broadband/4G. <br />
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update-08-17-2019__added-photo-slider.gif" alt="basic photo slider(background image)" width="500px" height="auto">

I also added in a way to dynamically render the project tiles based on resolution, so if you scale up/down, the tiles will change in count. It is not done/should be AJAX related so it's not static but that's in the future. <br />
The tiles hiding are not rendered when the state is updated vs. hiding by CSS.
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update-08-17-2019__dynamic-project-tile-render-from-resolution.gif" alt="dynamic project tile rendering based on screen resolution" width="500px" height="auto">

### 08/06/2019 - basic content load
I have something that is usable at this point, though the data is fixed and images are not dynamic/included in repo. The content slider is also not complete yet, it has some features not implemented yet like filtering.

#### showing basic content toggling, using localStorage not initially intended but ran into a problem with state setting
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update__08-06-2019.gif" alt="desktop view showing switching state between portfolios" width="500px" height="auto">

#### showing mobile behavior with scroll/shrink it doesn't look good in the end
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update-mobile_08-06-2019.gif" alt="mobile scrolling showing intended profile card shrink animation" width="300px" height="auto">

### 08/05/2019 - basic structure, profile card filled in
I was able to build out the basic structure, ran into a problem of sharing state between a method/functional component and I ended up going backwards eg. not using a functional component for the App component. With the "old" class way I was able to update state from the bound scroll handler. Ultimately though the scroll handler thing did not turn out well as far as the resulting animation.

#### basic layout with profile card filled in
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update_08-05-2019.png" alt="basic layout with profile card filled in" width="500px" height="auto">

#### mobile view showing scroll trigger class
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update_08-05-2019.gif" alt="mobile scroll handler applying class to profile card" width="300px" height="auto">
