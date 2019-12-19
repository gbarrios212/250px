# 500chix

![alt text](https://imgur.com/RBIVG0h.jpg)

[Visit Here!](https://app500chix.herokuapp.com/#/)


Created by

[Gabriel Barrios](https://github.com/gbarrios212)


500chix is a social networking website that allows bird enthusiasts to share their favorite pictures of birds and discover new talent in the world of nature photography. 


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
* Beyond visually appealing backdrops, 500chix leverages React-Redux's global state management system to provide a seamless user experience.  This is best exemplified by the manage uploads page. Here, users can upload, edit, and delete their own photographs.  

![alt text](https://imgur.com/4rPtDqA.png)

* Uploads are done easily via a modal.  Users can view image previews as well as add information to their photograph.  At least a photo name and image is required for submission. 

![alt text](https://i.imgur.com/6MnMTj7.png)

* Photo editing is made simple for the user via the manage page.  Here, a user can easily navigate through their photos and watch the edit panel on the right populate with the associated information.  Clicking between photos allows for quick edits across multiple images. 

![alt text](https://i.imgur.com/0jfaoIK.png)
![alt text](https://i.imgur.com/8BSQv4z.png)

* This component is essentially split in two - a parent manage component responsible for rendering the edit form and a child library component responsible for rendering the collection of items to be selected.  Both are connected via Redux to the global state.

```
const mapStateToProps = (state) => {
    let activePhotoId = state.ui.activePhotoId;
    let currentUser = state.entities.users[state.session.id];
    return({
        photos: selectUserPhotos(state, currentUser),
        activePhotoId
    })
}
```

* The activePhotoId starts out as null to reflect an image yet to be selected.  On the frontend, the user sees

![alt text](https://imgur.com/Exz1N8C.png)

Each image thumbnail within the library component is given an onClick action.

```
updateActivePhotoId(e) {
        this.props.receiveActivePhotoId(e.currentTarget.value);
        this.setState({ selected: true });
        e.currentTarget.classList.toggle("selected")
    }
```

* This fires off an action which updates the ui slice of state with the id of the selected photo.  

```
export const receiveActivePhotoId = (photoId) => ({
    type: RECEIVE_ACTIVE_PHOTO_ID,
    photoId
})
```

```
const activePhotoReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_ACTIVE_PHOTO_ID:
            return action.photoId;
        case CLEAR_ACTIVE_PHOTO_ID:
            return null;
        default:
            return state;
    }
} 
```

* In addition, the selected photo is given a new class that renders a blue outline.

```
return (
  <li 
    key={photo.id} onClick={this.updateActivePhotoId} 
    className={photo.id === this.props.activePhotoId ? "thumbnail selected" : "thumbnail"} 
    value={photo.id}>
    <ManageLibraryDetail photo={photo} key={photo.id}
   />
</li>
)
```

* Furthermore, once an activePhotoId is present, the parent component renders the edit form in place of where prior instructions were. 

```
 if (this.props.activePhotoId) {
            editForm = (
              <span className="item-f">
                <PhotoEditFormContainer />
              </span>
            );
        }
```

* The connected edit component grabs the photo from the photos slice of state utilizing the same activePhotoId. 

```
const mapStateToProps = (state, ownProps) =>{
    let currentUser = state.entities.users[state.session.id];
    let photoId = state.ui.activePhotoId;
    let photo = state.entities.photos[photoId] || { name: "", 
        category: "",
        location: "",
        lat: "",
        long: "",
        date_taken: "",
        camera: "",
        lens: "",
        focal_length: "",
        aperture: "",
        shutter_speed: "",
        iso: "",
        description: ""}
    return ({
        photo: photo,
        currentUser,
        photoId,
        errors: state.errors.photo
    })
}
```

* The form component renders this information within its constructor. 

```
    constructor(props){
      super(props)
      this.state = { photo: this.props.photo, disabled: false }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
    }
```

* On update, the appropriate fields are changed via setState, 

```
    update(field) {
      return e => {
          this.setState(merge({}, this.state, { photo: {[field]: e.currentTarget.value}}))
      }
    }
```
* an updatePhoto action is dispatched to the backend, the window is repositioned to the top of the page, and another action to signal success to the user is dispatched. 

```
    handleSubmit(e) {
      e.preventDefault();
      this.props.updatePhoto(this.state.photo);
      window.scrollTo(0, 0);
      this.props.fireSuccess("Photo edited successfully.");
    }
```

To ensure changes were reflected without needing a reload, the componentDidUpdate lifecycle method was called. 

```
    componentDidUpdate(prevProps){
      if(this.props.photo !== prevProps.photo){
        this.setState({photo: this.props.photo})
      }
    }
```

Upon inspection of the photo, the changes would indeed be reflected. Coordination between the backend via ajax calls and the frontend with appropriate leveraging of react and redux methods allowed for seamless user interactivity throughout the site.  


## Functionality

### User Auth

* Users can sign up and sign in
* Users must be logged in to access site features
* Guest login is provided for basic preview

### User profiles

* User photos are displayed in a masonry grid
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

* Users can view a collection of recently posted photographs by other users they follow
* Users can view a collection of featured photos organized by popularity (total likes, descending)
* Users can easily navigate to specific photo show page by clicking on photos
* Users can view author name and photo title under each thumbnail 
* Photos rearrange to fill the screen


