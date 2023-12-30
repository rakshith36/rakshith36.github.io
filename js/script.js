var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;

    var greetText =
      "************************************************************************************\n"+	  

	  "|[[b;#00DE04;]\t\t 8888888b.           888               888      d8b 888    888 ]\t	   |\n"+
	  "|[[b;#00DE04;]\t\t 888   Y88b          888               888      Y8P 888    888 ]\t	   |\n"+
	  "|[[b;#00DE04;]\t\t 888    888          888               888          888    888 ]\t	   |\n"+
	  "|[[b;#00DE04;]\t\t 888   d88P  8888b.  888  888 .d8888b  88888b.  888 888888 88888b. ]\t   |\n"+
	  "|[[b;#00DE04;]\t\t 8888888P`      `88b 888 .88P 88K      888 `88b 888 888    888 `88b ]\t   |\n"+
	  "|[[b;#00DE04;]\t\t 888 T88b   .d888888 888888K  `Y8888b. 888  888 888 888    888  888 ]\t   |\n"+
	  "|[[b;#00DE04;]\t\t 888  T88b  888  888 888 `88b      X88 888  888 888 Y88b.  888  888 ]\t   |\n"+
	  "|[[b;#00DE04;]\t\t 888   T88b `Y888888 888  888  88888P' 888  888 888  `Y888 888  888 ]\t   |\n"+	  
      
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "|\t\t         Namaskara, I'm " + commandText('Rakshith N') + " - Software Engineer.	              	  |\n"+
      "|\t\t         Please type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.    \t\t\t\t  |\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "************************************************************************************\n";

   
          
    if(!ret){
    
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("  Oh no!! don't delete that!");  
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("  Directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    this.echo();
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("work") + "               - My Professional Experience");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|  " + commandText("projects") + "           - Projects and features for my work");
    this.echo("|  " + commandText("contact") + "            - Contact me")
    this.echo("|  " + commandText("certification") + "      - Earned Certs");
    this.echo("|  " + commandText("resume") + "             - Download my resume!");
	this.echo("|  " + commandText("social") + "             - Links")
	this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands]");
    this.echo();
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("GitHub") + ":       http://www.github.com/rakshith36");    
    this.echo("|  " + commandText("LinkedIn") + ":     https://www.linkedin.com/in/rakshithn1337");
	this.echo("|  " + commandText("Hackthebox") + ":   https://www.hackthebox.eu/home/users/profile/243459");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://www.github.com/rakshith36");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://www.linkedin.com/in/rakshithn1337");
    this.echo();
  },

  hackthebox: function(){
    this.echo();
    this.echo("|  https://www.hackthebox.eu/home/users/profile/243459");
    this.echo();
  },

  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){

    this.echo();
	this.echo("|  " + commandText('Software Developer ') + "at " + commandText("Wipro Limited") + "\n");
    this.echo("|    • Provide effective functions for end users by modifying applications using PeopleCode. ");
    this.echo("|      Support the development, testing and documentation of PeopleSoft applications in accordance with standard development practices. ");
	this.echo();

  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('Rakshith N'));
    this.echo("|  Summary:      I am an Software Engineer who believes in sharing knowledge is the secret to get success. ");
    this.echo();
  },
  
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo();

    this.echo("|  [[g;#B2D100;]Tools] ");
    this.echo("|  " + commandText('Docker') + "            ##[[g;#5BD100;]#####################                       ]       ##");
    this.echo("|  " + commandText('Git') + "               ##[[g;#5BD100;]#############################               ]       ##");
    this.echo("|");

    this.echo("|  [[g;#B2D100;]Programming] ");
    this.echo("|  " + commandText('Python') + "            ##[[g;#5BD100;]###########################   ]                     ##");    
    this.echo("|  " + commandText('C#') + "                ##[[g;#5BD100;]###########################   ]                     ##");    
    this.echo();
    
  },
    
  certification: function(){
    this.echo();
    this.echo("|  CEH - Certified Ethical Hacker Certification No: ECC8671293045");
	this.echo("|  CySA+ Cybersecurity Analyst Certification No: FSKTJ9EHSHFQ1JCK");
    this.echo();
  },
  
  contact: function(){
    this.echo();
    this.echo("|  " + commandText("Email") + ":         patange.rakshith@gmail.com");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Rakshith'));
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo();
  },
  projects: function(){
    this.echo();
    this.echo("|  " + commandText('Anomaly Intrusion Detection System Using Feature Extraction') + "\n|   Implementation of different machine learning algorithms to automatically generate the rules for classifying network activities using NSL-KDD and IDS-2017 datasets.  ");
    this.echo("|  " + commandText('Automation in Python') + "\n|   Python script which logins to Student Portal and displays attendance and marks using selenium.");
    this.echo("|  " + commandText('Alert Mechanism for Homes Based On IOT') + "\n|   Created a prototype for the Intel IOT Roadshow/Hackathon showcasing an alert mechanism, using an Intel Galileo which acts a server and a client simultaneously.");
  
    this.echo();
  },
  download: function(){
    this.exec('resume');
  },
  blog: function(){
    window.location.href = "";
  },
  resume: function(){
    this.echo();
	this.echo("|  Downloading...")
	this.echo();
	window.open("https://rakshith36.github.io/resume.pdf");
  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo("  login function currently under development");
  },
  du: function(){
    this.echo("  100%");
  },
  mv: function(){
    this.echo("  dont't move!");
  },
  cp: function(){
    this.echo("  dont't copy!");
  },
  all: function(){
    this.clear();
    this.exec('about');
    this.exec('work');
    this.exec('skills');
    this.exec('certification');
    this.exec('projects');
    this.exec('social');
    this.exec('contact');
    this.exec('resume');
  },
  mkdir: function(){
    this.echo("  mkdir function currently under development");
  },
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = "https://rakshith36.github.io/resume.pdf";
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
          cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
