
package com.erick.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionMySQL {
    Connection conn;
    public Connection open(){ //Creamos un método que retorne la conexión 
        String user = "root";
        String password = "1234";
        String url= "jdbc:mysql://127.0.0.1:3306/optiqalumnos?useSSL=false&allowPublicKeyRetrieval=true&useUnicode=true&characterEncoding=utf-8"; //La ultima parte es necesaria a partir de MySQL8 y se le puede colocar la ip de otro dispositivo, acceso a la nube, o un hosting
        try{
            Class.forName("com.mysql.cj.jdbc.Driver"); //Este driver varia dependiendo del gestor de bd con el que trabajaremos
            conn= DriverManager.getConnection(url,user,password); //Se obtiene la conexion
            return conn; //retorna la conexion 
        }catch(Exception e){
            throw new RuntimeException(e);  // Si hay un error mandamos la exepcion sin truncar la ejecucion del programa
        }
        
    }
    public void close(){
        if (conn != null) {
            try {
                conn.close();
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("Exepcion controlada.");
            }
        }
    }
}