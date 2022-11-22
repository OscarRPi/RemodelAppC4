import '../pages/Login.css'

export default function Login(){
    return (
        <div class="body-login">
            <form className='container-login centrar'>
                <h1>ADMIN</h1>
                <div class="formgrupo centrar">
                    <label for="username">USUARIO</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div class="formgrupo centrar mb-4">
                    <label for="password">CONTRASEÑA</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div class="boton centrar">
                <button type="button" id="logear" class="mt-2">INGRESAR</button>
                </div>
            </form>
            <h2 class="mt-5 mb-5">REMODEL<span class="bold">APP</span></h2>
        </div>
    )
}