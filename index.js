var anonymous_user_id = Math.floor(Math.random() * 9999);
var config = {
  api: "https://retoolapi.dev/1aDnEH/chatroomdata/1",
  ping_dellay: 2500,
  enable_ping: true,
  enable_reciver: true,
  text_color: 'green',
  background_color: 'black',
  border_color: 'green',
  messageCap: 15,
  reciver_dellay: 500,
  port: 1,
};
var system_status = {
  condition: "offline",
  conditions: {
    "server": "offline",

    "reciver": "offline",

    "pinger": "offline",

    "stream": "offline",
    "numb": 0
  },
  version: 'Releace, v1.2.5 -dev stuff'
}
var data = {
  a: true,
  b: true,
  c: 500,
  d: 2000
}

var root = 'https://retoolapi.dev/1aDnEH/chatroomdata/'
// chat room msg alerts

var enable_notif = true

function hello() {
  let xh2r = new XMLHttpRequest();
  var rand = Math.floor(Math.random() * 5)
  var msg;
  if (rand == 0) {
    msg = 'has just slid into the dms...'
  } else if (rand == 1) {
    msg = 'just joined the gc...'
  } else if (rand == 2) {
    msg = 'joined the chat...'
  } else if (rand == 3) {
    msg = 'has entered the chat...'
  } else if (rand == 4) {
    msg = 'just slid in...'
  }

  xh2r.open("GET", config.api);
  xh2r.send();
  now = new Date()
  xh2r.onload = function() {


    if (JSON.parse(this.responseText).numb >= config.messageCap) {
      const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: `<p1 style="color:yellow">` + "< user: " +
            anonymous_user_id +
            ", " + now.toLocaleTimeString() + " >    " +
            `<b>` + msg + `</b></p1><br><br>`,
          numb: JSON.parse(this.responseText).numb = 1,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS += 1,
          is_new_message: true,
          key: JSON.parse(this.responseText).key,
          is_new_ping: true,
					prevs: {
            a: JSON.parse(this.responseText).texts,
						b: JSON.parse(this.responseText).prevs.a,
						c: JSON.parse(this.responseText).prevs.b,
						d: JSON.parse(this.responseText).prevs.c,
					

          }
        }),
      };
      fetch(config.api, requestOptions);
      system_status.conditions.server = "online"
      system_status.conditions.stream = "online"
    } else {

      const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts +
            `<p1 style="color:yellow">` + "< user: " +
            anonymous_user_id +
            ", " + now.toLocaleTimeString() + " >    " +
            `<b>` + msg + `</b></p1><br><br>`,
          numb: JSON.parse(this.responseText).numb += 1,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS += 1,
          is_new_message: true,
          key: JSON.parse(this.responseText).key,
          is_new_ping: true,
					prevs: JSON.parse(this.responseText).prevs
        }),
      };
      fetch(config.api, requestOptions);
      system_status.conditions.server = "online"
      system_status.conditions.stream = "online"





    }

  };

}
hello()
var element = document.createElement("div");
element.innerHTML = `<div id="bg" style="background-color:black">
<title> Apachi Chatroom </title>
<center>
<img style="top:2%;left:2%;position:absolute" src="https://raw.githack.com/apachipro/chat/main/Resources/logo.png" />
<div id="config">
     <button class="button" id="config_lib" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:1%;right:2%;position:absolute">
        Development
    </button>
    <button id="configs" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:5%;right:2%;position:absolute">
        Configs
    </button>
    <button id="sd" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:9%;right:2%;position:absolute">
        Change server
    </button>
		<div style="border-color:green;color:green;width:150px;height:30px;top:13%;right:2%;position:absolute"><button id="server container" style="background-color:black;border-color:green;color:green">+</button> </div>
</div>
<div id="info" style="height:85px; width:395px;">
    <font size="6" style="color:green" class="txt"> Apachi Chat Room </font>
    <br>
    <p1 style="color:green" class="txt">
        Please read the
        <button style="border-color:green;background-color:black;color:green" onclick="window.open('https://raw.githack.com/thefatpotato115/Apachi/main/Support/terms.html')">
            Terms of service
        </button>
        before using the chat room.
        <br>
        <b style="padding-top: 2px;">
            PLEASE USE RESPONSIBLY
        </b>
        <br>
        <b style="padding-top: 2px;">
            Messages reset every 15 messages
    </p1>
</div>
<br>
<p1 style="color:lime"><-- <button  style="color:lime;background-color:black;border-color:green" id="d">3</button> , <button  style="color:lime;background-color:black;border-color:green" id="c">2</button> , <button  style="color:lime;background-color:black;border-color:green" id="b">1</button> , <button style="color:lime;background-color:black;border-color:green" id="a"> 0</button> --></p1>
<br>

<center>
<div style="background-color:rgb(30,30,30);height:85%;width:97.5%" id="frame"> <center><b style="color:lime"id="ping">ping: CONNECTING TO SERVER...</b> <p1 style="color:white"><b>APACHI CHAT ROOM </b><p1 style="color:lime" id="connections"> <b> online users: CONNECTING TO SERVER...</b></p1><b style="color:yellow" id="port">Port:CONNECTING TO SERVER</b><b style="color:yellow" id="key"> Key: CONNECTING TO SERVER...</b></p1><br><br> <p1 style="color:white" id="stream"> CONNECTING TO SERVER... *may take a while </p1>
<br></center>



<br>
</div>
</center>
<input id="intp" style="background-color:black;border-color:green;color:green;width:80%; position: absolute; top:800px;left:7.5%">
<button id="post" style="background-color:black;border-color:green;color:green;position: absolute;top:800px;left:92.5%;" class="button">
    SEND
</button>
<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: green;
  text-align: center;
  border-radius: 6px;
  padding: 2px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 110%;
  left: 110%;
}



.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
		<div id="box" style="height:30px;width:30px;color: transparent; background-color: transparent; border-color: transparent;position: absolute;top:734px;left:35px;"></div>
		
<button class="tooltip" id="add" style="height:27px;width:30px;color: transparent; background-color: transparent; border-color: transparent;position: absolute;top:794px;left:70px;">

    <img src="https://raw.githubusercontent.com/Apachipro/chat/main/Resources/add/green.png">
    <span class="tooltiptext">add content</span>
</button>
</style>


<style>body{ background-color:black} </style>
`;
var tab = window
tab.document.body.appendChild(element);
var send = tab.document.getElementById("post");
var log = tab.document.getElementById("stream");
var name_change = tab.document.getElementById("configs");
var connect = tab.document.getElementById("connections");
var notif = tab.document.getElementById("sd");
var pingtxt = tab.document.getElementById("ping");
var conf = tab.document.getElementById("config_lib");
var ps = document.getElementById("add");
var txt = tab.document.getElementsByClassName("txt");
var cntt = tab.document.getElementById("box");
var container = tab.document.getElementById("server container");
var porter = tab.document.getElementById("port");
var a = tab.document.getElementById("a");
var b = tab.document.getElementById("b");
var c = tab.document.getElementById("c");
var d = tab.document.getElementById("d");
var sending_img = false;
var clicked = false;
var listener_port;
var key = tab.document.getElementById("key");

