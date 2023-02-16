<%@page import="loc.DB"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import="java.sql.*" %>
<%
String name=request.getParameter("u") ;            
String mobile=request.getParameter("n") ;
String email=request.getParameter("e") ;
String city =request.getParameter("c") ;
String pass =request.getParameter("p") ;
String utype=request.getParameter("user") ;
try
{
	 
Connection con=DB.getCon();
PreparedStatement ps=con.prepareStatement("insert into reg911 values(?,?,?,?,?,?)");
ps.setString(1,name);
ps.setString(2,mobile);
ps.setString(3,email);
ps.setString(4,city);
ps.setString(5,pass);
ps.setString(6,"user");
int r=ps.executeUpdate();
if(r>=1)
	  response.sendRedirect("/local-services-911/login/login.html");

con.close();

}
catch(Exception e)
{
out.println(e);
}

%>


</body>
</html>