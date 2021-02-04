### Welcome to the CDCS Workshop: Digitalised Documents Good Practice (IIIF) 
* Presenters: Scott Renton and Mike Bennett, Digital Library, UoE, L&UC.

#### Slides: 
* <https://docs.google.com/presentation/d/11wwZnt2JsgpW5dOf6vni1-sMVEu4RWlvet0i8PH7oHg/edit?usp=sharing>

#### Edinburgh deployments
* <https://images.is.ed.ac.uk/luna/servlet> (Image repository)
* <https://collections.ed.ac.uk/mimed> (Musical Instruments Collection)
* <https://collections.ed.ac.uk/art> (Art Collection)
* <https://collections.ed.ac.uk/stcecilias> (St Cecilias Museum)
* <https://collections.ed.ac.uk/coimbra-colls> (Coimbra Collections- uses Cantaloupe and international content)
* <https://collections.ed.ac.uk/speccoll/record/117297> (NOT OFFICIALLY LIVE! Manifest endpoint)

#### Fun stuff
* <https://collections.ed.ac.uk/mahabharata> (Mahabharata Scroll)
* <https://uoe-iiif.github.io/iiif/mirador/?manifest=https://uoe-iiif.github.io/iiif/manifests/presimages.json> (Annotations example in Mirador)
* <https://uoe-iiif.github.io/iiif/slider/slider.html> (Compare two versions of an image using a slider viewer)
* <https://librarylabs.ed.ac.uk/iiif/av-player/> (AV example- defaults to the Argentina 78 manifest, but try dropping in "rhino", 4316, 2695 etc in manifests folder)

#### Image API manipulation
* Go to <https://images.is.ed.ac.uk/luna/servlet>
* Have a look for an image. Any image, and look at the URL.
* Example:
<https://images.is.ed.ac.uk/luna/servlet/detail/UoEcar~4~4~52491~102838:Calotypes-and- Portraits,-Cal- 7-23>
* Copy the identification section to your clipboard (in the above example: UoEcar~4~4~52491~102838 - your image will have a similar section)

* Now open this URL, replacing the "UoEcar~4~4~52491~10283" with your identification section:
<https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://images.is.ed.ac.uk/luna/servlet/iiif/UoEcar~4~4~52491~102838>

* Manipulating the image on this site will generate a IIIF URL for your image as you wish to display it.

* If you wish, copy the URL into a browser window and you can manually alter the settings, based on the API options:
{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}

* See the json: 
<https://images.is.ed.ac.uk/luna/servlet/iiif/UoEcar~4~4~52491~102838/info.json>

#### Manifests
* Try out this manifest builder: 
<https://librarylabs.ed.ac.uk/iiif/speccollprototype/manifestbuild.php>


### FURTHER THINGS TO TRY (OUTSIDE OF THE WORKSHOP)

#### OpenSeaDragon in a webpage?
* See <https://uoe-iiif.github.io/iiif/os/sr-test.html>
* Create a simple webpage with html markup
* Copy os/sr-test.html
* Change the image to a LUNA one- using the /info.json
* IIIF Elements described in <http://iiif.io/api/image/2.1/#image-information>
* OS Elements described in <https://openseadragon.github.io/#browser-extension>

#### Build from scratch?
* Take the manifest you've just created
* Find a LUNA manifest (syntax: 
`https://images.is.ed.ac.uk/luna/servlet/iiif/m/[identifier]/manifest`
* Elements described in <http://iiif.io/api/presentation/2.1/#resource-properties>
* Copy out the canvas section replacing the canvas here
* Put the manifest up into the git repository manifests folder

#### Show the manifest in UV
* Copy the manifest URL and append it to: 
<https://uoe-iiif.github.io/iiif/uv?manifest=>

#### Show the manifest in Mirador
* Copy the manifest URL and append it to: 
<https://uoe-iiif.github.io/iiif/mirador?manifest=>

#### Add IIIF images from LUNA to Animal Crossing
* If you have a Nintendo Switch, that is...
* Follow the instructions at the link below
<https://blogs.ed.ac.uk/dlam/2020/04/23/animal-crossing/>

#### IIIF Server from Scratch
* See the Cantaloupe website
<https://medusa-project.github.io/cantaloupe/>

#### This Git repository
* If you have a git repo of your own, we will invite you to collaborate
* Fork <https://github.com/uoe-iiif/iiif>
* Clone the repo `git clone https://github.com/uoe-iiif/iiif.git`
* Make changes (adding manifest or openseadragon test)
* `git add --all`
* `git commit -m "Comment"`
* `git push origin master`
* Pull request from your own repo into main repo