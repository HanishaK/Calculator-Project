var numberOfFaces = 3;
        var Leftside = document.getElementById("leftside");
        var Rightside = document.getElementById("rightside");
        var theBody = document.getElementsByTagName("body")[0];
        function generateFaces() {
            for (i = 0; i < numberOfFaces; ++ i) {
                elem_img = document.createElement("img");
                elem_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
                elem_img.style.top = Math.floor(Math.random() * 401) + "px";
                elem_img.style.left = Math.floor(Math.random() * 401) + "px";
                Leftside.appendChild(elem_img);
            }
            leftSideImage = Leftside.cloneNode(true);
            leftSideImage.removeChild(leftSideImage.lastChild);
            Rightside.appendChild(leftSideImage);

            Leftside.lastChild.onclick = function nextLevel(event){
                event.stopPropagation();
                numberOfFaces += 1;
                generateFaces();
            }
        }
        generateFaces();
        theBody.onclick = function gameOver() {
            alert("Game Over!");
            theBody.onclick = null;
            Leftside.lastChild.onclick = null;
        }