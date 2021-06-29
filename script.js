var userArray = [];

if(localStorage.getItem('userData')==null){
     localStorage.setItem('userData',JSON.stringify(userArray));
}
showUserData();

      function addUser(){
        event.preventDefault();
          var firstname = document.getElementById('firstname').value;
          var lastname = document.getElementById('lastname').value;
         var email =  document.getElementById('email').value;
         var degree =  document.getElementById('degree').value;
         var sdegree =  document.getElementById('sdegree').value;
         var number =  document.getElementById('number').value;
         

        var userList = {
            "firstname" : firstname,
            "lastname"  : lastname,
            "email"     : email,
            "degree"    : degree,
            "sdegree"   : sdegree,
            "number"    : number
        }

       
        var users = JSON.parse(localStorage.getItem('userData'))
        users.push(userList);
        localStorage.setItem('userData',JSON.stringify(users));
        console.log(users);

        emptyFiled();
        showUserData();
      }

      function emptyFiled(){
          document.getElementById('firstname').value="";
          document.getElementById('lastname').value="";
          document.getElementById('email').value="";
          document.getElementById('degree').value="";
          document.getElementById('sdegree').value="";
          document.getElementById('number').value="";
          document.getElementById('userData').innerHTML="";
        }

        function showUserData(){
          var alluserList = JSON.parse(localStorage.getItem('userData'));
          var dataList = document.getElementById('userData');
          for(var i=0; i<alluserList.length; i++){
            dataList.innerHTML=dataList.innerHTML+
            "<td class='td'>"+alluserList[i].firstname+" "+alluserList[i].lastname+"</td>"+
            "<td class='td'>"+alluserList[i].email+"</td>"+"<td class='td'>"+
            "<td class='td'>"+alluserList[i].degree+"</td>"+"<td class='td'>"+
            "<td class='td'>"+alluserList[i].sdegree+"</td>"+"<td class='td'>"+
            "<td class='td'>"+alluserList[i].number+"</td>"+"<td class='td'>"+
            "<button class='js-btn' onclick=deleteComment("+alluserList[i].emailId+")>Delete</button>"+
            "</td>";
          }
          localStorage.getItem('userData',JSON.stringify(alluserList))

        }

        function deleteComment(emailId){
      event.preventDefault();
      var alluserList=JSON.parse(localStorage.getItem("userData"));
      for(var i=0;i<alluserList.length;i++){
        if(emailId === alluserList[i].emailId){
            alluserList.splice(i,1);
        }
      }
      localStorage.setItem("userData",JSON.stringify(alluserList));
      emptyFiled();
      showUserData();
    }

    
    

    


    var userData = [{
      'first_name': 'Russell',
      'last_name': 'Wilson',
      'rank': '1',
  },
  {
      'first_name': 'Matt',
      'last_name': 'Hasselbeck',
      'rank': '2',
  },
  {
      'first_name': 'Jim',
      'last_name': 'Zorn',
      'rank': '3',
  },
  {
      'first_name': 'Brady',
      'last_name': 'Quinn',
      'rank': '4',
  },
  {
      'first_name': 'Charly',
      'last_name': 'Whitehurst',
      'rank': '5',
  },
  {
      'first_name': 'Duane',
      'last_name': 'Devine',
      'rank': '6',
  },
  {
      'first_name': 'Tom',
      'last_name': 'Brady',
      'rank': '7',
  },
  {
      'first_name': 'Arron',
      'last_name': 'Rogers',
      'rank': '8',
  },
  {
      'first_name': 'Patrick',
      'last_name': 'Mahoms',
      'rank': '9',
  },
  {
      'first_name': 'Gardner',
      'last_name': 'Minshew',
      'rank': '10',
  },
  {
      'first_name': 'Andrew',
      'last_name': 'Luck',
      'rank': '11',
  },
  {
      'first_name': 'Josh',
      'last_name': 'Gordon',
      'rank': '12',
  },
  {
      'first_name': 'Drew',
      'last_name': 'Brees',
      'rank': '13',
  },
  {
      'first_name': 'Cam',
      'last_name': 'Newton',
      'rank': '14',
  },
  {
      'first_name': 'Joe',
      'last_name': 'Montana',
      'rank': '15',
  },
  {
      'first_name': 'Steve',
      'last_name': 'Young',
      'rank': '16',
  },
  {
      'first_name': 'Dan',
      'last_name': 'Jones',
      'rank': '17',
  },
  {
      'first_name': 'Eli',
      'last_name': 'Manning',
      'rank': '18',
  },
  {
      'first_name': 'Marus',
      'last_name': 'Marriota',
      'rank': '19',
  },
  {
      'first_name': 'Ryan',
      'last_name': 'Fitzpatrick',
      'rank': '21',
  },
  {
      'first_name': 'Chad',
      'last_name': 'Pennington',
      'rank': '21',
  },
  {
      'first_name': 'John',
      'last_name': 'Doe',
      'rank': '22',
  },
  {
      'first_name': 'Russell',
      'last_name': 'Wilson',
      'rank': '21',
  },
  {
      'first_name': 'Matt',
      'last_name': 'Hasselbeck',
      'rank': '22',
  },
  {
      'first_name': 'Jim',
      'last_name': 'Zorn',
      'rank': '23',
  },
  {
      'first_name': 'Brady',
      'last_name': 'Quinn',
      'rank': '24',
  },
  {
      'first_name': 'Charly',
      'last_name': 'Whitehurst',
      'rank': '25',
  },
  {
      'first_name': 'Duane',
      'last_name': 'Devine',
      'rank': '26',
  },
  {
      'first_name': 'Tom',
      'last_name': 'Brady',
      'rank': '27',
  },
  {
      'first_name': 'Arron',
      'last_name': 'Rogers',
      'rank': '28',
  },
  {
      'first_name': 'Patrick',
      'last_name': 'Mahoms',
      'rank': '29',
  },
  {
      'first_name': 'Gardner',
      'last_name': 'Minshew',
      'rank': '30',
  },
  {
      'first_name': 'Andrew',
      'last_name': 'Luck',
      'rank': '31',
  },
  {
      'first_name': 'Josh',
      'last_name': 'Gordon',
      'rank': '32',
  },
  {
      'first_name': 'Drew',
      'last_name': 'Brees',
      'rank': '33',
  },
  {
      'first_name': 'Cam',
      'last_name': 'Newton',
      'rank': '34',
  },
  {
      'first_name': 'Joe',
      'last_name': 'Montana',
      'rank': '35',
  },
  {
      'first_name': 'Steve',
      'last_name': 'Young',
      'rank': '36',
  },
  {
      'first_name': 'Dan',
      'last_name': 'Jones',
      'rank': '37',
  },
  {
      'first_name': 'Eli',
      'last_name': 'Manning',
      'rank': '38',
  },
  {
      'first_name': 'Marus',
      'last_name': 'Marriota',
      'rank': '39',
  },
  {
      'first_name': 'Ryan',
      'last_name': 'Fitzpatrick',
      'rank': '40',
  },
  {
      'first_name': 'Chad',
      'last_name': 'Pennington',
      'rank': '41',
  },
  {
      'first_name': 'John',
      'last_name': 'Doe',
      'rank': '22',
  },
  {
      'first_name': 'Russell',
      'last_name': 'Wilson',
      'rank': '1',
  },
  {
      'first_name': 'Matt',
      'last_name': 'Hasselbeck',
      'rank': '2',
  },
  {
      'first_name': 'Jim',
      'last_name': 'Zorn',
      'rank': '3',
  },
  {
      'first_name': 'Brady',
      'last_name': 'Quinn',
      'rank': '4',
  },
  {
      'first_name': 'Charly',
      'last_name': 'Whitehurst',
      'rank': '5',
  },
  {
      'first_name': 'Duane',
      'last_name': 'Devine',
      'rank': '6',
  },
  {
      'first_name': 'Tom',
      'last_name': 'Brady',
      'rank': '7',
  },
  {
      'first_name': 'Arron',
      'last_name': 'Rogers',
      'rank': '8',
  },
  {
      'first_name': 'Patrick',
      'last_name': 'Mahoms',
      'rank': '9',
  },
  {
      'first_name': 'Gardner',
      'last_name': 'Minshew',
      'rank': '10',
  },
  {
      'first_name': 'Andrew',
      'last_name': 'Luck',
      'rank': '11',
  },
  {
      'first_name': 'Josh',
      'last_name': 'Gordon',
      'rank': '12',
  },
  {
      'first_name': 'Drew',
      'last_name': 'Brees',
      'rank': '13',
  },
  {
      'first_name': 'Cam',
      'last_name': 'Newton',
      'rank': '14',
  },
  {
      'first_name': 'Joe',
      'last_name': 'Montana',
      'rank': '15',
  },
  {
      'first_name': 'Steve',
      'last_name': 'Young',
      'rank': '16',
  },
  {
      'first_name': 'Dan',
      'last_name': 'Jones',
      'rank': '17',
  },
  {
      'first_name': 'Eli',
      'last_name': 'Manning',
      'rank': '18',
  },
  {
      'first_name': 'Marus',
      'last_name': 'Marriota',
      'rank': '19',
  },
  {
      'first_name': 'Ryan',
      'last_name': 'Fitzpatrick',
      'rank': '21',
  },
  {
      'first_name': 'Chad',
      'last_name': 'Pennington',
      'rank': '21',
  },
  {
      'first_name': 'John',
      'last_name': 'Doe',
      'rank': '22',
  }, {
      'first_name': 'Russell',
      'last_name': 'Wilson',
      'rank': '1',
  },
  {
      'first_name': 'Matt',
      'last_name': 'Hasselbeck',
      'rank': '2',
  },
  {
      'first_name': 'Jim',
      'last_name': 'Zorn',
      'rank': '3',
  },
  {
      'first_name': 'Brady',
      'last_name': 'Quinn',
      'rank': '4',
  },
  {
      'first_name': 'Charly',
      'last_name': 'Whitehurst',
      'rank': '5',
  },
  {
      'first_name': 'Duane',
      'last_name': 'Devine',
      'rank': '6',
  },
  {
      'first_name': 'Tom',
      'last_name': 'Brady',
      'rank': '7',
  },
  {
      'first_name': 'Arron',
      'last_name': 'Rogers',
      'rank': '8',
  },
  {
      'first_name': 'Patrick',
      'last_name': 'Mahoms',
      'rank': '9',
  },
  {
      'first_name': 'Gardner',
      'last_name': 'Minshew',
      'rank': '10',
  },
  {
      'first_name': 'Andrew',
      'last_name': 'Luck',
      'rank': '11',
  },
  {
      'first_name': 'Josh',
      'last_name': 'Gordon',
      'rank': '12',
  },
  {
      'first_name': 'Drew',
      'last_name': 'Brees',
      'rank': '13',
  },
  {
      'first_name': 'Cam',
      'last_name': 'Newton',
      'rank': '14',
  },
  {
      'first_name': 'Joe',
      'last_name': 'Montana',
      'rank': '15',
  },
  {
      'first_name': 'Steve',
      'last_name': 'Young',
      'rank': '16',
  },
  {
      'first_name': 'Dan',
      'last_name': 'Jones',
      'rank': '17',
  },
  {
      'first_name': 'Eli',
      'last_name': 'Manning',
      'rank': '18',
  },
  {
      'first_name': 'Marus',
      'last_name': 'Marriota',
      'rank': '19',
  },
  {
      'first_name': 'Ryan',
      'last_name': 'Fitzpatrick',
      'rank': '21',
  },
  {
      'first_name': 'Chad',
      'last_name': 'Pennington',
      'rank': '21',
  },
  {
      'first_name': 'John',
      'last_name': 'Doe',
      'rank': '22',
  },
]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/

