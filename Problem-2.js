function oddSeries(a){
    let result = [];

    for(let i=0; i < a; i++){
        result.push(2*i+1);
    }

    console.log(result.join(","));
}

oddSeries(1);
oddSeries(2);
oddSeries(3);
oddSeries(4);