// history logs
d.onclick = function(){
	var his = new XMLHttpRequest();
	his.open("GET",config.api)
	his.onload = function(){
	d.style = "background-color:black;border-color:yellow;color:yellow";
	c.style = "background-color:black;border-color:green;color:lime"
	b.style = "background-color:black;border-color:green;color:lime"
	a.style = "background-color:black;border-color:green;color:lime"
	log.innerHTML =JSON.parse(this.responseText).prevs.c}
	his.send()
}
c.onclick = function(){
	var his = new XMLHttpRequest();
	his.open("GET",config.api)
	his.onload = function(){
	c.style = "background-color:black;border-color:yellow;color:yellow"
	b.style = "background-color:black;border-color:green;color:lime"
	d.style = "background-color:black;border-color:green;color:lime"
	a.style = "background-color:black;border-color:green;color:lime"
	log.innerHTML =JSON.parse(this.responseText).prevs.b}
	his.send()
}

b.onclick = function(){
	var his = new XMLHttpRequest();
	his.open("GET",config.api)
	his.onload = function(){
	b.style = "background-color:black;border-color:yellow;color:yellow"
	c.style = "background-color:black;border-color:green;color:lime"
	d.style = "background-color:black;border-color:green;color:lime"
	a.style = "background-color:black;border-color:green;color:lime"
	log.innerHTML =JSON.parse(this.responseText).prevs.a}
	his.send()
}
// reset
a.onclick = function(){
	var his = new XMLHttpRequest();
	his.open("GET",config.api)
	his.onload = function(){
	a.style = "background-color:black;border-color:yellow;color:yellow"
	c.style = "background-color:black;border-color:green;color:lime"
	d.style = "background-color:black;border-color:green;color:lime"
	b.style = "background-color:black;border-color:green;color:lime"
	log.innerHTML =JSON.parse(this.responseText).texts}
	his.send()
}

// listen to servers

container.onclick = function() {
  sending_img = true;
  alert("this will check for new messages in other servers just enter a server port!")
  const port = prompt("server port *no spaces, some may require a key.");
  if (port !== "" || port !== null) {
    container.innerHTML = "port: " + port
    listener_port = port
    var xhr = new XMLHttpRequest();
    xhr.open("GET", root + port);
    xhr.onload = function() {
      console.log("s")
      if (JSON.parse(this.responseText).key == undefined) {
        sending_img = false;
        lr()
      } else {
        var key = prompt("enter server key")
        if (key == JSON.parse(this.responseText).key) {
          alert("success")
          lr()
          sending_img = false;

        } else {
          alert("failed");
          sending_img = false
        }

      }

    }
    xhr.send()
  };
};

function lr() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", root + listener_port);
  xhr.onload = function() {
    if (JSON.parse(this.responseText).is_new_ping == true) {
      container.style.background = "red"
      console.log("yay");

      const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts,
          numb: JSON.parse(this.responseText).numb,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          is_new_message: JSON.parse(this.responseText).is_new_message,
          key: JSON.parse(this.responseText).key,
          is_new_ping: false,
          prevs: JSON.parse(this.responseText).prevs
        }),
      };
      fetch(root + listener_port, requestOptions);

      function e() {
        container.style.background = 'black'
      }
      setTimeout(e, 2000)






    }

  };
  xhr.send();
  setTimeout(lr, 500);
}






