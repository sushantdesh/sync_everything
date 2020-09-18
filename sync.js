function h (){
//     // var dbx = new Dropbox({accessToken: });
//     var dbx = new Dropbox.Dropbox({accessToken:});
    var data = ''
    dbx.usersGetCurrentAccount()
        .then(function (response) {
            var header =document.getElementById("header1")
            var y = document.createElement("H1");
            var node = document.createTextNode( 'Welcome, '.concat(response['name']['given_name']));
            y.appendChild(node);
            header.appendChild(y);
             console.log( "welcome", response);
        })
        .catch(function (error) {
            console.error(error);
        });
    dbx.filesListFolder({path: ''})
        .then(function (response) {
            data = response.entries
            console.log(data)
            var i;

            for (i=0;i<data.length;i++) {

                var para = document.createElement("p");
                var temp= data[i]['name'] + ' ('+(data[i]['.tag'])+') '
                var node = document.createTextNode(temp);
                para.appendChild(node);
                var element = document.getElementById("div1");
                element.appendChild(para);
            }

            // console.log(response.entries);
        })
        .catch(function (error) {
            console.error(error);
        });
    dbx.filesGetThumbnail ({path: '/blobs.png',
        size: 'w32h32',
        format: 'png'  })
        .then(function (response){
        console.log(response);
            console.log(response.rev);
            console.log(response.fileBlob);
    })
    .catch(function (error){
    console.log(error);

})


    // dbx.filesGetThumbnail({ path: '', size: 'w32h32' })
    //     .then(function(response) {
    //
    //         console.log(response);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });

}
