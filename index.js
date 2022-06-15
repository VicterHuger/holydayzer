import express from "express";

const server=express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "2/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

function todayHoliday(){
    const today = new Date();
    return holidays.filter(day=>day.date===today);
}

server.get('/holidays', (req,res)=> {
    res.send(holidays);
})

server.get('/holidays/:idMonth', (req,res)=>{
    const numberMonth=req.params.idMonth;
    const holidaysMonth=[];
    holidays.forEach(day=>{
      if(numberMonth===day.date.split('/')[0]) return holidaysMonth.push(day);
    });
    res.send(holidaysMonth);
});

server.get('/is-today-holiday', (req,res)=>{
    if(todayHoliday().length!==0){
        res.send(`Sim, hoje é ${todayHoliday()[0].name}`);
    }else{
        res.send('Não, hoje não é feriado');
    }
})

server.listen(4000);