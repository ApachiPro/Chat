var anonymous_user_id = Math.floor(Math.random() * 9999);
var config = {
  api: "https://retoolapi.dev/1aDnEH/chatroomdata/1",
  ping_dellay: 2500,
  text_color: 'green',
  background_color: 'black',
  border_color: 'green',
  messageCap: 15,
	port:1
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
  version: 'Releace, v1.0.2 -Hot fix'
}
// chat room msg alerts
var enable_notif = true

function hello(){
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
				key:JSON.parse(this.responseText).key
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
        de-bug
    </button>
    <button id="name_changer" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:5%;right:2%;position:absolute">
        Change Name
    </button>
    <button id="sd" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:9%;right:2%;position:absolute">
        Change server(s)
    </button>
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
            Messages reset every 15 messages.
        </b>
    </p1>
</div>
<br>
<br>
<center>
<div style="background-color:rgb(30,30,30);height:87%;width:97.5%" id="frame"> <center><b style="color:lime"id="ping">ping: CONNECTING TO SERVER...</b> <p1 style="color:white"><b>APACHI CHAT ROOM </b><p1 style="color:lime" id="connections"> <b> online users: CONNECTING TO SERVER...</b></p1><b style="color:yellow" id="port">Port:CONNECTING TO SERVER</b></p1><br><br> <p1 style="color:white" id="stream"> CONNECTING TO SERVER... *may take a while </p1>
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
var name_change = tab.document.getElementById("name_changer");
var connect = tab.document.getElementById("connections");
var notif = tab.document.getElementById("sd");
var pingtxt = tab.document.getElementById("ping")
var conf = tab.document.getElementById("config_lib")
var ps = document.getElementById("add")
var txt = tab.document.getElementsByClassName("txt");
var cntt = tab.document.getElementById("box");
var porter = tab.document.getElementById("port");
var sending_img = false;
var clicked = false;

//=======* change servers *===========//

sd.onclick = function() {
  sendingg_img = true
  alert("to change servers you must enter a number between 1-100 anything above is a private server and must require a ket. no spaces the default channle is 1. if data says undifined then it is a new server no ione has been to")
  var port = prompt("enter channle number");
	if (port == null || port == ""){alert("canceled")} else{
  if (port >= 100) {
    var req = new XMLHttpRequest()
    req.open('GET', 'https://retoolapi.dev/1aDnEH/chatroomdata/' + port)
    req.onload = function() {
	
	

      // make new server
      if (JSON.parse(this.responseText).key == undefined) {
        alert("you are now creating a private server please memorize the key or copy it down because once you enter it is irriversible. unless you click cancel on next prompt")
        var entere_key = prompt("Make server key");
				if(entere_key == "" || entere_key == null){alert("canceling")} else{
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
            key: entere_key
          }),
        };
        fetch('https://retoolapi.dev/1aDnEH/chatroomdata/' + port, requestOptions2);
				config.port = port
        config.api = 'https://retoolapi.dev/1aDnEH/chatroomdata/' + port;
        req.open('GET', config.api)
        req.onload = function() {
          log.innerHTML = JSON.parse(this.responseText).texts;
					hello()
					
        }
        req.send()


      }}
      // enter server key
      else {
        var user_key = prompt("Please enter a server key")
        if (JSON.parse(this.responseText).key == user_key) {
          alert("success")
          config.api = 'https://retoolapi.dev/1aDnEH/chatroomdata/' + port
					config.port = port
          req.open('GET', config.api)
          req.onload = function() {
            log.innerHTML = JSON.parse(this.responseText).texts;
						hello();

          }
          req.send()

        } else {
          alert("failed")
          config.api = 'https://retoolapi.dev/1aDnEH/chatroomdata/1';
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
    config.api = 'https://retoolapi.dev/1aDnEH/chatroomdata/' + port
    var req = new XMLHttpRequest()
    req.open('GET', config.api)
    req.onload = function() {
      log.innerHTML = JSON.parse(this.responseText).texts;
			hello()
			if(JSON.parse(this.responseText).texts == undefined){
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
            key:null
          }),
        };
        fetch('https://retoolapi.dev/1aDnEH/chatroomdata/' + port, requestOptions2);
				hello()

}
			

    }
    req.send()
  }


}}

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
      link = prompt("Enter url");
      tab.document.getElementById("intp").value = `<a href=` + link + `> eee</a>`
      send.click();


    }
  }


}


