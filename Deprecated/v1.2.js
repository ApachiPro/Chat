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
        `<p1 style="color:yellow">` + "< user: " +
        anonymous_user_id +
        " >    " +
        `<b>` + msg + `</b></p1><br><br>`,
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
<img style="top:2%;left:2%;position:absolute" src="https://raw.githack.com/apachipro/chat/main/Resources/logo.png" />
<div id="config">
    <button class="button" id="config_lib" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:1%;right:2%;position:absolute">
        Settings
    </button>
    <button id="name_changer" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:5%;right:2%;position:absolute">
        Change Name
    </button> 
    <button id="sd" style="background-color:black;border-color:green;color:green;width:150px;height:30px;top:9%;right:2%;position:absolute">
        Enable Notifications
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
        before using the chat room.t
        <br>
        <b style="padding-top: 2px;">
            PLEASE USE RESPONSIBLY
        </b>
        <br>
        <b style="padding-top: 2px;">
            Messages reset every seventeen messages.
        </b>
    </p1>
</div>
<br>
<br>

<div style="background-color:rgb(30,30,30);height:90%;" id="frame"> <center><b style="color:lime"id="ping">ping: CONNECTING TO SERVER...</b> <p1 style="color:white"><b>APACHI CHAT ROOM </b><p1 style="color:lime" id="connections"> <b> online users: CONNECTING TO SERVER...</b></p1></p1><br><br> <p1 style="color:white" id="stream"> CONNECTING TO SERVER... *may take a while </p1>
<br>



<br>
</div>
</center>
<input id="intp" style="background-color:black;border-color:green;color:green;width:80%; position: absolute; top:800px;left:7.5%">
<button id="post" style="background-color:black;border-color:green;color:green;position: absolute;top:800px;left:92.5%;" class="button">
    SEND
</button>
<button class="button" id="img" style="height:30px;width:30px;color: transparent; background-color: transparent; border-color: transparent;position: absolute;top:794px;left:70px;">
    <img src="https://raw.githubusercontent.com/Apachipro/chat/main/Resources/add/green.png">
</button>


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
var txt = tab.document.getElementsByClassName("txt")

function change_cofig(confi) {
 if(confi ==1) {
  config.text_color = "red"
 }
}



conf.onclick = function() {
  tab.document.body.removeChild(element)
  var x = tab.document.createElement('div')
  x.innerHTML = `<div class="collum"><b style="color:lime"> apperance</b>
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
  var btns = document.getElementsByClassName("button")
  btns[0].onclick = change_cofig(1)

}

//when the user leaves

window.onunload = function() {
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
        numb: JSON.parse(this.responseText).numb + 1,
        CURRENT_CONNECTIONS: JSON.parse(this.responseText).CURRENT_CONNECTIONS = 1,
        is_new_message: false,
      }),
    };
    fetch(config.api, requestOptions);
  };
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
      connect.innerHTML =
        "online users:" + JSON.parse(this.responseText).CURRENT_CONNECTIONS;



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
      const xhr = new XMLHttpRequest();
        xhr.open("GET",config.api);
  xhr.onload = function(){
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
      const xhr = new XMLHttpRequest();
        xhr.open("GET",config.api);
  xhr.onload = function(){
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
      } else if (ping >= 5000) {
        pingtxt.innerHTML = 'Ping: ' + `<p1 style="color:black">` + ping + 'ms' + `</p1>`;
  
        var wait_screen = document.createElement("div");
        wait_screen.innerHTML = `<center>
  <h1 style="color:red"> you've crashed</h1>
  <br>
  <p1 style="color:red"> your ping: <p1 style="color:lime;top:50%;left:50%" id="pingg"></p1></p1>
  <br>
  <br>
  <p1 style="color:lime">your server response time got over 5000s! you have been kicked off because it could be dangerous to our servers. please close the page and open it again once you have a stable connection<br> <b> exiting with code 101</b></p1>
  </center>
  <br>
  
  
  <title>uh oh</title><style> body{background-color:black}</style>`
        tab.document.body.removeChild(element);
        tab.document.body.appendChild(wait_screen)
        tab.document.getElementById("pingg").innerHTML = ping;
        crash_status = true;
  
      }
  
  
      ;
      setTimeout(getping, 600)
    })
  
  
  };
  getping()