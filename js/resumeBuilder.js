
var bio = {
	"name": "Wisang Eom",
	"role": "Stupid Manager, Pseudo Developer",
	"contacts": {
		"email": "wseom7@gmail.com", 
		"twitter": "@wseom", 
		"mobile": "010-2330-9854",
		"github": "Wisang"
	},
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
		"dates": "2015 ~ future",
		"location": "seoul",
		"description": "has been working as Agile Team Leader"
	},
	{
		"employer": "LG Electronics",
		"position": "Principal Research Engineer",
		"dates": "2012 ~ 2014 ",
		"location": "seoul",
		"description": "has been working as Agile Team Leader and Agile Coach & Instructor"
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);	
$("#header").append(formattedName);

var formattedRole= HTMLheaderRole.replace("%data%", bio.role);	
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEMail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);

$("#header").append(formattedMobile);
$("#header").append(formattedEMail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);

var project = {
	"lectures": [
	{
		"title": "Test Driven Development",
		"dates": "2009 ~ future",
		"description": "Introduced new way of developing for C and Java"
		//"image": ""
	},
	{
		"title": "Refactoring",
		"dates": "2009 ~ future",
		"description": "Improving Legacy code to improve code quality for C and Java"
		//"image": ""
	}
	]
};

project.display = function() {
	$("#projects").append(HTMLprojectStart);
	
	for(var i in project.lectures) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.lectures[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.lectures[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.lectures[i].description);
		$(".project-entry:last").append(formattedDescription);
	}

}

if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	
	var i = 0;
	while(i < bio.skills.length) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i++]);
		$("#skills").append(formattedSkill);
	}
}

displayWork();

project.display();

$('#main').append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		// var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		// $(".work-entry:last").append(formattedLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}


