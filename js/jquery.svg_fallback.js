jQuery(function(){

	/* determine whether the browser is capable of creating SVG elements */
	var svg = !!('createElementNS' in document && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);

	/* not SVG capable */
	if (!svg){
	
		/* add NO-SVG class to body */
		jQuery('body').addClass('no-svg');
	
		/* find each image */
		jQuery('img').each(function(){
			
			/* this object */
			var $this = jQuery(this);

			/* split file path into an array */
			var fp = $this.attr('src').split(".");

			/* remove the first part of the array and leave the file extension */
			var ext = fp.pop();

			/* check for SVG file extension */
			if(ext.toLowerCase() == 'svg'){

				/* check to see if fallback image has been supplied */
				if ($this.attr('data-svg-fallback') !== undefined){

					/* update the image source with the fallback image url */
					$this.attr('src', $this.attr('data-svg-fallback'));

					/* remove the fallback image attribute */
					$this.removeAttr('data-svg-fallback');
					
				} else {
					
					/* add the png extension to the filepath and set the image attribute to the result */
					$this.attr('src', fp.join('.')+'.png');
				}
			}
		});

	} else { 

		/* add no-SVG class to body */
		jQuery('body').addClass('svg'); 
	}
});