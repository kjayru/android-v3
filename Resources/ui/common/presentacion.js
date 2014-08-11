function presentacion(){
	
	var self = Ti.UI.createWindow({
		backgroundImage:"/assets/fondo.jpg",
		zIndex:1,
		fullscreen:false,
		orientationModes: [Ti.UI.PORTRAIT],
		exitOnClose:true,
		navBarHidden:true
	});
	 var transform1 = Titanium.UI.create2DMatrix();
  transform1 = transform1.rotate(-180);
 var animation1 = Titanium.UI.createAnimation({
    transform: transform1,
    duration: 1500,
    curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
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
	var scroll = Ti.UI.createScrollView({
		top:1,
		width:"100%",
		height:"100%",
		scrollType:'vertical'
	});
	var monstrito1 = Ti.UI.createImageView({
		image:"/assets/mons4.png",
		width:80,
		height:88,
		top:20,
		left:20,
		zIndex:2
	});
	
	var monstrito2 = Ti.UI.createImageView({
		image:"/assets/mos3.png",
		width:130,
		height:129,
		top:20,
		right:10,
		zIndex:3
	});
	
	var logosa = Ti.UI.createImageView({
		image:"/assets/alphaLOGO.png",
		width:300,
		heigh:143,
		top:90,
		left:30,
		zIndex:21
	});
	logosa.animate(animation1);
	
	var contenedor = Ti.UI.createView({
		backgroundColor:"#ffffff",
		zIndex:2,
		width:"70%",
		height:130,
		top:230
	});
	var texto = Ti.UI.createLabel({
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		html:"El desafío Alpha es un reto para valientes, responde de manera correcta las preguntas que te haremos y ¡gana puntos para canjear grandes premios!",
		top:10,
		left:10,
		width:"90%",
		color:"#000000"
	});
	
	contenedor.add(texto);
   var style;
	if (Ti.Platform.name === 'android'){
	  
	  style = Ti.UI.ActivityIndicatorStyle.BIG;
	}
	else {
	 style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK; 
	}
	var activityIndicator = Ti.UI.createActivityIndicator({
	  color: 'black',
	  font: {fontFamily:'Helvetica Neue', fontSize:20, fontWeight:'bold'},
	  message: 'Abriendo...',
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
	    zIndex:999,
	    borderWidth : 1
	    
	});

	var nboton = Ti.UI.createButton({
		top: 380,
		width:200,
		height:40,
		backgroundColor:'#37ade2',
		zIndex:22,
		title:'INGRESAR',
		color:'#ffffff',
		font:{fontFamily:'Minecrafter_3',fontSize:14},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	nboton.addEventListener('touchend',function(){
		this.animate({
			top:380,
			duration:150
		});
	});
	nboton.addEventListener('touchstart',function(){
		this.animate({
			top:385,
			duration:150
		});
	});

	nboton.addEventListener('click',function(){				
///////// existe registro
 Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;
						var sound = Ti.Media.createSound({url : '/sounds/ping.mp3'});
						sound.play();
activityIndicator.show();
	if(Titanium.Network.online){
	    	////verficamos existencia de registro de UUID
				var url='http://productosalpha.com.pe/webservice/verificacion.php';
				param=({
						'idmobile':Ti.Platform.id
					});
				 var client = Ti.Network.createHTTPClient({
				     onload : function(e) {      
				        var getdata = JSON.parse(this.responseText);
				        Titanium.API.nivel = getdata.level;
				        niveles = Titanium.API.nivel;	
				       
				        if(getdata.registro=="registra"){	
					
							//var firstView = new FirstView();
							//self.add(firstView);	
							var Selector = require("/ui/common/selector");
							 selector = new Selector();
							 selector.open();
							 
				             							
				 }else{	 
				 	   
				 			Titanium.API.nivel = getdata.level;	
							
							var Bienvenida = require('/ui/common/bienvenido');
							var bienvenida = new Bienvenida();
							bienvenida.open();
							var t2 = Ti.UI.create2DMatrix();
							var a2 = Titanium.UI.createAnimation();
							a2.transform = t2;
							a2.duration = 500;
							bienvenida.animate(a2);			
					    }
				     },
				     // function called when an error occurs, including a timeout
				     onerror : function(e) {
				         Ti.API.debug(e.error);
				          alert('No tienes conexion a internet');
				     },
				     onreadystatechange: function(e){
				     	if(e.readyState==4){
				     		activityIndicator.hide();
				     	}else{
				     		activityIndicator.show();
				     	}
				     }
				 });
				 // Prepare the connection.
				 client.open("POST", url);
				 // Send the request.
				 client.send(param);
	    
	}else {
		
	       var vista = Ti.UI.createView({
	       	width:'100%',
	       	height:'100%',
	       	top:0,
	       	zIndex:10
	       });
	       var toast = Ti.UI.createNotification({
			    message:"Su dispositivo no tiene conexión a internet Intentelo mas tarde."
			});
			toast.show();
			
			vista.addEventListener('click',function(){
					 var activity = Titanium.Android.currentActivity;
	        		activity.finish();
			});
		self.add(vista);
		}

//////// fin de codigo
	});
	self.add(activityIndicator);
	scroll.add(logosa);
	scroll.add(nboton);
	scroll.add(contenedor);
	scroll.add(monstrito1);
	scroll.add(monstrito2);
	self.add(scroll);
	scroll.add(logoFooter);
	scroll.add(logoBottom);
	contenedor.getOpacity(0);
	monstrito1.getOpacity(0);
	monstrito2.getOpacity(0);
	logosa.getOpacity(0);
	contenedor.animate({
		delay:600,
		opacity:1,
		duration:350
	});
	monstrito1.animate({
		delay:600,
		opacity:1,
		duration:350
	});
	monstrito2.animate({
		delay:600,
		opacity:1,
		duration:350
	});
	logosa.animate({
		delay:350,
		opacity:1,
		duration:350
	});
	return self;
}
module.exports = presentacion;