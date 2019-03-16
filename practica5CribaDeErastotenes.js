var option = prompt("Introduce Un Número > 20");
var memory = [];

   
    let multiplos_2 = document.getElementById("multiplos_2");
    let multiplos_3 = document.getElementById("multiplos_3");
    let multiplos_4 = document.getElementById("multiplos_4");
    let multiplos_5 = document.getElementById("multiplos_5");
    let multiplos_6 = document.getElementById("multiplos_6");
    let multiplos_7 = document.getElementById("multiplos_7");
    let multiplos_8 = document.getElementById("multiplos_8");
    let multiplos_9 = document.getElementById("multiplos_9");
    let numeros_primos = document.getElementById("numeros_primos");
    let clear = document.getElementById("clear");
    
    
    
function entrada(){
    if(option==null || option=="") {
        }else if(option < 20){
            alert("Solo Números > 20");
        }else if(option >= 20){        
        
            for (let a = 1; a <= option; a++) {
                const buttons = document.createElement('button');
                buttons.type = 'button';
                buttons.id = 'boton'+a;
                buttons.value = ""+a;
                buttons.innerText = a;
                buttons.style.height = "45px";
                buttons.style.width = "45px";
                buttons.style.background = "#CCFFCC";
                buttons.style.borderRadius = "50%";
                if(a==1){
                }
                document.getElementById("D").appendChild(buttons);
            }
        } 
    }

    entrada();
    
    multiplos_2.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 2 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#CCFF33";
                memory.push(a);
            }
        }
    }   
    
   
    multiplos_3.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 3 == 0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#66CC99";
                memory.push(a);
            }
        }
    }

   
    multiplos_4.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 4 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#99cc32";
                memory.push(a);
            }
        }
    } 

   
    multiplos_5.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 5 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FF99FF";
                memory.push(a);
            }
        }
    }

   
    multiplos_6.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 6 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#FFFF66";
                memory.push(a);
            }
        }
    }

   
    multiplos_7.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 7 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#996666";
                memory.push(a);
            }
        }
    }

     multiplos_8.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 8 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#CCCCCC";
                memory.push(a);
            }
        }
    }

    multiplos_9.onclick = function() {
        for (let a = 1; a <= option; a++){
            if(a % 9 ==0 && memory.includes(a)==false){
                document.getElementById("boton"+a).style.background= "#999999";
                memory.push(a);
            }
        }
    }
    numeros_primos.onclick = function() {
        var count=0;
        for(let k=2; k<=option; k++){
            for (let r = 2; r<=option; r++) {
               if (k%r==0) {
                   count++;
            }
        }
        if(count==1){
            count=0;
            document.getElementById("boton"+k).style.background = "#ADEAEA";
            memory.push(k);

        }else if(count>1){
            count=0;
        }
    }
}
    clear.onclick = function() {
        for(let a=2; a<= option; a++){
            document.getElementById("boton"+a).style.background= "#CCFFCC";
            memory=[];
        }
    }