//=======* change servers *===========//



sd.onclick = function() {
  sending_img = true
  alert("to change servers you must enter a number between 1-100 anything above is a private server and must require a ket. no spaces the default channle is 1. private demo server is 100 and key is demo")
  var port = prompt("enter channle number");
  if (port == null || port == "") {
    alert("canceled")
  } else {
    if (port >= 100) {
      var req = new XMLHttpRequest()
      req.open('GET', root + port)
      req.onload = function() {



        // make new server
        if (JSON.parse(this.responseText).key == undefined) {
          alert("you are now creating a private server please memorize the key or copy it down because once you enter it is irriversible. unless you click cancel on next prompt")
          var entere_key = prompt("Make server key");
          if (entere_key == "" || entere_key == null) {
            alert("canceling")
          } else {
            const element = document.querySelector(
              "#put-request-set-headers .date-updated",
            );
            const requestOptions2 = {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                texts: JSON.parse(this.responseText).texts+=`<b style="color:red">This is the start of a new server </b>`,
                numb: 1,
                CURRENT_CONNECTIONS: 0,
                is_new_message: true,
                key: entere_key,
                is_new_ping: false,
                          prevs: {
            a: '',
						b:'',
						c:'',
						d:'',
          }
              }),
            };
            fetch('https://retoolapi.dev/1aDnEH/chatroomdata/' + port, requestOptions2);
            config.port = port
            config.api = root + port;
            req.open('GET', config.api)
            req.onload = function() {
              log.innerHTML = JSON.parse(this.responseText).texts;
              hello()

            }
            req.send()


          }
        }
        // enter server key
        else {
          var user_key = prompt("Please enter a server key")
          if (JSON.parse(this.responseText).key == user_key) {
            alert("success")
            config.api = root + port
            config.port = port
            req.open('GET', config.api)
            req.onload = function() {
              log.innerHTML = JSON.parse(this.responseText).texts;
              hello();

            }
            req.send()

          } else {
            alert("failed")
            config.api = root + '1';
            config.port = 1
            req.open('GET', config.api)
            req.onload = function() {
              log.innerHTML = JSON.parse(this.responseText).texts

            }
            req.send()
          }

        }

      }
      req.send()
    }

    //pub servers
    else {
      config.api = root + port;
      config.port = port
      var req = new XMLHttpRequest()
      req.open('GET', config.api)
      req.onload = function() {
        log.innerHTML = JSON.parse(this.responseText).texts;
        hello()
        if (JSON.parse(this.responseText).texts == undefined) {
          const element = document.querySelector(
            "#put-request-set-headers .date-updated",
          );
          const requestOptions2 = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              texts: `<b style="color:red">This is the start of a new server </b>`,
              numb: 1,
              CURRENT_CONNECTIONS: 0,
              is_new_message: true,
              key: null,
              is_new_ping: JSON.parse(this.responseText).is_new_ping,
                        prevs: {
            a: '',
						b:'',
						c:'',
						d:'',

          }
            }),
          };
          fetch(root + port, requestOptions2);
          hello()

        }


      }
      req.send()
    }


  }
}

ps.onclick = function() {
  if (clicked == true) {
    cntt.innerHTML = ``;
    clicked = false
  } else {
    clicked = true
    console.log("click")
    cntt.innerHTML = `<button id="vidr" style="background-color:black;border-color:green;color:lime;width:50px">+vid</button><br><button id="imgr" style="background-color:black;border-color:green;color:lime;width:50px">+img</button> <button id="li" style="background-color:black;border-color:green;width:50px;color:lime">+url</button>`
    var link;
    var x = document.getElementById("imgr");
    x.onclick = function() {
      sending_img = true;
      cntt.innerHTML = null
      link = prompt("Enter img url");
      if (link !== "") {
        tab.document.getElementById("intp").value = `<img src=` + link + `> </img>`
        send.click();
      }


    }
    var z = document.getElementById("vidr");
    z.onclick = function() {
      sending_img = true;
      cntt.innerHTML = null
      link = prompt("Enter img url");
      if (link !== "") {
        tab.document.getElementById("intp").value = `<iframe src=` + link + `> </iframe>`
        send.click();
      }

    }

    var y = document.getElementById("li");
    y.onclick = function() {
      sending_img = true;
      cntt.innerHTML = null
      var txt = prompt("Enter txt")
      link = prompt("Enter url");
      tab.document.getElementById("intp").value = `<a href=` + link + `> ` + txt + `</a>`
      send.click();


    }
  }


}



