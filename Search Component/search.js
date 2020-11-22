let suggestions= [
    "Login Form in HTML & CSS",
    "What is HTML & CSS",
    "What is JavaScript",
    "Web Designing",
    "What is UI Accessibility",
    "What are UI/UX concepts",
    "What is media query",
    "How to learn reactjs",
    "What is MERN Stack"
];

   
// getting all required elements
const searchPanel = document.querySelector(".search-input");
const inputBox = searchPanel.querySelector("input");
const suggBox = searchPanel.querySelector(".autocom-box");
const icon = searchPanel.querySelector(".icon");
let linkTag = searchPanel.querySelector("a");
let linkTo;

inputBox.onkeyup = (e)=>{
    let userInput = e.target.value; //user enetered data
    let suggestionList= [];
    if(userInput){
        icon.onclick = ()=>{
            linkTo = "https://www.google.com/search?q=" + userInput;
            linkTag.setAttribute("href", linkTo);
            linkTag.click();
        }
        suggestionList = suggestions.filter((data)=>{
            return data.toLowerCase().startsWith(userInput.toLowerCase()); 
        });
        suggestionList = suggestionList.map((data)=>{
            // creating list
            return data = '<li>'+ data +'</li>';
        });
        searchPanel.classList.add("active"); //show autocomplete box
        showSuggestions(suggestionList);
        let allList = suggBox.querySelectorAll("li");
        allList.forEach((element) => {
            element.setAttribute("onclick", "select(this)")
        })
    }
    else{
        searchPanel.classList.remove("active"); //hide autocomplete box
    }
}



function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        linkTo = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", linkTo);
        linkTag.click();
    }
    searchPanel.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}