
alert ("Hola!!! Quieres comprar un Snack? El precio es de $300 por snack :)");
var edadActual = prompt("Hola cual es tu edad");
var edadMaxima = prompt("Cual es tu edad máxima?");
var snackFavorito = prompt("Cual es tu Snack Favorito?");
var snacksPorDia = prompt("Cuantos Snacks comeras por dia?");

var snacksRestoDeLaVida = (edadMaxima - edadActual) * snacksPorDia;
var precioUnidadSnacks = 300;
var gastoSnackRestoDeLaVida = snacksRestoDeLaVida * precioUnidadSnacks;
alert("Necesitarás " +snacksRestoDeLaVida+ " snacks para que te alcanzen hasta los " +edadMaxima+ " años y gastaras un total de " +gastoSnackRestoDeLaVida+ " pesos ... aaaa y tu snack favorito es " +snackFavorito+ " ,Gracias por tu compra!!!" );
