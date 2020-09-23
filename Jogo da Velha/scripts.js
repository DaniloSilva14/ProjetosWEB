letra = "X";
vencedor = 0;

function joga(celula){
  celulaclicada = document.getElementById(celula).innerHTML;
  if (celulaclicada != "X" && celulaclicada != "O"){
    document.getElementById(celula).innerHTML = letra;
    if (letra == "X"){
      letra = "O";
    }else{
      letra = "X";
    }
  }
}

function verif(){
   c11 = document.getElementById('cel11').innerHTML;
   c12 = document.getElementById('cel12').innerHTML;
   c13 = document.getElementById('cel13').innerHTML;
   c21 = document.getElementById('cel21').innerHTML;
   c22 = document.getElementById('cel22').innerHTML;
   c23 = document.getElementById('cel23').innerHTML;
   c31 = document.getElementById('cel31').innerHTML;
   c32 = document.getElementById('cel32').innerHTML;
   c33 = document.getElementById('cel33').innerHTML;
  if ((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) vencedor = c11 == "X"? 1:2;
  else if ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) if(c11 == "X") vencedor =  1; else vencedor = 2;
  else if ((c11 != '') && (c21 != '') && (c31 != '') && (c11 == c21) && (c21 == c31)) if(c11 == "X") vencedor =  1; else vencedor = 2;
  else if ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22) && (c22 == c23)) if(c21 == "X") vencedor =  1; else vencedor = 2;
  else if ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) if(c31 == "X") vencedor =  1; else vencedor = 2;
  else if ((c12 != '') && (c22 != '') && (c32 != '') && (c12 == c22) && (c22 == c32)) if(c12 == "X") vencedor =  1; else vencedor = 2;
  else if ((c13 != '') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) if(c13 == "X") vencedor =  1; else vencedor = 2;
  else if ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13)) if(c31 == "X") vencedor =  1; else vencedor = 2;

  if(vencedor == 1){
    alert('X ganhou!');
    novo();
  }else if(vencedor == 2){
    alert('O ganhou!');
    novo();
  } else if ((c11 != '') && (c12 != '') && (c13 != '') && (c21 != '') && (c22 != '') && (c23 != '') && (c31 != '') && (c32 != '') && (c33 != '')){
    alert("Empate")
    novo();
  }

}

function novo(){
  for (i=1; i<4; i++){
    for (j=1; j<4; j++){
      nomecelula = 'cel' + i + j
      document.getElementById(nomecelula).innerHTML = '';
    }
  }
  vencedor = 0;
  letra = "X"
}