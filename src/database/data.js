async function connectToDatabase (user, password){
  if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
    console.log("conexão com o banco estabelecida");
  } else {
    console.log("Falha de login, não foi possível conectar ao banco de dados")
  }
}

export default connectToDatabase;