# React application for searching/displaying images from Unsplash
This application is hosted at Github Pages https://alaunyte.github.io/simple-image-search-app/

![alt text](https://github.com/alaunyte/simple-image-search-app/blob/master/images/main.png?raw=true)

Application is built with React. It utilises simple, comprehensive, responsive user interface.
This application uses Unsplash.com api for image searching/fetching.

More information on how to create developer account for Unsplash api could be found here: https://unsplash.com/developers

###Features
- Keyword search input field
- “Search” button to retrieve images
- Image grid for displaying images
    - This grid is responsive - it adapts to screen size. The different number of images are presented based on the screen width.
    ![alt text](https://github.com/alaunyte/simple-image-search-app/blob/master/images/response.png?raw=true)
    - Loading spinner while images are being fetched.
    ![alt text](https://github.com/alaunyte/simple-image-search-app/blob/master/images/loading.png?raw=true)
    - Informative message if no images are found with a given search query. 
    ![alt text](https://github.com/alaunyte/simple-image-search-app/blob/master/images/notification.png?raw=true)

- Use Redux to implement “Saved Queries” feature.
    - User can save current keyword to “Saved Queries” list.
    - User can click on saved keyword to search by it.
    - User can remove saved keyword from list.
    ![alt text](https://github.com/alaunyte/simple-image-search-app/blob/master/images/saved-queries.png?raw=true)

- This application was styled with SCSS.