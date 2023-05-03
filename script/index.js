//Lisätään napin kuuntelijafunktio
document.getElementById("send").addEventListener("click", addQuestion);
//Haetaan dokumentin elementit
let checkbox = document.getElementById("important");
let text = document.getElementById("text");

//luodaan funktio addQuestion
function addQuestion(){

    let h3 = document.createElement("h3");
    //itse note lisätään tekstinä p-elementtiin text-areasta
    let question = document.createElement("p");
    let name = document.createElement("p");
    let date = new Date();
    question.textContent = kysymys.value;
    name.textContent = nimi.value + " " + date;

    //jos checkbox valittu, lisätään important muotoilu

    if(checkbox.checked){
        h3.classList.add("important");
        question.classList.add("important");
    }
    //kaikki elementit uusina bodyn sisälle
   text.append(h3,name,question,document.createElement("hr"));
}