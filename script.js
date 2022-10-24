var active = 0;
var headerHerAnimation = document.getElementById( 'header-her-animation' );
var intervalo;
var headerHerMensage = document.getElementById( 'header-her-mensage' );
document.getElementById( 'header-her-mensage' ).addEventListener( 'click', () => {
	headerHerAnimation.style.transform = "translateY(0px)";
	clearInterval( intervalo );
	setTimeout( () => {
		headerHerMensage.innerHTML = '';
	}, 500 );
	contador = 0;
	active = 0;
} );
var msgSplit = '\"Já olhou para alguém e pensou: O que passa na cabeça dela?\"'.split( '' );
var msgJoin = [];
var msgFinal = [];
var contador = 0;
document.getElementById( 'header-her-position' ).addEventListener( 'click', printText );

msgSplit.forEach( element => {
	msgJoin.push( element );
	// msgJoin.push("|")
	msgJoin = msgJoin.join( '' );
	msgFinal.push( msgJoin );
	msgJoin = msgJoin.split( '' );
	// msgJoin.pop()

} );
function printText () {
	if ( active != 1 ) {
		headerHerAnimation.style.transform = "translateY(-430px)";
		intervalo = setInterval( () => {
			// console.clear();
			headerHerMensage.innerHTML = msgFinal[ contador ];
			contador++;
			if ( msgFinal.length == contador ) {
				clearInterval( intervalo );
				contador = 0;
			}
		}, 100 );
	}
	active = 1;
}
/* ==================================================== */

var menuLinks = document.querySelectorAll( 'header nav ul li a[href^="#"]' );
var extraLink = document.querySelectorAll( 'main a[href^="#resume"]' );
menuLinks.push(extraLink[0])

function getDistanceFromTheTop ( element ) {
  const id = element.getAttribute( "href" );
  return document.querySelector( id ).offsetTop;
}

function scrollToSection ( event ) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop( event.target ) - 0;
  smoothScrollTo( 0, distanceFromTheTop );
}

menuLinks.forEach( ( link ) => {
  link.addEventListener( "click", scrollToSection );
} );

function smoothScrollTo ( endX, endY, duration ) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 1000;

  const easeInOutQuart = ( time, from, distance, duration ) => {
    if ( ( time /= duration / 2 ) < 1 )
      return ( distance / 2 ) * time * time * time * time + from;
    return ( -distance / 2 ) * ( ( time -= 2 ) * time * time * time - 2 ) + from;
  };

  const timer = setInterval( () => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart( time, startX, distanceX, duration );
    const newY = easeInOutQuart( time, startY, distanceY, duration );
    if ( time >= duration ) {
      clearInterval( timer );
    }
    window.scroll( newX, newY );
  }, 1000 / 60 );
}
