<!DOCTYPE html>
<html>
    <head>
       <meta charset="utf-8">
       <title>Employee</title>
    </head>
    <body>
        <div id="searchDiv" (:hiddenSearch:)>
            <form action="http://127.0.0.1:1337/search" method="post">
                <input name="id"/>
                <button type="submit">Search</button>
            </form>
        </div>
        <div id="insertDiv" (:hiddenFull:)>
            <form action="http://127.0.0.1:1337/insert" method="post">
                ID: <input type="text" id="id" name="id" value="(:id:)"/>
                <br>
                Name: <input type="text" id="name" name="name" value="(:name:)"/>
                <br>
                Surname: <input type="text" id="surname" name="surname" value="(:surname:)"/>
                <br>
                Level: <input type="text" id="level" name="level" value="(:level:)"/>
                <br>
                Salary: <input type="text" id="salary" name="salary" value="(:salary:)"/>
                <button type="submit">Insert</button>    
            </form>
        </div>
        <div id="deleteDiv" (:hiddenDel:)>
            <form action="http://127.0.0.1:1337/delete" method="post">
                ID: <input type="text" id="id" name="id" value="(:id:)"/>
                <button type="submit">Delete</button>    
            </form>
        </div>
    </body>
</html>