var alluserList=JSON.parse(localStorage.getItem("userData"));
console.log('v2',alluserList);
var state = {
  'querySet': alluserList,

  'page': 1,
  'rows': 5,
  'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

  var trimStart = (page - 1) * rows
  var trimEnd = trimStart + rows

  var trimmedData = querySet.slice(trimStart, trimEnd)

  var pages = Math.round(querySet.length / rows);

  return {
      'querySet': trimmedData,
      'pages': pages,
  }
}

function pageButtons(pages) {
  var wrapper = document.getElementById('pagination-wrapper')

  wrapper.innerHTML = ``
console.log('Pages:', pages)

  var maxLeft = (state.page - Math.floor(state.window / 2))
  var maxRight = (state.page + Math.floor(state.window / 2))

  if (maxLeft < 1) {
      maxLeft = 1
      maxRight = state.window
  }

  if (maxRight > pages) {
      maxLeft = pages - (state.window - 1)
      
      if (maxLeft < 1){
        maxLeft = 1
      }
      maxRight = pages
  }
  
  

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
  }

  if (state.page != 1) {
      wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
  }

  if (state.page != pages) {
      wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
  }

  $('.page').on('click', function() {
      $('#table-body').empty()

      state.page = Number($(this).val())

      buildTable()
  })

}


