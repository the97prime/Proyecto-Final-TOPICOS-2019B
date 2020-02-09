# Proyecto-Final-TOPICOS-2019B
Aplicacion realizada con IONIC and Angular

## Proceso:
### Requisitos:
* Cuenta de Develloper en Spotify
* Cuenta en Firebase
* Instalado IONIC en nuestro PC

### Desarrollo de la solución:


* Iniciamos nuestro proyecto de IONIC con Ionic start detro de la terminal powershell o cmd.
* Configuramos el nombre de proyecto, y el framework a usar, en este caso utilizamos Angular.
* Ingresamos a la carpeta.
* Abrimos VS CODE y en la terminal digitamos el comando ionic serve -l
* En otra pestaña de la terminal, digitamos el comando ionic cordova prepare android
* En nuestro navegador, ingresamos a la consola de Firebase, crearemos un nuevo proyecto y generamos las claves para el acceso a la base de datos.
* Creamos la base de datos y modificamos las reglas de acceso.
* Colocamos las claves de Firebase en el archivo correspondiente
* Importamos las claves de la api de SPOTIFY, tal y como lo hacemos en Firebase generamos una app y esta nos generara una clave de acceso.
* Para el ICONO y el Splash Screen cambiamos los archivos por defecto por unos archivos de tamaño similar:
* Para el ICONO el tamano es de 1024 x 1024 px, y para el Splash Screen el tamaño es de 2732 x 2732 px.
* Los archivos deben contener el mismo nombre.
* Una vez, para generar los iconos para el uso en la app movil, usamos el comando ionic cordova resources, de esta forma se genera el splash screen y icono para la apk.
* Exportamos las URI de los artistas y playlist de Spotify desde nuestra cuenta y lo colocamos en nuestra aplicacion.
* Una ya vez listo todo, generaremos el apk para ello usamos el comando ionic cordova build android.
* Vamos a la ruta en la que se encuentra el apk.
* Pasamos el apk a nuestro telefono android y lo instalamos. 

## Link del Video:
- Video: https://youtu.be/MkvnboXl0oY
