# Portfolio 2019
Built with ReactJS (create-react-app)

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

### 08/06/2019 - basic content load
I have something that is usable at this point, though the data is fixed and images are not dynamic/included in repo. The content slider is also not complete yet, it has some features not implemented yet like filtering.

#### showing basic content toggling, using localStorage not initially intended but ran into a problem with state setting
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update__08-06-2019.gif" alt="desktop view showing switching state between portfolios" width="500px" height="auto">

#### showing mobile behavior with scroll/shrink it doesn't look good in the end
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update-mobile_08-06-2019.gif" alt="mobile scrolling showing intended profile card shrink animation" width="500px" height="auto">

### 08/05/2019 - basic structure, profile card filled in
I was able to build out the basic structure, ran into a problem of sharing state between a method/functional component and I ended up going backwards eg. not using a functional component for the App component. With the "old" class way I was able to update state from the bound scroll handler. Ultimately though the scroll handler thing did not turn out well as far as the resulting animation.

#### basic layout with profile card filled in
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update_08-05-2019.png" alt="basic layout with profile card filled in" width="500px" height="auto">

#### mobile view showing scroll trigger class
<img src="https://raw.githubusercontent.com/jdc-cunningham/reactjs-portfolio-2019/master/progress-update_08-05-2019.gif" alt="mobile scroll handler applying class to profile card" width="500px" height="auto">
