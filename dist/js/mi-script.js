//Crear un metodo 
function Video_Stop(nameframe)
{
    //buscar el elemento que tenga el nombre enviado
    const frame = document.getElementById(nameframe);
    //verificamos que exista el elemento
    if(frame)
    {
        //Recibe el nombre actual de la ruta del frame
        const src = frame.src;
        //limpia la ruta para pausar la reproduccion
        frame.src = '';
        //lo vuelve a asignar
        frame.src = src;
    }
}

function Asignar_Url_Iframe(Nombrevideo)
{
    //asignamos una variable
    var urlVideo = "";
    var titulovideo = "";
    //Buscamos el contenedor del Iframe
    const frame = document.getElementById("Iframevideo1");
    const Titulo = document.getElementById("Idtitulo_modalVideo");
    //validamos que exista, si no existe retorna
    if(!frame){ return;}

    //aplicamos una condicional
    if(Nombrevideo == "Video1")
        {
            titulovideo = "Video 1";
            urlVideo = "https://www.youtube.com/embed/CSFSjKxuJ_s?si=vqiIBK4SC9pW8CWG";
        }
    else{
        titulovideo = "Video 2";
        urlVideo = "https://www.youtube.com/embed/bnki89Dzl5M?si=ydYyS5Hf5g1jXHEK";
    }
    Titulo.innerText = titulovideo;
    frame.src = urlVideo;
}



