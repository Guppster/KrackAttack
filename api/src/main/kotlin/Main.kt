import io.javalin.ApiBuilder.*
import io.javalin.Javalin

//Constants
val VERSION = "0.0.1"
val PORT = 4567

fun main(args: Array<String>)
{
    val app = Javalin.create().apply{
        port(PORT)
    }.start()

    //The root path
    app.routes{

        path("attack")
        {
        }

        path("protect")
        {
        }
    }
}
