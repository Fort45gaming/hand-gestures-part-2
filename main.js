Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById('camera');
    Webcam.attach('#camera');
    
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
    
            document.getElementById("result").innerHTML='<img id="capture_image" scr="'+data_uri+'">';
    
        });
    }
    console.log('ml5 version:',ml5.version);
    Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);
    
    function modelLoaded(){
    console.log('modelLoaded');
    }
    
    function speak(){
       var synth=window.speechSynthesis;
       data_1="the first prediction is"+prediction_1;
       data_2="the second prediction is"+prediction_2;
       var utterThis=new SpeechSynthesisUtterance(data_1+data_2);
       synth.speak(utterThis);
    }
    
    function check(){
        img=document.getElementById('captured_image');
        Classifier.classify(img,gotResult);
    }
    
    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementsById("result_hand_gesture_name").innerHTML=results[0].label;
            
            prediction_1=results[0].label;
            
            speak();
            if(results[0].label=="no"){
                document.getElementById("update_hand").innerHTML="&#9757;";
            }   
            if(results[0].label=="super"){
                document.getElementById("update_hand").innerHTML="&#128076;";
            }
            if(results[0].label=="great"){
                document.getElementById("update_hand").innerHTML="&#128077;";

            }
            if(results[0].label=="stop"){
                document.getElementById("update_hand").innerHTML="&#9995;";

            }

            if(results[0].label=="loser"){
                document.getElementById("update_hand").innerHTML="&#128072;";

            }
        }
        
    }    