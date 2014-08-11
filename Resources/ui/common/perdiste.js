function perdiste(){
	
		var scroll = Ti.UI.createScrollView({
		top:1,
		width:"95%",
		height:"100%",
		scrollType:'vertical',
		zIndex:30
	});

	var nwin = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo2.png",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		fullscreen: false,
        exitOnClose:true,
        navBarHidden:true
	});

 var menuGen = Ti.UI.createButton({
		backgroundImage:"/assets/buttongrill.png",
		width:40,
		height:40,
		top:5,
		left:5,
		zIndex:130
	}); 
	menuGen.addEventListener('click',function(){
		lienzo.animate(
	    {
	      left:0,
	      duration:350});
	   
	});								    
	
var lienzo = Ti.UI.createView({
		backgroundColor:"#183345",
		width:300,
		heigth:"100%",
		top:0,
		left:-300,
		zIndex:831
	});
	
//// lienzo animado
     ////creando boton
     var ctnBoton01 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:0,
     	left:0,
     	zIndex:1
     });
	var btn01 = Ti.UI.createButton({
		
		title:"Mira tu puntaje",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",

		 font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph1  = Ti.UI.createImageView({
		image:"/assets/puntaje.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
    var ctnBoton02 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:40,
     	left:0,
     	zIndex:1
     });
	var btn02 = Ti.UI.createButton({		
		title:"Aprende a jugar",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph2  = Ti.UI.createImageView({
		image:"/assets/aprende.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	var ctnBoton03 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:80,
     	left:0,
     	zIndex:1
     });
	var btn03 = Ti.UI.createButton({
		
		title:"Premios",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",

		 font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph3  = Ti.UI.createImageView({
		image:"/assets/premios.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton04 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:120,
     	left:0,
     	zIndex:1
     });
	var btn04 = Ti.UI.createButton({		
		title:"Mécanica",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph4  = Ti.UI.createImageView({
		image:"/assets/mecanica.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton05 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:160,
     	left:0,
     	zIndex:1
     });
	var btn05 = Ti.UI.createButton({		
		title:"Términos y Condiciones",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph5  = Ti.UI.createImageView({
		image:"/assets/terminos.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});
	
	
	var ctnBoton06 = Ti.UI.createView({
     	height:40,
     	width:"100%",
     	top:200,
     	left:0,
     	zIndex:1
     });
	var btn06 = Ti.UI.createButton({		
		title:"Salir",
		height:40,
		width:"90%",
		top:0,
		left:40,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:14},
		zIndex:1
	});
	var graph6  = Ti.UI.createImageView({
		image:"/assets/out.png",
		width:30,
		height:30,
		top:5,
		left:5,
		zIndex:2
	});


	var logoFooter = Ti.UI.createView({
		backgroundImage:"/assets/logofooter.png",
		zIndex:10,
		top:450,
		width:100,
		height:30,
		zIndex:11
	});
	
	var logoBottom = Ti.UI.createLabel({
		top: 490,
		width:70,
		height:27,
		left:20,
		color:'#000000'
	});
	if(Titanium.API.imagen==""){
	var boca  = Ti.UI.createImageView({
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.imagen,
		width:197,
		height:197,
		
		zIndex:10,
		top:50
	});
	}else{
		var boca  = Ti.UI.createImageView({
		backgroundImage:'http://productosalpha.com.pe/webservice/img/'+Titanium.API.gl_imagen,
		width:197,
		height:197,
		
		zIndex:10,
		top:50
	});
	}
	var titulo = Ti.UI.createLabel({
		text:Titanium.API.incorrecta,
		backgroundColor:'#103242',
		color:'#ffffff',
		top:255,
		width:250,
		height:46,
		zIndex:12,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	

	var btnRegistro = Ti.UI.createButton({
		top: 385,
		width:250,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:13,
		title:'Siguiente Desafio',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	btnRegistro.addEventListener('touchstart',function(){
		this.animate({
			top:390,
			duration:150
		});
	});
btnRegistro.addEventListener('touchend',function(){
		this.animate({
			top:385,
			duration:150
		});
	});
	var btnIntento = Ti.UI.createButton({
		top: 330,
		width:250,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:13,
		title:'Vuelve a Intentarlo',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		backgroundFocusedColor:'#000',
		backgroundDisabledColor:'#ff0000'
	});
	
	btnIntento.addEventListener('touchstart',function(){
		this.animate({
			top:335,
			duration:150
		});
	});
    btnIntento.addEventListener('touchend',function(){
		this.animate({
			top:330,
			duration:150
		});
	});
	 var barraFoot = Ti.UI.createView({
  	  backgroundColor:"#003f88",
  	  width:"100%",
  	  height:40,
  	  bottom:0,
  	  zIndex:100
  });
  
var contexto = Ti.UI.createView({
	
		backgroundColor:'#ffffff',
		color:'#103242',
		width:250,
		height:Ti.UI.SIZE,
		top:300,
		zIndex:11
		
		
	});
	
	var btnFacebook = Ti.UI.createButton({
		backgroundImage:'/assets/facebook.png',
		width:40,
		height:40,
		bottom:5,
		left:80,
		zIndex:20
	});
	
var btnTwitter= Ti.UI.createButton({
		backgroundImage:'/assets/twitter.png',
		width:40,
		height:40,
		bottom:5,
		right:80,
		zIndex:21
	});
	
var social = require('social_plus');

	//Create a Twitter client for this module
var twitter = social.create({
		consumerSecret : Ti.App.Properties.getString('twitter.consumerSecret'),
		consumerKey : Ti.App.Properties.getString('twitter.consumerKey')
	});
btnTwitter.addEventListener('click',function(e){
	twitter.shareImage({
		message : "Test de comparticion de aplicacion.",
		image : (Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "KS_nav_ui.png")).read(),
		success : function() {
			alert('Tweeted!');
		},
		error : function() {
			alert('ERROR Tweeted!');
		}
	});
});
	var texto1 = Ti.UI.createLabel({
		text:'¡Elige otro desafio! y gana mas puntos! Comparte la aplicación y gana un punto extra.',
		width:230,
		height:60,
		top:5,
		left:5,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'#000000'
	});
 
  
  btnPuntaje = Ti.UI.createButton({
  	title:'PUNTAJE',
  	backgroundColor:"#003f88",
  	left:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
  	color:'#ffffff',
  	zIndex:101,
  	bottom:0,
  	font:{fontFamily:'MYRIADPRO-BOLD',fontSize:12}
  	
  });
   btnSalir = Ti.UI.createButton({
  	title:'SALIR',
  	backgroundColor:"#003f88",
  	right:5,
  	width:150,
  	height: 40,
  	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,                                                                                 
  	color:'#ffffff',
  	zIndex:102,
  	bottom:0,
  	font:{fontFamily:'MYRIADPRO-BOLD',fontSize:12}
  });
  
   
btnPuntaje.addEventListener('click',function(){
 
  var xurl = "http://productosalpha.com.pe/webservice/puntos.php";
   var envios = ({
   	'idmobile':Ti.Platform.id
   });
  var misPuntos = Ti.Network.createHTTPClient({
  	onload: function(e){
  		data = JSON.parse(this.responseText);
  		var alertPuntaje = Ti.UI.createAlertDialog({
 		title:'Puntos Ganados',
 		message:"Tienes "+ data.puntos +" puntos acomulados",
 		buttonNames:['Ok']
 	});
 	alertPuntaje.show();
 	return false;
  	}
  });
  misPuntos.open("POST",xurl);
  misPuntos.send(envios);
 });
 
 
 btnSalir.addEventListener('click',function(){
 	 var activity = Titanium.Android.currentActivity;
        activity.finish();
 }); 
 
 	var style;
if (Ti.Platform.name === 'android'){
  
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
else {
 style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK; 
}	
var activityIndicator = Ti.UI.createActivityIndicator({
  color: 'black',
 font:{fontFamily:'MYRIADPRO-BOLD',fontSize:20},
  message: 'Cargando...',
  style:style,
   backgroundColor : '#000000',
     height:"100%",
  width:"100%",
    color : 'white',
    padding : 10,
    opacity : 0.87,
    top : 0,
    borderRadius : 0,
    borderColor : 'black',
    borderWidth : 1
});
  
  btnIntento.addEventListener('click',function(){
  	
  var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	var parame=({
					'idmobile':Ti.Platform.id
				});
	var consulta = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdata = JSON.parse(this.responseText);
			activityIndicator.show();
			if(this.status==200){
			activityIndicator.hide();
				if(getdata.estado=="bloque"){
					alert("¡Has llegado al límite de respuestas incorrectas! No te preocupes mañana podrás volver a intentarlo. Recuerda… la práctica hace al maestro");
				}else{
				
					  var Intentar = require("/ui/common/intentar");
					  intentar = new Intentar();
					  intentar.open();	
  				}
  			}
		}
		
	});
   consulta.open("POST",surl);
   consulta.send(parame);
  });
  
btnRegistro.addEventListener('click',function(){
	
	var surl = "http://productosalpha.com.pe/webservice/bqintentos.php";
	parame=({
					'idmobile':Ti.Platform.id
				});
	var consulta = Ti.Network.createHTTPClient({
		onload: function(e){
			var getdata = JSON.parse(this.responseText);
			activityIndicator.show();
			if(this.status==200){
		
				if(getdata.estado=="bloque"){
					alert("¡Has llegado al límite de respuestas incorrectas! No te preocupes mañana podrás volver a intentarlo. Recuerda… la práctica hace al maestro");
				}else{
						var Preguntas = require('/ui/common/preguntas');
					  		preguntas = new Preguntas();
					  		preguntas.open();
					}
  			}
		}
		
	});
   consulta.open("POST",surl);
   consulta.send(parame);	  		
  		
});

///compartir app en facebook
btnFacebook.addEventListener('click',function(){
 var fb = require('facebook');
 fb.appid = 1397156940536791;
 fb.permissions = ['publish_stream']; // Permissions your app needs
 fb.forceDialogAuth = true;

 fb.authorize();
      ///suma 1 punto
      ///post para publicar
       
			fb.requestWithGraphPath('me/feed', {
				message: "El desafío Alpha es un reto para valientes, responde de manera correcta las preguntas que te haremos y ¡gana puntos para canjear grandes premios!.",
				picture:"http://productosalpha.com.pe/webservice/share.png"
				}, 
			         "POST", function(e) {
			    if (e.success) {
			    
			    ////SECCION COMPARTIR A DETALLE
			    var aurl = "http://productosalpha.com.pe/webservice/compartir.php";   
				nparametro=({
					"idmobile":Ti.Platform.id
				});
				
				sumarPunto = Ti.Network.createHTTPClient({
				onload:function(e){
					midata = JSON.parse(this.responseText);
					if(midata.rpta=="ok"){
						if(this.status==200){
							alert("Ganaste un punto extra!!!");
						}
					}
				}
			});
			sumarPunto.open("POST",aurl);
			sumarPunto.send(nparametro);
			
				
				
			    } else {
			        if (e.error) {
			            alert("Error de aplicación");
			        } else {
			            alert("No hay parametros definidos");
			        }
			    }
			});
					
});
scroll.addEventListener('click',function(){
	lienzo.animate(
    {
      left:-300,
      duration:350});
});


/////// eventos para el menu
btn01.addEventListener('click',function(){
///puntaje
   var xurl = "http://productosalpha.com.pe/webservice/puntos.php";
   var envios = ({
   	'idmobile':Ti.Platform.id
   });
   var misPuntos = Ti.Network.createHTTPClient({
  	onload: function(e){
  		data = JSON.parse(this.responseText);
  		var alertPuntaje = Ti.UI.createAlertDialog({
 		title:'Puntos Ganados',
 		message:"Tienes "+ data.puntos +" puntos acomulados",
 		buttonNames:['Ok']
 	});
 	alertPuntaje.show();
 	return false;
  	}
  });
  misPuntos.open("POST",xurl);
  misPuntos.send(envios);
});

btn02.addEventListener('click',function(){
 ///aprende a jugar
});

btn03.addEventListener('click',function(){
////premios
	var popup = Ti.UI.createView({
		backgroundImage:"/assets/overflow.png",
		width:"100%",
		height:"100%",
		zIndex:999,
		top:0,
		left:0
	});
	
	lienzo.animate({
		left:-300,
        duration:350
    });
    
	var ventana = Ti.UI.createView({
		backgroundColor:"#9ab41f",
		width:"80%",
		height:"60%",
		zIndex:1,
		opacity:1
	});
	
	var cerrar = Ti.UI.createButton({
		backgroundImage:"/assets/cerrarpop.png",
		width:41,
		height:50,
		zIndex:2,
		top:85,
		right:15
	});

	var etiqueta = Ti.UI.createView({
		width:"95%",
		height:200,
		top:10,
		height:60
	});
	

///botones premio////////

var premio1 = Ti.UI.createButton({
		backgroundColor:'#37ade2',
		zIndex:17,
		top: 105,
		width:"95%",
		height:40,
		title:'Premio por 100 puntos',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	});

premio1.addEventListener('touchstart',function(){
		this.animate({
			top:110,
			duration:150
		});
	});
premio1.addEventListener('touchend',function(){
		this.animate({
			top:105,
			duration:150
		});
	});
var premio2 = Ti.UI.createButton({
		backgroundColor:'#37ade2',
		zIndex:27,
		top: 155,
		width:"95%",
		height:40,
		title:'Premio por 200 puntos',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	});

premio2.addEventListener('touchstart',function(){
		this.animate({
			top:160,
			duration:150
		});
	});
premio2.addEventListener('touchend',function(){
		this.animate({
			top:155,
			duration:150
		});
	});
var premio3 = Ti.UI.createButton({
		backgroundColor:'#37ade2',
		zIndex:37,
		top: 205,
		width:"95%",
		height:40,
		title:'Premio por 450 puntos',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	});

premio3.addEventListener('touchstart',function(){
		this.animate({
			top:210,
			duration:150
		});
	});
premio3.addEventListener('touchend',function(){
		this.animate({
			top:205,
			duration:150
		});
	});
////// eventos botones premio /////
premio1.addEventListener("click",function(){
	canjear(1,popup);
	premio2.hide();
	premio3.hide();
});
premio2.addEventListener("click",function(){
	canjear(2,popup);
	premio1.hide();
	premio3.hide();
});
premio3.addEventListener("click",function(){
	canjear(3,popup);
	premio2.hide();
	premio1.hide();
});
	
	
	var textint = Ti.UI.createLabel({
		width:"90%",
		text:"Tienes estos premios disponibles:",
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:"#ffffff",
		font:{fontFamily:'MYRIADPRO-REGULAR',fontSize:24}
	}); 
	
	var matrix = Ti.UI.create2DMatrix();
	  matrix = matrix.rotate(360);
	  matrix = matrix.scale(1, 1);
	  var a = Ti.UI.createAnimation({
	    transform : matrix,
	    duration : 600,
	    autoreverse : false,
	    repeat : 1,
	    center:true
	  });
	 ventana.animate(a);
	 cerrar.animate({
	 		opacity:1,
	 		duration:350
	 	});
	 ventana.add(etiqueta);
  	 etiqueta.add(textint);
 	 popup.setOpacity(0);	 
 	 popup.add(cerrar);	
	 cerrar.getOpacity(0);
	 popup.animate({
		opacity:1,
		duration:350
	});

	cerrar.addEventListener('touchend',function(){
		this.animate({
			top:85,
			duration:150
		});
		
	/*  Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;
		var sound = Ti.Media.createSound({url : '/sounds/tono7.mp3'});
		sound.play();*/
	});
	cerrar.addEventListener('touchstart',function(){
		this.animate({
			top:95,
			duration:150
		});
	});
	
	
	cerrar.addEventListener('click',function(){
		popup.animate({
			opacity:0,
			duration:350
		},function(){
			popup.hide();
		});
		 /*Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;
		var sound = Ti.Media.createSound({url : '/sounds/tono7.mp3'});
		sound.play();*/
	});
	
////// evetnos para los premios
var minru = "http://productosalpha.com.pe/webservice/mispremios.php";
var newdata = Ti.Network.createHTTPClient();
	misparam = ({
		"idmobile":Ti.Platform.id
	});
	newdata.onload = function(e){
		var sdata = JSON.parse(this.responseText);
		
		 if(sdata.mipremio){
				if(sdata.mipremio==1){
				  ventana.add(premio1);		
				}	
				if(sdata.mipremio2==2){
				  ventana.add(premio2);	
				}
				if(sdata.mipremio3==3){
			      ventana.add(premio3);		
				}
		 }
	};
	 newdata.open("POST",minru);
	 newdata.send(misparam);

	popup.add(ventana);
	 self.add(popup);
});

btn04.addEventListener('click',function(){
////mecanica
});
btn05.addEventListener('click',function(){
//// terminos y condiciones	
});
btn06.addEventListener('click',function(){
//// salir
var activity = Titanium.Android.currentActivity;
        activity.finish();

});

    //contexto.add(texto1);
    //contexto.add(btnFacebook);
    //contexto.add(btnTwitter);
    nwin.add(btnPuntaje);
    nwin.add(btnSalir);
    nwin.add(barraFoot);
	nwin.add(scroll);
	nwin.add(menuGen);
	scroll.add(btnRegistro);
	scroll.add(btnIntento);
	scroll.add(logoFooter);
	nwin.add(boca);
	//.add(contexto);
	scroll.add(titulo);
	scroll.add(logoBottom);
	lienzo.add(ctnBoton01);
	 ctnBoton01.add(btn01);
	 ctnBoton01.add(graph1);
	 lienzo.add(ctnBoton02);
	 ctnBoton02.add(btn02);
	 ctnBoton02.add(graph2);
	 lienzo.add(ctnBoton03);
	 ctnBoton03.add(btn03);
	 ctnBoton03.add(graph3);
	 lienzo.add(ctnBoton04);
	 ctnBoton04.add(btn04);
	 ctnBoton04.add(graph4);
	 lienzo.add(ctnBoton05);
	 ctnBoton05.add(btn05);
	 ctnBoton05.add(graph5);
	 lienzo.add(ctnBoton06);
	 ctnBoton06.add(btn06);
	 ctnBoton06.add(graph6);
	 nwin.add(lienzo);
	nwin.add(activityIndicator);
	return nwin;
	activityIndicator.hide();
		 Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;
						var sound = Ti.Media.createSound({url : '/sounds/fallaste.mp3'});
						sound.play();
};
module.exports = perdiste;

function canjear(valor,popup){
	var tinurl = "http://productosalpha.com.pe/webservice/canjepremio.php";
	var parametros = ({
		"idmobile":Ti.Platform.id,
		"opcion" : valor
	});
	senData = Ti.Network.createHTTPClient();
	senData.onload= function(){
	      var getData = JSON.parse(this.responseText);
	      if(getData.rpta=="ok"){
	      	popup.animate({
			opacity:0,
			duration:350
		},function(){
			popup.hide();
		});
	      	alert("Recibiras un correo con los pasos a seguir");
	      	
	      }
	      if(getData.rpta=="error"){
	      	alert("Hubo un problema en el sistema intentelo mas tarde.");
	      }
	};
	senData.open("POST",tinurl);
	senData.send(parametros);
}

