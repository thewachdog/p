function imgShow(){
    var img = document.createElement('img');
    img.src="meds.webp";
    img.style.width = "100%";
    document.getElementById('medImg').appendChild(img);
}

function tableCreation(){
    var table = document.createElement('table');
    for (var i = 0; i < 2; i++){
        var tr = document.createElement('tr');   
    
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var text1, text2;
    
        // var text1 = document.createTextNode('Text ' + i + '0');
        // var text2 = document.createTextNode('Text ' + i + '1');

        if(i == 0){
            text1 = document.createTextNode('Description');
            text2 = document.createTextNode('Blah Blah Blaefasghafkahf euiosghoeafagoueh goiuseghueogbsogf  euioighouihsghio segouihgseihoseegohse segohgsolehgesoeshgsol oihetgishgihgsehiogiohsg oehg oegh');
        }
        if(i == 1){
            text1 = document.createTextNode('Symptoms');
            text2 = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur explicabo ducimus quas. Officia illo obcaecati nisi aut porro, quasi corrupti vel impedit nihil magni ratione maxime minus, accusantium perferendis numquam.');
        }
    
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
    
        table.appendChild(tr);
    }
    document.getElementById('tableCreation').appendChild(table);
}

function getInputValue(){
    var d = document.querySelector('input').value;
    let result = "You searched for: ";
    result = result.concat(d);
    console.log(d);
    document.getElementById("demo").innerHTML = result;
    document.getElementById("medName").innerHTML = d;
    imgShow();
    tableCreation();
}