# 500chix

![alt text](https://i.imgur.com/GpBLL0a.jpg)

[Visit Here!](https://app500chix.herokuapp.com/#/)


Created by

[Gabriel Barrios](https://github.com/gbarrios212)


500chix is a social networking website that allows bird enthusiasts to share their favorite pictures of birds and discover new talent in the bird photography world. 

## Functionality

### User Auth

* Users can sign up and sign in
* Users must be logged in to access site features
* Guest login is provided for basic preview

### User profiles

* User photos are displayed in a grid
* User profile picture, bio, follows, followers, and total photos are displayed
* If on a different user's page, options to follow and unfollow are available

### User settings

* Users can upload profile pictures 
* Users can provide additional information to display in their bio

### Photo Show Pages

* Photos are displayed dynamically within a matte box
* Photo author, title, and shot info is displayed
* A like button is available 
* A list of comments and, if signed in, a comment text box are available

### Photo Manage Page

* Users can view a collection of their own photos 
* Users can edit information on their own photos
* Users can delete their own photos
* Users can upload their own photos

### Likes

* Photos can be liked by members of the community.  
* Only one like per photo is permitted per user. 

### Comments

* Signed in users can comment on photos
* User's can navigate to user profiles via a link on the comment author's name
* Users can delete their own comments  

### Follows 

* Users can follow their favorite photographers 

### The Roost

* Users can view a collection of photos organized by popularity (total likes, descending)
* Users can easily navigate to specific photo show page by clicking on photos
* Users can view author name and photo title under each thumbnail 
* Photos adjust according to screen size



## Technologies
 
500Chix is built with Node, Rails, React, React-Redux, PostgreSQL, and AWS image hosting. 


---

## Key Features

### Photo Display 

![alt text](https://i.imgur.com/rrxmcMa.png)


* Proper photo display is paramount to 500chix.  Photographs of all aspect ratios are accomodated.  Every photo gets its own display page, where it is set neatly within a matte box with neutral coloring to ensure no color is influenced by the surrounding containers. 

* Within a photo show page, users can easily view important information about the photograph.  Photo title, author, location, as well as specific information pertaining to that shot is included neatly in a column to the left.  Users are given the option to like a photo and increase its popularity (and, ultimately, its viewability in the home page).

* To the right, viewers can see a collection of comments related to the picture.  Signed in users may add to the comment thread.  Here, users may easily navigate to another user's profile to view their contributions to the community.   


### Photo Edit

* Each user is given their own manage page.  This is the heart of 500chix, where users can upload, edit, and delete their own photographs.  

![alt text](https://i.imgur.com/6MnMTj7.png)

* Uploads are done easily via a modal.  Users can view image previews as well as add information to their photograph.  At least a photo name and image is required for submission. 

* Photo editing is made simple for the user via the manage page.  Here, a user can easily navigate through their photos and watch the edit panel on the right populate with the associated information.  Clicking between photos allows for quick edits across multiple images. 

![alt text](https://i.imgur.com/0jfaoIK.png)
![alt text](https://i.imgur.com/8BSQv4z.png)

* In order to provide the user with easy navigation through the different components of our app, React and Redux proved essential.  The edit form is a great example of this.  In order to implement its responsiveness, a slice of state dedicated toward keeping track of a currently selected photo was added to our state.  On click, a photo's ID was passed to this slice, which was then accessed by our edit form container in order to properly render the information related to this image.  Changes were reflected in realtime, and upon inspection of the photo, one could see the changes had indeed been saved. 

