### Welcome to IIIF Deep Dive

#### Construct Image API URLs
* Go to <https://images.is.ed.ac.uk/luna/servlet>
* Have a look for an image. Any image.
* Example:
<https://images.is.ed.ac.uk/luna/servlet/detail/UoEcar~4~4~52491~102838:Calotypes-and- Portraits,-Cal- 7-23>
* Strip off the text at the end: 
<https://images.is.ed.ac.uk/luna/servlet/detail/UoEcar~4~4~52491~102838>
* Swap ‘detail’ for ‘iiif’: 
<https://images.is.ed.ac.uk/luna/servlet/iiif/UoEcar~4~4~52491~102838>
* Add the necessary arguments (now we can play with it): 
<https://images.is.ed.ac.uk/luna/servlet/iiif/UoEcar~4~4~52491~102838/full/full/0/default.jpg>
* See the json: 
<https://images.is.ed.ac.uk/luna/servlet/iiif/UoEcar~4~4~52491~102838/info.json>

#### How do I work out co-ordinates?
* Useful tool: 
<https://jbhoward-dublin.github.io/IIIF-imageManipulation/index.html?imageID=https://images.is.ed.ac.uk/luna/servlet/iiif/UoE~3~3~110~175260>

#### Use Git repository
* If you have a git repo of your own, we will invite you to collaborate
* Fork <https://github.com/uoe-iiif/iiif>
* Clone the repo `git clone https://github.com/uoe-iiif/iiif.git`
* Make changes (adding manifest or openseadragon test)
* `git add --all`
* `git commit -m "Comment"`
* `git push origin master`
* Pull request from your own repo into main repo

#### OpenSeaDragon in a webpage?
* Create a simple webpage with html markup
* Copy os/sr-test.html
* IIIF Elements described in <http://iiif.io/api/image/2.1/#image-information>
* OS Elements described in <https://openseadragon.github.io/#browser-extension>

#### Manifests
* Try out this manifest builder: 
<https://librarylabs.ed.ac.uk/iiif/speccollprototype/manifestbuild.php>

#### Build from scratch?
* Take the manifest you've just created
* Find a LUNA manifest (syntax: 
`https://images.is.ed.ac.uk/luna/servlet/iiif/m/[identifier]/manifest`
* Elements described in <http://iiif.io/api/presentation/2.1/#resource-properties>
* Copy out the canvas section replacing the canvas here
* We'll go through each element explaining what it does
* Put the manifest up into the git repository

#### Show the manifest in UV
* Copy the manifest URL and append it to: 
<https://librarylabs.ed.ac.uk/iiif/uv?manifest=>

#### Show the manifest in Mirador
* Copy the manifest URL and append it to: 
<https://librarylabs.ed.ac.uk/iiif/mirador?manifest=>

#### IIIF Server from Scratch
* See the Cantaloupe website
<https://medusa-project.github.io/cantaloupe/>
