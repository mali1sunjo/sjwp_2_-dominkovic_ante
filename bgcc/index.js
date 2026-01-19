/*let br=0;

document.querySelector(".btn").addEventListener("click", function(){

    if(br%2==0){
        document.body.style.backgroundColor="red";
    }
    else{
        document.body.style.backgroundColor="blue";
    }
br++;
});*/

/*function countLetters() {
    const text = document.getElementById("textInput").value;
    const lettersOnly = text.match(/[a-zA-Z]/g);
    const count = lettersOnly ? lettersOnly.length : 0;
    document.getElementById("letterCount").textContent = count;
}*/


/* var a = document.getElementById("inp");
a.addEventListener("keyup",function(){
document.getElementById("count").innerHTML = "Count :" + " "+ a.value.length;
}) */



/*let counter = document.querySelector('#counter'),
    button = document.querySelectorAll('.button button'),
    count = 0;

button.forEach(el =>
  el.addEventListener('click', function(event) {
    switch (event.target.id) {
      case 'decrease':
        count--;
        break;
      case 'reset':
        count = 0;
        break;
      case 'increase':
        count++;
        break;
    }
    counter.textContent = count;
    counter.style.color = (count > 0) ? 'green' : 'red';
  })
)*/

function addItem() {
    const input = document.getElementById("itemInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text + " ";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("itemList").appendChild(li);

    input.value = "";
  }