function change_cofig(confi) {
  if (confi == 1) {
    config.text_color = "red"
  }
}



conf.onclick = function() {
  tab.document.body.removeChild(element)
  var x = tab.document.createElement('div')
  x.innerHTML = `<div class="collum"><b style="color:lime"> <center> De-bug ui *developer purposes only.</b>
<br>
<button id="return" style="color:lime;background-color:black;border-color:white"> ---> RETURN <---</button>
<br>
<br>
<br>
<b class="line" id="ping">Ping:</b><br>
<b class="line" id="reciver_stats">Reciver_status</b><br>
<b class="line" id="version"> Server:</b><br>
<b class="line" id="system"> System:</b><br>
<b class="line" style="color:white">Version: </b>
<h1 style="color:white">Bug tracker</h1> <p1 style="color:white">/priority list closer to red = severity</p1><br>
<br>
<p1 style="color:yellow"> Weird current connections glich with private servers -known bug</p1><br>
<p1 style="color:yellow"> current connections acting up -working on fix</p1><br>
<p1 style="color:lime"> thats it :/</p1><br>
<center>
</div>


<title> Apachi chat config</title>
<style> body{background-color:black}</style>
`
  tab.document.body.appendChild(x)
  var lines = document.getElementsByClassName("line")
  var retur = document.getElementById("return")
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
    setInterval(update_lines, 500)
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
				key:JSON.parse(this.responseText).key
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
						key:JSON.parse(this.responseText).key
        }),
      };

      fetch(config.api, requestOptions2);
      connect.innerHTML =
        "online users:" + JSON.parse(this.responseText).CURRENT_CONNECTIONS;
      reciverr.status = "ACTIVE";
      system_status.conditions.reciver = "online"
      system_status.conditions.stream = "online"
    }
  };
  setTimeout(reciver, 500);
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
name_change.onclick = function() {
  anonymous_user_id = tab.prompt(
    "What would you like your name to be? *Please keep it appropriate* *This will not save if you close the tab*",
  );
};
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
          numb: value,
          is_new_message: true,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
						key:JSON.parse(this.responseText).key
        }),
      };
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
						key:JSON.parse(this.responseText).key
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
porter.innerHTML = " Port: "+config.port
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

    } else if (ping >= 1200 && ping <= 5000) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:darkred">` + ping + 'ms' + `</p1>`;
      if (crash_status == true) {
        tab.document.getElementById("pingg").innerHTML = ping;
      }
    } else if (ping >= 5000 && ping <= 8000) {
      pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:black">` + ping + 'ms' + `</p1>`;
    } else if (ping >= 8000 && sending_img == false) {
      var wait_screen = document.createElement("div");
      wait_screen.innerHTML = `<center>
  <h1 style="color:red"> you've crashed</h1>
  <br>
  <p1 style="color:red"> your ping: <p1 style="color:lime;top:50%;left:50%" id="pingg"></p1></p1>
  <br>
  <br>
  <p1 style="color:lime">your server response time got over 8000s! you have been kicked off because it could be dangerous to our servers. please close the page and open it again once you have a stable connection<br> <b> exiting with code 101</b></p1>
  </center>
  <br>
 
 
  <title>uh oh</title><style> body{background-color:black}</style>`
      tab.document.body.removeChild(element);
      tab.document.body.appendChild(wait_screen)
      tab.document.getElementById("pingg").innerHTML = ping;
      crash_status = true;

    }


    ;
    system_status.conditions.pinger = "online"
    setTimeout(getping, 600)
  })


};
getping();
