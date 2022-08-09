function Iniciar(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vFo9K7PA1/model.json', modeloListo);
}
function modeloListo(){
    classifier.classify(tenerResultados);
}
function tenerResultados(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        AleatorioR=Math.floor(Math.random()*255)+1;
        AleatorioG=Math.floor(Math.random()*255)+1;
        AleatorioB=Math.floor(Math.random()*255)+1;
        document.getElementById("resultado").innerHTML='escucho: '+ results[0].label;
        document.getElementById('presicion').innerHTML='presicion: '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("resultado").style.color="rgb("+AleatorioR+","+AleatorioG+","+AleatorioB+")";
        document.getElementById("presicion").style.color="rgb("+AleatorioR+","+AleatorioG+","+AleatorioB+")";
        img1=document.getElementById('alien1');
        img2=document.getElementById('alien2');
        img3=document.getElementById('alien3');
        img4=document.getElementById('alien4');
        if(results[0].label =="JiJiJiJa"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(results[0].label =="Skateasos"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if(result[0].label =="Ronquido"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        else{
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
}