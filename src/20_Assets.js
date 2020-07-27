/*
//=========================Images/ Assets in React JS
1. Inside Public Folder
2. Inside scr Folder

//-----------------Inside Public Folder

If we put a file into the "public " folder, it will not be processed by webpack. Istead it will be copied into the build folder untouched

To reference asserts in the public folder, we need to use a special variable called 'PUBLIC_URL'. 
Only Files inside the public folder will be accessible br "%PUBLIC_URL%" prefix

Normally it is recommended importong stylesheet, images and fonts from javascript

None of the files in public folder get post-processed or minified. 

Missing files will not be called at compilation time, and will cause 404 errors for our users. 

Result filenames wont include content hashes so we will need to add query argu,emt or rename them every time they change

//----When use Public Folder
We need a file with a specific name in the build output, such as "manifest.webmanifest"

We have thousands of images and need to dynamically reference their paths. 

when we want to include a small script like pace,js outside of the bundles code'

some library may be incompatible with webpack and we have no other option but to include it as a<script> tags


//----HOW TO USE
Image name: pic.jpg

IN HTML
<img src=%PUBLIC_URL%/pic.jpg alt='mypic' />
<img src=%PUBLIC_URL%/image/pic.jpg alt='mypic' />

IN JS
<img src={process.env.PUBLIC_URL + "/pic.jpg"}
<img src={process.env.PUBLIC_URL + "image/pic.jpg"}


// ---------------------------Inside src folder
with webpact, using static assets like images and fonts works similarly to CSS. 

we can import a file right in a javascript module. 
This telss webpack to include that file in the bundle. 

Unlike CSS imports, importing a file gives us a string value. 
this value is the final path we can reference in our code, e.g as the src attribute of an image or the href of a link to a pdf


scrips and stylesheet get minified and bundled together to avoid extra network request. 

missing file cause compilation errors instead of 404 errors for our users.

result filenames include content hashes so we dont need to worry about browser caching their old versions. 


// in JS file
import pic from './pic.jpg'

<img src={pic} alt="mypic" />

this ensures thar when the project is built, webpack will correctly move the images into the build folder, and provide us with correct paths. 




*/