conf.onclick = function() {
  tab.document.body.removeChild(element)
  var x = tab.document.createElement('div')
  x.innerHTML = `<div class="collum"><b style="color:lime"> <center> made by daschoolcoder and thefatpotato11 on github</b>
<br>
<button id="return" style="color:lime;background-color:black;border-color:white"> ---> RETURN <---</button> <button id="dev" style="color:lime;background-color:black;border-color:white"> console *dev only </button>
<br>
<br>
<br>
<b class="line" id="ping">Ping:</b><br>
<b class="line" id="reciver_stats">Reciver_status</b><br>
<b class="line" id="version"> Server:</b><br>
<b class="line" id="system"> System:</b><br>
<b class="line" style="color:white">Version: </b>
<br>
<br>
<h1 style="color:white">Future Plans</h1>
<p1 style="color:white"> closer to green = priority</p1>
<br>
<br>
<p1 style="color:orange">config saves</p1><br>
<p1 style="color:red"> web domain -will require ads after 1 year cuz dont have job :(</p1><br>
<p1 style="color:yellow"> bug fixes</p1><br>
<p1 style="color:yellow"> color configs -the bane of my existanse smh</p1><br>
<br>
<p1>
<br>
<br>
<h1 style="color:white">Bug tracker</h1> <p1 style="color:white">/priority list closer to red = severity</p1><br>
<br>
<p1 style="color:yellow"> Weird current connections glich with private servers -known bug</p1><br>
<p1 style="color:lime"> current connections acting up -not right now</p1><br>
<p1 style="color:lime"> going to third page poping up with undifined -there are not enough messages for the third page</p1><br>
<p1 style="color:orange"> thats it :/</p1><br>
<center>
</div>


<title> Apachi chat config</title>
<style> body{background-color:black}</style>
`
  tab.document.body.appendChild(x)
  var lines = document.getElementsByClassName("line")
  var retur = document.getElementById("return");
	var console = document.getElementById("dev")
	
	console.onclick = function(){
	alert("DEVELOPER EYES ONLY *requires psw")
	var psw = prompt("ENTER PASSWORD")
	var apples = eval(atob('YXRvYignUVZCQlEwaEpYMFJGVmw5VVJVRk5YMFZaUlZNPScp'))
	if(psw == apples){
	alert("ya")
	var window = document.createElement("div")
	window.innerHTML = `
	<center><div style="position:absolute;background-color:rgb(20,20,20);width:95%;height:80%"><p1 style="color:white" id="log">> welcome developer to the main control terminal, use this to reset server keys due to inactivity, clear message history and more<br> >BE CAREFUL NOT TO SCREW ANYTHING UP </p1>
	<input style="position:absolute;left:20%;top:80%;width:55%" id="command"></center>
	<style>body{background-color:black}</style>
	`
	document.body.appendChild(window);
	document.body.removeChild(x);
	
	var t = document.getElementById("log");
	var cmd = document.getElementById("command")
	var count=2
	var runningCmd={"cmd":null,"buls":null,data:null,port:null,a:false}
	tab.document
  .getElementById("command")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
	//====================== COUNT RES =====================//
		if(count >=24){
			t.innerHTML = '> Generated New Line ';
			count=1
		}
			
			
	//====================== Help ==========================//
		  if(cmd.value == "help()" || cmd.value == "help" || cmd.value == null || cmd.value == "") {
				t.innerHTML += `<br>`+"> help() -list of cmds"+`<br>`+"> resKey() -server key reset"+`<br>`+"> resAll() -entire server reset"+`<br>`+'> return() -return to main'+`<br>`+'> getData() -gets data from server(s)'+`<br>`+'> resCon() -resets connections' + `<br>`+'> msg() -messages server' +`<br>`+'> purge() -COMPLETLE REMOVES AND REPLACES ALL SERVER DATA' +`<br>` +'> updateSer() -updates server json' +`<br>`+'> updateAll() -updates all servers json'
				count +=10
			
			}
	//====================== Return ========================//
			if(cmd.value == "return()") {
				document.body.appendChild(x)
				document.body.removeChild(window)
			}
 //======================== UPDATE SERVER ================//

      if(cmd.value =="updateSer()") {
			
			t.innerHTML += `<br>`+"> updateSer()" ;
			t.innerHTML += `<br>`+"> Enter Server Id " ;
			runningCmd.cmd = "update"
			count +=2
			cmd.value=""
			return
			}
			
			if(runningCmd.cmd == "update"){
			runningCmd.buls = cmd.value
			t.innerHTML += `<br>`+'> Updating Server '+ runningCmd.buls+' ...';
			var xhr= new XMLHttpRequest();
			xhr.open("GET",root+runningCmd.buls);
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts += `<br>` +`<p1 style="color:lime"> Your Server Has Been Updated! </p1>`,
          numb: JSON.parse(this.responseText).numb +=1,
          CURRENT_CONNECTIONS:JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          is_new_message: JSON.parse(this.responseText).is_new_message,
          key: JSON.parse(this.responseText).key,
          is_new_ping: JSON.parse(this.responseText).is_new_ping,
					prevs: {
					a:JSON.parse(this.responseText).prevs.a,
					b:JSON.parse(this.responseText).prevs.b,
					c:JSON.parse(this.responseText).prevs.c,
					d:JSON.parse(this.responseText).prevs.d
					}
        }),
      };
      fetch(root+runningCmd.buls, requestOptions);
			t.innerHTML += `<br>`+'> Server Reset!';
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""
			}
			xhr.send()
			}			

			
			
	//====================== PURGE SERVER ==================//
	
      if(cmd.value =="purge()") {
			
			t.innerHTML += `<br>`+"> purge()" ;
			t.innerHTML += `<br>`+"> Enter Server Id " ;
			runningCmd.cmd = "purge"
			count +=2
			cmd.value=""
			return
			}
			
			if(runningCmd.cmd == "purge"){
			runningCmd.buls = cmd.value
			t.innerHTML += `<br>`+'> Purging Server '+ runningCmd.buls+' ...';
			var xhr= new XMLHttpRequest();
			xhr.open("GET",root+runningCmd.buls);
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: `<p1 style="color:lime"> < console > your server has been purged this is likely because this server has broke our TOS`,
          numb: 1,
          CURRENT_CONNECTIONS: null,
          is_new_message: false,
          key: null,
          is_new_ping: false,
					prevs: {
					a:'',
					b:'',
					c:'',
					d:''
					}
        }),
      };
      fetch(root+runningCmd.buls, requestOptions);
			t.innerHTML += `<br>`+'> Server Purged!';
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""
			}
			xhr.send()
			}
	
	
	//====================== GET DATA ======================//
			if(cmd.value =="getData()"){
				runningCmd.cmd = "getData"
				t.innerHTML += `<br>`+"> getData()";
				t.innerHTML += `<br>`+"> Enter Server Id"
				cmd.value = ''
				count +=2
				return
			}
			if(runningCmd.cmd=="getData"){
			var xhr = new XMLHttpRequest();
			xhr.open("GET",root + cmd.value)
			xhr.onload = function(){
			t.innerHTML +=`<br>`+'> '+this.responseText
			count +=21
			}
			xhr.send()
			}
	//====================== SEND MSG ======================//	
			if(cmd.value =="msg()") {
			
			t.innerHTML += `<br>`+"> msg()" ;
			t.innerHTML += `<br>`+"> Enter Server Id" ;
			runningCmd.cmd = "msg"
			cmd.value=""
			count +=2
			return
			}
			if(runningCmd.cmd =="msg") {
			
			t.innerHTML += `<br>`+"> Enter Data" ;
			runningCmd.buls = 'msg'
			runningCmd.port = cmd.value
			runningCmd.cmd = null
			cmd.value=""
			count +=1
			return
			}
			
			if (runningCmd.buls == 'msg') {
			
			t.innerHTML += `<br>`+"> Running Put Req..." 
			var xhr= new XMLHttpRequest();
			xhr.open("GET", root+runningCmd.port)
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts += `<b style="color:lime">`+'< console message > '+cmd.value +`</b> <br>`,
          numb: JSON.parse(this.responseText).numb,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          is_new_message: true,
          key: JSON.parse(this.responseText).key,
          is_new_ping: true,
					prevs: JSON.parse(this.responseText).prevs
        }),
      } ;
      fetch(root+runningCmd.port, requestOptions);
			t.innerHTML += `<br>`+'> Server Message Sent!';
			
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""}
			xhr.send()
	
			}
			
	//====================== CONNECTION RESET===============//
			if(cmd.value =="resCon()") {
			
			t.innerHTML += `<br>`+"> resCon()" ;
			t.innerHTML += `<br>`+"> Enter Server Id" ;
			runningCmd.cmd = "resCon"
			cmd.value=""
			count +=2
			return
			}
			
			if(runningCmd.cmd == "resCon"){
			runningCmd.buls = cmd.value
			t.innerHTML += `<br>`+'> Reseting Server Connections '+ runningCmd.buls+' ...';
			var xhr= new XMLHttpRequest();
			xhr.open("GET",root+runningCmd.buls);
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts,
          numb: JSON.parse(this.responseText).numb,
          CURRENT_CONNECTIONS: 0,
          is_new_message: JSON.parse(this.responseText).is_new_message,
          key: JSON.parse(this.responseText).key,
          is_new_ping: JSON.parse(this.responseText).is_new_ping,
					prevs: JSON.parse(this.responseText).prevs
        }),
      };
      fetch(root+runningCmd.buls, requestOptions);
			t.innerHTML += `<br>`+'> Server Connections Reset!';
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""}
			xhr.send()
			}
		
			
	//====================== KEY RESET =====================//
      if(cmd.value =="resKey()") {
			
			t.innerHTML += `<br>`+"> resKey()" ;
			t.innerHTML += `<br>`+"> Enter Server Id *>99" ;
			count +=2
			runningCmd.cmd = "resKey"
			cmd.value=""
			return
			}
			
			if(runningCmd.cmd == "resKey"){
			runningCmd.buls = cmd.value
			t.innerHTML += `<br>`+'> Reseting Server Key '+ runningCmd.buls+' ...';
			var xhr= new XMLHttpRequest();
			xhr.open("GET",root+runningCmd.buls);
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts,
          numb: JSON.parse(this.responseText).numb = 1,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          is_new_message: false,
          key: null,
          is_new_ping: false,
					prevs: JSON.parse(this.responseText).prevs
        }),
      };
      fetch(root+runningCmd.buls, requestOptions);
			t.innerHTML += `<br>`+'> Server Key Reset!';
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""}
			xhr.send()
			}
		
		
