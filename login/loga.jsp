
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
<%@page import="java.sql.*" %>
<%
    String email=request.getParameter("e");
    String pass=request.getParameter("p");
    String city;
   
    
    session.setAttribute("uid", email);
    try
    {
    	Connection con=DB.getCon();
    	PreparedStatement ps=con.prepareStatement("select utype, city from reg911 where email=? and pass=?");
    	  ps.setString(1,email);
    	  ps.setString(2,pass);
    	  ResultSet rs=ps.executeQuery();
    	  String utype="";
    	  if(rs.next()){
    		  utype=rs.getString(1);
    		  city= rs.getString(2);
    		
    		  session.setAttribute("city", city);
    	      }
    	  else{
    		  response.sendRedirect("regd.html");
    	  }
    	 
    	 con.close();
    	  if(utype.equals("user"))
    		response.sendRedirect("/local-services-911/LOCAL%20SERVICES%20911/index3.jsp");
    		 if(utype.equals(""))
    	  		 response.sendRedirect("");
    	   	 	  
    	    }
    
    	catch(Exception e)
    	{
    		  out.println(e);
    	}
    
    
    %>
</body>
</html>