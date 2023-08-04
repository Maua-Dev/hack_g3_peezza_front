import React from "react";
import "./GraphicBar.css";
import { BarChart, Bar, XAxis, YAxis, 
CartesianGrid, Legend} from 'recharts';


export default function GraphicBar({tableData}){

    var medias = new Object();
    medias[1] = 0;
    medias[2]= 0;
    medias[3] = 0;
    medias[4] = 0;
    medias[5] = 0;
    medias[6] = 0;
    medias[7] = 0;
    medias[8] = 0;
    medias[9] = 0;
    medias[10] = 0;
    medias[11] = 0;
    medias[12] = 0;
    
    var meses = new Object();
    meses[1] = 'Janeiro';
    meses[2] = 'Fevereiro';
    meses[3] = 'Março';
    meses[4] = 'Abril';
    meses[5] = 'Maio';
    meses[6] = 'Junho';
    meses[7] = 'Julho';
    meses[8] = 'Agosto';
    meses[9] = 'Setembro';
    meses[10] = 'Outubro';
    meses[11] = 'Novembro';
    meses[12] = 'Dezembro';

    console.log(tableData);
    var data = [];
    var contador = 0;
    var contadorMedias = 0;
    for (let x in tableData) {
        console.log(tableData[x]);
        let rating = tableData[x]['rating']
        rating = parseInt(rating);
        console.log(rating);
        var strMonth = tableData[x]['date'].split(" ")[0].split('/')[1];
        var month = parseInt(strMonth);
        console.log(month);
        if (x> 0){
            if (strMonth !== tableData[x-1]["date"].split(" ")[0].split('/')[1]){
                month -= 1;
                medias[month] = contadorMedias / contador;
                console.log('medias month que fechou', contadorMedias)
                data.push({mes: meses[month], media: medias[month], })
                month += 1;
                contador = 1;
                medias[month] = 0;
                contadorMedias = rating;
                console.log('media do mes seguinte', contadorMedias)
            }else{
                contador += 1;
                contadorMedias += rating;
                console.log('contador do mesmo mes', contador);
                console.log('media[month] do mesmo med', contadorMedias);
            }
        }else{
            contador += 1;
            console.log('contador do x=0',contador);
            contadorMedias += rating;
            console.log('medias[month] do x=0', contadorMedias);
        }
        medias[month] = contadorMedias / contador;
        console.log('medias month final', medias[month])
    }
    data.push({mes: meses[month], media: medias[month], fill: "#5733FF"})

    console.log(data);
    
    var daata = [
    { name: "Agosto", value: 400, fill: "#FF5733" },
    { name: "Grupo 2", value: 300, fill: "#33FF57" },
    { name: "Grupo 3", value: 300, fill: "#5733FF" },
    { name: "Grupo 4", value: 200, fill: "#FFFF33" }
];
    

    return (
        <BarChart width={500} height={500} data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis dataKey="media"/>
            <Bar dataKey="media" stackId="a" fill="#8884d8" />
        </BarChart>
    );
}
