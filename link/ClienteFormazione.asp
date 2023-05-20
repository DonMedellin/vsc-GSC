<%
  NomePagina="ClienteFormazione.asp"
  default_check_profile="Clie"
%>

<!--#include virtual="/gscVirtual/include/includeStdCheck.asp"-->

<%
  Set Session("PERCORSO") = Server.CreateObject("Scripting.Dictionary")
  livelloPagina="01"
%>
<!--#include virtual="/gscVirtual/include/utility.asp"-->
<% 
  
  'xx=DumpDic(SessionDic,NomePagina)
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <%
     titolo="Menu Supervisor - Dashboard"
  %>
  <!--#include virtual="/gscVirtual/include/head.asp"-->

  <!-- Custom styles for this template -->
  <link href="/gscVirtual/css/simple-sidebar.css" rel="stylesheet">

</head>

<body>

  <div class="d-flex" id="wrapper">
	<%
	  TitoloNavigazione="Formazione"
	  Session("opzioneSidebar")="form"
      callP=VirtualPath & "bar/" & Session("sideBar_" & Session("LoginIdAccount")) 
      Server.Execute(callP) 
	%>	

    <!-- Page Content -->
    <div id="page-content-wrapper">
	<%
      callP=VirtualPath & "bar/" & Session("TopBar_" & Session("LoginIdAccount")) 
      Server.Execute(callP)
      xx=RemoveSwap()
      Session("swap_PaginaReturn") = "link/" & NomePagina   
	%>	
		<div class="container-fluid bg-light">
		   <div class="row">
				<!-- Column -->
				<div class="col-md-6 col-lg-2 col-xlg-3">
					<div class="card card-hover">
						<a href="<%=VirtualPath%>formazioneCorso/nuovoCorsoFormazione.asp">
							<div class="box bg-success text-center">
								<h1 class="font-light text-white"></h1>
								<h6 class="text-white">Nuova Richiesta</h6>
							</div>
						</a>
					</div>
				</div>				
				<div class="col-md-6 col-lg-2 col-xlg-3">
					<div class="card card-hover">
						<a href="<%=VirtualPath%>formazioneCorso/FormazioneCorsoGestione.asp">
							<div class="box bg-success text-center">
								<h1 class="font-light text-white"></h1>
								<h6 class="text-white">Gestione Formazione</h6>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-6 col-lg-2 col-xlg-3">
					<div class="card card-hover">
					    <a href="<%=VirtualPath%>formazioneCorso/FormazioneCorsoStorico.asp">
							<div class="box bg-success text-center">
								<h1 class="font-light text-white"></h1>
								<h6 class="text-white">Storico Richieste</h6>
							</div>
						</a>
					</div>
				</div>			
				
			</div>
		</div>
	</div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->

<!--  Scripts-->
<!--#include virtual="/gscVirtual/include/scripts.asp"-->

  <!-- Menu Toggle Script -->
  <script>
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  </script>

</body>

</html>
