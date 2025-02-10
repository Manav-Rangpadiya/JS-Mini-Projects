const form =document.querySelector('form')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector(".result")
    const res2 = document.querySelector(".res2")
    // console.log(height);
    // console.log(weight);

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML= `Pls enter valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML= `Pls enter valid weight ${weight}`
    }
    else{
        const bmi = (weight / (height * height /10000)).toFixed(2)
        result.innerHTML= `your bmiscore is ${bmi}`
        if (bmi < 18.6) {
            res2.innerHTML= `You are underweight`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            res2.innerHTML = `You are all fine`
        }
        else{
            res2.innerHTML = `You are overweight`
        }
    }
})