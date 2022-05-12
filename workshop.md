### Welcome to the CDCS Workshop: Managing Digitalised Documents (IIIF) 
* Presenters: Scott Renton and Mike Bennett, Digital Library, UoE, L&UC.

### SLIDES 
* <https://docs.google.com/presentation/d/11wwZnt2JsgpW5dOf6vni1-sMVEu4RWlvet0i8PH7oHg/edit?usp=sharing>

### Edinburgh- practical deployments
* <https://images.is.ed.ac.uk/luna/servlet> (Image repository)
* <https://collections.ed.ac.uk/mimed> (Musical Instruments Collection)
* <https://collections.ed.ac.uk/art> (Art Collection)
* <https://collections.ed.ac.uk/stcecilias> (St Cecilias Museum)
* <https://collections.ed.ac.uk/coimbra-colls> (Coimbra Collections- uses Cantaloupe and international content)
* <https://collections.ed.ac.uk/speccoll/record/117297> (Manifest endpoint)
* <https://exhibitions.ed.ac.uk> (Exhibitions platform)


### Edinburgh- investigation and ad-hoc work
* <https://librarylabs.ed.ac.uk/iiif/uv?manifest=https://librarylabs.ed.ac.uk/iiif/manifest/AllContent.json> (All digitised content in one manifest)
* <https://librarylabs.ed.ac.uk/iiif/uv/?manifest=https://librarylabs.ed.ac.uk/iiif/manifest/LyellCollection.json> (Charles Lyell Notebooks in one manifest)
* <https://librarylabs.ed.ac.uk/iiif/uv/?manifest=https://librarylabs.ed.ac.uk/iiif/manifest/calendars/CalendarCollection.json> (University Calendars)
* <https://librarylabs.ed.ac.uk/iiif/argyle-rooms> (Meeting rooms in Argyle House)
* <https://collections.ed.ac.uk/mahabharata> (Mahabharata Scroll)
* <https://uoe-iiif.github.io/iiif/mirador/?manifest=https://uoe-iiif.github.io/iiif/manifests/presimages.json> (Annotations example in Mirador)
* <https://uoe-iiif.github.io/iiif/slider/slider.html> (Compare two versions of an image using a slider viewer)
* <https://librarylabs.ed.ac.uk/iiif/av-player/> (AV example- defaults to the Argentina 78 manifest, but try dropping in "rhino", 4316, 2695 etc in manifests folder)
* <http://universalviewer.io/uv.html?manifest=http://129.215.193.229/whiiif/resources/manifests/CSP-78> (UniversalViewer with a searchable manifest from the Session Papers collection)
* <https://exhibitions.ed.ac.uk/exhibitions/walter-scott-revolution/the-revolutionary-past> (Slow Looking example)
* <https://exhibitions.ed.ac.uk/exhibitions/sea-change/from-warship-to-research-vessel> (StorIIIes example)

### Image API manipulation
* Go to <https://images.is.ed.ac.uk/luna/servlet>
* Have a look for an image. Any image, and look at the URL.
* Example:
<https://images.is.ed.ac.uk/luna/servlet/detail/UoEecp~1~1~52980~140316::Veronica-Renton-4th-year-fashion-20%3Fsort%3Dwork_description%252Cwork_creator_name%252Cwork_title%252Cwork_subject?qvq=q:renton;sort:work_description%2Cwork_creator_name%2Cwork_title%2Cwork_subject;lc:UoEecp~1~1&mi=1&trs=2>
* Copy the identification section to your clipboard (in the above example: UoEecp~1~1~52980~140316 - your image will have a similar section)

* Now open this URL, replacing the "UoEecp~1~1~52980~140316" with your identification section
<https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://images.is.ed.ac.uk/luna/servlet/iiif/UoEecp~1~1~52980~140316>

* Manipulating the image on this site will generate a IIIF URL for your image as you wish to display it.

* If you wish, copy the URL into a browser window and you can manually alter the settings, based on the API options:
{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}

* See the json: 
<https://images.is.ed.ac.uk/luna/servlet/iiif/UoEecp~1~1~52980~140316/info.json>

* Drop into an OpenSeadragon viewer, eg
<https://vanda.github.io/iiif-features/openSeadragon.html?iiifinfo=https://images.is.ed.ac.uk/luna/servlet/iiif/UoEecp~1~1~52980~140316/info.json>

### Manifests
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



### EXTERNAL LINKS
* The main IIIF website <https://iiif.io>
* What is IIIF? <https://iiif.io/community/faq/#what-is-iiif>
* API list <https://iiif.io/api/index.html>
* Image API v3 <https://iiif.io/api/image/3.0/>
* Presentation API v3 <https://iiif.io/api/presentation/3.0/>
* Universal Viewer <http://universalviewer.io>
* Mirador <https://projectmirador.org>
* OpenSeadragon <https://openseadragon.github.io>
* 3D Charter <https://docs.google.com/document/d/13OysSJc3tNRUJUrNbo16_RYOTPRHJpOnHkROQZO6JwM>
* Mnemoscene <https://mnemoscene.io/>
* Consortium members <https://iiif.io/community/consortium/members/>
* Community <https://iiif.io/community/>
* IIIF Awesome- where to find the unusual things people have done <https://github.com/IIIF/awesome-iiif>
* Towards a National Collection IIIF work <https://tanc-ahrc.github.io/IIIF-TNC/>
* Cambridge University Digital Library <https://cudl.lib.cam.ac.uk/>
* Digital Bodleain <https://digital.bodleian.ox.ac.uk/>
* Biblissima <https://portail.biblissima.fr/en>
* VIAF <https://viaf.org>
* OAI-PMH example <https://aspaceoai.collections.ed.ac.uk/request?verb=ListRecords&metadataPrefix=oai_dc>
