var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0}

function get_api_data(name){
	var request = new XMLHttpRequest()

	if(information.recently!=name){
		request.open('GET', API_URL+name, true)
		request.onload = function () {

		  var data = JSON.parse(this.response)

		  if (request.status==200) {
		  	information["recently"] = name
		  	information["status"] = "successful"
		  	information["mass"] = data.mass.massValue+" "+data.mass.massExponent
		  	information["volume"] = data.vol.volValue+" "+data.vol.volExponent
		  	information["gravity"] = data.gravity
		  }
		}
		request.send()
	}
}

function set_api_data(name, mass, volume, gravity){
	if (information.status=="successful") {
		planeta_text.setAttribute('value',name)
		masa_text.setAttribute('value',"Masa: "+information.mass+" kg")
		volumen_text.setAttribute('value',"Volumen: "+information.volume+" km3")
		gravedad_text.setAttribute('value',"Gravedad: "+information.gravity+" m/s2")
	}else{
		planeta_text.setAttribute('value',name)
		masa_text.setAttribute('value',"Masa: "+mass+" kg")
		volumen_text.setAttribute('value',"Volumen: "+volume+" km3")
		gravedad_text.setAttribute('value',"Gravedad: "+gravity+" m/s2")
	}
}

AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el
    var datos = sceneEl.querySelector('#datos')
    var planeta_text = sceneEl.querySelector('#planeta_text')
    var masa_text = sceneEl.querySelector('#masa_text')
    var volumen_text = sceneEl.querySelector('#volumen_text')
    var gravedad_text = sceneEl.querySelector('#gravedad_text')
    var mercurio = sceneEl.querySelector('#mercurio')
    var venus = sceneEl.querySelector('#venus')
    var tierra = sceneEl.querySelector('#tierra')
    var marte = sceneEl.querySelector('#marte')
    var jupiter = sceneEl.querySelector('#jupiter')
    var saturno = sceneEl.querySelector('#saturno')
    var urano = sceneEl.querySelector('#urano')
    var neptuno = sceneEl.querySelector('#neptuno')

   
  	}
	 
});
