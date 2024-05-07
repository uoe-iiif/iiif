### Welcome to the CDCS Workshop: Good practices for integrating digitised data
* Presenters: Scott Renton and Lucy Pennington, Digital Library, L&UC, UoE.

### SLIDES 
* <https://uoe.sharepoint.com/:p:/r/sites/LUCDigitalLibraryBAU/Shared%20Documents/Presentations/CDCSDataIntegrations.pptx?d=w39e0652401694125a308ea2596b8ca06&csf=1&web=1&e=gRLNya>

### Archipelago
* <https://archipelago.nyc/> (Where we are heading- not there yet)

### Content- museums
* <https://collections.ed.ac.uk/mimed> (Musical Instruments Collection)
* <https://collections.ed.ac.uk/art> (Art Collection)
* <https://collections.ed.ac.uk/stcecilias> (St Cecilias Hall)

### Content- archives
* <https://archives.collections.ed.ac.uk> (Main Archives site)
* <https://collections.ed.ac.uk/eerc> (Oral histories)
* <https://collections.ed.ac.uk/towardsdolly> (Genetics)

### Content- rare books
* <https://discovered.ed.ac.uk> (Library Catalogue)
* <https://collections.ed.ac.uk/speccoll> (Digitised Rare Books content)

### Content- images
* <https://images.is.ed.ac.uk > (Image repository)

### Making content available- collections as data
* <https://collections.ed.ac.uk/collections-as-data> (Historical Theses and Scottish Statistical Accounts)
* <https://collectionsmanager.is.ed.ac.uk> (Where the content is actually stored)
* <https://lucyhavens.com/physically-encoding-collection-metadata> (Visualisations with MIMEd data)
* <https://minim.ac.uk/> (MINIM site)
* <https://github.com/DCS-training/ScottishAccounts> (Lucia's visualisations)

### OAI-Harvesting
* <https://aspaceoai.collections.ed.ac.uk/?verb=ListRecords&metadataPrefix=oai_dc> (Example ArchivesSpace)
* <http://oai.clarin-pl.eu/> (Test bed site)
* <https://mimo-international.com/MIMO> (Musical Instruments Museums Online)
* <https://www.europeana.eu/en/search?query=europeana_collectionName%3A9200271%2A&source=reuse&view=grid> (Europeana Cloud)
* <https://archiveshub.jisc.ac.uk/> (Archives Hub)

### Vernon API
* <https://uoe-iiif.github.io/iiif/Vernon/Vernon%20CMS%20API%201.2.pdf> (Guide to the API)
* <https://vernonapi.is.ed.ac.uk/vcms-api/oecgi4.exe/datafiles/OBJECT/?query=accession_no:EU0123&view=detail> (One Accession)
* <http://vernonapi.is.ed.ac.uk/vcms-api/oecgi4.exe/datafiles/OBJECT/?query=(updatedsince:"29%2004%202024" AND squery:"MIMEdSkylight")&view=detail > (Last night's changes)

### ArchivesSpace API
* <https://www.postman.com/> (Postman tool)
* <https://archivesspace.github.io/archivesspace/api/#introduction> (Guide to the API)
* <https://github.com/archivesspace-labs/ArchivesSnake> (Client library for working with ArchivesSpace API)
* <https://aspaceapi.collections.ed.ac.uk/users/apiread/login?password=xxxx> (Login- ask me for password)
* <https://aspaceapi.collections.ed.ac.uk/repositories/2/archival_objects/180329> (Sample item)
* <https://aspaceapi.collections.ed.ac.uk/subjects/28081> (Sample subject)
* <https://aspaceapi.collections.ed.ac.uk/repositories/2/search?page=1&aq={"jsonmodel_type":"field_query","field":{"must":[{"term":{"repository_processing_note":true}}]}}> (Search syntax)


### Alma API
* <https://eu01.alma.exlibrisgroup.com/view/sru/44UOE_INST?version=1.2&operation=searchRetrieve&recordSchema=marcxml&query=alma.mms_id=9923254553502466> (MarcXML)
* <https://discovered.ed.ac.uk/discovery/sourceRecord?vid=44UOE_INST:44UOE_VU2&docId=alma9923254553502466&recordOwner=44UOE_INST> (related DiscoverEd record)

### LUNA API
* <https://lunaimaging.atlassian.net/wiki/spaces/V75D/pages/655863/LUNA+API+Documentation> (Guide to the API)
* <https://images.is.ed.ac.uk/luna/servlet/as/fetchMediaSearch> (Base endpoint)
* <https://images.is.ed.ac.uk/luna/servlet/as/fetchMediaSearch?&lc=UoEart~2~2&fullData=false&bs=25&os=0&includeIiifManifest=true> (Example) 


### IIIF
* <https://iiif.io> (Main site)
* <https://iiif.io/api/image/3.0/> (Image API)
* <https://iiif.io/api/presentation/3.0> (Presentation API)
* <https://universalviewer.io> (Universal viewer)
* <https://projectmirador.org> (Mirador viewer)
* <https://cantaloupe-project.github.io/> (Cantaloupe image server)
* <https://collections.ed.ac.uk/art/record/19504?highlight=*> (Example of collections record)
* <https://collections.ed.ac.uk/mahabharata> (Mahabharata Scroll)
* <https://collections.ed.ac.uk/coimbra-colls> (Coimbra Collections)
* <https://uoe-iiif.github.io/iiif/workshop> (Many more links about our use of IIIF)

### Lyell Website 
* <https://lyell.ed.ac.uk> (Pulling it all together)
* <https://github.com/uoemainlibrary/lyell-website> (Code!)

### IIIF - Image API manipulation
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
* Go to <https://images.is.ed.ac.uk/luna/servlet> and do a search
* Get the manifest from "Share"

#### Show the manifest in UV
* Copy the manifest URL and append it to: 
<https://uoe-iiif.github.io/iiif/uv?manifest=>

#### Show the manifest in Mirador
* Copy the manifest URL and append it to: 
<https://uoe-iiif.github.io/iiif/mirador?manifest=>

#### This Git repository
* If you have a git repo of your own, we will invite you to collaborate
* Fork <https://github.com/uoe-iiif/iiif>
* Clone the repo `git clone https://github.com/uoe-iiif/iiif.git`
* Make changes (adding manifest or openseadragon test)
* `git add --all`
* `git commit -m "Comment"`
* `git push origin master`
* Pull request from your own repo into main repo

### ADDITIONAL LINKS
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