//======================* TOTAL SERVER RESET *============================//

      if(cmd.value =="resAll()") {
			
			t.innerHTML += `<br>`+"> resAll()" ;
			t.innerHTML += `<br>`+"> Enter Server Id " ;
			runningCmd.cmd = "resAll()"
			count +=2
			cmd.value=""
			return
			}
			
			if(runningCmd.cmd == "resAll()"){
			runningCmd.buls = cmd.value
			t.innerHTML += `<br>`+'> Reseting Server '+ runningCmd.buls+' ...';
			var xhr= new XMLHttpRequest();
			xhr.open("GET",root+runningCmd.buls);
			xhr.onload = function(){
			 const elementz = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: null,
          numb: null,
          CURRENT_CONNECTIONS: null,
          is_new_message: false,
          key: null,
          is_new_ping: false,
					prevs: {
					a:'',
					b:'',
					c:'',
					d:''
					}
        }),
      };
      fetch(root+runningCmd.buls, requestOptions);
			t.innerHTML += `<br>`+'> Server Reset!';
			runningCmd.buls=null
			runningCmd.cmd = null
			count +=2
			cmd.value=""
			}
			xhr.send()
			}
		
			
    }
  });
	
	
	}
	else{
	alert("fail")
	}
	} 
	
  retur.onclick = function() {
    tab.document.body.removeChild(x)
    tab.document.body.appendChild(element)

  }

  function update_lines() {
    lines[0].innerHTML = "Pinger: " + system_status.conditions.pinger
    if (system_status.conditions.stream == "online") {
      lines[0].style = "color:lime"
    } else {
      lines[0].style = "color:red"
    }
    lines[1].innerHTML = "Reciver: " + system_status.conditions.pinger
    if (system_status.conditions.reciver == "online") {
      lines[1].style = "color:lime"
    } else {
      lines[1].style = "color:red"
    }
    lines[2].innerHTML = "Server: " + system_status.conditions.pinger
    if (system_status.conditions.server == "online") {
      lines[2].style = "color:lime"
    } else {
      lines[2].style = "color:red"
    }
    lines[3].innerHTML = "stream: " + system_status.conditions.stream
    if (system_status.conditions.stream == "online") {
      lines[3].style = "color:lime"
    } else {
      lines[3].style = "color:red"
    }
  }

  update_lines();

  lines[4].innerHTML += system_status.version

}

