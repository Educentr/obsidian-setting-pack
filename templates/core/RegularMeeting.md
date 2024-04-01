<%`<%* 
let date = tp.date.now('YYYY-MM-DD');
tp.user.daily(tp);
_%`+`>`_%>
<%`<%"---"%`+`>`%>
date: <%`<% date %`+`>`%>
people:
__PEOPLES__
type:
- __TAG__
filtertag: __TAG__
<%`<%"---"%`+`>`%>

<% `<%* 
ttp = await tp.file.find_tfile("core/filterByTag")
tR += await app.vault.read(ttp)
-%`+`>`
%>

__PEOPLES_HEADER__



