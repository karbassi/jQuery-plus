jQuery-Plus
--

 - You can now request an element's entire data object by passing no arguments to `data()` (**Note:** jQuery >=1.4 does this anyway):
    
        $(element).data(); // => {/* data object */}
    
 - The `bind` method accepts multiple events handlers by passing an object with each property as a handler (**Note:** jQuery >=1.4 does this anyway):
    
        $(element).bind({
            click: function(){},
            mouseover: function(){},
            mouseout: function(){}
        });
    
 - The `bind` method also accepts a non-function event handler in the form of an actionable-object:
 
        $(element).bind('click', { toggleClass: 'something' });
        // This applies to one(), click(), mouseover() etc. etc.
    
 -  There's a helpful log function under jQuery's namespace:
    
        $(element).log();
        $.log('something');
    
 - Every initial selection you make is assigned to jQuery._this:
    
        $(element).width( $._this.parent().innerWidth() );
    
 - The `end` method now accepts a numerical argument signifying how far back you want to go:
    
        $(element).find('a').find('span').end(2); // (goes back to $(element))
    
 - The `filter` method now accepts a matching criteria in the form of an object:
    
        $(lotsOfElements).filter({
            id: /^(apple|banana|mango)$/,
            src: /\.(png|jpg)$/,
            rel: 'something'
        });
    
 - The `clone` method now accepts a number as its first argument, indicating how many clones you want:
    
        jQuery('<div/>').clone(5); // 5 div elements.
        
        // Copy events (2nd argument):
        myjQueryCollection.clone(10, true);
    
 - The `map` method accepts a string signifying what attributes to map:
    
        $(lotsOfAnchors).map('attr:href'); // => ['http://google.com', 'http://msn.com', ...]
        $(lotsOfAnchors).map('text'); // => ['Google', 'MSN' ...]
        
        // FORMAT: [jQuery method name]:[first param]
    
 - All setter methods accept functions; these function must return the intended value:
    
        $(element).css(function(){
            return {
                color: $(this).css('backgroundColor')
            }
        });
        
        // Note: Useless on multi-argument methods.
    
 - All getter methods can return a full array of results instead of a single one; to enable this you must pass true as the very first argument:
    
        $(lotsOfElements).width(); // 120
        $(lotsOfElements).width(true); // [120, 230, 125, ...]
    
 - You can query data in selectors by using the `:data` selector. Passing no arguments tests if that elements has any data. 
    
        $('div:data'); // => All DIVs with data
        $('div:data(abc)'); // => Tests that "abc" property is a truthy value
        $('div:data(abc=123)'); // => Tests that "abc" prop is equal to "123"
        $('div:data(abc=/\\d/)'); // => Tests that "abc" prop has at least one digit
        
        $(':data("abc"="Blah\"something")'); // Use quotes for complex values

 - `%=` operator can be used in attribute selectors for testing against a regular expression:
    
        $('a[href%=/^https?:/i]');