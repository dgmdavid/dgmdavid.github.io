// Funções JAVASCRIPT
// by DGM


function poetopo() {
 
 document.write(' <TABLE WIDTH="768px" ALIGN=CENTER CELLSPACING=1px> <TR> ');
 document.write(' <TD HEIGHT=100px BACKGROUND="img/topo01.gif"> ');
 document.write(' <IMG SRC="img/point.gif"> ');
 document.write(' <DIV style="position:relative;top:35px;left:165px;height:0px;width:0px;"> ');
 document.write('   <TABLE WIDTH=600px HEIGHT=13px CELLSPACING=0px><TR> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="index.html"     class="menu">Principal </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="downloads.html" class="menu">Downloads </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="jogos.html"     class="menu">Jogos     </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="programas.html" class="menu">Programas </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="jaguar.html"    class="menu">Jaguar    </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="links.html"     class="menu">Links     </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="tutoriais.html" class="menu">Tutoriais </A></TD> ');
 document.write('    <TD align=CENTER class="inverso"><A HREF="contato.html"   class="menu">Contato   </A></TD> ');
 document.write('   </TR></TABLE> ');
 document.write(' </DIV>');
 document.write(' </TD> </TR> <TR> <TD class="corpo"> ');

 return 0;
}


function poebaixo() {

 document.write(' </TD></TR><TR> ');
 document.write(' <TD ALIGN=CENTER class="inverso"><B>DGM Soft - 200<A HREF="happy.html"><FONT COLOR=WHITE>5</FONT></A></B></TD> ');
 document.write(' </TR></TABLE>');

 return 0;
}


function poeshot( shot_p, shot_g, descricao ) {

 document.write(' <TABLE WIDTH=100px CELLSPACING=0px>');
 document.write(' <TR><TD WIDTH=7px HEIGHT=7px><IMG SRC="img/fr1/fr_01.gif"></TD><TD HEIGHT=7px BACKGROUND="img/fr1/fr_03.gif"><IMG SRC="img/fr1/fr_03.gif"></TD><TD WIDTH=7px HEIGHT=7px><IMG SRC="img/fr1/fr_02.gif"></TD></TR> ');
 document.write(' <TR><TD WIDTH=7px BACKGROUND="img/fr1/fr_04.gif"></TD> ');
 document.write(' <TD><A HREF="'+shot_g+'" TARGET="_blank"><IMG SRC="'+shot_p+'" WIDTH=160px HEIGHT=120px></A></TD> ');
 document.write(' <TD WIDTH=7px BACKGROUND="img/fr1/fr_05.gif"></TD> ');
 document.write(' </TR><TR> <TD class="inverso"></TD> ');
 document.write(' <TD align=CENTER class="inverso"><A HREF="'+shot_g+'" TARGET="_blank" class="menu">'+descricao+'</A></TD> ');
 document.write(' <TD class="inverso"></TD> </TR> </TABLE> ');

 return 0;
}


function abrebox( tamanho, topico ) {
 document.write(' <TABLE CELLPADDING=1px CELLSPACING=1px WIDTH="'+tamanho+'px"> <TR> ');
 document.write(' <TD HEIGHT="18px" Class="inverso" Style="text-align:left;padding-left:5px; padding-right:5px;"><B>'+topico+'</B></TD></TR><TR><TD Style="padding-left:5px; padding-right:5px; padding-top:3px; padding-bottom:3px;background-color:#BBE1FC;">');
 return 0;
}
function fechabox() {
 document.write(' </TD></TR></TABLE> ');
 return 0;
}



