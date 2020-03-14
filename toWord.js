var toWord = function(name) {
    var picBase64Info = myChart.getDataURL();
    var _img = document.getElementById('chart2');
    _img.src=picBase64Info;
    // console.log($('#word').html().replace(/red/g,'orange'))
    var content = '<!DOCTYPE html><html><body><div style="color:green">5555</div>'+ $('#word').html().replace(/red/g,'orange') + $("#content2").html() + '<\/body><\/html>';
    var converted = htmlDocx.asBlob(content, { orientation: 'landscape' });
    saveAs(converted, name + '.docx');
} 