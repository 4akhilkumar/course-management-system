import '../../Static/styles/login_styles.css'
import '../../Static/fontawesome/css/all.css'


const LoginForm=({
    handleSubmit,
   handleUsernameChange,
   handlePasswordChange,
   username,
   password})=>{

    return(
        <body id='loginpage'>
<div class="container">
        
        <div class="header">
            <div class="header-image">
                <div class="header-image-particle header-image-particle-1"></div>
                <div class="header-image-particle header-image-particle-2"></div>
                <div class="header-image-particle header-image-particle-3"></div>
                <svg viewBox="0 0 512 512">
                    <defs>
                        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="75%" y2="100%" >
                            <stop offset="0%" stop-color="#F79533">
                                <animate attributeName="stop-color" values="#F79533; #F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533" dur="4s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="100%" stop-color="#F79533">
                                <animate attributeName="stop-color" values="#F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533; #F37055" dur="4s" repeatCount="indefinite"></animate>
                            </stop>
                        </linearGradient>
                    </defs>
                    <path fill="url('#logo-gradient')" d="M496 127.1C496 381.3 309.1 512 255.1 512C204.9 512 16 385.3 16 127.1c0-19.41 11.7-36.89 29.61-44.28l191.1-80.01c4.906-2.031 13.13-3.701 18.44-3.701c5.281 0 13.58 1.67 18.46 3.701l192 80.01C484.3 91.1 496 108.6 496 127.1z"></path>
                </svg>
            </div>
    
            <h1 class="header-title text-center">
                Welcome to&nbsp;<span class="akira">AkirA!</span>
            </h1>
    
            <p class="text text-center">
                Safe <b>&nbsp; &#183; &nbsp;</b> Secure <b>&nbsp; &#183; &nbsp;</b> Ideal
            </p>
        </div>
    
        <form>

            <div class="input app-input">
                <input type="text" name="username" id="id_username" value={username} onChange={handleUsernameChange} required/>
                <label for="username"><i class="far fa-user"></i> Username</label>
            </div>
    
            <div class="input app-input">
                <input type="password" name="password" id="id_password"  value={password} onChange={handlePasswordChange} required/>
                <label for="password"><i class="fas fa-lock"></i> Password</label>
                {/* <div class="toggle-password fa-solid fa-eye"><i class=""></i></div> */}
            </div>
            
            <button type="submit" class="button app-login-button" id="id_submit" onClick={handleSubmit}>
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
        </form>
    </div>
    </body>
    )
}
export default LoginForm