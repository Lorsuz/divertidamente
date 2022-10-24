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


