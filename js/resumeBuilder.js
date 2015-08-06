//$("#main").append(["Wisang Eom"]);
//var awesomeThought = "I am Wisang and I am AWESOME";
//var funThought = awesomeThought.replace("AWESOME", "FUN");

// var name = "Wisang Eom";
// var role = "Manger";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
var bio = {
	"name": "Wisang Eom",
	"role": "Manager",
	"contacts": "wseom7@gmail.com",
	"skills": ["ppt", "presenting", "lecturing", "some C", "some Java"],
	"picture": "https://pbs.twimg.com/profile_images/2169417634/Wisang.jpg",
	"welcome": "Welcome to my Bio"	
};

var education = { 
	"schools": [
	{
		"name": "K-JIST",
		"cities": "KwangJu", 
		"majors": "Mechatronics",
		"Graduation": 1998
	},
	
	{
		"name": "POSTECH",
		"cities": "Pohang",
		"majors": "Mechanical Engineering",
		"Graduation": 1996
	},
	{
		"on-line": ["coursera", "udacity", "stanford on-line"]	
	}
	]
}

var work ={
	"jobs": [
	{
		"employer": "LG Electronics",
		"position": "Research Fellow",
		"years": "2015 ~ ",
		"city": "seoul"
	},
	{
		"employer": "LG Electronics",
		"position": "Principal Research Engineer",
		"years": "2012 ~ 2014 ",
		"city": "seoul"
	}
	]
}

var project = {};

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
$("#main").append(bio.contacts);
$("#main").append(work["position"]);
$("#main").append(education.schools[1].name);

if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	
	var i = 0;
	while(i < bio.skills.length) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i++]);
		$("#skills").append(formattedSkill);
	}
}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	$(".work-entry:last").append(formattedEmployer).append(formattedJobTitle);
}


