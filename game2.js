nhanvat = {
    x:100,y:500
}    
setInterval(start,100);
function start(){
    context.clearRect(0,0,300,600);
    context.fillStyle = "Red";
    context.drawImage(nhanvat.x,nhanvat.y,25,25);
    phacham();
}
function phacham(){
if(nhanvat.x <= 0 || nhanvat.x + 25 >= 300 ){
        console.log("thua");
}
}
document.addEventListener("keydown",key =>{
    switch(key.key){
        case 37 : // nút bên trái
         nhanvat.x -= 5;
         break;
        case 38: // Nút lên trên
         nhanvat.y -=5;
         break;
        case 39: // Nút bên phải
          nhanvat.x +=5;
          break;
        case 40: // Nút xuống
          nhanvat.y +=5;
          break;      
    }      
});