let http = require("http");
let url = require("url")
let loginDetails = [{"user":"Raj","pass":"123"},
                     {"user":"Ramesh", "pass":"235"}]

let indexPage = `
      <!DOCTYPE html>
        <html lang = "en">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
        <body>
        <h2>Welcome to Http Modules</h2>
          <form action = "checkLogin">
            <label>Username</label>
            <input type=text name=user/><br/>
            <label>Password</label>
            <input type="password" name="pass"/><br/>
            <input type="submit" value=submit/>
            <input type=reset name=reset/>
          </form>
        </body>
        </html>
`




let server = http.createServer((request,response)=> {
       let urlInfo = url.parse(request.url,true);
       console.log(urlInfo);
       response.end("Welcome")

       if (urlInfo.path != "/favicon.ico"){
           if (urlInfo.path=="/AboutUs"){
                 response.write("Welcome to About Us Page")
           }else if (urlInfo.path=="/ContactUs"){
            response.write("Welcome to contact")
           }else if(urlInfo.path=="/Login"){
            response.write("")
           }else if (urlInfo.pathname =="/checkLogin"){
               
           }else if(urlInfo.path == "/signup"){
            response.write(registerLoginPage);
            }else if(urlInfo.pathname == "/register"){
                  let login = urlInfo.query;
                  let result = loginDetail.find(l=>l.user == login.user);
                  response.writeHead(200, {"content-type": "text/html"});
                if(result == undefined){
                  loginDetails.push(login);
                  response.write("Account created successfully!");
                  response.write(loginPage);
            }
        }
           else{
               response.write();
           }

           }
     //  response.end()



let registerLoginPage = `
<!DOCTYPE html>
<html lang = "en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
<body>
<h2>Welcome to Http Modules</h2>
  <form action = "checkLogin">
    <label>Username</label>
    <input type=text name=user/><br/>
    <label>Password</label>
    <input type="password" name="pass"/><br/>
    <input type="submit" value=submit/>
    <input type=reset name=reset/>
  </form>
</body>
</html>
`






server.listen(9090, ()=>console.log("Server is running on port number 9090"))
          })