function buildTable() {
  var table = $('#table-body')

  var data = pagination(state.querySet, state.page, state.rows)
  var myList = data.querySet

 

  for (var i = 1 in myList) {
      //Keep in mind we are using "Template Litterals to create rows"
      var row = `<tr>
                <td>${myList[i].firstname} ${myList[i].lastname}</td>
                <td>${myList[i].email}</td>
                <td>${myList[i].degree}</td>
                <td>${myList[i].sdegree}</td>
                <td>${myList[i].number}</td>
                `
      table.append(row)
  }

  pageButtons(data.pages)
}


function storeData(formData) {  // for save and get data in localstorage
    let userList = [{
        "firstname": formData.fname,
        "lastname": formData.lname,
        "degree": formData.degree,
        "sdegree": formData.sdegree,
        "dob": formData.dob,
        "email": formData.emailid,
        "pnumber": formData.pnumber
    }];
    if (localStorage.getItem('userArray') == null) {
        localStorage.setItem('userArray', '[]');
    }
    let users = JSON.parse(localStorage.getItem('userArray'))
    users.push(userList);

    localStorage.setItem('userArray', JSON.stringify(users));
    if (localStorage.getItem('userArray') != null) {
        console.log(JSON.parse(localStorage.getItem('userArray')));
    }
}