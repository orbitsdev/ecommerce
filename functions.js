




const isObjectEmpty = (objectName) => {
    return JSON.stringify(objectName) === "{}";
  };

  

function saveData(name,data){
    
    localStorage.setItem(name,JSON.stringify(data));
    console.log("save");

}

function deleteData(name){
    localStorage.removeItem(name);
}


function getData(name){

    data = JSON.parse(localStorage.getItem(name));
    return data;
 }