var anonymous_user_id = Math.floor(Math.random() * 9999);
var config = {
  api: "https://api-generator.retool.com/XZud38/data/1",
  ping_dellay: 2500,
  text_color: 'green',
  background_color: 'black',
  border_color: 'green'
};
// chat room msg alerts
var enable_notif = true

function constructor(elemet, text, content) {

  var name = tab.document.createElement(elemet)
  name.innerHTML = ` <p>1</p1>`


}

let xh2r = new XMLHttpRequest();
xh2r.open("GET", config.api);
xh2r.send();
xh2r.onload = function() {
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
        "< user: " +
        anonymous_user_id +
        " >    " +
        `<b>has just slid onto the dms...</b><br><br>`,
      numb: JSON.parse(this.responseText).numb += 1,
      CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS += 1,
      is_new_message: true,
    }),
  };
  fetch(config.api, requestOptions);
};



var element = document.createElement("div");
element.innerHTML = `<div id="bg" style="background-color:black">
	<title> Apachi Chatroom </title>
	<center>
    <div id="config">
      <button class="button" id="config_lib" style="background-color:black;border-color:green;color:green;width:60px;height:30px;top:2%;left:94.8%;position:absolute">
       Settings
      </button>
      <button id="name_changer" style="background-color:black;border-color:green;color:green;width:110px;height:30px;top:6%;left:92%;position:absolute">
        Change Name
      </button> 
    </div>
	 <font size="5" style="color:green"> Chat room </font><button id="ssd" style="background-color:black;border-color:green;color:green">return</button>
	 <button id="sd" style="background-color:black;border-color:green;color:green">enable notifications</button> <br>

<p1 style="color:green">
    Please read the
    <button style="border-color:green;background-color:black;color:green" onclick="window.open("https://raw.githack.com/thefatpotato115/Apachi/main/Support/terms.html");">
        Terms of service
    </button>
    before using the chat room.
    <b>
        PLEASE USE RESPONSIBLY
    </b>
    <br>
    <b>
    Messages reset every seventeen messages.
    </b>
    </p1>
	<br>
	<br>
	
	<div style="background-color:rgb(30,30,30);height:90%" id="frame"> <center><b style="color:lime"id="ping">ping: CONNECTING TO SERVER...</b> <p1 style="color:white"><b>APACHI CHAT ROOM </b><p1 style="color:lime" id="connections"> <b> online users: CONNECTING TO SERVER...</b></p1></p1><br><br> <p1 style="color:white" id="stream"> CONNECTING TO SERVER... *may take a while </p1> 
	<br>
	
	

	<br>
	</div>
</center>

	<input id="intp" style="background-color:black;border-color:green;color:green;width:80%; position: absolute; top:800px;left:7.5%"> <button id="post" style="background-color:black;border-color:green;color:green;position: absolute;top:800px;left:92.5%;
" class="button"> SEND </button><button class="button" id="img" style="background-color:black;border-color:green;color:green;position: absolute;top:800px;left:88.5%;
"> IMAGE </button>
	
	 
	<style>body{ background-color:black} </style>
	`;
var tab = window.open()
tab.document.body.appendChild(element);
var send = tab.document.getElementById("post");
var log = tab.document.getElementById("stream");
var name_change = tab.document.getElementById("name_changer");
var connect = tab.document.getElementById("connections");
var notif = tab.document.getElementById("sd");
var ping = tab.document.getElementById("ping")
var conf = tab.document.getElementById("config_lib")

function change_cofig(confi) {
		

}



conf.onclick= function(){
tab.document.body.removeChild(element)
var x = tab.document.createElement('div')
x.innerHTML =`<div class="collum"><b style="color:lime"> apperance</b>
<br>
<br>
<button class="button">Text color</button><br>
<button class="button">Border color</button><br>
<button class="button">Button Background color</button>
</div>


<title> Apachi chat config</title>
<style> body{background-color:black}</style>
`
tab.document.body.appendChild(x)
document.getElementsByClassName("button")[0].onclick = change_cofig('text_color')

}



tab.onunload = function() {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", config.api);
  xhr.send();
  xhr.onload = function() {
    const element = document.querySelector(
      "#put-request-set-headers .date-updated",
    );
    const requestOptions2 = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CURRENT_CONNECTIONS: 'still working on it',
        texts: JSON.parse(this.responseText).texts,
        numb: JSON.parse(this.responseText).numb,
        is_new_message: JSON.parse(this.responseText).is_new_message,
      }),
    };

    fetch(config.api, requestOptions2);
  }
}



// Example usage:


function reciver() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", config.api);
  xhr.send();
  xhr.onload = function() {
    Connected_to_server = true
    log.innerHTML = JSON.parse(this.responseText).texts;

    if (JSON.parse(this.responseText).is_new_message == true) {
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
        }),
      };

      fetch(config.api, requestOptions2);
      if (enable_notif == true) {
        tab.alert("New message in chat room!");
      }
    }
  };
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET", config.api);
  xhr2.send();
  xhr2.onload = function() {
    connect.innerHTML =
      "online users:" + JSON.parse(this.responseText).CURRENT_CONNECTIONS;
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
  var new_message = tab.document.getElementById("intp");
  xhr.open("GET", config.api);
  xhr.send();
  xhr.onload = function() {
    log.innerHTML = JSON.parse(this.responseText).texts;
    if (JSON.parse(this.responseText).numb > 17) {
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
            " >    " +
            new_message.value +
            `<br><br>`,
          numb: 1,
          is_new_message: true,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
        }),
      };
      fetch(config.api, requestOptions)
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
        .then((log.innerHTML = JSON.parse(this.responseText).texts))
        .then((new_message.value = ""));

      //====================== UPDATE CHAT ROOM TEXTS =========================//

      function update() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", config.api);
        xhr.send();
        xhr.onload = function() {
          log.innerHTML = JSON.parse(this.responseText).texts;
        };
      }
      setTimeout(update, 500);
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
            " >    " +
            new_message.value +
            `<br><br>`,
          numb: JSON.parse(this.responseText).numb + 1,
          is_new_message: true,
          CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS,
        }),
      };

      fetch(config.api, requestOptions)
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
        .then((log.innerHTML = JSON.parse(this.responseText).texts))
        .then((new_message.value = null));

      //====================== UPDATE CHAT ROOM TEXTS =========================//

      function update() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", config.api);
        xhr.send();
        xhr.onload = function() {
          log.innerHTML = JSON.parse(this.responseText).texts;
          xhr.open("GET", config.api);
          xhr.send();
          xhr.onload = function() {
            log.innerHTML = JSON.parse(this.responseText).texts;

            log.innerHTML = "";

            setTimeout(update, 500);
          };
          setTimeout(update, 500);
        };
      }
    }
    var n = tab.document.getElementById("intp");
  };
};

tab.document.getElementById("ssd").onclick = function() {
  tab.document.body.removeChild(element);
  tab.document.body.appendChild(E);

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
          "< user: " +
          anonymous_user_id +
          " >    " +
          `<b>has left the chat</b><br><br>`,
        numb: JSON.parse(this.responseText).numb + 1,
        CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS -= 1,
        is_new_message: false,
      }),
    };
    fetch(config.api, requestOptions);
  };
};
