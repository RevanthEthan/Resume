function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState ===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
loadjson("data.json",function(text){
	let data= JSON.parse(text);
	console.log(data);
	basic(data.details);
	carr(data.career);
	edu(data.education);
	skill(data.skills);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(basicdetails){
	var image=document.createElement("img");
	image.src=basicdetails.image;
	left.appendChild(image);
	var s=document.createElement("h1");
	s.textContent="Personal Details";
	left.appendChild(s);
	s.appendChild(document.createElement("HR"));
	var name=document.createElement("h2")
	name.textContent=basicdetails.name;
	left.appendChild(name);
	var email=document.createElement("h3")
	email.textContent=basicdetails.email;
	left.appendChild(email);
	var phone=document.createElement("h2")
	phone.textContent=basicdetails.phone;
	left.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var e=document.createElement("h1");
	e.textContent="Education Details";
	right.appendChild(e);
	e.appendChild(document.createElement("HR"));
	var un=document.createElement("ul");
	right.appendChild(un);
	for (var i=0;i<education.length;i++){
		var p=document.createElement("p");
		p.textContent=education[i].course;
		right.appendChild(p);
		var p=document.createElement("li");
		p.textContent=education[i].college;
		right.appendChild(p);
		var p=document.createElement("li");
		p.textContent=education[i].per;
		right.appendChild(p);
	}
}
function skill(skilldata){
	var s=document.createElement("div");
	s.classList.add("sset")
	right.appendChild(s);
	var head=document.createElement("h3");
	head.textContent="Skill Set";
	s.appendChild(document.createElement("HR"));
	s.appendChild(head);
	var t=document.createElement("table");
	var tabledata="";
	for (var i=0;i<skilldata.length;i++){
		tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
		t.innerHTML=tabledata;
	}
	head.appendChild(t);
}
function carr(career){
	var d=document.createElement("div");
	d.classList.add("career")
	right.appendChild(d);
	var e=document.createElement("h1");
	e.textContent="Career Objective";
	e.appendChild(document.createElement("HR"));
	d.appendChild(e);
	var para=document.createElement("p");
	para.textContent=career.co;
	e.appendChild(para);
}