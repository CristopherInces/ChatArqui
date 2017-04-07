/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function mostrarhora(){ 
    var f=new Date();
    var hora = f.getHours();
    if (hora<=9){
        var hora2 = '0'+hora;
    }
    else{
        var hora2 = hora;
    }
    cad=hora2+":"+f.getMinutes(); 
    return cad;
}

function btnAgregar_Click() {

    
    var txtTitulo = document.getElementById('mensaje').value;
    
    var li = document.createElement('li');
    li.setAttribute("class", "self" );
    var div = document.createElement('div');
    div.setAttribute("class", "msg" );
    var p = document.createElement('p');

    var time = document.createElement('time');

    div.appendChild(p);
    div.appendChild(time);
    li.appendChild(div);
    
    time.textContent = mostrarhora();
    p.textContent = txtTitulo

    var currentDiv = document.getElementById("chat"); 
    currentDiv.appendChild(li);
    
    document.getElementById("mensaje").value = "";


    }