//when the user leaves

window.addEventListener('beforeunload', function(e) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", config.api);
  xhr.send();
  xhr.onload = function() {
    const elementz = document.querySelector(
      "#put-request-set-headers .date-updated",
    );
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texts: JSON.parse(this.responseText).texts +
          `<p1 style="color:yellow">` + "< user: " +
          anonymous_user_id +
          " >    " +
          `<b>has left the chat</b></p1><br><br>`,
        numb: 1,
        CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS - 1,
        is_new_message: true,
        key: JSON.parse(this.responseText).key,
        is_new_ping: JSON.parse(this.responseText).is_new_ping,
        prevs: JSON.parse(this.responseText).prevs
      }),
    };
    fetch(config.api, requestOptions);
  };
});

// Example usage:

var reciverr = {
  status: "offline",
  connected: false
}

function reciver() {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", config.api);
  xhr.send();
  xhr.onload = function() {
    reciverr.connected = true;
    reciverr.status = "ACTIVE";
    if (JSON.parse(this.responseText).key == undefined) {
      key.innerHTML = null
    } else {
      key.innerHTML = " Key: " + JSON.parse(this.responseText).key
    }
    if (JSON.parse(this.responseText).is_new_message == true) {
      log.innerHTML = JSON.parse(this.responseText).texts;
    }

    if (JSON.parse(this.responseText).is_new_message == true) {
      reciverr.status = "TRIGGERED"
      const element = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions2 = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts,
          numb: JSON.parse(this.responseText).numb,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          is_new_message: false,
          key: JSON.parse(this.responseText).key,
          is_new_ping: JSON.parse(this.responseText).is_new_ping,
          prevs: JSON.parse(this.responseText).prevs
        }),
      };

      fetch(config.api, requestOptions2);
      connect.innerHTML =
        "online users:" + JSON.parse(this.responseText).CURRENT_CONNECTIONS;
      reciverr.status = "ACTIVE";
      system_status.conditions.reciver = "online"
      system_status.conditions.stream = "online"
    }
  }
  if (config.enable_ping == false) {
    pingtxt.innerHTML = null
  };
  if (config.enable_reciver == true) {
    setTimeout(reciver, config.reciver_dellay);
  }
}
reciver();

function delete_msg() {
  tab.document.getElementById("intp").value = "";
}
tab.document
  .getElementById("intp")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      send.click();
      setTimeout(550, delete_msg);
    }
  });


//configs ==========================


