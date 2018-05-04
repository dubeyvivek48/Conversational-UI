function addinitials( parentNode, childNode , childNodeText , childNodeClasses){
    var node=document.createElement(parentNode);
    node.classList.add("text-container");
    console.log(node);
    document.querySelector(".container").appendChild(node);
    var child_node=document.createElement(childNode);
    var child_node_text=document.createTextNode(childNodeText);
    child_node.appendChild(child_node_text);
    child_node.className=childNodeClasses;
    node.appendChild(child_node);    
}

//deleating node
function deleteNode(id){
   var del= document.getElementById(id);
   del.parentNode.parentNode.removeChild(del.parentNode);
}
// add left conversation

function addContent(content){
    var parentNode=document.createElement("div");
    var node=document.createElement("p");
    var p_text=document.createTextNode(content.text1);
    var node1=document.createElement("p");
    var p_text2=document.createTextNode(content.text2);
    //button
    var span=document.createElement("span");
    var spanText=document.createTextNode("choose an option ");
    var btn1=document.createElement("a");
    var btn2=document.createElement("a");
    var btn3=document.createElement("a");
    var btn1Text=document.createTextNode(content.btn.btn1);
    var btn2Text=document.createTextNode(content.btn.btn2);
    var btn3Text=document.createTextNode(content.btn.btn3);
    span.appendChild(spanText);
    btn1.appendChild(btn1Text);
    btn2.appendChild(btn2Text);
    btn3.appendChild(btn3Text);
    btn1.setAttribute("onclick", content.btn.btn1.split(" ").join("")+"()");
    btn2.setAttribute("onclick", content.btn.btn2.split(" ").join("")+"()");
    btn3.setAttribute("onclick", content.btn.btn3.split(" ").join("")+"()");
    btn1.className="btn";
    btn2.className="btn";
    btn3.className="btn"; 
    parentNode.className="text-container";
    node.className ='text-left animated  mrb fadeInRight ';
    node1.className = 'text-left animated  mrb fadeInRight';
    node.appendChild(p_text);    
    node1.appendChild(p_text2);
    parentNode.appendChild(span);
    parentNode.appendChild(btn1);
    parentNode.appendChild(btn2);
    parentNode.appendChild(btn3);
    document.querySelector(".container").appendChild(node); 
    document.querySelector(".container").appendChild(node1); 
    document.querySelector(".container").appendChild(parentNode); 

}




document.getElementById("meow").onclick=()=>{
    addinitials("div" ,"p", "meow" , 'text-right animated  mrb fadeInLeft');
    deleteNode("meow");
    addContent({
        text1:'Great to hear!',
        text2:"Because I love story-telling and I don't want to bore you, please tell me what do you want to do?",
        btn:{
            btn1:'Register NOW',
            btn2:'Tell me the story',
            btn3:'Stick to the product!'
        }
    });
}

document.getElementById("been-better").onclick=()=>{
    addinitials("div" ,"p", "Been-better" , 'text-right animated  mrb fadeInLeft');
    deleteNode("been-better");
};
function RegisterNOW(){
    addinitials("div" ,"p", "meow" , 'text-right animated  mrb fadeInLeft');
    var del= document.getElementsByClassName("btn");
    del.parentNode.parentNode.removeChild(del.parentNode);
    addContent({
        text1:'Great to hear!',
        text2:"Because I love story-telling and I don't want to bore you, please tell me what do you want to do?",
        btn:{
            btn1:'Register NOW',
            btn2:'Tell me the story',
            btn3:'Stick to the product!'
        }
    });
}

