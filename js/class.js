const classNames = [];

const class7Names = ['Скорость', 'Плотность','Сила тяжести','Сила упругости','Вес тела','Давление в твердых телах','Давление в жидкости/газе','Архимедова сила','Сила трения','Механическая работа','Мощность','Кинетическая энергия','Потенциальная энергия','Момент силы','КПД'];
classNames.push(class7Names);
const class8Names = ['Количество теплоты','Теплота сгорания','Теплота плавления','Теплота парообразования','Закон Кулона','Сила электрического тока','Сопротивление проводника','Электрическое напряжение','Последовательное соединение проводников','Параллельное соединение проводников','Работа тока','Мощность тока','Закон Джоуля-Ленца'];
classNames.push(class8Names);

const classFormuls = []

const class7Formul = ['v=s/t','ρ=m/V','F<sub>тяж</sub>=mg','F<sub>упр</sub>=k∆l','P=mg','p=F/S','p=ρgh','F<sub>A</sub>=ρ<sub>т</sub>gV<sub>п.ч.</sub>','F<sub>тр</sub>=μP','A=Fs','N=A/t','E<sub>k</sub>=mv<sup>2</sup>/2','E<sub>п<sub>=mgh','M=Fl','η=A<sub>п</sub>/A<sub>з</sub>*100%'];
classFormuls.push(class7Formul);
const class8Formul = ['Q=cm∆t','Q=qm','Q=λm','Q=Lm','F = k(|q<sub>1</sub>| * |q<sub>2</sub>| / r2)', 'I=q/t или I=U/R','R=ρl/s','U=A/q','','','A=Uq=UIt=I<sup>2</sup>*Rt=(U<sup>2</sup>/R) * t','P=A/t=UI=I<sup>2</sup>R=U<sup>2</sup/R','I<sup>2</sup>Rt'];
classFormuls.push(class8Formul);

export{classNames, classFormuls}