createTable();
function createTable(){
    var table=document.createElement("table");
    document.body.append(table);
    table.style.border="1px solid";
    table.style.width="80%";
    const rows=['Name','Age','DOB','email','Company'];
    for(let row in rows){
        var th=document.createElement("th");
        var thText=document.createTextNode(rows[row]);
        th.appendChild(thText);
        table.appendChild(th);
        th.style.border="1px solid";
        th.style.fontWeight="bold";
    }
    const info=[['Harshit','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd'],
    ['Harshit2','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd'],
    ['Harshit3','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd'],
    ['Harshit4','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd'],
    ['Harshit5','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd'],
    ['Harshit6','23','16/08/1998','harshit.srivastava1608@gmail.com','Gemini Solutions Pvt Ltd#']];
    for(let i in info){
        var tr=document.createElement("tr");
        for(let j in info[i]){
        var trText=document.createTextNode(info[i][j]);
        var td=document.createElement("td");
        
        td.style.border="1px solid";
            td.append(trText);
            console.log(td); 
            tr.append(td);   
        }
        table.append(tr);
    }
    console.log(table);
    
}