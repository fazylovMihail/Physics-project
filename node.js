import fs from "node:fs";

let i;

const data_keys = ["class7", "class8", "class9"], keys_data_obj = ["title", "desc"], sub = ['name', 'data'];

const class7Names = ['Скорость', 'Плотность','Сила тяжести','Сила упругости','Вес тела','Давление в твердых телах','Давление в жидкости/газе','Архимедова сила','Сила трения','Механическая работа','Мощность','Кинетическая энергия','Потенциальная энергия','Момент силы','КПД'];
const class8Names = ['Количество теплоты','Теплота сгорания','Теплота плавления','Теплота парообразования','Закон Кулона','Сила электрического тока','Сопротивление проводника','Электрическое напряжение','Последовательное соединение проводников','Параллельное соединение проводников','Работа тока','Мощность тока','Закон Джоуля-Ленца'];

const class7Formul = ['v=s/t','ρ=m/V','F<sub>тяж</sub>=mg','F<sub>упр</sub>=k∆l','P=mg','p=F/S','p=ρgh','F<sub>A</sub>=ρ<sub>т</sub>gV<sub>п.ч.</sub>','F<sub>тр</sub>=μP','A=Fs','N=A/t','E<sub>k</sub>=mv<sup>2</sup>/2','E<sub>п<sub>=mgh','M=Fl','η=A<sub>п</sub>/A<sub>з</sub>*100%'];
const class8Formul = ['Q=cm∆t','Q=qm','Q=λm','Q=Lm','F = k(|q<sub>1</sub>| * |q<sub>2</sub>| / r2)', 'I=q/t или I=U/R','R=ρl/s','U=A/q','','','A=Uq=UIt=I<sup>2</sup>*Rt=(U<sup>2</sup>/R) * t','P=A/t=UI=I<sup>2</sup>R=U<sup>2</sup/R','I<sup>2</sup>Rt'];

const total = [], keys = [], class7 = ['7 класс', []], class8 = ['8 класс', []], class9 = ['9 класс', []];

for(i=0;i<class7Names.length;i++){class7[1].push([class7Names[i], class7Formul[i]])}
for(i=0;i<class8Names.length;i++){class8[1].push([class8Names[i], class8Formul[i]])}

for(i=0;i<class7[1].length;i++){
    class7[1][i] = keys_data_obj.reduce((acc, key, index) => {
        acc[key] = class7[1][i][index]; return acc;
    }, {});
}
for(i=0;i<class8[1].length;i++){
    class8[1][i] = keys_data_obj.reduce((acc, key, index) => {
        acc[key] = class8[1][i][index]; return acc;
    }, {});
}


const c7 = sub.reduce((acc, key, index) => {
    acc[key] = class7[index]; return acc;
}, {});


const c8 = sub.reduce((acc, key, index) => {
    acc[key] = class8[index]; return acc;
}, {});

// for(i=0;i<class9.length;i+
//     class9[i] = keys_data_obj.reduce((acc, key, index) => {
//         acc[key] = class9[1][i][index]; return acc;
//     }, {});
// }
let classes = [c7, c8, class9], finish = {data: []};
for(i=0;i<classes.length;i++){
    finish['data'].push(classes[i]);
}

fs.writeFileSync('./data/data.json', JSON.stringify(finish, null, 2), 'utf8');