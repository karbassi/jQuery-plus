

test('jQuery.log', function(){
    
    jQuery.log('message');
    
    same(
        ['message'],
        jQuery.log.cache,
        'Log correctly cached'
    );
    
    ok(
        jQuery('a').log() === 1,
        'Correct return value from log'
    );
    
});

test('init', function(){
    
    var collection = jQuery('a');
    
    ok(
        collection === jQuery._this
    );
    
});

test('end', function(){
    
    var struc = jQuery('<div><a><span></span></a></div>'),
        find = struc.find('a');
    
    ok(
        find.end() === struc
    );
    
    ok(
        find.find('span').end(2) === struc,
        'end(2) returns expected'
    );
    
    same(
        find.end(-3423),
        struc.end(),
        'Negative n treated as positive'
    );
    
});

test('clone', function(){
    
    expect(4);
    
    var base = jQuery('<div><a></a></div>').find('a').click(function(){
            ok(true, 'Event triggered');
        }).end(),
        basicClone = base.clone(),
        nClone = base.clone(23),
        eClone = base.clone(-1.3, true);
    
    ok(
        basicClone.find('a').length === 1
    );
    
    basicClone.find('a').trigger('click'); // Nothing should trigger
    
    ok(
        nClone.length === 23
    );
    
    ok(
        eClone.length === 1
    );
    
    eClone.find('a').trigger('click');
    
});

test('data', function(){
    
    ok(
        jQuery('<div/>').data('a', 1).data().a === 1
    );
    
});

test('filter', function(){
    
    var base = jQuery('<div><a/><span><a/></span></div>');
    
    ok(
        base.filter({
            nodeName: /div/i
        }).length === 1
    );
    
    ok(
        base.find('a').filter({
            parentNode: {
                nodeName: /div/i
            }
        }).length === 1
    );
    
});

test('is', function(){
    
    ok(
        jQuery('<div id="aaa"/>').is({
            id: /^a/
        })
    );
    
});

test('map', function(){
    
    var base = jQuery('<a href="http://google.com"></a><a href="http://yahoo.com">Yeh</a>');
    
    same(
        base.map('attr:href'),
        ['http://google.com', 'http://yahoo.com']
    );
    
    same(
        base.map('text'),
        ['', 'Yeh']
    );
    
});

test('hash events', function(){
    
    var h = {append:'foo'},
        a = jQuery('<a/>').addClass('').click(h);
    
    ok(
        a.attr('class') === ''
    );
    
    ok(
        a.click().text() === 'foo'
    );
    
    a.unbind('click', h);
    
    ok(
        a.click().text() === 'foo'
    );
    
});

test('setters (functions)', function(){
    
    ok(
        jQuery('<a/>').text(function(){
            return 'foo'
        }).text() === 'foo'
    );
    
});

test('getters (boolean)', function(){
    
    same(
        jQuery('<a/>').text('foo').text(true).get(),
        ['foo']
    );
    
});

test(':data selector', function(){
    
    var d = jQuery('<div/>').data('foo', 'ABC123'),
        p = jQuery('<div/>').append(d);
    
    ok(
        p.find(':data(foo=/^abc/i)')[0] === d[0]
    );
    
});

test('%= regex operator', function(){
    
    var d = jQuery('<div/>').attr('id', 'ABC123'),
        p = jQuery('<div/>').append(d);
    
    ok(
        p.find('[id%=/^abc/i]')[0] === d[0]
    );
    
    ok(
        p.find('[id%=/foo/]').length === 0
    );
    
});