name_change.onclick = function() {
  var win = document.createElement("div");
  win.innerHTML = `
    <body>
      <center>
        <h1 style="color:green">
          Configs
        </h1>
        <p1 style="color:white">
          Please only touch things that you understand. These options could break something.
        </p1>
        <br>
        <button id="return" style="color:green;background-color:black;border-color:green">
          Return
        </button> 
        <br>
        <br>
        <br>
        <button id="colors" style="background-color:black;border-color:green;color:green;width:150px;">
        Change Color Scheme
    </button>
    <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Enable Ping
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Ping Delay
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Reciever Delay
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Enable Reciever
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button id="enter" style="background-color:black;border-color:green;color:green;">
          Update Name
        </button>
        <input id="enterr" style="color:green;background-color:black;border-color:green">
      </center>
    <style> body{background-color:black}
    </style>
`
  tab.document.body.appendChild(win);
  tab.document.body.removeChild(element)
  var returnn = document.getElementById("return");
  var btns = document.getElementsByClassName("button");
  var value = document.getElementsByClassName("value")
	var enter = document.getElementById("enter")
	
	document
  .getElementById("enterr")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      enter.click();
    }
  });
	
	
	
	enter.onclick = function(){
		anonymous_user_id = document.getElementById("enterr").value
		document.getElementById("enterr").value = ''
	
	}

  // easy return
  returnn.onclick = function() {
    tab.document.body.appendChild(element);
    tab.document.body.removeChild(win)


  }
  btns[0].onclick = function() {
    console.log(config)
    if (data.a == true){
      config.enable_ping = false
    value[0].style = "color:red"
    value[0].innerHTML = 'off';
    data.a = false
  }

  else {
    config.enable_ping = true
    value[0].style = "color:lime"
    value[0].innerHTML = 'on';
    data.a = true
		getping()
  }
}
//====================next
btns[3].onclick = function() {
    console.log(config)
    if (data.b == true){
      config.enable_reciver = false
    value[3].style = "color:red"
    value[3].innerHTML = 'off';
    data.b = false
  }

  else {
    config.enable_reciver = true
    value[3].style = "color:lime"
    value[3].innerHTML = 'on';
    data.b = true
		reciver()
  }
}

//=======next========//

  btns[1].onclick = function() {
    config.ping_dellay +=100 
				//ifs :/
		if(config.ping_dellay >= 0 && config.ping_dellay <= 1200){
    	value[1].style = "color:lime"}
	  else if(config.ping_dellay >= 1200 && config.ping_dellay <= 2500){
    	value[1].style = "color:yellow"}
		else if(config.ping_dellay >= 2500 && config.ping_dellay <= 3700){
    	value[1].style = "color:orange"}
		else if(config.ping_dellay >= 3700 && config.ping_dellay <= 5500){
    	value[1].style = "color:red"}
		else if(config.ping_dellay >= 7500){
    	config.ping_dellay=0}
    value[1].innerHTML = config.ping_dellay;

  }
  btns[2].onclick = function() {
    config.reciver_dellay +=100 
				//ifs :/
		if(config.reciver_dellay >= 0 && config.reciver_dellay <= 1200){
    	value[2].style = "color:lime"}
	  else if(config.reciver_dellay >= 1200 && config.reciver_dellay <= 2500){
    	value[2].style = "color:yellow"}
		else if(config.reciver_dellay >= 2500 && config.reciver_dellay <= 5500){
    	value[2].style = "color:red"}
		else if(config.reciver_dellay >= 5500){
    	config.reciver_dellay=0}
    value[2].innerHTML = config.reciver_dellay;

  }



//========* SYNC DATA *========//
 
 
 
 if (data.a == false){
    value[0].style = "color:red"
    value[0].innerHTML = 'off';
  }

  else {
    value[0].style = "color:lime"
    value[0].innerHTML = 'on';
  }
//=============================next
 if (data.b == false){
    value[3].style = "color:red"
    value[3].innerHTML = 'off';
  }

  else {
    value[3].style = "color:lime"
    value[3].innerHTML = 'on';
  }
//=============================next
		if(config.ping_dellay >= 0 && config.ping_dellay <= 1200){
    	value[1].style = "color:lime"}
	  else if(config.ping_dellay >= 1200 && config.ping_dellay <= 2500){
    	value[1].style = "color:yellow"}
		else if(config.ping_dellay >= 2500 && config.ping_dellay <= 3700){
    	value[1].style = "color:orange"}
		else if(config.ping_dellay >= 3700 && config.ping_dellay <= 5500){
    	value[1].style = "color:red"}
		else if(config.ping_dellay >= 7500){
    	config.ping_dellay=0}
    value[1].innerHTML = config.ping_dellay;
		
//=============================next

		if(config.reciver_dellay >= 0 && config.reciver_dellay <= 1200){
    	value[2].style = "color:lime"}
	  else if(config.reciver_dellay >= 1200 && config.reciver_dellay <= 2500){
    	value[2].style = "color:yellow"}
		else if(config.reciver_dellay >= 2500 && config.reciver_dellay <= 5500){
    	value[2].style = "color:red"}
		else if(config.reciver_dellay >= 5500){
    	config.reciver=0}
    value[2].innerHTML = config.reciver_dellay;
//=============================next
	document.getElementById("enterr").value = anonymous_user_id;

var fix = document.getElementById('colors')
fix.onclick = function() {
  var winw = document.createElement("div");
  winw.innerHTML = `
    <body>
      <center>
        <h1 style="color:green">
          Color Changer
        </h1>
        <p1 style="color:white">
          This is where you can change the colors on the main page.
        </p1>
        <br>
        <button id="return" style="color:green;background-color:black;border-color:green">
          Return
        </button> 
        <br>
        <br>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Text color
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Background color
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Button color
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Inner button color
        </button>
        <p1 class="value">
        </p1>
        <br>
        <button class="button" style="background-color:black;border-color:green;color:green;width:125px">
          Add button color
        </button>
        <p1 class="value">
        </p1>
      </center>
    <style> body{background-color:black}
    </style>
`;
document.body.appendChild(winw);
document.body.removeChild(win);

var returnnn=document.getElementById("return")
returnnn.onclick = function(){
document.body.appendChild(win)
document.body.removeChild(winw)
}

}}



