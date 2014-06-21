<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
  <div class="canvas">
		<div id="canvas" class="wrapper">
			<a href="#" onclick="updateSegment();">Update segment</a>
			<div id="line" class="line"></div>
      <div id="point_1" class="circle"></div>
      <div id="point_2" class="circle"></div>
		</div>
	</div>	
</asp:Content>
