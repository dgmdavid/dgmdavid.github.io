// Funções JAVASCRIPT
// by DGM

function poefix() {

  document.write('<I>07/21/2007</I> - Version 1.1.0 released; Added an offline training mode based in levels.<BR><BR>');
  document.write('<I>09/12/2005</I> - Version 1.0.6b released; Another try to fix the Windows 98 bug. If it doesn\'t work, please send me a report.<BR><BR>');
  document.write('<I>09/07/2005</I> - Version 1.0.5 released; Several bugfixes; Improved the resolution of the z-buffer on lower video cards.<BR><BR>');
  document.write('<I>08/28/2005</I> - Version 1.0.4 released; Video thread is now more friendly, game will run faster on slower computers; Training will now restart automatically.<BR><BR>');
  document.write('<I>08/22/2005</I> - Version 1.0.3 released; Game now re-sync automatically.<BR><BR>');
  document.write('<I>08/16/2005</I> - Version 1.0.2 released; Major bug fix: disc collision locking no more occurs.<BR>');
  document.write('<BR><BR>Tell me if you find a bug, so I can fix it.<BR>If you like this game, found bugs or have suggestions about it, contact me at <IMG SRC="img/z.gif">.<BR>You can also reach me at ICQ 100882805.');
  document.write('<BR>You can also talk about the bugs you find at the <A HREF="http://dgmcouronne.11.forumer.com">Forum</A>.<BR>Your support will be appreciated.');

 return 0;
}

function poebotao( url, nome ) {

 document.write('<TABLE CELLSPACING=0 BORDER=0 CELLPADDING=0>');
 document.write('<TR>');
 document.write('<TD BGCOLOR=#F8A542 WIDTH=6 HEIGHT=6><IMG SRC="images/bot/1.gif"></TD>');
 document.write('<TD BGCOLOR=#F8A542 WIDTH=6 HEIGHT=6 BACKGROUND="images/bot/2.gif"><IMG SRC="images/bot/2.gif"></TD>');
 document.write('<TD BGCOLOR=#F8A542 WIDTH=6 HEIGHT=6><IMG SRC="images/bot/3.gif"></TD>');
 document.write('</TR>');
 document.write('<TR>');
 document.write('<TD WIDTH=6 BACKGROUND="images/bot/4.gif"><IMG SRC="images/bot/4.gif"></TD>');
 document.write('<TD BGCOLOR=#BA7C31 WIDTH=80> <A HREF="'+url+'" class="menu">'+nome+'</A> </TD>');
 document.write('<TD WIDTH=6 BACKGROUND="images/bot/5.gif"><IMG SRC="images/bot/5.gif"></TD>');
 document.write('</TR>');
 document.write('<TR>');
 document.write('<TD BGCOLOR=#F8A542 WIDTH=6 HEIGHT=6><IMG SRC="images/bot/6.gif"></TD>');
 document.write('<TD WIDTH=6 HEIGHT=6 BACKGROUND="images/bot/7.gif"><IMG SRC="images/bot/7.gif"></TD>');
 document.write('<TD BGCOLOR=#F8A542 WIDTH=6 HEIGHT=6><IMG SRC="images/bot/8.gif"></TD>');
 document.write('</TR>');
 document.write('</TABLE> ');


 return 0;
}


function poetopo( lang ) {

 document.write('<CENTER>');
 document.write('<TABLE WIDTH=760 BORDER=0 CELLPADDING=0 CELLSPACING=0 ALIGN=CENTER VALIGN=MIDDLE>');
 document.write('<TR><TD><IMG SRC="images/Untitled-1_01.gif" WIDTH=152 HEIGHT=147 ALT=""></TD>');
 document.write('<TD><IMG SRC="images/Untitled-1_02.gif" WIDTH=571 HEIGHT=147 ALT=""></TD>');
 document.write('<TD><IMG SRC="images/Untitled-1_03.gif" WIDTH=37 HEIGHT=147 ALT=""></TD></TR>');

//menu
 document.write('<TR><TD VALIGN=TOP BACKGROUND="images/lado01.gif" WIDTH=152px> ');
 document.write('<IMG SRC="images/Untitled-1_04.gif" WIDTH=152 HEIGHT=353 ALT="">');
 document.write('<DIV style="position:relative;top:-290px;left:30px;width=110px;height:164px">');

if( lang==0 ) poebotao("index.html"   ,"Principal");
if( lang==1 ) poebotao("index-en.html","Main");
if( lang==2 ) poebotao("index-sp.html","Principal");

if( lang==0 ) poebotao("screens.html"   ,"Screenshots");
if( lang==1 ) poebotao("screens-en.html","Screenshots");
if( lang==2 ) poebotao("screens-sp.html","Screenshots");

if( lang==0 ) poebotao("down.html"   ,"Download");
if( lang==1 ) poebotao("down-en.html","Download");
if( lang==2 ) poebotao("down-sp.html","Download");

poebotao("http://dgmcouronne.11.forumer.com","Forum");

//outro menu
document.write('<BR><BR><BR><BR>');

if( lang==0 ) {
	poebotao("index-en.html","In English");
	poebotao("index-sp.html","En Español");
}
if( lang==1 ) {
	poebotao("index.html"   ,"Em Português");
	poebotao("index-sp.html","En Español");
}
if( lang==2 ) {
	poebotao("index.html"   ,"Em Português");
	poebotao("index-en.html","In English");
}

 document.write('</DIV>');

 document.write('</TD><TD VALIGN=TOP>');
	
 return 0;
}


function poebaixo() {

 document.write('<BR><CENTER><IMG SRC="images/brasil.gif"></CENTER>');
 document.write('<TD VALIGN=TOP BACKGROUND="images/lado02.gif"><IMG SRC="images/Untitled-1_06.gif" WIDTH=37 HEIGHT=353 ALT=""></TD></TR>');
 document.write('<TR><TD><IMG SRC="images/Untitled-1_07.gif" WIDTH=152 HEIGHT=59 ALT=""></TD>');
 document.write('<TD><IMG SRC="images/Untitled-1_08.gif" WIDTH=571 HEIGHT=59 ALT=""></TD>');
 document.write('<TD><IMG SRC="images/Untitled-1_09.gif" WIDTH=37 HEIGHT=59 ALT=""></TD></TR>');
 document.write('</TABLE>');

 return 0;
}


function abrebox( tamanho, topico ) {

 return 0;
}

function fechabox() {

 return 0;
}




