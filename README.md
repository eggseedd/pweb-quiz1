# Raditya Yusuf Annaafi' Website

## Live Demo
Check out the live version of the website here: [Live Demo](https://radityayusufwebsite.vercel.app/index.html)

## Overview
This is a multi-page personal website that includes sections for profile, hometown, local food, and tourist destinations. The website showcases content about Raditya Yusuf Annaafi', highlighting his hometown of Balikpapan, Indonesia, through text, images, and interactive maps. This is an assignment(Quiz 1) from the Web Programming lecture in Informatics Engineering ITS. 

## Features
- **Homepage**: Introduction and welcome section with navigation links.
- **Profile**: Raditya’s personal profile and details.
- **Hometown**: Information about Balikpapan with an embedded interactive map.
- **Local Food**: Descriptions and images of traditional foods from Balikpapan.
- **Tourist Destinations**: Showcases tourist attractions in Balikpapan.

## Pages
- **index.html**: Homepage with navigation links and a welcome message.
- **profile.html**: Profile page containing personal information.
- **hometown.html**: Includes information about the hometown and an interactive map.
- **food.html**: Displays local food from Balikpapan with images and descriptions.
- **tourist.html**: Contains information about tourist destinations in Balikpapan.

## Technologies Used
- **HTML**: Structuring the content of the website.
- **CSS**: Styling and responsive design for a modern look.
- **JavaScript**: Adding interactivity, such as the map feature using the Leaflet.js library.
- **Leaflet.js**: A JavaScript library for interactive maps.
- **Font Awesome**: Icons for navigation and decoration.

## How to Run
1. Clone or download this repository.
2. Open any `.html` file in your browser (start with `index.html` for the full experience).
3. Ensure that the images are located in the `Images/` folder for full functionality.
4. The site is responsive and works across different devices.

## Folder Structure
```bash
├── app.js
├── styles.css
├── index.html
├── profile.html
├── hometown.html
├── food.html
├── tourist.html
└── Images/
    ├── bg_homepage.jpg
    ├── mantau.jpg
    ├── pisang-gapit.jpg
    ├── abon-kepiting.jpg
    ├── balikpapan1.jpg
    └── balikpapan4.jpg
```

## Difficulties Faced
- **Responsive Design**: The layout from my phone(Samsung S23) is a bit different from what i expected. I inspected the html using Iphone 14 Pro Max model and it looked the same as my expectation. So maybe it will look slightly weird in some devices.
- **Horizontal Images Scrolling**: It was so difficult to get it right. Because i wanted to make the images in `hometown.html` can be scrolled horizontally(when it is view from phone), the implementation is a bit different(handling *`height, overflow`*, and etc) from vertical scroll. So, it takes a lot of time just to get that part right.
- **Javascript Implementation**: I was so confused where do i have to use javascript in this kind of website. I made several web portfolios before, following youtube tutorials, and it only used html and css. So, the only thing that i made using javascript is just the map from the `hometown.html`.

## Note For Lecturer
- I apologize for not following the routing requirement. There will be confusion if i use `quiz 1` folder because i already have the same folder name in my directory.
- I can't include `pseudo-code` and `screenshots` because the lack of organization in my `styles.css` file and i am a bit confused what should i attach to the report. The CSS for all pages jumbled in just 1 file so it is kind of confusing. I copied some of the styles that were implented in my projects before. So, some of the classes is mixed and not related with the structure in the `html` files.

## Credits
- Leaflet.js: Used for the interactive map on the hometown page.
- Font Awesome: For icons used across the site.