let xhr = new XMLHttpRequest();
xhr.open("GET", config.api);
xhr.send();
xhr.onload = function() {
  log.innerHTML = JSON.parse(this.responseText).texts;
};

send.onclick = function() {
  var value;
  if (sending_img == true) {
    value = 3
  } else {
    value = 1
  }
	var data;
  var new_message = tab.document.getElementById("intp");
  xhr.open("GET", config.api);
  var now = new Date();
  xhr.send();
  xhr.onload = function() {
	
    log.innerHTML = JSON.parse(this.responseText).texts;
    if (JSON.parse(this.responseText).numb >= config.messageCap) {
      log.innerHTML = "";
      console.log("clear");
      const element = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: "< user: " +
            anonymous_user_id +
            ", " + now.toLocaleTimeString() + " >    " +
            new_message.value +
            `<br><br>`,
          numb: 0,
          is_new_message: true,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          key: JSON.parse(this.responseText).key,
          is_new_ping: true,
					prevs: {
            a: JSON.parse(this.responseText).texts,
						b: JSON.parse(this.responseText).prevs.a,
						c: JSON.parse(this.responseText).prevs.b,
						d: JSON.parse(this.responseText).prevs.c,
					

          }
        }),
      }  
			fetch(config.api, requestOptions)
			
      fetch(config.api, requestOptions)
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
        .then((log.innerHTML = JSON.parse(this.responseText).texts))
        .then((new_message.value = ""));

      //====================== UPDATE CHAT ROOM TEXTS =========================//
      const xhr = new XMLHttpRequest();
      xhr.open("GET", config.api);
      xhr.onload = function() {
        log.innerHTML += new_message.value;

      }
      xhr.send()

    } else {
      const element = document.querySelector(
        "#put-request-set-headers .date-updated",
      );
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          texts: JSON.parse(this.responseText).texts +
            "< user: " +
            anonymous_user_id +
            ", " + now.toLocaleTimeString() + " >    " +
            new_message.value +
            `<br><br>`,
          numb: JSON.parse(this.responseText).numb + value,
          is_new_message: true,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
          key: JSON.parse(this.responseText).key,
          is_new_ping: true,
					prevs: JSON.parse(this.responseText).prevs
        }),
      };
      fetch(config.api, requestOptions)
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
        .then((log.innerHTML = JSON.parse(this.responseText).texts))
        .then((new_message.value = null));

      //====================== UPDATE CHAT ROOM TEXTS =========================//
      const xhr = new XMLHttpRequest();
      xhr.open("GET", config.api);
      xhr.onload = function() {
        log.innerHTML += new_message.value;

      }
      xhr.send()
    }
    var n = tab.document.getElementById("intp");
  };
};



//============= PING ===============//

function pingServer(url, callback) {
  var started = new Date().getTime();
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      var ended = new Date().getTime();
      var milliseconds = ended - started;
      callback(milliseconds);
    }
  };

  request.open("GET", url, true);
  request.send(null);
}
var crash_status
// Usage
function getping() {
  porter.innerHTML = " Port: " + config.port
  pingServer(config.api, function(ping) {
    if (ping <= 300) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:lime">` + ping + 'ms' + `</p1>`;
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }
    } else if (ping >= 300 && ping <= 600) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:yellow">` + ping + 'ms' + `</p1>`
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }
    } else if (ping >= 600 && ping <= 900) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:orange">` + ping + 'ms' + `</p1>`
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }

    } else if (ping >= 900 && ping <= 1200) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:red">` + ping + 'ms' + `</p1>`
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }

    } else if (ping >= 1200 && ping <= 8000) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:darkred">` + ping + 'ms' + `</p1>`;
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }
    } else if (ping >= 8000 && ping <= 20000) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:gray">` + ping + 'ms' + `</p1>`;
    } else if (ping >= 20000 && sending_img == false) {
      var wait_screen = document.createElement("div");
      wait_screen.innerHTML = `<center>
  <h1 style="color:red"> you've crashed</h1>
  <br>
  <p1 style="color:red"> your ping: <p1 style="color:lime;top:50%;left:50%" id="pingg"></p1></p1>
  <br>
  <br>
  <p1 style="color:lime">your server response time got over 20000s! you have been kicked off because it could be dangerous to our servers. please close the page and open it again once you have a stable connection<br> <b> exiting with code 101</b></p1>
  </center>
  <br>
 
 
  <title>uh oh</title><style> body{background-color:black}</style>`
      tab.document.body.removeChild(element);
      tab.document.body.appendChild(wait_screen)
      tab.document.getElementById("pingg").innerHTML = ping;
      crash_status = true;

    }


    ;
    system_status.conditions.pinger = "online";
    if (config.enable_ping == true) {
      setTimeout(getping, config.ping_dellay)
    }

  })


};
getping();
